
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
