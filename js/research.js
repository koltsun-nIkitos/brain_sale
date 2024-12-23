import { translater } from "./translate.js";

import { targetSelect } from "./research/targetSelects.js";
import { activateInputBorders } from "./research/inputBorders.js";
import { activateEdit } from "./research/editLinks.js";
import { sendOrder } from "./research/sendOrder.js";
import { FormValidator } from "./research/formValidator.js";
import { changePagination } from "./research/changePagination.js";
import { transferAnotherForm } from "./research/transferAnotherForm.js";

export const research = () =>{
    const inputFields = document.querySelectorAll('.form__input, .form__input__textArea');
    const textAreas = document.querySelectorAll('.form__input-textArea');
    const totalPriceButton = document.getElementById('buttonNext');
    const allRadioElem = document.querySelectorAll('.select__items .form__group-line');
    const allMultiSelect = document.querySelectorAll('.multi-select');
    const editLinks = document.querySelectorAll('.check__form__back-link');  
    const siteLink = document.getElementById('formSiteLink');
    const documentLink = document.getElementById('formDocumentLink');

    const formName = document.getElementById('nameCustomer');
    const formEmail = document.getElementById('formEmail');
    const formTel = document.getElementById('formTel');

    const userAgreement = document.getElementById('formUserAgreement'); 
    const privacyPolicy = document.getElementById('formPrivacyPolicy');

    // Кнопка заполенения информации о пользователе
    const buttonNextUser = document.getElementById('buttonNextUser');

    const formMiddle = document.querySelector('.research__form__middle');

    // Подключение валидатора
    const formValidator = new FormValidator(formName, formEmail, formTel, userAgreement, privacyPolicy, totalPriceButton);

    siteLink.addEventListener('input', formValidator.checkAimForm);
    documentLink.addEventListener('input', formValidator.checkAimForm);

    function handle(evt){
        // изменение пагинации, заполнение полей во второй части формы
        evt.preventDefault();

        if (!totalPriceButton.hasAttribute('disabled')){
            changePagination('researchPage1', 'researchPage2', 'research__form__start', 'research__form__middle');
            
            // передача заполненных данных на вторую форму
            transferAnotherForm();
            translater();

            // пролистывание
            formMiddle.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            totalPriceButton.style.display = "none";
        }
    }

    totalPriceButton.addEventListener('click', handle)
    
    // Добавляем обработчики для ссылок "Редактировать" на второй части формы
    editLinks.forEach(link => {
        link.addEventListener('click', (evt) => {
            evt.preventDefault();
            changePagination('researchPage2', 'researchPage1', 'research__form__middle', 'research__form__start');
            activateEdit(link, totalPriceButton);
        });
    });

    // кнопка для заполнения информации о пользователе
    buttonNextUser.addEventListener('click', (evt)=>{
        evt.preventDefault();
        //Открытие последней части формы
        changePagination('researchPage2', 'researchPage3', 'research__form__middle', 'research__form__finish');
        
        const targetSection = document.getElementById('researchSection1');
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Видоизменение кнопки "рассчитать стоимость" на "заказать исследование"
        totalPriceButton.style.display = "inline-block";
        totalPriceButton.textContent = 'Заказать исследование';
        totalPriceButton.setAttribute('data-translate', 'button_next2');
        // запуск перевода ещё раз из-за изменения содержимого кнопки
        translater();

        totalPriceButton.removeEventListener('click', handle);
        totalPriceButton.setAttribute('disabled', '');

        // Добавление клика на кнопку заказть
        totalPriceButton.addEventListener('click', (evt)=>{
            evt.preventDefault();
            if (!totalPriceButton.hasAttribute('disabled')){
                sendOrder();
            }
        })
    })

    // Вызываем запуск проверок телефона при загрузке страницы
    formValidator.telValidate();

    // вызываем обводку для полей при их заполнении
    activateInputBorders(inputFields, textAreas);

    // Вызываем сложные selects и radios
    targetSelect(allMultiSelect, allRadioElem);

    // Добавляем события для проверки заполненности формы пользователя
    formName.addEventListener('input', formValidator.checkUserForm);
    formEmail.addEventListener('input', formValidator.checkUserForm);
    
    // Добавляем события для проверки заполненности формы пользователя
    userAgreement.addEventListener('change', formValidator.checkUserForm);
    privacyPolicy.addEventListener('change', formValidator.checkUserForm);
}