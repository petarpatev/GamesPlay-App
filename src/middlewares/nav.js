import {html, render} from "../../node_modules/lit-html/lit-html.js";

const navTemplate = (user) => html`
<h1><a class="home" href="/">GamesPlay</a></h1>
            <nav>
                <a href="/catalog">All games</a>
                 ${user
                    ? html`<div id="user">
                    <a href="/create">Create Game</a>
                    <a class="logout" href="/logout">Logout</a>
                </div>`

                    : html`<div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`
                 }         
            </nav>
            `

const header = document.querySelector('.header');

export const navigation = (ctx, next) => {
    render(navTemplate(ctx.user), header);

    next();
}