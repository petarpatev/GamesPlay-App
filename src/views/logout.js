import * as api from "../api/api.js";

export const onLogout = (ctx) => {
    api.logout();
    ctx.page.redirect('/');
}