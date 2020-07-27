/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers/next-sibling-by-selector.js":
/*!*************************************************!*\
  !*** ./src/helpers/next-sibling-by-selector.js ***!
  \*************************************************/
/*! exports provided: getNextSiblingBySelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNextSiblingBySelector\", function() { return getNextSiblingBySelector; });\nconst getNextSiblingBySelector = (element, selector) => {\r\n    let nextElementSibling = element.nextElementSibling;\r\n    while (nextElementSibling) {\r\n        if (nextElementSibling.matches(selector)) {\r\n            return nextElementSibling;\r\n        }\r\n        nextElementSibling = nextElementSibling.nextElementSibling;\r\n    }\r\n    return null;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/helpers/next-sibling-by-selector.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_body_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/body-listener */ \"./src/modules/body-listener.js\");\n/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modals */ \"./src/modules/modals.js\");\n/* harmony import */ var _modules_input_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/input-validator */ \"./src/modules/input-validator.js\");\n/* harmony import */ var _modules_form_submit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form-submit */ \"./src/modules/form-submit.js\");\n/* harmony import */ var _modules_collapsed_panels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/collapsed-panels */ \"./src/modules/collapsed-panels.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_load_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/load-list */ \"./src/modules/load-list.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst bodyListener = new _modules_body_listener__WEBPACK_IMPORTED_MODULE_0__[\"BodyListener\"]();\r\nObject(_modules_modals__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(bodyListener);\r\nObject(_modules_input_validator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(bodyListener);\r\nObject(_modules_form_submit__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(bodyListener);\r\nObject(_modules_collapsed_panels__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(bodyListener);\r\nObject(_modules_calculator__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(bodyListener, _modules_collapsed_panels__WEBPACK_IMPORTED_MODULE_4__[\"openNext\"]);\r\nObject(_modules_load_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(bodyListener);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/body-listener.js":
/*!**************************************!*\
  !*** ./src/modules/body-listener.js ***!
  \**************************************/
