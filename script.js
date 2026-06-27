// --- ПР №7: Этап 1. Описание данных проектов в массиве (минимум 5) ---
const projects = [
    { id: 1, title: "Сайт-визитка кофейни", category: "frontend", description: "Адаптивный современный одностраничник на Flexbox с формой обратной связи." },
    { id: 2, title: "Бот-помощник для Telegram", category: "backend", description: "Интеллектуальный бэкенд-скрипт на Python с автоматической обработкой заказов." },
    { id: 3, title: "Редизайн корпоративного портала", category: "design", description: "Создание стильной и чистой UI/UX концепции интерфейса в Figma." },
    { id: 4, title: "Браузерная мини-игра", category: "frontend", description: "Классическая игровая механика, написанная на чистом JavaScript без фреймворков." },
    { id: 5, title: "RESTful API для интернет-магазина", category: "backend", description: "Проектирование и разработка архитектуры серверной базы данных на Node.js." }
];

// --- ПР №7: Этап 2. Функции генерации карточек ---
function createCard(project) {
    return `
        <article class="project-card" data-category="${project.category}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </article>
    `;
}

function renderProjects(list) {
    const container = document.getElementById("projects-grid");
    container.innerHTML = list.map(createCard).join("");
}

// Первичный запуск отрисовки всех проектов
renderProjects(projects);

// --- ПР №7: Этап 3. Фильтры по категориям ---
const filterButtons = document.querySelectorAll(".filters button");
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        const filter = btn.dataset.filter;
        const filtered = filter === "all" 
            ? projects 
            : projects.filter(p => p.category === filter);
            
        renderProjects(filtered);
    });
});

// --- ПР №7: Этап 4. Поиск по названию ---
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = projects.filter(p => 
        p.title.toLowerCase().includes(query)
    );
    renderProjects(filtered);
});

// --- ЛОГИКА ИЗ ПРОШЛЫХ РАБОТ (Темы, Бургер, Валидация) ---

// Восстановление темы из localStorage
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

// Логика валидации формы
const form = document.getElementById("contact-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    
    let isValid = true;
    
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Введите имя";
        isValid = false;
    } else {
        nameError.textContent = "";
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Введите корректный email";
        isValid = false;
    } else {
        emailError.textContent = "";
    }
    
    if (isValid) {
        alert("Форма заполнена верно!");
        form.reset();
    }
});
