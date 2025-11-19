import appRouter from "./router/index.js";
import { createRoot, triggerRerender } from "./DSL-DOM/core/vdom.hooks.js";
import App from "./src/app.js";
import env from /** Mere text dare to make me confused... VSCode, DELETE IT!! */ './env.json' with {type: 'json'}

let app = createRoot(App, "#app", "App");
appRouter.use(triggerRerender)

if (env.hmr) {
    const socket = new WebSocket(`ws://${location.hostname}:${env.server}`);

    socket.addEventListener('message', async ({ data }) => {
        const msg = JSON.parse(data);
        if (msg.type === 'reload') {
            try {
                console.log(`[HMR]: ${msg.path}`);
                const mod = await import(`./src/app.js?t=` + msg.timestamp);
                // console.log(mod);
                if (mod.default) {
                    app.setRenderFn(mod.default)
                    app.rerender();
                }
            } catch (error) {
                console.error(error);
            }

        }
    });
}

/**
 * (이봐요, 에레나, 무얼하나?)
 * (종일토록 멍하니 앉아)
 * (어떤 공상 그리할까?)
 * (시집가는 꿈을 꾸나?)
 * (시집가는 꿈을 꾸나?)
 * (시집가는 꿈을 꾸나?)
 * 財從八方來 財 (시집가는 꿈을 꾸나?)
 */
