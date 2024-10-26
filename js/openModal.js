
export const openModal = () => {
    const modal = document.getElementById('modalPopup');
    const overlay = document.getElementById('modalOverlay');
    const modalBody = modal.querySelector('.modal__body');
    const closeModalButton = modal.querySelector('.modal-close');

    // Показываем popup и overlay
    modal.classList.add('modal--active');
    overlay.classList.add('modal-overlay--active');

    // Обработчик клика
    const closeModal = () => {
        modal.classList.remove('modal--active');
        overlay.classList.remove('modal-overlay--active');
    };

    overlay.addEventListener('click', closeModal);
    closeModalButton.addEventListener('click', closeModal);

    // Закрытие при клике вне 
    modal.addEventListener('click', (evt) => {
        if (!modalBody.contains(evt.target)) {
            closeModal();
        }
    });
};
