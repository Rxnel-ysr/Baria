// App.js
import { routerView } from "../router/index.js";
import { html } from "../core/vdom.js";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";


const App = () => {
    return html.$([
        Navbar({ themeToggle: () => null }),
        routerView(),
        Footer(),
    ])
}


export default App;