import { file } from "../../core/helper.js"
import { html } from "../../core/vdom.js"

const Footer = () => {
    return html.footer({ class: "footer" }, [
        html.div({ class: "footer-container" }, [
            html.div({ class: "footer-left" }, [
                html.img({ src: file("image/putih.png"), alt: "Logo Baria", class: "footer-logo" }),
                html.h2({ class: "footer-brand" }, "Baria")
            ]),

            html.div({ class: "footer-center" }, [
                html.p(["Baria adalah Platform Pembelajaran yang digunakan", html.br(), "untuk Upgrade ilmu dan wawasan secara lengkap."])
            ]),

            html.div({ class: "footer-right" }, [
                html.a({ href: "#", "aria-label": "Instagram", class: "social-icon" }, [
                    html.svg({
                        xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none",
                        stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round",
                        class: "iconSosmed"
                    }, [
                        html.rect({ x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }),
                        html.path({ d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
                        html.line({ x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" })
                    ])
                ]),
                html.a({ href: "#", "aria-label": "WhatsApp", class: "social-icon" }, [
                    html.svg({
                        xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none",
                        stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round",
                        class: "iconSosmed"
                    }, [
                        html.path({ d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" }),
                        html.polygon({ points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" })
                    ])
                ]),
                html.a({ href: "#", "aria-label": "Email", class: "social-icon" }, [
                    html.svg({
                        xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none",
                        stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round",
                        class: "iconSosmed"
                    }, [
                        html.path({ d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }),
                        html.polyline({ points: "22,6 12,13 2,6" })
                    ])
                ]),
            ]),

        ])
    ])
}

export default Footer