import { setRegression, triggerRerender } from "./vdom.hooks.js";

const Router = {
    routes: {},
    errors: {},
    option: {
        prefix: '',
        default: null,
        titleId: null,
        titleEl: null,
    },

    /**
     * 
     * @param {String} uri 
     * @param {Object} comp 
     * @returns 
     */
    register: (uri, comp) => {
        if (Router.option?.prefix) {
            uri = `${Router.option?.prefix}${uri}`
            console.log(uri);

        }
        Router.routes[uri] = comp
        return Router
    },

    /**
     * 
     * @param {String} uri 
     */
    go: (uri) => {
        if (uri !== location.pathname) {
            history.pushState({ path: uri }, "", uri)
            Router.trigger()
        }
    },

    routerView: (path = location.pathname) => {

        let route = Router.routes[path];
        console.log(path, route);
        if (route) {
            if (Router.option?.titleId && route?.title) {
                if (!Router.option?.titleEl) {
                    Router.option.titleEl = document.getElementById(Router.option.titleId)
                }
                Router.option.titleEl.innerText = route.title
            }

            return Router.routes[path].component()
        }
        else if (typeof Router.option?.default == 'function') {
            return Router.option.default()
        }
    },

    /**
     * @template {{
     *  prefix: String|null,
     *  default: Function|null,
     *  routes: Array<{
     *      uri: String,
     *      title: String|null,
     *      component: Function
     *  }>
     * }} T
     * 
     * @param {T} option 
     */
    setup: (option = {}) => {
        Router.option = option
        if (Array.isArray(option?.routes)) {
            option.routes.forEach(route => {
                Router.register(route.uri, { component: route.component, title: route?.title })
            });
        }
    },

    init: () => {
        Router.trigger = triggerRerender
    }
}

export default Router;