// App.js
import Router from "../router/index.js";
import { html } from "../core/vdom.js";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";


const App = () => {
    return html.div({
        style: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: "0 1rem"
        }
    },
        Navbar(),
        Router.routerView(),
        Footer()
    )

}


export default App;