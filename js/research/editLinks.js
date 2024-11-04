export const activateEdit = (link, formStart, formMiddle, button) =>{
    // Закрываем вторую часть формы
    formMiddle.classList.remove('research__form__middle--active');

    // Открываем первую часть формы
    formStart.classList.add('research__form__start--active');
    button.style.display = "inline-block";

    // Получаем секцию для скролла
    const sectionToScroll = link.getAttribute('data-section');

    // Плавный скролл до нужной секции
    const targetSection = document.getElementById(sectionToScroll);
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    
}