/*! exports provided: BodyListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BodyListener\", function() { return BodyListener; });\nclass BodyListener {\r\n    constructor() {\r\n        this.eventTypes = {};\r\n    }\r\n\r\n    addNewListener(eventType) {\r\n        document.body\r\n            .addEventListener(eventType, (ev) =>\r\n                this.eventTypes[eventType]\r\n                    .forEach(callback => callback(ev)),\r\n            );\r\n    }\r\n\r\n    on(eventType, callback) {\r\n        if (Array.isArray(this.eventTypes[eventType])) {\r\n            this.eventTypes[eventType].push(callback);\r\n        } else {\r\n            this.eventTypes[eventType] = [callback];\r\n            this.addNewListener(eventType);\r\n        }\r\n    }\r\n\r\n    off(eventType, callback) {\r\n        if (Array.isArray(this.eventTypes[eventType])) {\r\n            this.eventTypes[eventType] = this.eventTypes[eventType]\r\n                .filter(cb => cb !== callback);\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/body-listener.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/*! exports provided: orderData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderData\", function() { return orderData; });\nconst compareTable = {\r\n    one: 10000,\r\n    two: 15000,\r\n    '1.4': 0,\r\n    '2.0': 20,\r\n    '1': 0,\r\n    '2': 30,\r\n    '3': 50,\r\n    'yes': 1000,\r\n    'no': 0,\r\n};\r\n\r\nconst orderData = {\r\n    septicType: 'one', // one, two\r\n    diameterOfMain: '1.4', // 1.4, 2.0\r\n    countOfCirclesMain: '1', // 1, 2, 3\r\n    diameterOfSecond: null, // 1.4, 2.0\r\n    countOfCirclesSecond: null, // 1, 2, 3\r\n    hasBottom: 'yes', // yes, no\r\n    metersToHome: 0,\r\n    calcResult: 0,\r\n};\r\n\r\nconst toggleSecondSepticControls = (isShow) => {\r\n    const panel = document.getElementById('collapseTwo');\r\n    const secondTitle = panel.querySelectorAll('.title-text')[1];\r\n    const secondSelectBoxes = Array.from(panel.querySelectorAll('.select-box'))\r\n        .filter((item, i) => i > 1);\r\n\r\n    secondTitle.style.display = isShow ? 'block' : 'none';\r\n    secondSelectBoxes\r\n        .forEach(item => {\r\n            item.style.display = isShow ? 'inline-block' : 'none';\r\n        });\r\n};\r\n\r\nconst percent = (num) => num / 100;\r\n\r\nconst calculate = () => {\r\n    const countOfSeptics = orderData.septicType === 'one' ? 1 : 2;\r\n    const result = compareTable[orderData.septicType] +\r\n        compareTable[orderData.septicType] *\r\n        (\r\n            percent(compareTable[orderData.diameterOfMain]) +\r\n            percent(compareTable[orderData.diameterOfSecond] || 0) +\r\n            percent(compareTable[orderData.countOfCirclesMain]) +\r\n            percent(compareTable[orderData.countOfCirclesSecond] || 0)\r\n        ) +\r\n        (compareTable[orderData.hasBottom] * countOfSeptics);\r\n\r\n    orderData.calcResult = result;\r\n    document.getElementById('calc-result').value = result;\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(bodyListener, openNextPanel) {\r\n    const nextButtonClassName = 'construct-btn';\r\n\r\n    const septicTypeCheckboxId = 'myonoffswitch';\r\n    const mainDiameterSelectId = 'main-diameter';\r\n    const mainCountSelectId = 'main-count';\r\n    const secondDiameterSelectId = 'second-diameter';\r\n    const secondCountSelectId = 'second-count';\r\n    const septicBottomCheckboxId = 'myonoffswitch-two';\r\n    const metersToHomeInputId = 'meters-to-home';\r\n\r\n    toggleSecondSepticControls(false);\r\n    calculate();\r\n\r\n    bodyListener.on('click', (ev) => {\r\n        const { target } = ev;\r\n        if (!target) {\r\n            return;\r\n        }\r\n\r\n        const nextButtonClicked = (\r\n                target.classList.contains(nextButtonClassName) && target\r\n            ) ||\r\n            target.closest(`.${nextButtonClassName}`);\r\n        if (nextButtonClicked) {\r\n            ev.preventDefault();\r\n            if (nextButtonClicked.dataset.toggle === 'collapse') {\r\n                openNextPanel(nextButtonClicked);\r\n            }\r\n        }\r\n    });\r\n\r\n    bodyListener.on('change', (ev) => {\r\n        const { target } = ev;\r\n        if (!target) {\r\n            return;\r\n        }\r\n\r\n        if (target.id === septicTypeCheckboxId) {\r\n            if (target.checked) {\r\n                orderData.septicType = 'one';\r\n                orderData.diameterOfSecond = null;\r\n                orderData.countOfCirclesSecond = null;\r\n\r\n                toggleSecondSepticControls(false);\r\n                document.getElementById('second-diameter').value = '1.4';\r\n                document.getElementById('second-count').value = '1';\r\n            } else {\r\n                orderData.septicType = 'two';\r\n                orderData.diameterOfSecond = '1.4';\r\n                orderData.countOfCirclesSecond = '1';\r\n\r\n                toggleSecondSepticControls(true);\r\n            }\r\n            calculate();\r\n        }\r\n\r\n        if (target.id === mainDiameterSelectId) {\r\n            const { value } = target;\r\n            orderData.diameterOfMain = value;\r\n            calculate();\r\n        }\r\n\r\n        if (target.id === mainCountSelectId) {\r\n            const { value } = target;\r\n            orderData.countOfCirclesMain = value;\r\n            calculate();\r\n        }\r\n\r\n        if (target.id === secondDiameterSelectId) {\r\n            const { value } = target;\r\n            orderData.diameterOfSecond = value;\r\n            calculate();\r\n        }\r\n\r\n        if (target.id === secondCountSelectId) {\r\n            const { value } = target;\r\n            orderData.countOfCirclesSecond = value;\r\n            calculate();\r\n        }\r\n\r\n        if (target.id === septicBottomCheckboxId) {\r\n            const { checked } = target;\r\n            orderData.hasBottom = checked ? 'yes' : 'no';\r\n            calculate();\r\n        }\r\n    });\r\n\r\n    bodyListener.on('input', (ev) => {\r\n        const {target} = ev;\r\n        if (!target) {\r\n            return;\r\n        }\r\n\r\n        if (target.id === metersToHomeInputId) {\r\n            orderData.metersToHome = +target.value;\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/collapsed-panels.js":
/*!*****************************************!*\
  !*** ./src/modules/collapsed-panels.js ***!
  \*****************************************/
