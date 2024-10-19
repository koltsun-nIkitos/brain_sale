
export const openModal = ()=>{
    const modal = document.getElementById('modalPopup');
    const modalBody = modal.querySelector('.modal__body');
    const closeModalButton = modal.querySelector('.modal-close');

    // Открытие модального окна
    modal.classList.add('modal--active');
    modal.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    // Обработчик клика
    modal.addEventListener('click', (evt) => {
        const target = evt.target;

        // Закрытие при клике на крестик
        if (target === closeModalButton || target.closest('.modal-close')) {
            closeModal();
        }

        // Закрытие при клике вне modal__body
        if (!modalBody.contains(target)) {
            closeModal();
        }
    });

    // Функция для закрытия модального окна
    const closeModal = () => {
        modal.classList.remove('modal--active');
    };
}