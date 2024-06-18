import { html } from "../../node_modules/lit-html/lit-html.js";
import * as api from "../api/api.js";
import { submitWrapper, isValid } from "../utils.js";

const registerTemplate = (onSubmit) => html`
<section id="register-page" class="content auth">
            <form @submit=${onSubmit} id="register">
                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Register</h1>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com">

                    <label for="pass">Password:</label>
                    <input type="password" name="password" id="register-password">

                    <label for="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password">

                    <input class="btn submit" type="submit" value="Register">

                    <p class="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
`

export const registerView = (ctx) => {
    ctx.render(registerTemplate(submitWrapper(ctx, onSubmit)));
}

const onSubmit = async (ctx, data, event) => {

    if (isValid(data)) {
        await api.register(data.email, data.password);
        event.target.reset();
        ctx.page.redirect('/');
    } else {
        alert('Please fill all fields');
    }
}