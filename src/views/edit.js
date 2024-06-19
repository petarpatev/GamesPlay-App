import { html } from "../../node_modules/lit-html/lit-html.js";
import * as gamesService from "../api/games.js";
import { isValid, submitWrapper } from "../utils.js";

const editTemplate = (game, onSubmit) => html`
<section id="edit-page" class="auth">
            <form @submit=${onSubmit} id="edit">
                <div class="container">

                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value=${game.title}>

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" value=${game.category}>

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" value=${game.maxLevel}>

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value=${game.imageUrl}>

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary">${game.summary}</textarea>
                    <input class="btn submit" type="submit" value="Edit Game">

                </div>
            </form>
        </section>
`

const onSubmit = async (ctx, data, event) => {
    if (isValid(data)) {
        await gamesService.edit(ctx.game._id, data);
        event.target.reset();
        ctx.page.redirect(`/details/${ctx.game._id}`);
    } else {
        alert('All fields are required!');
    }
}

export const editView = (ctx) => {
    ctx.render(editTemplate(ctx.game, submitWrapper(ctx, onSubmit)))
}