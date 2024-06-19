import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as gamesService from "../api/games.js";
import * as commentsService from "../api/comment.js";
import { commentFormView } from "./commentForm.js";

const detailsTemplate = (game, commentsSection, commentForm,  onDelete) => html`
<section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src=${game.imageUrl} />
                    <h1>${game.title}</h1>
                    <span class="levels">MaxLevel: ${game.maxLevel}</span>
                    <p class="type">${game.category}</p>
                </div>

                <p class="text">
                    ${game.summary}
                </p>

                 ${game.isOwner
        ? html`<div class="buttons">
                                <a href="/edit/${game._id}" class="button">Edit</a>
                                <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
                            </div>
                            `
        : nothing
    }

                ${commentsSection}

                ${!game.isOwner
                    ? commentForm
                    : nothing
                }

            </div>

        </section>
`

export const detailsView = (ctx) => {

    const onDelete = async () => {

        const choice = confirm('Are you sure you want to delete the game?');
        if (choice) {
            await gamesService.remove(ctx.game._id);
            ctx.page.redirect('/');
        }
    }

    const onSubmit = async (ctx, formData, event) => {

        await commentsService.postNewComment({
            gameId: ctx.game._id,
            comment: formData.comment
        });
        event.target.reset();
        ctx.page.redirect(`/details/${ctx.game._id}`)
    }

    const commentForm = commentFormView(ctx, onSubmit);
    const commentSection = ctx.commentSection;

    console.log(commentSection)

    ctx.render(detailsTemplate(ctx.game, commentSection, commentForm, onDelete))
}