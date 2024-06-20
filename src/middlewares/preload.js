import * as gamesService from "../api/games.js";
import { commentsView } from "../views/comments.js";

export const preload = async (ctx, next) => {
    const gameId = ctx.params.id;
    const [game, commentSection] = await Promise.all([
        gamesService.getOne(gameId),
        commentsView(gameId)
    ]);
    game.isOwner = false;

    if (ctx.user && ctx.user._id == game._ownerId) {
        game.isOwner = true;
    }

    ctx.game = game;
    ctx.commentSection = commentSection;

    next();
}