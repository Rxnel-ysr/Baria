import Router from "../../router/index.js"
import { html } from "../../core/vdom.js"

const Navbar = () => {
    return html.navbar({
        style: {
            display: "flex",
            flexDirection: "column",
            background: "red",
            padding: "1rem 1rem"
        },
        id: "Okay"
    },
        html.h1({}, "This is navbar"),
        html.div({},
            html.a({
                style: {
                    cursor: 'pointer'
                },
                onclick: () => Router.go('/drill')
            }, "Go to drill")
        )
    )
}

export default Navbar