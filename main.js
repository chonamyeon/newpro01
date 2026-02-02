document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-mode');
            themeToggle.textContent = 'Dark Mode';
        } else {
            body.classList.remove('light-mode');
            themeToggle.textContent = 'White Mode';
        }
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        let currentTheme = 'dark';
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            themeToggle.textContent = 'White Mode';
        } else {
            body.classList.add('light-mode');
            themeToggle.textContent = 'Dark Mode';
            currentTheme = 'light';
        }
        localStorage.setItem('theme', currentTheme);
    });

    // Login Modal Logic
    const loginModal = document.getElementById('login-modal');
    const loginBtn = document.getElementById('login-btn');
    const closeBtn = document.querySelector('.close-btn');

    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    const loginForm = loginModal.querySelector('form');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // In a real app, you'd handle authentication here.
        loginModal.style.display = 'none';
    });

    // Sidebar Navigation Logic
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const servicesLink = document.getElementById('services-link');

    const mainPage = document.getElementById('main-page');
    const aboutPage = document.getElementById('about-page');
    const servicesPage = document.getElementById('services-page');

    const pages = [mainPage, aboutPage, servicesPage];

    const showPage = (pageToShow) => {
        pages.forEach(page => {
            page.style.display = 'none';
        });
        pageToShow.style.display = 'block';
    };

    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        showPage(mainPage);
    });

    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        showPage(aboutPage);
    });

    servicesLink.addEventListener('click', (e) => {
        e.preventDefault();
        showPage(servicesPage);
    });
});

function startTest() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('qna').style.display = 'block';
}
