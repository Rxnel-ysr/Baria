import { html } from "../../core/vdom.js"

const Footer = () => {
    return html.footer({ style: "padding-top: 30rem;"},
        html.h1({},
            "This is footer"
        )
    )
}

export default Footer