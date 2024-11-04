export const targetSelect = (allMultiSelect, allRadioElem) =>{
    
    // Все сложные selects
    allMultiSelect.forEach((multiSelect) =>{

        multiSelect.addEventListener('change', (evt)=>{
            const select = evt.target;
            const multiGroup = select.closest('.multi-select');
            // Поиск старых актиынх элементов
            const oldSection = multiGroup.querySelector('.select__items--active')
            const oldRadioGroup = oldSection.querySelector('.form__group-line--active');
            const oldRadio = oldRadioGroup.querySelector('input');

            // "Удаление" старых активных элементов
            oldSection.classList.remove('select__items--active');
            oldRadioGroup.classList.remove('form__group-line--active');
            oldRadio.removeAttribute('checked');

            //Поиск новых активных элементов
            const newSection = multiGroup.querySelector(`.select__items[data-select="${select.value}"]`)
            const newRadioGroup = newSection.querySelector('.form__group-line');
            const newRadio = newRadioGroup.querySelector('input');

            // Выбор активных элементов
            newSection.classList.add('select__items--active');
            newRadioGroup.classList.add('form__group-line--active');
            newRadio.setAttribute('checked', '');
        })

    });

    // Все radioButtons
    allRadioElem.forEach((radio) => {
        
        radio.addEventListener('click', (evt)=>{
            const selectGroup = radio.closest('.select__items');
            const activeRadioGroup = selectGroup.querySelector('.form__group-line--active')
                || document.querySelector('.form__group-line--active');
            const activeRadio = activeRadioGroup.querySelector('input');

            activeRadio.removeAttribute('checked');
            activeRadioGroup.classList.remove('form__group-line--active');

            const newRadioGroup = radio.closest('.form__group-line');
            const newRadio = newRadioGroup.querySelector('input');

            newRadioGroup.classList.add('form__group-line--active');
            newRadio.setAttribute('checked', '');
        })

    });

    // common select
    
}
