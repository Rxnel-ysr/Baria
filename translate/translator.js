let currentMap = null

async function setLanguage(lang) {
    try {
        const module = await import(`./locales/${lang}.json`, { assert: { type: 'json' } })
        currentMap = module.default
    } catch (e) {

    }
}

function t(key) {
    if (!currentMap) return key
    return currentMap[key] ?? key
}

export { t, setLanguage }