/*! exports provided: openNext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openNext\", function() { return openNext; });\n/* harmony import */ var _helpers_next_sibling_by_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/next-sibling-by-selector */ \"./src/helpers/next-sibling-by-selector.js\");\n\r\n// collapsedPanels\r\n\r\nconst showItem = (item) => {\r\n    item.classList.add('in');\r\n    item.animate([\r\n        { height: '0px', overflow: 'hidden' },\r\n        { height: `${item.clientHeight}px`, overflow: 'hidden' },\r\n    ], {\r\n        duration: 400,\r\n    });\r\n};\r\n\r\nconst hideItem = (item) => {\r\n    item.animate([\r\n        { height: `${item.clientHeight}px`, overflow: 'hidden' },\r\n        { height: '0px', overflow: 'hidden' },\r\n    ], {\r\n        duration: 400,\r\n    }).onfinish = () => {\r\n        item.classList.remove('in');\r\n    };\r\n};\r\n\r\nconst parentWrapperClassName = 'panel-group';\r\nconst headerClassName = 'panel-heading';\r\nconst bodyClassName = 'panel-collapse';\r\n\r\nconst openNext = (clickedButton) => {\r\n    const panel = clickedButton.closest('.panel');\r\n    const nextPanel = Object(_helpers_next_sibling_by_selector__WEBPACK_IMPORTED_MODULE_0__[\"getNextSiblingBySelector\"])(panel, '.panel');\r\n    if (panel && nextPanel) {\r\n        hideItem(panel.querySelector(`.${bodyClassName}`));\r\n        showItem(nextPanel.querySelector(`.${bodyClassName}`));\r\n    }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(bodyListener) {\r\n    bodyListener.on('click', (ev) => {\r\n        const { target } = ev;\r\n        if (!target) {\r\n            return;\r\n        }\r\n\r\n        if (\r\n            target.closest(`.${headerClassName}`) &&\r\n            (target.tagName === 'A' || target.tagName === 'SPAN')\r\n        ) {\r\n            ev.preventDefault();\r\n            const parentWrapper = target.closest(`.${parentWrapperClassName}`);\r\n            const header = target.closest(`.${headerClassName}`);\r\n            const body = header.nextElementSibling;\r\n            if (body.classList.contains('in')) {\r\n                return;\r\n            }\r\n            parentWrapper.querySelectorAll(`.${bodyClassName}`)\r\n                .forEach((item) => {\r\n                    if (item.classList.contains('in')) {\r\n                        hideItem(item);\r\n                    }\r\n                });\r\n            showItem(body);\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/modules/collapsed-panels.js?");

/***/ }),

/***/ "./src/modules/form-submit.js":
/*!************************************!*\
  !*** ./src/modules/form-submit.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return formSubmit; });\n/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator */ \"./src/modules/calculator.js\");\n\r\n\r\nfunction formSubmit(bodyListener) {\r\n    const loadingMessage = 'Загрузка...';\r\n    const successMessage = 'Спасибо мы свяжемся с вами!';\r\n    const errorMessage = 'Что то пошло не так...';\r\n\r\n    bodyListener.on('submit', (ev) => {\r\n        const { target } = ev;\r\n        if (!target) {\r\n            return;\r\n        }\r\n\r\n        if (\r\n            target.classList.contains('capture-form') ||\r\n            target.classList.contains('main-form')\r\n        ) {\r\n            ev.preventDefault();\r\n            const url = target.action;\r\n            if (!url) {\r\n                console.error('for form need to add action attribute', target);\r\n                return;\r\n            }\r\n            const statusHint = document.createElement('p');\r\n            statusHint.innerText = loadingMessage;\r\n            target.append(statusHint);\r\n\r\n            const formData = new FormData(target);\r\n            let body = Object.fromEntries(formData.entries());\r\n\r\n            if (target.closest('.popup-call')) {\r\n                body = {\r\n                    ...body,\r\n                    ..._calculator__WEBPACK_IMPORTED_MODULE_0__[\"orderData\"],\r\n                }\r\n            }\r\n\r\n            fetch(url, {\r\n                method: 'POST',\r\n                body: JSON.stringify(body),\r\n                headers: {\r\n                    'Content-Type': 'application/json',\r\n                },\r\n            })\r\n                .then((response) => {\r\n                    if (response.status !== 200) {\r\n                        throw new Error('request is not done');\r\n                    }\r\n                    statusHint.innerText = successMessage;\r\n                    target.querySelectorAll('input[type=text], input[type=email], input[type=tel]')\r\n                        .forEach(input => input.value = '');\r\n                })\r\n                .catch(exception => {\r\n                    console.error(exception);\r\n                    statusHint.innerText = errorMessage;\r\n                });\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/form-submit.js?");

