import page from "../node_modules/page/page.mjs";


import { addSession } from "./middlewares/session.js";
import { renderContext } from "./middlewares/render.js";
import { navigation } from "./middlewares/nav.js";


import { catalogView } from "./views/catalog.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { onLogout } from "./views/logout.js";


page(addSession);
page(navigation);
page(renderContext);

page('/', homeView);
page('/catalog', catalogView);
page('/create', createView);
page('/login', loginView);
page('/register', registerView);
page('/logout', onLogout);
page('/details/:id', detailsView);
page('/edit/:id', editView);

page.start();
