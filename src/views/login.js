import { html } from "../../node_modules/lit-html/lit-html.js";
import * as api from "../api/api.js";
import { submitWrapper, isValid } from "../utils.js";

const loginTemplate = (onSubmit) => html`
<section id="login-page" class="auth">
            <form @submit=${onSubmit} id="login">

                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Login</h1>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

                    <label for="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password">
                    <input type="submit" class="btn submit" value="Login">
                    <p class="field">
                        <span>If you don't have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
`

export const loginView = (ctx) => {
    ctx.render(loginTemplate(submitWrapper(ctx, onSubmit)))
}

const onSubmit = async (ctx, data, event) => {

    if (isValid(data)) {
        await api.login(data.email, data.password);
        event.target.reset();
        ctx.page.redirect('/');
    } else {
        alert('Please fill all fields');
    }
}