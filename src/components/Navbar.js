import { html } from "../../core/vdom.js"
import { appRouter } from "../../router/index.js"
import { file } from '../../core/helper.js'

/**
 * 
 * @param {{themeToggle: () => void}} param0 
 * @returns 
 */
const Navbar = ({ themeToggle }) => {
    return html.header({ class: 'nav' }, [
        html.div({ class: 'container nav-inner' }, [
            html.a({ href: '#', class: 'brand', "aria-label": 'Beranda Baria' }, [
                html.img({ class: 'leaf', src: file(''), alt: 'Logo Baria' }),
                html.b({}, "Baria")
            ])
        ]),
        html.div({ class: 'barier' }, [
            html.nav({ class: "nav-links", "aria-label": "Navigasi utama" }, [
                html.a("Home"),
                html.a("About"),
                html.a("Belajar Huruf"),
            ]),

            html.nav({ class: 'nav-right' }, [
                html.a({ class: 'btn btn-primary', href: '#' }, "Mulai"),
                html.button({ onCLick: themeToggle, class: 'theme', 'aria-label': 'Ubah tema ke gelap/terang', title: 'theme' }, [
                    html.svg({
                        id: 'iconMoon', width: 18, height: 18, viewBox: '0 0 24 24',
                        fill: 'none', "stroke": "#2b5b3f", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"
                    }, [
                        html.path({ d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" })
                    ])
                ])
            ]),
        ]),
    ])
}

export default Navbar