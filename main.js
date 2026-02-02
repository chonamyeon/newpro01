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
});

function startTest() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('qna').style.display = 'block';
}
