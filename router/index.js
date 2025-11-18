import { create } from "../DSL-DOM/core/router.js";
import { comp } from "../DSL-DOM/core/vdom.hooks.js";
import { createVNode, pushJob, registerCustomVdom } from "../DSL-DOM/core/vdom.js";
import Drill from "../src/pages/Drill.js";
import Home from "../src/pages/Home.js";
import env from /** Skip */ '../env.json' with {type: 'json'}
import { currentUri } from "../DSL-DOM/helper/helper.js";

const appRouter = create({
    prefix: '/Baria',
    titleId: 'title',
    routes: [
        {
            uri: '/',
            title: "Baria - Home",
            component: (args = {}) => comp(Home, args)
        },
        {
            uri: '/drill',
            title: "Baria - Drill",
            component: () => comp(Drill)
        }
    ]
})

registerCustomVdom('routerLink', (props = {}, ...children) => {
    let destination = props?.to || ''
    let scroll = props?.scrollTo || ''

    delete props.to
    delete props.scrollTo
    let finalDestination = props.href = `${destination}${scroll}`

    return createVNode('a', {
        ...props, onclick: (e) => {
            e.preventDefault()
            let current = currentUri()
            // console.log("hm");

            if (destination) {
                // console.log("hm a");
                appRouter.go(finalDestination);
            }
            // console.log(to.lastIndexOf('#'));
            if (scroll) {
                if (current === destination) {
                    appRouter.scrollToHash(scroll);
                } else {
                    pushJob(() => {
                        // console.log("hm b");
                        appRouter.scrollToHash(scroll);
                    })
                }
            }
        }
    }, children)
})

export default appRouter;