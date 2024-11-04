import { openModal } from "../openModal.js";

export const sendOrder = () =>{
    // получение всех полей формы
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
    const formName = document.getElementById('nameCustomer');
    const formEmail = document.getElementById('formEmail');
    const formTel = document.getElementById('formTel');

    // создаем заказ
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

    // Показываем прелоадер перед вызовом API
    document.getElementById('preloader').classList.add('preloader--active');

    // Отправка через API 
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
        // Скрываем прелоадер и открываем модальное окно при успешной отправке
        document.getElementById('preloader').classList.remove('preloader--active');
        openModal();
    }, (error) => {
        // Скрываем прелоадер и выводим сообщение об ошибке при неудачной отправке
        document.getElementById('preloader').classList.remove('preloader--active');
        console.error('Ошибка при отправке:', error);
        alert("Произошла ошибка. Пожалуйста, попробуйте снова.");
    });
}