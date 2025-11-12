import { file } from "../../core/helper.js";
import { html } from "../../core/vdom.js"
import About from "../components/About.js";
import Hero from "../components/Hero.js";
import LearnCards from "../components/LearnCards.js";

const Home = () => {
    let cardContents = [
        {
            title: "Baria",
            status: "Website",
            img: "image/hijau.png",
            description: "Platform belajar Hiragana, Katakana, dan bahasa Jepang lainnya secara interaktif dan menyenangkan."
        },
        {
            title: "Hiragana",
            status: "Bahasa Jepang",
            img: "image/cardtwo.png",
            description: "Salah satu aksara dasar dalam bahasa Jepang yang digunakan untuk menulis kata asli Jepang dan partikel."
        },
        {
            title: "Drill",
            status: "Latihan",
            img: "image/cardthree.png",
            description: "Platform belajar Hiragana, Katakana, dan bahasa Jepang lainnya secara interaktif dan menyenangkan.",
            tagLine: true
        },
        {
            title: "Kim Cattrall",
            status: "3 hours ago",
            img: "image/cardfour.png",
            description: "Latihan yang konsisten akan membawa kamu meraih hasil luar biasa dan pencapaian gemilang."
        },
    ]

    return html.$([
        html.link({ rel: "stylesheet", href: file('public/css/home.css') }),
        Hero(),
        LearnCards({
            contents: cardContents
        }),
        About()
    ])
}

export default Home