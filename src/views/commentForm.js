import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { submitWrapper } from "../utils.js";

const commentFormTemplate = (onSubmit) => html`
<article class="create-comment">
                <label>Add new comment:</label>
                <form @submit=${onSubmit} class="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>
`

export const commentFormView = (ctx, handler) => {

    if (ctx.user) {
        return commentFormTemplate(submitWrapper(ctx, handler));
    } else {
        return nothing;
    }
}

