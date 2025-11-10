import Router from "../core/router.js";
import { comp } from "../core/vdom.hooks.js";
import Drill from "../src/pages/Drill.js";
import Home from "../src/pages/Home.js";

Router.setup({
    prefix: '/Baria',
    titleId: 'title',
    routes: [
        {
            uri: '/',
            title: "Baria - Home",
            component: () => comp(Home, { text: "HOMMEE" })
        },
        {
            uri: '/drill',
            title: "Baria - Drill",
            component: () => comp(Drill, { text: "DRILLLLLLLLL" })
        }
    ]
})

export default Router;