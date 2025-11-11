import { html } from "../../core/vdom.js"
import { appRouter } from "../../router/index.js"

const Navbar = () => {
    return html.navbar({
        style: {
            display: "flex", flexDirection: "column", background: "red", padding: "1rem 1rem"
        },
        class: 'ok',
        id: "Okay"
    },
        html.h1({}, "This is navbar"),
        html.div({
            style: {
                display: 'flex',
                gap: '1rem'
            }
        },
            html.a({
                style: {
                    cursor: 'pointer'
                },
                onclick: () => appRouter.go('/drill')
            }, "Go to drill"),
            html.a({
                style: {
                    cursor: 'pointer'
                },
                onclick: () => appRouter.go('/')
            }, "Go to home")
        )
    )
}

export default Navbar