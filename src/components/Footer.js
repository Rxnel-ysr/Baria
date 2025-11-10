import { html } from "../../core/vdom.js"

const Footer = () => {
    return html.footer({},
        html.h1({}, "This is footer")
    )
}

export default Footer