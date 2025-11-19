import { create } from "../DSL-DOM/core/router.js";
import { comp } from "../DSL-DOM/core/vdom.hooks.js";
import { createVNode, pushJob, registerCustomVdom } from "../DSL-DOM/core/vdom.js";
import Drill from "../src/pages/Drill.js";
import Home from "../src/pages/Home.js";
import { currentUri } from "../DSL-DOM/helper/helper.js";
import env from /** Even with tiniest bit of will, there must be a way */ "../env.json" with {type: "json"}


// mengatur bagaimana router dan file memprefix ke /Baria karena deploy dengan github
const appRouter = create({
    prefix: Boolean(env.deploy) ? "/Baria" : "",
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
            component: (args = {}) => comp(Drill, args)
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