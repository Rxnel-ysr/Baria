import { useState, } from "../../DSL-DOM/core/vdom.hooks.js"
import { file } from "../../DSL-DOM/helper/helper.js"
import { html } from "../../DSL-DOM/core/vdom.js"

const sets = {
    hiragana: {
        'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
        'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
        'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
        'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
        'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
        'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
        'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
        'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
        'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
        'わ': 'wa', 'を': 'wo', 'ん': 'n'
    },
    katakana: {
        'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
        'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
        'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so',
        'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
        'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no',
        'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
        'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo',
        'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo',
        'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro',
        'ワ': 'wa', 'ヲ': 'wo', 'ン': 'n'
    },
    kanji: {
        '日': 'nichi', '月': 'tsuki', '火': 'hi', '水': 'mizu', '木': 'ki',
        '金': 'kane', '土': 'tsuchi', '山': 'yama', '川': 'kawa', '田': 'ta',
        '森': 'mori', '空': 'sora', '天': 'ten', '雨': 'ame', '風': 'kaze'
    }
};

const availableDifficulty = {
    "hardcore": 0,
    "hard": 3,
    "normal": 5,
    "beginner": 10,
}

const audioMap = {
    correct: file("public/audio/Sfx-Correct.mp3"),
    wrong: file("public/audio/Sfx-Wrong-v2.mp3"),
    theme: {
        beginner: file("public/audio/Theme-Beginner.mp3"),
        normal: file("public/audio/Theme-Normal.mp3"),
        hard: file("public/audio/Theme-Hard.mp3"),
        hardcore: file("public/audio/Theme-Hardcore.mp3"),
    },
    win: file("public/audio/Sfx-Win.mp3")
}

