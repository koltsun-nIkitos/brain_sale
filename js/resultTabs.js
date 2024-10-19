export const resultTabs = ()=>{
    const linkItems = document.querySelectorAll('.results__list-item');

    linkItems.forEach((elem) => {
        elem.addEventListener('click', (evt) => {
            evt.preventDefault();

            // Убираем активные классы у предыдущего активного таба
            const activeItem = document.querySelector('.results__list-item.results__list-item--active');
            if (activeItem) {
                activeItem.classList.remove('results__list-item--active');
            }

            // Добавляем активный класс к новому табу
            elem.classList.add('results__list-item--active');


            // Скрываем предыдущее активное изображение
            document.querySelector('.results__image.results__image--active')
                ?.classList.remove('results__image--active');

            // Показываем новое изображение, связанное с выбранным табом
            const targetImage = elem.getAttribute('data-result');
            document.querySelector(`[data-result-image="${targetImage}"]`)
                .classList.add('results__image--active');
        });
    });

}