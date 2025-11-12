import { html } from "../../core/vdom.js";
import { appRouter } from "../../router/index.js";

const Hero = () => {
    return html.main({ class: 'hero', id: 'home' }, [
        html.span({ class: 'kana k-left', 'aria-hidden': true }, "か"),
        html.span({ class: 'kana k-right', 'aria-hidden': true }, "お"),

        html.div({ class: 'container hero-inner' }, [
            html.h1(["Tulis, dengar, dan kuasai huruf", html.br(), "Jepang dengan cara seru."]),
            html.p({ class: 'sub' }, "Belajar Hiragana & Katakana Interaktif. Kuasai huruf Jepang dengan latihan seru."),
            html.div({ class: 'cta', id: 'cta' }, [
                html.a({ class: "btn btn-solid", href: "learn.html" }, "Mulai"),
                html.a({ class: "btn btn-ghost", onclick: () => appRouter.go('/#about') }, "Tentaing Kami"),
            ]),
            html.section({ class: 'features', 'aria-label': 'keunggulan Baria' }, [
                html.article({ class: 'card' }, [
                    html.div({ class: 'card-icon', 'aria-hidden': true }, [
                        html.svg({ xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', class: 'iconFast' }, [
                            html.polygon({ points: '13 19 22 12 13 5 13 19' }),
                            html.polygon({ points: '2 19 11 12 2 5 2 19' })
                        ])
                    ]),
                    html.div([
                        html.h3("Belajar dengan Cepat"),
                        html.p("Drill cerdas dan pengulangan terjadwal untuk hafal lebih lama."),
                    ])
                ]),
                html.article({ class: 'card' }, [
                    html.div({ class: 'card-icon', 'aria-hidden': true }, [
                        html.svg({ xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', class: 'iconVolume' }, [
                            html.polygon({ points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5' }),
                            html.path({ d: 'M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07' })
                        ]),
                    ]),
                    html.div([
                        html.h3("Belajar dengan Atraktif"),
                        html.p("Audio, animasi goresan, dan kuis interaktif yang menyenangkan."),
                    ])
                ])
            ])
        ])
    ])
}

export default Hero