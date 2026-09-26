const themeToggle = document.querySelector(".theme-toggle");

if (!themeToggle) {
    throw new Error("Theme toggle button was not found.");
}

const root = document.documentElement;

function setTheme(theme) {
    const isLight = theme === "light";
    const nextTheme = isLight ? "dark" : "light";

    root.dataset.theme = theme;
    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
    themeToggle.setAttribute("title", `Switch to ${nextTheme} theme`);
}

setTheme(root.dataset.theme === "light" ? "light" : "dark");

themeToggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
});
