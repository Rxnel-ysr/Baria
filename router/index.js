import { create } from "../core/router.js";
import { comp } from "../core/vdom.hooks.js";
import Drill from "../src/pages/Drill.js";
import Home from "../src/pages/Home.js";

let appRouter = create({
    prefix: '',
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

const routerView = appRouter.routerView

export { appRouter, routerView };