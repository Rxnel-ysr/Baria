// App.js
import { html } from "../DSL-DOM/core/vdom.js";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import { useEffect, useState } from "../DSL-DOM/core/vdom.hooks.js";
import appRouter from "../router/index.js";
import { currentUri, file } from "../DSL-DOM/helper/helper.js";

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    const [current, setCurrent] = useState(currentUri(true))

    useEffect(() => {
        setCurrent(currentUri(true))
    }, [window.location.href])

    const themeToggle = () => {
        let decided = theme === 'dark' ? 'light' : 'dark';
        setTheme(decided)
        localStorage.setItem('theme', decided)
    }

    return html.div({ class: [theme === 'dark' ? 'dark' : 'light'] }, [
        html.link({ rel: "stylesheet", href: file('public/css/style.css') }),
        html.link({ rel: "stylesheet", href: file('public/css/hiragana.css') }),
        Navbar({ themeToggle, theme, current }),
        appRouter.routerView({ theme }),
        Footer(),
    ])
}


export default App;