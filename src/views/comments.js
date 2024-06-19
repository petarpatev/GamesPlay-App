import { html } from "../../node_modules/lit-html/lit-html.js";
import * as commentsService from "../api/comment.js";

const commentsTemplate = (comments) => html`
    <div class="details-comments">
        <h2>Comments:</h2>
        ${comments.length > 0
            ? commentsListTemplate(comments)
            : html`<p class="no-comment">No comments.</p>`
        }
    </div>
`
const commentsListTemplate = (comments) => html`
    <ul>
        ${comments.map(commentTemplate)}
    </ul>
`

const commentTemplate = (comment) => html`
    <li class="comment">
        <p>Content: ${comment.comment}</p>
    </li>
`

export const commentsView = async (gameId) => {
    const comments = await commentsService.getComments(gameId);
    return commentsTemplate(comments);
}