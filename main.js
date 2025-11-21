import appRouter from "./router/index.js";
import { createRoot, triggerRerender } from "./DSL-DOM/core/vdom.hooks.js";
import App from "./src/app.js";

createRoot(App, "#app", "App");
appRouter.use(triggerRerender)

// Main entry dari script
