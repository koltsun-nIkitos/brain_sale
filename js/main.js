"use strict";

// import { translater } from "./translate.js";
import {resultTabs} from "./resultTabs.js";
import {FAQTabs} from "./FAQTabs.js";
import { research } from "./research.js";
import { burgerMenu } from './burgerMenu.js';
import { smoothScrolling } from "./smoothScroll.js";
import { activateSelects } from "./selects.js";

//Меню
smoothScrolling();
burgerMenu();

// Подключение selects
activateSelects();

// //Подключение переводчика
// translater();

// Подключение таб вкладок результатов
resultTabs();

// Подключение таб вкладок FAQ
FAQTabs();

// подключение страницы с исследованиями
research();




