
export const FAQTabs = () =>{
    // const FAQGroups = document.querySelectorAll('.faq__group');
    // const questions = document.querySelectorAll('.faq__question');

    // questions.forEach((question) => {
    //     question.addEventListener('click', (evt) => {
    //         evt.preventDefault();

    //         const newActiveGroup = question.closest('.faq__group');

    //         // является уже активным
    //         if (!newActiveGroup.classList.contains('faq__group--active')) {
    //             // Закрываем все открытые группы
    //             FAQGroups.forEach((group) => group.classList.remove('faq__group--active'));
                
    //             //новый активный элемент
    //             newActiveGroup.classList.add('faq__group--active');
    //         }
    //         // Если элемент активен, ничего не делаем
    //     });
    // });


    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion-header");

        header.addEventListener("click", () => {
        // Закрываем все остальные пункты
        accordionItems.forEach(i => {
            if (i !== item) {
            i.classList.remove("active");
            }
        });

        // Переключаем текущий пункт
        item.classList.toggle("active");
        });
    });
}
