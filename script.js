
const burgerBtn = document.getElementById("burger-btn");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

burgerBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        nav.classList.remove("open");
    });
});

const toggleBtn = document.getElementById("toggle-btn");
const extraInfo = document.getElementById("extra-info");

toggleBtn.addEventListener("click", () => {
    extraInfo.classList.toggle("expanded");
    toggleBtn.textContent = extraInfo.classList.contains("expanded") 
        ? "Скрыть" 
        : "Показать больше";
});
