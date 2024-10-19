import { translater } from "./translate.js";
import { openModal } from "./openModal.js";

export const research = () =>{
    
    const totalPriceButton = document.getElementById('buttonNext');
    
    const checkForm1 = () =>{
        // форма 1 
        const form1 = document.querySelector('.research__form__start .form__body');
        const inputsRequired = form1.querySelectorAll('input[required]');
        
        let checkedForm1 = true;

        // проверка заполенности обязательных полей
        inputsRequired.forEach((input) =>{
            if (input.value === ""){
                checkedForm1 = false
            } 
        })
        
        if (checkedForm1){
            totalPriceButton.removeAttribute('disabled');
        }else{
            totalPriceButton.setAttribute('disabled', '');
        }
    }
    
    
    
    //Добавление обводок, когда поле ввода не пустое
    const inputFields = document.querySelectorAll('.form__input, .form__input__textArea');
    
    function toggleInputBorder(inputField) {
        if (inputField.value.trim() !== '') {
            inputField.classList.add('form__input--not-empty');
        } else {
            inputField.classList.remove('form__input--not-empty');
        }
    }

    inputFields.forEach(inputField => {
        inputField.addEventListener('input', () => {
            toggleInputBorder(inputField);
            checkForm1();
        });
    });


    const textareas = document.querySelectorAll('.form__input__textArea');
    textareas.forEach(textarea => {
        if (textarea.value.trim() === '') {
            textarea.value = '';
        }
    });

    

    const allRadioElem = document.querySelectorAll('.select__items .form__group-line');
    const allMultiSelect = document.querySelectorAll('.multi-select');

    // Всё сложные selects
    allMultiSelect.forEach((multiSelect) =>{

        multiSelect.addEventListener('change', (evt)=>{
            const select = evt.target;
            const multiGroup = select.closest('.multi-select');

            const oldSection = multiGroup.querySelector('.select__items--active')
            const oldRadioGroup = oldSection.querySelector('.form__group-line--active');
            const oldRadio = oldRadioGroup.querySelector('input');

            oldSection.classList.remove('select__items--active');
            oldRadioGroup.classList.remove('form__group-line--active');
            oldRadio.removeAttribute('checked');

            const newSection = multiGroup.querySelector(`.select__items[data-select="${select.value}"]`)
            const newRadioGroup = newSection.querySelector('.form__group-line');
            const newRadio = newRadioGroup.querySelector('input');

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

    function handle(evt){
        evt.preventDefault();
        if (!totalPriceButton.hasAttribute('disabled')){
            const oldPagination = document.getElementById('researchPage1').classList.remove('research__pagination--active');
            const newPagination = document.getElementById('researchPage2').classList.add('research__pagination--active');

            const secondForm = document.querySelector('.research__form__middle');
            const form1 = document.querySelector('.research__form__start').classList.remove('research__form__start--active');


            secondForm.classList.add('research__form__middle--active');
            secondForm.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            totalPriceButton.style.display = "none";

            // передавать данные заполненные во сторую часть формы
            const productSelect = document.getElementById('productSelect');
            const ProductGood = document.querySelector('.select__items--active .form__group-line--active label');
            const countPage = document.getElementById('countPage');

            const newGood = document.querySelector('span[data-check_input="productGood"]');
            const newProduct = document.querySelector('span[data-check_input="productSelect"]');
            const newCountPage = document.querySelector('span[data-check_input="countPage"]')

            // Заполнение информации о продукте
            newProduct.textContent = productSelect.options[productSelect.selectedIndex].text + ", ";
            newGood.textContent = ProductGood.textContent + ", ";
            newCountPage.innerHTML = countPage.options[countPage.selectedIndex].text + ' <span data-translate="count_page_info">страниц</span>';


            // исследование

            const ResearchAim = document.querySelector('.select__items--active[data-select="aims"] .form__group-line--active label');
            const CountRespondents = document.getElementById('countRespondents'); 
            const AgeTargetAudience = document.getElementById('AgeTargetAudience');
            const BiometricData = document.getElementById('biometricData');
            const AdditionalServices = document.querySelector('.select__items--active[data-select="additionalServices"] .form__group-line--active label'); 

            // заполнение информации об исследовании
            const newResearchAim = document.querySelector('span[data-check_input="researchAim"]');
            const newCountRespondents = document.querySelector('span[data-check_input="countRespondents"]');
            const newAgeTargetAudience = document.querySelector('span[data-check_input="AgeTargetAudience"]');
            const newBiometricData = document.querySelector('span[data-check_input="biometricData"]');
            const newAdditionalServices = document.querySelector('span[data-check_input="additionalServices"]');

            newResearchAim.textContent = ResearchAim.textContent + ", ";
            newCountRespondents.textContent = CountRespondents.options[CountRespondents.selectedIndex].text + ", ";
            newAgeTargetAudience.textContent = AgeTargetAudience.options[AgeTargetAudience.selectedIndex].text  + ", ";
            newBiometricData.textContent = " Биометрия (" + BiometricData.options[BiometricData.selectedIndex].text + ")";
            
            if (AdditionalServices){
                newAdditionalServices.innerHTML = "<br>Дополнительные улуги: " + AdditionalServices.textContent;
            }else{
                newAdditionalServices.innerHTML = "<br>Дополнительные услуги: ";
            }

            // Загрузка материалов
            const formDocumentLink = document.getElementById('formDocumentLink');
            const newUrlInput = document.querySelector('[data-check_input="urlInput"]');
            newUrlInput.href = formDocumentLink.value;
            //newCountPage.textContent = countPage.options[countPage.selectedIndex].text + " страниц";
            
        }
    }

    totalPriceButton.addEventListener('click', handle)

    // Добавляем обработчики для ссылок "Редактировать" на второй части формы
    const editLinks = document.querySelectorAll('.check__form__back-link');
    
    editLinks.forEach(link => {
        link.addEventListener('click', (evt) => {
            evt.preventDefault();

            // Закрываем вторую часть формы
            document.querySelector('.research__form__middle').classList.remove('research__form__middle--active');

            // Открываем первую часть формы
            document.querySelector('.research__form__start').classList.add('research__form__start--active');
            totalPriceButton.style.display = "inline-block";

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
        });
    });


    

    const formName = document.getElementById('nameCustomer');
    const formEmail = document.getElementById('formEmail');
    const formTel = document.getElementById('formTel');
    const formPassword1 = document.getElementById('formPassword1');
    const formPassword2 = document.getElementById('formPassword2');
    const userAgreement = document.getElementById('formUserAgreement'); 
    const privacyPolicy = document.getElementById('formPrivacyPolicy');

    // Регулярное выражение для email с поддержкой поддоменов и многоуровневых доменов
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})*$/;
    // Регулярное выражение для телефона (+7 (XXX) XXX-XX-XX)
    const phonePattern = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;

    // Функция для проверки полей
    const checkUserForm = () => {
        const isNameFilled = formName.value.trim() !== '';
        const isEmailValid = emailPattern.test(formEmail.value.trim());
        const isPhoneValid = phonePattern.test(formTel.value.trim());
        const isUserAgreementChecked = userAgreement.checked; // Проверка чекбокса пользовательского соглашения
        const isPrivacyPolicyChecked = privacyPolicy.checked; // Проверка чекбокса обработки данных

        if (isNameFilled && isEmailValid && isPhoneValid && isUserAgreementChecked && isPrivacyPolicyChecked) {
            totalPriceButton.removeAttribute('disabled');
        } else {
            totalPriceButton.setAttribute('disabled', 'disabled');
        }
    };

    // Маска для телефона
    const applyPhoneMask = (input) => {
        let value = input.value.replace(/\D/g, ''); // Удаляем всё, кроме цифр

        if (value.length === 0) {
            input.value = "+7 (";
        } else if (value.length <= 4) {
            input.value = "+7 (" + value.substring(1);
        } else if (value.length <= 7) {
            input.value = "+7 (" + value.substring(1, 4) + ") " + value.substring(4);
        } else if (value.length <= 9) {
            input.value = "+7 (" + value.substring(1, 4) + ") " + value.substring(4, 7) + "-" + value.substring(7);
        } else if (value.length <= 11) {
            input.value = "+7 (" + value.substring(1, 4) + ") " + value.substring(4, 7) + "-" + value.substring(7, 9) + "-" + value.substring(9);
        } else {
            input.value = "+7 (" + value.substring(1, 4) + ") " + value.substring(4, 7) + "-" + value.substring(7, 9) + "-" + value.substring(9, 11);
        }
    };

    // Сброс значения при фокусе, если ввод был стёрт
    formTel.addEventListener('focus', () => {
        if (formTel.value === '') {
            formTel.value = '+7 (';
        }
    });

    formTel.addEventListener('blur', () => {
        if (formTel.value === '+7 (') {
            formTel.value = ''; // Очищаем поле, если введено недостаточно цифр
        }
    });

    // Вызываем проверку полей при загрузке страницы
    checkUserForm();

    // Добавляем события input для отслеживания изменений в полях
    formName.addEventListener('input', checkUserForm);
    formEmail.addEventListener('input', checkUserForm);
    formTel.addEventListener('input', () => {
        applyPhoneMask(formTel); // Применяем маску при вводе телефона
        checkUserForm(); // Проверяем валидность поля
    });

    // Добавляем события для чекбоксов
    userAgreement.addEventListener('change', checkUserForm);
    privacyPolicy.addEventListener('change', checkUserForm);
    


    const buttonNextUser = document.getElementById('buttonNextUser');
    buttonNextUser.addEventListener('click', (evt)=>{
        evt.preventDefault();
        const secondForm = document.querySelector('.research__form__middle');
        const userForm = document.querySelector('.research__form__finish');
        userForm.classList.add('research__form__finish--active');

        secondForm.classList.remove('research__form__middle--active');
        
        const targetSection = document.getElementById('researchSection1');
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        totalPriceButton.style.display = "inline-block";
        totalPriceButton.textContent = 'Заказать исследование';
        totalPriceButton.setAttribute('data-translate', 'button_next2');
        translater();
        totalPriceButton.removeEventListener('click', handle);
        totalPriceButton.setAttribute('disabled', '');

        
        

        


        totalPriceButton.addEventListener('click', (evt)=>{
            evt.preventDefault();
            const form = document.querySelector('.research__form.form');

            const orderResearchAim = document.querySelector('span[data-check_input="researchAim"]');
            const orderGood = document.querySelector('span[data-check_input="productGood"]');
            const orderProduct = document.querySelector('span[data-check_input="productSelect"]');
            const orderCountPage = document.querySelector('span[data-check_input="countPage"]')
            const orderCountRespondents = document.querySelector('span[data-check_input="countRespondents"]');
            const orderAgeTargetAudience = document.querySelector('span[data-check_input="AgeTargetAudience"]');
            const orderBiometricData = document.querySelector('span[data-check_input="biometricData"]');
            const orderAdditionalServices = document.querySelector('span[data-check_input="additionalServices"]');
            const orderUrlInput = document.querySelector('[data-check_input="urlInput"]');
            const ordersiteUrl = document.getElementById('formSiteLink');
            const orderComment = document.getElementById('formTextarea');

            const order = {
                product : orderProduct.textContent,
                good : orderGood.textContent,
                countPage : orderCountPage.textContent,
                siteUrl : ordersiteUrl.value,

                aim : orderResearchAim.textContent,
                resepondents: orderCountRespondents.textContent,
                age : orderAgeTargetAudience.textContent,

                biometric : orderBiometricData.textContent,
                addService : orderAdditionalServices.textContent,
                materials : orderUrlInput.textContent,
                comments : orderComment.textContent,

                name : formName.value,
                email : formEmail.value,
                tel : formTel.value,
            }

            emailjs.send('service_350hrsv', 'template_uyfappl',{
                from_name : "Brain_sale",
                name : order.name,
                email: order.email,
                tel : order.tel,

                product : order.product,
                good : order.good,
                countPage : order.countPage,
                siteUrl : order.siteUrl,

                aim : order.aim, 
                resepondents : order.resepondents,
                age : order.age,

                biometric : order.biometric,
                addService : order.addService,
                materials : order.materials,
                comments : order.comments,


            }, 'jIcF5DlDMnXr3bd4K')
            .then((response) => {
                openModal();
            }, (error) => {
                
            });
        })

    })



}