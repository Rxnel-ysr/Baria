import { file } from "../../DSL-DOM/helper/helper.js";
import { html } from "../../DSL-DOM/core/vdom.js";


const About = ({ theme }) => {
    return html.section({ class: "resume-wrap", id: "about" }, [
        html.div({ class: "abtUs" }, [
            html.h1("Tentang Baria"),
            html.p("Belajar Hiragana & Katakana dengan cara yang santai, visual, dan mudah diingat."),

            html.div({ class: "arrow" }, [
                html.svg({
                    width: "72", height: "72", viewBox: "0 0 24 24", fill: "none", stroke: theme == 'light' ? "#111111" : "#fff", "stroke-width": "2.5",
                    "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"
                }, [
                    html.path({ d: "M5 12h14" }),
                    html.path({ d: "M13 5l7 7-7 7" }),
                ])
            ])
        ]),
        html.figure({ class: "abtPhoto" }, [
            html.img({ src: file("public/image/hijau.png"), alt: "Profile photo" })
        ]),
        html.div({ class: "abtGrid" }, [
            html.article({ class: "abtCard abtTint1" }, [
                html.h3("About Baria"),
                html.p("Platform belajar Jepang untuk pemula yang fokus pada visual dan latihan praktis."),
                html.a({ class: "abtLink", href: "#" }, "View More")
            ]),

            html.article({ class: "abtCard" }, [
                html.h3("What We Do"),
                html.p("Membantu kamu kuasai Hiragana & Katakana lewat drill harian yang menyenangkan."),
                html.a({ class: "abtLink", href: "#" }, "View More")
            ]),

            html.article({ class: "abtCard" }, [
                html.h3("How It Works"),
                html.p("Pilih => Belajar => Latih => Sertifikat. Semua dalam 5 menit sehari."),
                html.a({ class: "abtLink", href: "#" }, "View More")
            ]),

            html.article({ class: "abtCard abtTint2" }, [
                html.h3("Join Baria"),
                html.p("Belajar Bahasa Jepang tanpa hafalan. Cuma butuh konsistensi, bukan waktu banyak."),
                html.a({ class: "abtLink", href: "#" }, "View More")
            ]),
        ])
    ])
}
export default About