import { useState } from "../../core/vdom.hooks.js";
import { html } from "../../core/vdom.js"

const Home = ({ text = 'Haha' }) => {
    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");

    return html.div({},
        html.input({ oninput: e => setValue(e.target.value), value: value, placeholder: "Masukan sesuatu" }),
        html.input({ oninput: e => setValue2(e.target.value), value: value2, placeholder: "Masukan sesuatu" }),
        html.h1({}, `This is ${text}, ${value}`),
        html.h1({}, `This is ${text}, ${value2}`)
    )
}

export default Home