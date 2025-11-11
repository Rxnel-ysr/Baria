import { useState } from "../../core/vdom.hooks.js"
import { html } from "../../core/vdom.js"

const Drill = ({ text = 'Haha' }) => {
    const [value, setValue] = useState('')
    return html.div({},
        html.input({ oninput: e => setValue(e.target.value), value: value, placeholder: "Masukan sesuatu" }),
        html.h1({}, `This dril: ${text}, ${value}`)
    )
}

export default Drill