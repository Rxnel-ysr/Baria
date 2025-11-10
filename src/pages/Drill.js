import { html } from "../../core/vdom.js"

const Drill = ({ text = 'Haha' }) => {
    return html.div({},
        html.h1({}, `This is ${text}`)
    )
}

export default Drill