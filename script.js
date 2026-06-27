// --- ПР №6: Проверка сохранённой темы при загрузке (Этап 2) ---
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

// Переключение темы
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Логика бургер-меню
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

// Кнопка «Показать больше»
const toggleBtn = document.getElementById("toggle-btn");
const extraInfo = document.getElementById("extra-info");

toggleBtn.addEventListener("click", () => {
    extraInfo.classList.toggle("expanded");
    toggleBtn.textContent = extraInfo.classList.contains("expanded") ? "Скрыть" : "Показать больше";
});

// --- ПР №6: Логика валидации формы на JS (Этап 4) ---
const form = document.getElementById("contact-form");
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Останавливаем стандартную перезагрузку
    
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    
    let isValid = true;
    
    // Проверка имени
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Введите имя";
        isValid = false;
    } else {
        nameError.textContent = "";
    }
    
    // Проверка email по регулярному выражению
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Введите корректный email";
        isValid = false;
    } else {
        emailError.textContent = "";
    }
    
    // Результат валидации
    if (isValid) {
        alert("Форма заполнена верно! (отправка на сервер не настроена)");
        form.reset();
    }
});
