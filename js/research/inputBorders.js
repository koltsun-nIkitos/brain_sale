export const activateInputBorders = (inputFields, textareas) =>{

    //Добавление обводок, когда поле ввода не пустое
    function toggleInputBorder(inputField) {
        if (inputField.value.trim() !== '') {
            inputField.classList.add('form__input--not-empty');
        } else {
            inputField.classList.remove('form__input--not-empty');
        }
    }
    
    // добавляем всем полям проверку обводки и при изменении проверяем форму, для открытия кнопки 
    inputFields.forEach(inputField => {
        inputField.addEventListener('input', () => {
            toggleInputBorder(inputField);
            
        });
    });
    
    // TODO Доработать функционал
    textareas.forEach(textarea => {
        if (textarea.value.trim() === '') {
            textarea.value = '';
        }
    });
}
