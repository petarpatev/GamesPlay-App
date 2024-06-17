import { render } from "../../node_modules/lit-html/lit-html.js";

const rootElement = document.getElementById('main-content');

const ctxRender = (template) => {
    render(template, rootElement);
}

export const renderContext = (ctx, next) => {
    ctx.render = ctxRender;

    next();
}