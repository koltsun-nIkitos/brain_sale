export const activateEdit = (link, button) =>{
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