/***/ }),

/***/ "./src/modules/input-validator.js":
/*!****************************************!*\
  !*** ./src/modules/input-validator.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst only = (input, pattern) => {\r\n    const text = input.value;\r\n    input.value = text.replace(pattern, '');\r\n};\r\n\r\nconst phoneInputIds = ['phone_2', 'phone_3'];\r\nconst namesInputIds = ['name_2'];\r\nconst numbersInputIds = ['meters-to-home'];\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(bodyListener) {\r\n    bodyListener.on('input', (ev) => {\r\n        const { target } = ev;\r\n        if (!target) {\r\n            return;\r\n        }\r\n\r\n        if (phoneInputIds.includes(target.id)) {\r\n            only(target, /[^+0-9]/);\r\n        }\r\n        if (namesInputIds.includes(target.id)) {\r\n            only(target, /[^А-ЯЁа-яё ]/);\r\n        }\r\n        if (numbersInputIds.includes(target.id)) {\r\n            only(target, /[^0-9]/);\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/modules/input-validator.js?");

/***/ }),

/***/ "./src/modules/load-list.js":
/*!**********************************!*\
  !*** ./src/modules/load-list.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst loadItems = (target) => {\r\n    const container = target.closest('.row');\r\n    const hiddenElements = container.querySelectorAll('.hidden');\r\n    hiddenElements.forEach(hiddenElement =>\r\n        hiddenElement.classList.remove('hidden')\r\n    );\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(bodyListener) {\r\n\r\n    bodyListener.on('click', (ev) => {\r\n        const { target } = ev;\r\n        if (!target) {\r\n            return;\r\n        }\r\n\r\n        if (target.classList.contains('add-sentence-btn')) {\r\n            loadItems(target);\r\n            target.remove();\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/modules/load-list.js?");

/***/ }),

/***/ "./src/modules/modals.js":
/*!*******************************!*\
  !*** ./src/modules/modals.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst modals = [\n    {\n        modalSelector: '.popup-call',\n        openButtonsClassNames: ['call-btn'],\n        closeButtonsClassNames: ['popup-call', 'popup-close'],\n    },\n    {\n        modalSelector: '.popup-discount',\n        openButtonsClassNames: ['discount-btn'],\n        closeButtonsClassNames: ['popup-discount', 'popup-close'],\n    },\n    {\n        modalSelector: '.popup-check',\n        openButtonsClassNames: ['gauging-button'],\n        closeButtonsClassNames: ['popup-check', 'popup-close'],\n    },\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(bodyListener) {\n    modals.forEach(modalItem => {\n        const modal = document.querySelector(modalItem.modalSelector);\n\n        if (!modal) {\n            throw new Error('No modal class name');\n        }\n\n        const showModal = (needToShow) => {\n            modal.style.display = needToShow ? 'block' : 'none';\n        };\n\n        bodyListener.on('click', (ev) => {\n            const { target } = ev;\n            if (!target) {\n                return;\n            }\n\n            for (const openButtonClassName of modalItem.openButtonsClassNames) {\n                if (target.classList.contains(openButtonClassName)) {\n                    ev.preventDefault(); // open popup is a link in html =((\n                    showModal(true);\n                    return;\n                }\n            }\n\n            for (const closeButtonClassName of modalItem.closeButtonsClassNames) {\n                if (target.classList.contains(closeButtonClassName)) {\n                    showModal(false);\n                }\n            }\n        });\n    });\n});\n\n\n//# sourceURL=webpack:///./src/modules/modals.js?");

/***/ })

/******/ });