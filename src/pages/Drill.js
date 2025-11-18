import { useState, useEffect } from "../../DSL-DOM/core/vdom.hooks.js"
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

const Drill = () => {
    const [mode, setMode] = useState("hiragana");
    const [pool, setPool] = useState([]);
    const [current, setCurrent] = useState(null);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [fails, setFails] = useState(0);
    const [status, setStatus] = useState("menu");
    const [totalQuestions, setTotalQuestions] = useState(0);

    const startGame = () => {
        const entries = Object.entries(sets[mode]);
        const shuffled = entries.sort(() => Math.random() - 0.5);
        setPool(shuffled);
        setScore(0);
        setFails(0);
        setTotalQuestions(shuffled.length);
        setStatus("playing");
        nextRound(shuffled);
    };

    const nextRound = (remaining) => {
        if (remaining.length === 0) {
            setStatus("win");
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
        if (!current) return;
        if (romaji === current.correct) {
            setScore(s => s + 1);
            const remaining = pool.slice(1);
            setPool(remaining);
            nextRound(remaining);
        } else {
            setFails(f => {
                const nf = f + 1;
                if (nf >= 3) setStatus("fail");
                return nf;
            });
        }
    };

    const accuracy = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

    return html.div({ class: "japanese-drill" }, [
        html.div({ class: "drill-container" },

            html.h1({ class: "drill-title" }, "Japanese Character Drill"),

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
                html.button({
                    class: "drill-button start-btn",
                    onclick: startGame
                }, "Start Drill")
            ]),


            // Playing
            status === "playing" && current && html.div([
                html.div({ class: "character-display" }, current.char),
                html.div({ class: "options-grid" },
                    options.map(opt =>
                        html.button({
                            key: opt,
                            class: "option-button",
                            onclick: () => handleGuess(opt)
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
                            html.span({}, `${fails}/3`)
                        ),
                    ]),
                    html.button({ class: "drill-button quit-btn", onclick: () => setStatus('menu') }, "Quit Game")
                ])
            ]),

            // Game Over / Win
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

                html.button({
                    class: "play-again-button",
                    onclick: startGame
                }, "Try Again")
            ])
        )
    ]);
}

export default Drill;