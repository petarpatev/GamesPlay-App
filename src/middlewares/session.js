import { getUserData } from "../utils.js";


export const addSession = (ctx, next) => {
    const user = getUserData();
    if (user) {
        ctx.user = user;
    }

    next();
}