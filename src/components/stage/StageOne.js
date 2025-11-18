import { html } from "../../../DSL-DOM/core/vdom.js"

/**
 * 
 * @param {{setMenu: ()=> void, romaji: String, opts: Array, skor: Number}} param0 
 * @returns {Object}
 */
const StageOne = ({ setMenu, romaji, opts, skor }) => {
    return html.$([
        html.header({ class: "topbar" }, [
            html.button({ class: "back-btn", "aria-label": "Kembali Ke Menu", onclick: setMenu }, [
                html.span({ class: "back-icon", "aria-hidden": true }, "<="),
                html.span({ class: "back-text" }, "Kembali ke menu")
            ])
        ]),
        html.main({ class: "quiz-wrap", role: "main" }, [
            html.div({ class: "tagline", "aria-liv": "polite" }, "Huruf apa ini"),
            html.div({ class: "glyph", id: "glyph", "aria-label": "huruf hiragana" }, `${romaji}`),
            html.div({ class: "choices", id: "choices", role: "group", "aria-label": "Pilihan jawaban" }, opts),

            html.div({ class: "progress" }, [
                html.div({ class: "porgress-bar" })
            ]),

            html.footer({ class: "footer-cta" }, [
                html.button({ class: "ghost", disabled: true }, "Lanjut"),
                html.span({ class: "score", id: "scoreText" }, `Skor ${skor}`)
            ])
        ])
    ])
}
// Originally there is 2 more stage, but due time is limited, i guess one is enough now