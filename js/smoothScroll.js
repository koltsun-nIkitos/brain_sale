// smoothScroll.js

export const smoothScrolling = () => {
    // Функция плавного скролла
    function smoothScroll(targetId) {
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Обработчики для ссылок в шапке
    document.querySelectorAll('.header__nav-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Предотвращаем стандартный переход

            const url = this.getAttribute('href').split("#");
            const linkPath = url[0] || "";
            const targetId = url[1];

            if (linkPath === "" || linkPath === window.location.pathname) {
                // Плавный скролл на той же странице
                smoothScroll(targetId);
            } else {
                // Переход на другую страницу с использованием sessionStorage для передачи якоря
                sessionStorage.setItem('targetId', targetId); // Сохраняем якорь
                window.location.href = linkPath; // Переход на другую страницу
            }
        });
    });

    // При полной загрузке страницы проверяем, есть ли якорь
    window.addEventListener('load', () => {
        const savedTargetId = sessionStorage.getItem('targetId'); // Получаем сохранённый якорь
        sessionStorage.removeItem('targetId'); // Удаляем якорь из sessionStorage

        const hash = window.location.hash.substring(1); // Проверяем, есть ли якорь в URL

        if (savedTargetId) {
            smoothScroll(savedTargetId); // Плавный скролл к сохранённому элементу
        } else if (hash) {
            smoothScroll(hash); // Плавный скролл к якорю в URL
        }
    });
}