const Drill = ({ theme }) => {
    const [mode, setMode] = useState("hiragana");
    const [pool, setPool] = useState([]);
    const [current, setCurrent] = useState(null);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [fails, setFails] = useState(0);
    const [status, setStatus] = useState("menu");
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [difficulty, setDifficulty] = useState("beginner");
    const [showMessage, setShowMessage] = useState(false)
    const [backsound, setBackSound] = useState(null)

    const playAudioLoop = async (src) => {
        const sfx = new Audio(src);
        sfx.loop = true;
        sfx.volume = 0.9
        sfx.play()
        return sfx;
    }

    const playTheme = (mode) => {
        if (!backsound)
            setBackSound(playAudioLoop(audioMap['theme'][mode]))
    }

    const stopTheme = () => {
        if (!backsound)
            return;

        // console.log(backsound.fulfilled, backsound)
        backsound.then((a) => {
            a.pause()
            setBackSound(null)
        })

        // setBackSound(null)
    }

    const playAudio = async (src) => {
        return (new Audio(src)).play()
    }

    const displayNotice = (message) => {
        setShowMessage(message)
        setTimeout(() => setShowMessage(null), 500)
    }

    const startGame = () => {
        const entries = Object.entries(sets[mode]);
        const shuffled = entries.sort(() => Math.random() - 0.5);
        setPool(shuffled);
        setScore(0);
        setFails(0);
        setTotalQuestions(shuffled.length);
        setStatus("playing");
        nextRound(shuffled);
        playTheme(difficulty)
    };

    const nextRound = (remaining) => {
        if (remaining.length === 0) {
            setStatus("win");
            stopTheme()
            playAudio(audioMap['win'])
            return;
        }
        const [char, correct] = remaining[0];
        const allRomaji = Object.values(sets[mode]);
        const wrongs = allRomaji.filter(v => v !== correct)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
        const opts = [...wrongs, correct].sort(() => Math.random() - 0.5);
        setCurrent({ char, correct });
        setOptions(opts);
    };

    const handleGuess = (romaji) => {
        // console.log("Faked mastery, is not mastery at all")
        if (romaji === current.correct) {
            playAudio(audioMap['correct'])
            displayNotice("Benar!")
            setTimeout(() => {
                playAudio(audioMap['progressBar'])
                setScore(s => s + 1);
                const remaining = pool.slice(1);
                setPool(remaining);
                nextRound(remaining);
            }, 500)
        } else {
            displayNotice("Salah!")
            playAudio(audioMap['wrong'])
            setFails(f => {
                const nf = f + 1;
                if (nf > availableDifficulty[difficulty]) {
                    stopTheme()
                    setStatus("fail")
                };
                return nf;
            });
        }
    };

    const accuracy = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

    return html.div({
        class: "japanese-drill", useCleanup: () => stopTheme()
    }, [
        html.div({ class: "drill-container" },

            html.h1({ class: "drill-title" }, `${mode[0].toUpperCase() + mode.slice(1)} Character Drill`),

            // Menu
            status === "menu" && html.div([
                html.div({ class: "mode-selector" },
                    ["hiragana", "katakana", "kanji"].map(m =>
                        html.button({
                            key: m,
                            class: `mode-button ${mode === m ? 'active' : ''}`,
                            onclick: () => setMode(m)
                        }, m[0].toUpperCase() + m.slice(1))
                    )
                ),
                html.div({
                    class: 'd-flex flex-column'
                }, [
                    html.h3({ class: 'sub-title text-center' }, "Pilih kesulitan"),
                    html.p({ class: 'text-center' }, `${difficulty[0].toLocaleUpperCase() + difficulty.slice(1)}: ${availableDifficulty[difficulty] == 0 ? 'Tidak ada kesempatan kedua.' : ('hanya ' + availableDifficulty[difficulty] + ' kali percobaan menebak yang diperbolehkan.')}`),
                    html.div({ class: "mode-selector" }, Object.entries(availableDifficulty).map((val) =>
                        html.button({
                            class: ["mode-button", difficulty == val[0] ? 'active' : ''],
                            key: val[0],
                            title: val[1] == 0 ? 'Hanya satu percobaan' : `Hanya diperbolehkan untuk ${val[1]} kali percobaan menebak`,
                            onclick: () => setDifficulty(val[0])
                        }, `${val[0][0].toUpperCase() + val[0].slice(1)}`)
                    )),
                ]),
                html.button({
                    class: "drill-button start-btn",
                    onclick: startGame
                }, "Start Drill")
            ]),


            // Playing
            status === "playing" && current && html.div([
                html.div({ class: "character-display" }, current.char),
                showMessage && html.h3({ class: ['text-center', showMessage == 'Benar!' ? 'text-correct' : 'text-failed'] }, showMessage),
                html.div({ class: "options-grid" },
                    options.map(opt =>
                        html.button({
                            key: opt,
                            class: "option-button",
                            onclick: (e) => {
                                handleGuess(opt)
                            }
                        }, opt)
                    )
                ),
                html.div({ class: "score-display" }, [
                    html.div({ class: "sub-score-display" }, [
                        html.div({ class: "score-item" },
                            "Benar:",
                            html.span({}, `${score}/${totalQuestions}`)
                        ),
                        html.div({ class: "score-item" },
                            "Salah:",
                            html.span({}, availableDifficulty[difficulty] == 0 ? "Tidak Diperbolehkan." : `${fails}/${availableDifficulty[difficulty]}`)
                        ),
                    ]),
                    html.div({
                        class: 'progress', style: {
                            width: "clamp(400px,500px,20%)",
                            height: "20px",
                            background: theme == 'dark' ? "#222" : "#b6bab8",
                            borderRadius: "6px",
                            overflow: "hidden"

                        }
                    }, [
                        html.div({
                            style: {
                                height: "100%",
                                width: `${score / totalQuestions * 100}%`,
                                background: "#4fa16d",
                                transition: "width 0.2s linear"
                            }
                        })
                    ]),
                    html.button({ class: "drill-button quit-btn", onclick: () => { setStatus('menu'), stopTheme() } }, "Quit Game")
                ])
            ]),

            // Fail / Win
            (status === "fail" || status === "win") && html.div({ class: "game-over" }, [
                html.h2({
                    class: `result-title ${status}`
                }, status === "fail" ? "Practice Complete" : "Excellent Work!"),

                html.div({ class: "stats-grid" },
                    html.div({ class: "stat-card" },
                        html.div({ class: "stat-number" }, score),
                        html.div({ class: "stat-label" }, "Correct Answers")
                    ),
                    html.div({ class: "stat-card" },
                        html.div({ class: "stat-number" }, totalQuestions),
                        html.div({ class: "stat-label" }, "Total Questions")
                    ),
                    html.div({ class: "stat-card" },
                        html.div({ class: "stat-number" }, `${accuracy}%`),
                        html.div({ class: "stat-label" }, "Accuracy")
                    )
                ),

                html.div({
                    class: 'd-flex flex-row',
                    style: {
                        justifyContent: 'space-evenly',
                        alignItems: 'center'
                    }
                }, [
                    html.button({
                        class: "drill-button quit-btn",
                        onclick: () => setStatus('menu')
                    }, "Quit to menu"),
                    html.button({
                        class: "drill-button play-again-button",
                        onclick: startGame
                    }, "Try Again"),
                ])
            ])
        )
    ]);
}

export default Drill;