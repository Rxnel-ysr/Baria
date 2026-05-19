import en from "./locales/en.json" with {type: 'json'}

let currentMap = en,
    known = { en }

async function setLanguage(lang) {
    try {
        currentMap = known[lang] ?? null
    } catch (e) {

    }
}

function t(key) {
    if (!currentMap) return key
    return currentMap[key] ?? key
}

export { t, setLanguage }