import { html } from "../../DSL-DOM/core/vdom.js"
import About from "../components/About.js";
import Hero from "../components/Hero.js";
import LearnCards from "../components/LearnCards.js";

const Home = ({ theme }) => {
    let cardContents = [
        {
            title: "Baria",
            status: "Website",
            img: "public/image/hijau.png",
            description: "Platform belajar Hiragana, Katakana, dan bahasa Jepang lainnya secara interaktif dan menyenangkan."
        },
        {
            title: "Hiragana",
            status: "Bahasa Jepang",
            img: "public/image/cardtwo.png",
            description: "Salah satu aksara dasar dalam bahasa Jepang yang digunakan untuk menulis kata asli Jepang dan partikel."
        },
        {
            title: "Drill",
            status: "Latihan",
            img: "public/image/cardthree.png",
            description: "Platform belajar Hiragana, Katakana, dan bahasa Jepang lainnya secara interaktif dan menyenangkan.",
            tagLine: true
        },
        {
            title: "Achievement",
            status: "Raih peluang kerja di Jepang",
            img: "public/image/cardfour.png",
            description: "Latihan yang konsisten akan membawa kamu meraih hasil luar biasa dan pencapaian gemilang."
        },
    ]

    return html.$([
        Hero(),
        LearnCards({
            contents: cardContents
        }),
        About({ theme })
    ])
}

export default Home