export class FormValidator{
    constructor(formName, formEmail, formTel, userAgreement, privacyPolicy, button) {
        this.formName = formName;
        this.formEmail = formEmail;
        this.formTel = formTel;

        this.userAgreement = userAgreement;
        this.privacyPolicy = privacyPolicy;
        this.button = button;
    }

    // функция для проверки первой формы
    checkAimForm (){
        const button = document.getElementById('buttonNext');
        const siteLink = document.getElementById('formSiteLink');
        const documentLink = document.getElementById('formDocumentLink');

        if (siteLink.value !== '' && documentLink.value !== ''){
            button.removeAttribute('disabled');
        }else{
            button.setAttribute('disabled', '');
        }
    }

    //проверка формы пользователя
    checkUserForm (){
        const button = document.getElementById('buttonNext');

        // Регулярное выражение для email с поддержкой поддоменов и многоуровневых доменов
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})*$/;
        // Регулярное выражение для телефона (+7 (XXX) XXX-XX-XX)
        const phonePattern = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;

        // Получение всех элементов
        const formName = document.getElementById('nameCustomer');
        const formEmail = document.getElementById('formEmail');
        const formTel = document.getElementById('formTel');
        const userAgreement = document.getElementById('formUserAgreement'); 
        const privacyPolicy = document.getElementById('formPrivacyPolicy');

        
        const isNameFilled = formName.value.trim() !== '';
        const isEmailValid = emailPattern.test(formEmail.value.trim());
        const isPhoneValid = phonePattern.test(formTel.value.trim());
        const isUserAgreementChecked = userAgreement.checked; // Проверка чекбокса пользовательского соглашения
        const isPrivacyPolicyChecked = privacyPolicy.checked; // Проверка чекбокса обработки данных

        // Если все проверки пройдены, то разрешаем нажатие кнопки заказать
        if (isNameFilled && isEmailValid && isPhoneValid && isUserAgreementChecked && isPrivacyPolicyChecked) {
            button.removeAttribute('disabled');
            console.log(1);
        } else {
            button.setAttribute('disabled', '');
            console.log(0);
        }
    }

    // Маска для телефона
    applyPhoneMask(){
        let value = this.formTel.value.replace(/\D/g, ''); // Удаляем всё, кроме цифр

        if (value.length === 0) {
            this.formTel.value = "+7 (";
        } else if (value.length <= 4) {
            this.formTel.value = "+7 (" + value.substring(1);
        } else if (value.length <= 7) {
            this.formTel.value = "+7 (" + value.substring(1, 4) + ") " + value.substring(4);
        } else if (value.length <= 9) {
            this.formTel.value = "+7 (" + value.substring(1, 4) + ") " + value.substring(4, 7) + "-" + value.substring(7);
        } else if (value.length <= 11) {
            this.formTel.value = "+7 (" + value.substring(1, 4) + ") " + value.substring(4, 7) + "-" + value.substring(7, 9) + "-" + value.substring(9);
        } else {
            this.formTel.value = "+7 (" + value.substring(1, 4) + ") " + value.substring(4, 7) + "-" + value.substring(7, 9) + "-" + value.substring(9, 11);
        }
    };

    telValidate(){
        // Сброс значения при фокусе, если ввод был стёрт
        this.formTel.addEventListener('focus', () => {
            if (this.formTel.value === '') {
                this.formTel.value = '+7 (';
            }
        });

        this.formTel.addEventListener('blur', () => {
            if (this.formTel.value === '+7 (') {
                this.formTel.value = ''; // Очищаем поле, если введено недостаточно цифр
            }
        });

        this.formTel.addEventListener('input', () => {
            this.applyPhoneMask(); // Применяем маску при вводе телефона
            this.checkUserForm(); // Проверяем валидность поля
        });
    }

    getInfo(){
        console.log(this.formName, this.formEmail, this.formTel, this.userAgreement, this.privacyPolicy, this.button)
    }
}