export const transferAnotherForm = () =>{
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

    // передавать данные заполненные во вторую часть формы
    // Заполнение информации о продукте
    newProduct.textContent = productSelect.options[productSelect.selectedIndex].text + ", ";
    newGood.textContent = ProductGood.textContent + ", ";
    newCountPage.innerHTML = countPage.options[countPage.selectedIndex].text + ' <span data-translate="count_page_info">страниц</span>';

    // Заполнение информации об исследовании
    newResearchAim.textContent = ResearchAim.textContent + ", ";
    newCountRespondents.textContent = CountRespondents.options[CountRespondents.selectedIndex].text + ", ";
    newAgeTargetAudience.textContent = AgeTargetAudience.options[AgeTargetAudience.selectedIndex].text  + ", ";
    newBiometricData.innerHTML = `<span data-translate="biometric_info"> Биометрия</span> (` + BiometricData.options[BiometricData.selectedIndex].text + ")";
    
    if (AdditionalServices){
        newAdditionalServices.innerHTML = `<span data-translate="addservisec_info"><br>Дополнительные улуги: </span>` + AdditionalServices.textContent;
    }else{
        newAdditionalServices.innerHTML = `<span data-translate="addservisec_info"><br>Дополнительные услуги: </span>`;
    }

    // Заполнение документов
    newUrlInput.href = formDocumentLink.value;
}