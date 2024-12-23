export const changePagination = (prevPagination, nextPagination, prevContainer, nextContainer) =>{
    // получение элементов пагинации
    const oldPagination = document.getElementById(prevPagination).classList.remove(`research__pagination--active`);
    const newPagination = document.getElementById(nextPagination).classList.add(`research__pagination--active`);

    // получениеследующей части формы
    const oldPartForm = document.querySelector(`.${nextContainer}`).classList.add(`${nextContainer}--active`);
    const newPartForm = document.querySelector(`.${prevContainer}`).classList.remove(`${prevContainer}--active`);
}