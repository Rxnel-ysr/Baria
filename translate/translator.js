import en from "./locales/en.json" with {type: 'json'}

let currentMap = en,
    known = { en }

async function setLanguage(lang) {
    try {
        currentMap = known[lang] ?? null
    } catch (e) {
        currentMap = {}
    }
}

function t(key) {
    if (!currentMap) return key
    return currentMap[key] ?? key
}

function getCurrentCode() {
    if (!currentMap) return null;
    return currentMap['__CODE'] ?? null;
}

export { t, setLanguage, getCurrentCode }