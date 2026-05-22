import { initMenu } from "./utils/menu.js";
import { loadLayout } from "./layout.js";
import { scrollAnimation } from "./utils/scrollAnimation.js";
import { initHeader } from "./header.js";

document.addEventListener("DOMContentLoaded", async () => {
    await loadLayout();
    initHeader();
    initMenu();
    scrollAnimation();
});