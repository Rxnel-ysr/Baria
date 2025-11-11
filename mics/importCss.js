/**
 * 
 * @param {String} filename 
 */
const include = (filename) => {
    const style = document.createElement('link')
    style.rel = 'stylesheet'
    style.type = 'text/css'
    style.href = `${window.location.origin}/${filename}`;
    document.head.appendChild(style)
}

export { include }