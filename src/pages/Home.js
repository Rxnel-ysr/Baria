import { html } from "../../core/vdom.js"

const Home = ({ text = 'Haha' }) => {
    return html.div({},
        html.h1({}, `This is ${text}`)
    )
}

export default Home