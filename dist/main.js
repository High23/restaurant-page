/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clear.js":
/*!**********************!*\
  !*** ./src/clear.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearContent)\n/* harmony export */ });\nfunction clearContent() {\n    const container = document.querySelector('.container');\n    while (container.firstChild){\n        container.removeChild(container.firstChild);\n    };\n}\n\n//# sourceURL=webpack://restaurant-page/./src/clear.js?");

/***/ }),

/***/ "./src/contactTab.js":
/*!***************************!*\
  !*** ./src/contactTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addContactTabContent)\n/* harmony export */ });\nfunction addContactTabContent() {\n    const container = document.querySelector('.container');\n    const span = document.createElement('span');\n    const ul = document.createElement('ul');\n    const li = document.createElement('li');\n\n    container.classList.remove('menu-grid');\n    container.classList.add('contact');\n    span.textContent = 'Contact Us';\n    for (let i = 0; i < 2; i++){\n        const li = document.createElement('li');\n        ul.appendChild(li);\n    }\n    container.appendChild(span);\n    container.appendChild(ul);\n    const contactInfo = document.querySelectorAll('.contact > ul > li');\n    contactInfo[0].textContent = 'Phone Number: 555-555-5555';\n    contactInfo[1].textContent = 'Email: Restaurant123@email.com';\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contactTab.js?");

/***/ }),

/***/ "./src/createLayout.js":
/*!*****************************!*\
  !*** ./src/createLayout.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPageLayout)\n/* harmony export */ });\n\nfunction createPageLayout() {\n    const content = document.getElementById('content');\n    const header = document.createElement('div');\n    const ul = document.createElement('ul');\n    const body = document.createElement('div');\n    const container = document.createElement('div'); \n    const footer = document.createElement('footer');\n    const span = document.createElement('span');\n    const a = document.createElement('a');\n\n\n    header.classList.add('header');\n    body.classList.add('body');\n    container.classList.add('container');\n\n    content.appendChild(header);\n    for (let i = 0; i < 3; i++){\n        const li = document.createElement('li');\n        ul.appendChild(li);\n    }\n    header.appendChild(ul);\n    const listItems = document.getElementsByTagName('li');\n    listItems[0].textContent = 'Home'\n    listItems[1].textContent = 'Menu'\n    listItems[2].textContent = 'Contact'\n\n    content.appendChild(body);\n    body.appendChild(container);\n\n\n    content.appendChild(footer);\n    a.setAttribute('href', 'https://www.freepik.com/free-vector/blackboard-food-background_3773051.htm#query=food&position=47&from_view=keyword&track=sph')\n    a.textContent = 'Freepik'\n    span.textContent = 'Background image by ' \n    span.appendChild(a);\n    footer.appendChild(span);\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/createLayout.js?");

/***/ }),

/***/ "./src/homeTab.js":
/*!************************!*\
  !*** ./src/homeTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addHomeTabContent)\n/* harmony export */ });\nfunction addHomeTabContent() {\n    const container = document.querySelector('.container');\n    const description = document.createElement('div');\n    const openHours = document.createElement('div');\n    const location = document.createElement('div');\n    const span = document.createElement('span');\n    const h1 = document.createElement('h1');\n    const about = document.createElement('h2');\n    const openHoursH2 = document.createElement('h2');\n    const locationH2 = document.createElement('h2');\n    const ul = document.createElement('ul');\n    const p = document.createElement('p');\n    \n    container.classList.remove('menu-grid');\n    container.classList.remove('contact');\n\n    h1.textContent = 'Restaurant 123';\n    container.appendChild(h1);\n\n    description.classList.add('description');\n    about.textContent = 'About'\n    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum orci ac semper suscipit. Donec vel elementum sem, nec facilisis risus. Fusce pretium ante non libero eleifend pulvinar. Cras laoreet eu urna laoreet hendrerit. Quisque efficitur dictum orci, sed placerat enim hendrerit sed. Integer vel finibus diam. Nulla fringilla justo quam, vel sollicitudin nulla faucibus vel. Nullam id nunc turpis. Vivamus lobortis velit lacinia magna volutpat pulvinar.';\n    description.appendChild(about);\n    description.appendChild(p);\n    container.appendChild(description);\n\n    openHours.classList.add('open-hours');\n    openHoursH2.textContent = 'Open Hours'\n    for (let i = 0; i < 7; i++){\n        const li = document.createElement('li');\n        ul.appendChild(li);\n    }\n    openHours.appendChild(openHoursH2)\n    openHours.appendChild(ul);\n    container.appendChild(openHours);\n    const hoursList = document.querySelectorAll('.open-hours > ul > li');\n    hoursList[0].textContent = 'Sunday: 10am - 9pm'\n    hoursList[1].textContent = 'Monday: 11am - 10pm'\n    hoursList[2].textContent = 'Tuesday: 11am - 10pm'\n    hoursList[3].textContent = 'Wednesday: 11am - 10pm'\n    hoursList[4].textContent = 'Thursday: 11am - 9pm'\n    hoursList[5].textContent = 'Friday: 11am - 11pm'\n    hoursList[6].textContent = 'Saturday: 11am - 11pm'\n    \n\n    location.classList.add('location');\n    locationH2.textContent = 'Location';\n    span.textContent = '123 Plae Grownd Stret';\n    location.appendChild(locationH2);\n    location.appendChild(span);\n    container.appendChild(location);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/homeTab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createLayout */ \"./src/createLayout.js\");\n/* harmony import */ var _homeTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeTab */ \"./src/homeTab.js\");\n/* harmony import */ var _contactTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactTab */ \"./src/contactTab.js\");\n/* harmony import */ var _menuTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuTab */ \"./src/menuTab.js\");\n/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clear */ \"./src/clear.js\");\n\n\n\n\n\n\n(0,_createLayout__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_homeTab__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst tabs = document.querySelectorAll('.header > ul > li');\n\nconst homeTab = tabs[0];\nconst menuTab = tabs[1];\nconst contactTab = tabs[2];\n\nhomeTab.addEventListener('click', _clear__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nhomeTab.addEventListener('click', _homeTab__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nmenuTab.addEventListener('click', _clear__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nmenuTab.addEventListener('click', _menuTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\ncontactTab.addEventListener('click', _clear__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\ncontactTab.addEventListener('click', _contactTab__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menuTab.js":
/*!************************!*\
  !*** ./src/menuTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addMenuTabContent)\n/* harmony export */ });\nfunction addMenuTabContent() {\n    const container = document.querySelector('.container');\n\n    container.classList.remove('contact');\n    container.classList.add('menu-grid');\n    for (let i = 0; i < 9; i++) {\n        const div = document.createElement('div');\n        div.classList.add('food');\n\n        const img = document.createElement('img');\n        img.setAttribute('alt', 'Image of food')\n\n        const span = document.createElement('span');\n        span.textContent = `Food ${i + 1}`;\n\n        div.appendChild(img);\n        div.appendChild(span);\n        container.appendChild(div);\n    }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menuTab.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;