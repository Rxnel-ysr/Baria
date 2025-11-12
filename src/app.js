// App.js
import { html } from "../core/vdom.js";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import { useState } from "../core/vdom.hooks.js";


const App = () => {
    const [theme, setTheme] = useState(typeof localStorage.getItem('darkTheme') != 'boolean' ? false : localStorage.getItem('darkTheme'))

    const themeToggle = () => {
        setTheme(e => !e)
        localStorage.setItem('darkTheme', theme)
    }

    return html.div({ class: [theme ? 'dark' : ''] }, [
        Navbar({ themeToggle, theme }),
        // appRouter.routerView(),
        Home(),
        Footer(),
    ])
}


export default App;