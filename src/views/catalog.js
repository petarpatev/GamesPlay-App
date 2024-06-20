import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as gamesService from "../api/games.js";

const catalogTemplate = (games, page, pages) => html`
<section id="catalog-page">
            <h1>All Games</h1>
            ${games.length > 0
                ? games.map(gameTemplate)
                : html`<h3 class="no-articles">No articles yet</h3>`
            }
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    ${page != 1
                        ? html`<li class="page-item"><a class="page-link" href="/catalog?page=${page - 1}">Previous</a></li>`
                        : nothing
                    }
                    <li class="page-item"><a class="page-link" href="#">${page}</a></li>
                    ${page < pages
                        ? html`<li class="page-item"><a class="page-link" href="/catalog?page=${page + 1}">Next</a></li>`
                        : nothing
                    }
                </ul>
            </nav>
        </section>
`

const gameTemplate = (game) => html`
<div class="allGames">
                <div class="allGames-info">
                    <img src=${game.imageUrl}>
                    <h6>${game.category}</h6>
                    <h2>${game.title}</h2>
                    <a href="/details/${game._id}" class="details-button">Details</a>
                </div>
            </div>
            `

export const catalogView = async (ctx) => {
    const query = new URLSearchParams(ctx.querystring);
    const page = Number(query.get('page')) || 1;
    const { games, pages } = await gamesService.getAll(page);
    ctx.render(catalogTemplate(games, page, pages))
}