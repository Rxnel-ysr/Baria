// App.js
import { routerView } from "../router/index.js";
import { html } from "../core/vdom.js";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import { useState } from "../core/vdom.hooks.js";


const App = () => {
    const [test, setTest] = useState('this value shouln\'t be updated')
    const [test2, setTest2] = useState('this value shouln\'t be updated, yeah definitely')

    return html.div({
        style: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: "1rem 0rem"
        }
    },
        Navbar(),
        routerView(),
        html.input({ oninput: e => setTest(e.target.value), value: test, placeholder: 'This is should not be updated' }),
        html.input({ oninput: e => setTest2(e.target.value), value: test2, placeholder: 'This is should not be updated' }),
        Footer()
    )

}


export default App;