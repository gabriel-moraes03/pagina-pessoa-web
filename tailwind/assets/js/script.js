// Tema (claro/escuro) usando a classe "dark" no <html> (Tailwind darkMode: 'class')
var root = document.documentElement;
var themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
    if (themeToggle) {
        themeToggle.innerHTML = theme === "dark"
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';
    }
}

var savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme === "dark" ? "dark" : "light");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        applyTheme(root.classList.contains("dark") ? "light" : "dark");
    });
}

// Menu mobile (substitui o collapse do Bootstrap)
var navToggle = document.getElementById("navToggle");
var navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("hidden");
    });
}

// Ano do rodapé
var yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
