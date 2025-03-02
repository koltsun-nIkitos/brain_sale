"use strict";


const translations = {
    'ru': {
        'header__link1': 'Услуги',
        'header__link2': 'Оборудование',
        'header__link3': 'Результаты',
        'header__link4': 'FAQ',
        'header__button': 'Заказать исследование',
        'promo__title1' : 'нейро',
        'promo__title2' : 'marketing',
        'promo__text' : 'метод измерения физиологических и нейронных сигналов у пользователей для&nbsp;понимания мотивации и предпочтений',
        'about__title' : 'О нас',
        'about__subtitle' : 'BRAIN SALE – нейромаркетинговая лаборатория, изучающая эмоциональные и поведенческие реакции человека на коммерческие продукты.',
        'about__text' : 'Мы проводим UX-тестирования, используем айтрекинг и биометрию для достижения желаемых целей в рекламе, продажах и продвижении вашего продукта.',
        'areas-work__title' : 'Сферы',
        'areas-work__subtitle' : 'Наша лаборатория помогает дизайнерам и маркетологам создавать эргономичные и прибыльные продукты, такие как:',
        'areas-work__list-item1' : 'Сайты',
        'areas-work__list-item2' : 'Мобильные приложения',
        'areas-work__list-item3' : 'Реклама',
        'areas-work__list-item4' : 'Упаковка',
        'areas-work__list-item5' : 'Копирайтинг',
        'areas-work__list-item6' : 'Нейминг',
        'areas-work__list-item7' : 'Брендинг и фирменный стиль',
        'services__title' : 'Услуги',
        'services__subtitle' : 'Нейромаркетинговое исследование',
        'services__text' : 'поможет вам лучше понять пользователей, измеряя естественные биологические реакции и нейро-процессы, происходящие в мозге человека: восприятие, внимание, ощущение, мышление.',
        'equipment__title' : 'Оборудование',
        'equipment__subtitle' : 'Айтрекер',
        'equipment__subtitle2': 'Биометрия',
        'equipment__text' : 'Устройство эффективно определяет направление и длительность взгляда пользователя, что позволяет определить реакцию на различные стимулы, формы, цвет и тд.',
        'equipment__text2':'Частота сердечных ударов даёт представление об эмоциональном состоянии человека, уровне концентрации внимания и вовлеченности.',
        'equipment__text3' : 'Устройство измерения электрической активности кожи (гальванометр) устанавливается на руке или пальце испытуемого в тесном контакте с его кожей для оценки возбуждённости человека.',
        'results__title' : 'Результаты',
        'results__subtitle' : 'Визуальные данные',
        'results__list-text1' : 'Тепловые карты / heatmaps',
        'results__list-text2' : 'Диаграмма взглядов / gaze plots',
        'results__list-text3' : 'Пчелинный рой / bee swarm',
        'results__list-text4' : 'Туманные карты / opacity maps',
        'results__list-text5' : 'Зоны интересов / AOI, areas of interest',
        'faq__text1' : 'Сколько респондентов требуется для исследования?',
        'faq__text2' : 'Где будет проводится тестирование?',
        'faq__text3' : 'В каком виде я получу результаты?',
        'faq__text4' : 'Как будет состовляться сценарий исследования?',
        'faq__text5' : 'Могу ли я определить зоны интереса (AOI) самостоятельно?',
        'faq__text6' : 'Применяются ли другие методы UX-исследований?',
        'faq__answer1' : 'Знание ipsum, знание ipsum, знание ipsum. А пока, если вы хотите убедиться, насколько легко добраться до заката, куда бы вы хотели отправиться от заката до заката?',
        'faq__answer2' : 'Знание ipsum, знание ipsum, знание ipsum. А пока, если вы хотите убедиться, насколько легко добраться до заката, куда бы вы хотели отправиться от заката до заката?',
        'faq__answer3' : 'Знание ipsum, знание ipsum, знание ipsum. А пока, если вы хотите убедиться, насколько легко добраться до заката, куда бы вы хотели отправиться от заката до заката?',
        'faq__answer4' : 'Знание ipsum, знание ipsum, знание ipsum. А пока, если вы хотите убедиться, насколько легко добраться до заката, куда бы вы хотели отправиться от заката до заката?',
        'faq__answer5' : 'Знание ipsum, знание ipsum, знание ipsum. А пока, если вы хотите убедиться, насколько легко добраться до заката, куда бы вы хотели отправиться от заката до заката?',
        'faq__answer6' : 'Знание ipsum, знание ipsum, знание ipsum. А пока, если вы хотите убедиться, насколько легко добраться до заката, куда бы вы хотели отправиться от заката до заката?',
        'conscription__title1' : 'Заказать',
        'conscription__title2' : 'Исследование',
        'footer__info-title1' : 'Адрес',
        'footer__info-address' : 'Улица  Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
        'footer__info-city' : 'г. Санкт-Пететбург',
        'footer__info-title2' : 'Телефон',
        'footer__info-title3' : 'Почта',
        'footer__socials-title' : 'Соцсети',
        // research
        'research__title1' : 'Заказть',
        'research__title2' : 'Исследование',
        'step1' : 'Шаг 1 из 3',
        'step2' : 'Шаг 2 из 3',
        'step3' : 'Шаг 3 из 3',
        'product' : 'Продукт',
        'site' : 'Сайт',
        'mobileAplications' : 'Мобильные приложения',
        'advertising' : 'Реклама',
        'copywriting' : 'Копирайтинг',
        'naming' : 'Нейминг',
        'branding' : 'Брендинг и фирменный стиль',
        'package' : 'Упаковка',
        'selectItem1' : 'Лендинг',
        'selectItem2' : 'Визитка',
        'selectItem3' : 'Корпоративный',
        'selectItem4' : 'Интернет-магазин',
        'selectItem5' : 'Портал',
        'selectItem6' : 'Мобильные 1',
        'selectItem7' : 'Мобильные 2',
        'selectItem8' : 'Мобильные 3',
        'selectItem9' : 'Мобильные 4',
        'selectItem10' : 'Мобильные 5',
        'selectItem11' : 'Реклама 1',
        'selectItem12' : 'Реклама 2',
        'selectItem13' : 'Реклама 3',
        'selectItem14' : 'Реклама 4',
        'selectItem15' : 'Реклама 5',
        'selectItem16' : 'Упаковка 1',
        'selectItem17' : 'Упаковка 2',
        'selectItem18' : 'Упаковка 3',
        'selectItem19' : 'Упаковка 4',
        'selectItem20' : 'Упаковка 5',
        'selectItem21' : 'Копирайтинг 1',
        'selectItem22' : 'Копирайтинг 2',
        'selectItem23' : 'Копирайтинг 3',
        'selectItem24' : 'Копирайтинг 4',
        'selectItem25' : 'Копирайтинг 5',
        'selectItem26' : 'Нейминг 1',
        'selectItem27' : 'Нейминг 2',
        'selectItem28' : 'Нейминг 3',
        'selectItem29' : 'Нейминг 4',
        'selectItem30' : 'Нейминг 5',
        'selectItem31' : 'Брендинг и фирменный стиль 1',
        'selectItem32' : 'Брендинг и фирменный стиль 2',
        'selectItem33' : 'Брендинг и фирменный стиль 3',
        'selectItem34' : 'Брендинг и фирменный стиль 4',
        'selectItem35' : 'Брендинг и фирменный стиль 5',
        'countPage' : 'Количество страниц',
        'research__description2' : 'Исследование',
        'aim__research' : 'Цель исследования:',
        'researchAim1' : 'Выбор наилучшей дизайн-концепции',
        'researchAim2' : 'Дизайн-аудит',
        'researchAim3' : 'Оценка юзабилити',
        'researchAim4' : 'Сравнительное А/В тестирование',
        'researchAim5' : 'Другое',
        'countRespondents' : 'Количество респондентов',
        'ageTarget' : 'Возраст целевой аудитории',
        'AgeTargetAudience1' : '18-25 лет',
        'AgeTargetAudience2' : '18-25 лет',
        'AgeTargetAudience3' : '18-25 лет',
        'AgeTargetAudience4' : '18-25 лет',
        'AgeTargetAudience5' : '18-25 лет',
        'biometric' : 'Биометрические данные*',
        'biometricData1' : 'Да',
        'biometricData2' : 'Нет',
        'addService' : 'Дополнительные услуги:',
        'additionalServices1' : 'Индивидуальный подбор зон интереса',
        'additionalServices2' : 'Разработка сценария исследования',
        'additionalServices3' : 'UX-тестирование',
        'additionalServices4' : 'Сбор дополнительных метрик',
        'additionalServices5' : 'Другое',
        'materials' : 'Материалы',
        'materialsCaption' : 'Загрузите дизайн-макеты, которые нужно протестировать. Если материалов будет недостаточно, мы с вами свяжемся',
        'addInfo' : 'Дополнительная информация',
        'infoProductTitle1' : 'Информация о продукте',
        'count_page_info' : 'страниц',
        'back_link' : 'Редактировать',
        'infoProductTitle2' : 'Исследование',
        'infoProductTitle3' : 'Загрузка материалов',
        'linkMaterials' : 'ссылка на материалы',
        'total_text1' : 'ИТОГО:',
        'total_text2' : '10 000 руб.',
        'buttonNextUser' : 'Следующий шаг',
        'personalData' : 'Личные данные',
        'disigner' : 'Дизайнер',
        'company' : 'Компания',
        'user-agreement' : 'Я принимаю условия',
        'userAgrement' : 'Пользовательского соглашения',
        'terms-personal' : 'Я подтверждаю согласие с ',
        'termsPersonal' : 'Условиями обработки персональных данных',
        'button_next2' : 'Заказать исследование',
        'biometric_info' : 'Биометрия',
        'addservisec_info' : 'Дополнительные услуги',
        'placeholder_link' : 'Ссылка',
        'placeholder_link_material' : 'Ссылка на материал',
        'placeholder_description' : 'Описание',
        'placeholder_name' : 'Иван Иванов',
        'placeholder_email' : 'ivanov@mail.com',


        // ...
    },

    'en': {
        'header__link1': 'Services',
        'header__link2': 'Equipment',
        'header__link3': 'Results',
        'header__link4': 'FAQ',
        'header__button': 'Order Research',
        'promo__title1' : 'neuro',
        'promo__title2' : 'marketing',
        'promo__text' : 'A method for measuring physiological and neural signals in users to&nbsp;understand their motivation and preferences',
        'about__title' : 'About&nbsp;us',
        'about__subtitle' : 'BRAIN SALE is a neuromarketing laboratory that studies human emotional and behavioral reactions to commercial products.',
        'about__text' : 'We conduct UX testing, use tracking and biometrics to achieve the desired goals in advertising, sales and promotion of your product.',
        'areas-work__title' : 'Areas of work',
        'areas-work__subtitle' : 'Our laboratory helps designers and marketers create ergonomic and profitable products such as:',
        'areas-work__list-item1' : 'Sites',
        'areas-work__list-item2' : 'Mobile applications',
        'areas-work__list-item3' : 'Advertisement',
        'areas-work__list-item4' : 'Packaging',
        'areas-work__list-item5' : 'Copywriting',
        'areas-work__list-item6' : 'Naming',
        'areas-work__list-item7' : 'Branding and corporate identity',
        'services__title' : 'Services',
        'services__subtitle' : 'Neuromarketing Research',
        'services__text' : 'It will help you better understand users by measuring the natural biological reactions and neuro-processes occurring in the human brain: perception, attention, sensation, thinking.',
        'equipment__title' : 'Equipment',
        'equipment__subtitle' : 'The Eytracker',
        'equipment__subtitle2' : 'Biometrics',
        'equipment__text' : "The device effectively determines the direction and duration of the user's gaze, which allows you to determine the reaction to various stimuli, shapes, colors, etc.",
        'equipment__text2':"The heart rate gives an idea of a person's emotional state, level of concentration and engagement.",
        'equipment__text3' : "A device for measuring the electrical activity of the skin (galvanometer) is installed on the hand or finger of the subject in close contact with his skin to assess human arousal.",
        'results__title' : 'Results',
        'results__subtitle' : 'Visual data',
        'results__list-text1' : 'heatmaps',
        'results__list-text2' : 'gaze plots',
        'results__list-text3' : 'bee swarm',
        'results__list-text4' : 'opacity maps',
        'results__list-text5' : 'AOI, areas of interest',
        'faq__text1' : 'How many respondents are required for the study?',
        'faq__text2' : 'Where will the testing be conducted?',
        'faq__text3' : 'What kind of results will I get?',
        'faq__text4' : 'How will the research scenario be drawn up?',
        'faq__text5' : 'Can I identify areas of interest (AOI) on my own?',
        'faq__text6' : 'Are other UX research methods used?',
        'faq__answer1' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At cupiditate quo modi doloribus facilis quas quidem, delectus corrupti unde expedita veniam ducimus, adipisci praesentium est dolorum architecto eum iusto officia?',
        'faq__answer2' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At cupiditate quo modi doloribus facilis quas quidem, delectus corrupti unde expedita veniam ducimus, adipisci praesentium est dolorum architecto eum iusto officia?',
        'faq__answer3' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At cupiditate quo modi doloribus facilis quas quidem, delectus corrupti unde expedita veniam ducimus, adipisci praesentium est dolorum architecto eum iusto officia?',
        'faq__answer4' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At cupiditate quo modi doloribus facilis quas quidem, delectus corrupti unde expedita veniam ducimus, adipisci praesentium est dolorum architecto eum iusto officia?',
        'faq__answer5' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At cupiditate quo modi doloribus facilis quas quidem, delectus corrupti unde expedita veniam ducimus, adipisci praesentium est dolorum architecto eum iusto officia?',
        'faq__answer6' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At cupiditate quo modi doloribus facilis quas quidem, delectus corrupti unde expedita veniam ducimus, adipisci praesentium est dolorum architecto eum iusto officia?',
        'conscription__title1' : 'Order',
        'conscription__title2' : 'Research',
        'footer__info-title1' : 'Address',
        'footer__info-address' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        'footer__info-city' : 'St. Petersburg',
        'footer__info-title2' : 'Telephone',
        'footer__info-title3' : 'Mail',
        'footer__socials-title' : 'Social network',
        // research
        'research__title1' : 'Order',
        'research__title2' : 'Research',
        'step1' : 'Step 1 of 3',
        'step2' : 'Step 2 of 3',
        'step3' : 'Step 3 of 3',
        'product' : 'Product',
        'site' : 'Site',
        'mobileAplications' : 'Mobile aplications',
        'advertising' : 'Advertising',
        'copywriting' : 'Copywriting',
        'naming' : 'Naming',
        'branding' : 'Branding',
        'package' : 'Package',
        'selectItem1' : 'Landing page',
        'selectItem2' : 'Business card',
        'selectItem3' : 'Corporate',
        'selectItem4' : 'Online Store',
        'selectItem5' : 'Portal',
        'selectItem6' : 'Mobile 1',
        'selectItem7' : 'Mobile 2',
        'selectItem8' : 'Mobile 3',
        'selectItem9' : 'Mobile 4',
        'selectItem10' : 'Mobile 5',
        'selectItem11' : 'Advertising 1',
        'selectItem12' : 'Advertising 2',
        'selectItem13' : 'Advertising 3',
        'selectItem14' : 'Advertising 4',
        'selectItem15' : 'Advertising 5',
        'selectItem16' : 'Package 1',
        'selectItem17' : 'Package 2',
        'selectItem18' : 'Package 3',
        'selectItem19' : 'Package 4',
        'selectItem20' : 'Package 5',
        'selectItem21' : 'Copywriting 1',
        'selectItem22' : 'Copywriting 2',
        'selectItem23' : 'Copywriting 3',
        'selectItem24' : 'Copywriting 4',
        'selectItem25' : 'Copywriting 5',
        'selectItem26' : 'Naming 1',
        'selectItem27' : 'Naming 2',
        'selectItem28' : 'Naming 3',
        'selectItem29' : 'Naming 4',
        'selectItem30' : 'Naming 5',
        'selectItem31' : 'Branding and corporate identity 1',
        'selectItem32' : 'Branding and corporate identity 2',
        'selectItem33' : 'Branding and corporate identity 3',
        'selectItem34' : 'Branding and corporate identity 4',
        'selectItem35' : 'Branding and corporate identity 5',
        'countPage' : 'Number of pages',
        'research__description2' : 'Research',
        'aim__research' : 'The aim of the research:',
        'researchAim1' : 'Choosing the best design concept',
        'researchAim2' : 'Design audit',
        'researchAim3' : 'Usability assessment',
        'researchAim4' : 'Comparative A/B testing',
        'researchAim5' : 'Other',
        'countRespondents' : 'Number of respondents',
        'ageTarget' : 'Age of the target audience',
        'AgeTargetAudience1' : '18-25 years old',
        'AgeTargetAudience2' : '18-25 years old',
        'AgeTargetAudience3' : '18-25 years old',
        'AgeTargetAudience4' : '18-25 years old',
        'AgeTargetAudience5' : '18-25 years old',
        'biometric' : 'Biometric data*',
        'biometricData1' : 'Yes',
        'biometricData2' : 'No',
        'addService' : 'Additional services:',
        'additionalServices1' : 'Individual selection of areas of interest',
        'additionalServices2' : 'Development of a research scenario',
        'additionalServices3' : 'UX testing',
        'additionalServices4' : 'Collecting additional metrics',
        'additionalServices5' : 'Other',
        'materials' : 'Materials',
        'materialsCaption' : 'Upload the design layouts that need to be tested. If there are not enough materials, we will contact you',
        'addInfo' : 'Additional information',
        'button_next' : 'Calculate the cost',
        'infoProductTitle1' : 'Product Information',
        'count_page_info' : 'pages',
        'back_link' : 'Edit',
        'infoProductTitle2' : 'Research',
        'infoProductTitle3' : 'Uploaded materials',
        'linkMaterials' : 'link to the materials',
        'total_text1' : 'TOTAL:',
        'total_text2' : '10 000 rubles.',
        'total_price-caption' : 'The implementation period is 5 working days from the date of payment<br>Comments on the order?',
        'buttonNextUser' : 'The next step',
        'personalData' : 'Personal data', 
        'disigner' : 'Designer',
        'company' : 'Company',
        'user-agreement' : 'I accept the terms',
        'userAgrement' : 'User Agreement',
        'terms-personal' : 'I confirm my agreement with ',
        'termsPersonal' : 'Terms of personal data processing',
        'button_next2' : 'Order research',
        'biometric_info' : 'Biometrics',
        'addservisec_info' : 'Additional services',
        'placeholder_link' : 'Link',
        'placeholder_link_material' : 'Link to the material',
        'placeholder_description' : 'Description',
        'placeholder_name' : 'James Smith',
        'placeholder_email' : 'smith@gmail.com',

        // ...
    }
};




export const translater = () => {
        const langSelect = document.getElementById('selectLanguage');

        // Функция для изменения языка
        const changeLanguage = (lang) => {
            const elementsToTranslate = document.querySelectorAll('[data-translate]');
            elementsToTranslate.forEach((element) => {
                const translateKey = element.getAttribute('data-translate');
                if (translations[lang][translateKey] && !element.hasAttribute('placeholder')) {
                    element.innerHTML = translations[lang][translateKey];
                }else if (element.hasAttribute('placeholder') && translations[lang][translateKey]){
                    // Элементы с placeholder
                    element.setAttribute('placeholder', translations[lang][translateKey]);
                    console.log("hehe");
                }
            });
        };
    
        // При загрузке страницы
        const currentLang = localStorage.getItem('language') || 'ru'; // Загрузить текущий язык
        changeLanguage(currentLang);

        // Установка выбранного значения select
        langSelect.value = currentLang;
    
        // Изменение языка по выбору в select
        langSelect.addEventListener('change', (event) => {
            const selectedLang = event.target.value;
            localStorage.setItem('language', selectedLang); // Сохраняем выбор языка
            changeLanguage(selectedLang); // Меняем язык
        });
    
};
