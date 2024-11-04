import { translater } from "./translate.js";

import { targetSelect } from "./research/targetSelects.js";
import { activateInputBorders } from "./research/inputBorders.js";
import { activateEdit } from "./research/editLinks.js";
import { sendOrder } from "./research/sendOrder.js";
import { FormValidator } from "./research/formValidator.js";

export const research = () =>{
    const inputFields = document.querySelectorAll('.form__input, .form__input__textArea');
    const textAreas = document.querySelectorAll('.form__input__textArea');
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

    const formStart = document.querySelector('.research__form__start .form__body');
    const formStart1 = document.querySelector('.research__form__start');
    const formMiddle = document.querySelector('.research__form__middle');

    const formValidator = new FormValidator(formName, formEmail, formTel, userAgreement, privacyPolicy, totalPriceButton);



    siteLink.addEventListener('input', formValidator.checkAimForm);
    documentLink.addEventListener('input', formValidator.checkAimForm);

    function handle(evt){
        // изменение пагинации, заполнение полей во второй части формы
        evt.preventDefault();

        if (!totalPriceButton.hasAttribute('disabled')){
            // получение элементов пагинации
            const oldPagination = document.getElementById('researchPage1').classList.remove('research__pagination--active');
            const newPagination = document.getElementById('researchPage2').classList.add('research__pagination--active');

            // получение второй части формы
            const formMiddle = document.querySelector('.research__form__middle');
            const form1 = document.querySelector('.research__form__start').classList.remove('research__form__start--active');
            
            // Получение всей информации со старой части формы
            // товары
            const productSelect = document.getElementById('productSelect');
            const ProductGood = document.querySelector('.select__items--active .form__group-line--active label');
            const countPage = document.getElementById('countPage');
            // исследование
            const ResearchAim = document.querySelector('.select__items--active[data-select="aims"] .form__group-line--active label');
            const CountRespondents = document.getElementById('countRespondents'); 
            const AgeTargetAudience = document.getElementById('AgeTargetAudience');
            const BiometricData = document.getElementById('biometricData');
            const AdditionalServices = document.querySelector('.select__items--active[data-select="additionalServices"] .form__group-line--active label'); 
            // Материалы
            const formDocumentLink = document.getElementById('formDocumentLink');
            const newUrlInput = document.querySelector('[data-check_input="urlInput"]');

            // Получение новых элементов формы во второй части, которые нужно заполнить
            // Получение продуктов
            const newGood = document.querySelector('span[data-check_input="productGood"]');
            const newProduct = document.querySelector('span[data-check_input="productSelect"]');
            const newCountPage = document.querySelector('span[data-check_input="countPage"]')
            // заполнение информации об исследовании
            const newResearchAim = document.querySelector('span[data-check_input="researchAim"]');
            const newCountRespondents = document.querySelector('span[data-check_input="countRespondents"]');
            const newAgeTargetAudience = document.querySelector('span[data-check_input="AgeTargetAudience"]');
            const newBiometricData = document.querySelector('span[data-check_input="biometricData"]');
            const newAdditionalServices = document.querySelector('span[data-check_input="additionalServices"]');

            // Изменение активной части формы и пролистывание
            formMiddle.classList.add('research__form__middle--active');
            formMiddle.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            totalPriceButton.style.display = "none";

            // передавать данные заполненные во вторую часть формы
            // Заполнение информации о продукте
            newProduct.textContent = productSelect.options[productSelect.selectedIndex].text + ", ";
            newGood.textContent = ProductGood.textContent + ", ";
            newCountPage.innerHTML = countPage.options[countPage.selectedIndex].text + ' <span data-translate="count_page_info">страниц</span>';

            // Заполнение информации об исследовании
            newResearchAim.textContent = ResearchAim.textContent + ", ";
            newCountRespondents.textContent = CountRespondents.options[CountRespondents.selectedIndex].text + ", ";
            newAgeTargetAudience.textContent = AgeTargetAudience.options[AgeTargetAudience.selectedIndex].text  + ", ";
            newBiometricData.textContent = " Биометрия (" + BiometricData.options[BiometricData.selectedIndex].text + ")";
            
            if (AdditionalServices){
                newAdditionalServices.innerHTML = "<br>Дополнительные улуги: " + AdditionalServices.textContent;
            }else{
                newAdditionalServices.innerHTML = "<br>Дополнительные услуги: ";
            }

            // Заполнение документов
            newUrlInput.href = formDocumentLink.value;
        }
    }

    totalPriceButton.addEventListener('click', handle)
    
    // Добавляем обработчики для ссылок "Редактировать" на второй части формы
    editLinks.forEach(link => {
        link.addEventListener('click', (evt) => {
            evt.preventDefault();
            activateEdit(link, formStart1, formMiddle, totalPriceButton);
        });
    });


    
    

    // кнопка для заполнения информации о пользователе
    buttonNextUser.addEventListener('click', (evt)=>{
        evt.preventDefault();
        //Открытие последней части формы
        const formMiddle = document.querySelector('.research__form__middle');
        const userForm = document.querySelector('.research__form__finish');

        userForm.classList.add('research__form__finish--active');
        formMiddle.classList.remove('research__form__middle--active');
        
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

    // Вызываем проверку полей при загрузке страницы
    formValidator.telValidate();

    // вызываем обводку для полей
    activateInputBorders(inputFields, textAreas);

    // Вызываем сложные selects и radios
    targetSelect(allMultiSelect, allRadioElem)

    // Добавляем события input для отслеживания изменений в полях (имя, e-mail, телефон)
    formName.addEventListener('input', formValidator.checkUserForm);
    formEmail.addEventListener('input', formValidator.checkUserForm);
    formTel.addEventListener('input', formValidator.telValidate());

    // Добавляем события для чекбоксов
    userAgreement.addEventListener('change', formValidator.checkUserForm);
    privacyPolicy.addEventListener('change', formValidator.checkUserForm);
}