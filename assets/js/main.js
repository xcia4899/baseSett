import { initMenu } from "./menu.js";
import { loadLayout } from "./layout.js";

document.addEventListener("DOMContentLoaded", async () => {
    await loadLayout();
    initMenu();

});