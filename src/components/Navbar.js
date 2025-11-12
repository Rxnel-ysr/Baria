import { html } from "../../core/vdom.js"
import { file } from '../../core/helper.js'

/**
 * 
 * @param {{themeToggle: () => void, theme: Boolean}} 
 * @returns 
 */
const Navbar = ({ themeToggle, theme }) => {
    return html.header({ class: 'nav' }, [
        html.div({ class: "container nav-inner" }, [
            html.a({ href: "#", class: "brand", "aria-label": "Beranda Baria" }, [
                html.img({ class: "leaf", src: file("public/image/hijau.png"), alt: "Logo Baria" }),
                html.b("Baria")
            ]),

            html.div({ class: "barier" }, [
                html.nav({ class: "nav-links", "aria-label": "Navigasi utama" }, [
                    html.a({ href: "index.html", class: "active" }, "Home"),
                    html.a({ href: "index.html", class: "" }, "About"),
                    html.a({ href: "index.html", class: "" }, "Belajar Huruf"),
                ]),
                html.nav({ class: "nav-right" }, [
                    html.a({ class: "btn btn-primary" }, "Mulai"),
                    html.button({ class: "theme", onclick: themeToggle, "aria-label": "Ganti tema siang/malam", title: "Tema" }, [
                        theme ? html.svg({
                            style: 'color: white;',
                            width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-moon"
                        }, [
                            html.circle({ cx: "12", cy: "12", r: "5" }),
                            html.line({ x1: "12", y1: "1", x2: "12", y2: "3" }),
                            html.line({ x1: "12", y1: "21", x2: "12", y2: "23" }),
                            html.line({ x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
                            html.line({ x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
                            html.line({ x1: "1", y1: "12", x2: "3", y2: "12" }),
                            html.line({ x1: "21", y1: "12", x2: "23", y2: "12" }),
                            html.line({ x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
                            html.line({ x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" }),
                        ]) : html.svg({
                            style: 'color: black;',
                            width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-moon"
                        }, [
                            html.path({ d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" })
                        ])
                    ])
                ])
            ])
        ])
    ])
}

export default Navbar