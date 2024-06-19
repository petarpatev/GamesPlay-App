import * as gamesService from "../api/games.js";

export const preload = async (ctx, next) => {
    const gameId = ctx.params.id;
    const game = await gamesService.getOne(gameId);
    game.isOwner = false;

    if(ctx.user && ctx.user._id == game._ownerId) {
        game.isOwner = true;
    }

    ctx.game = game;

    next();
}