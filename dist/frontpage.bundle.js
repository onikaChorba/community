/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Front-page.js":
/*!***************************!*\
  !*** ./src/Front-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_Front_page_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/Front-page.scss */ \"./src/scss/Front-page.scss\");\n/* harmony import */ var _js_front_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/front-page.js */ \"./src/js/front-page.js\");\n/* harmony import */ var _js_front_page_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_front_page_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack://webpack_template/./src/Front-page.js?");

/***/ }),

/***/ "./src/js/front-page.js":
/*!******************************!*\
  !*** ./src/js/front-page.js ***!
  \******************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n  createObserver();\n});\ndocument.addEventListener('scroll', function () {\n  headerScroll();\n});\n\nfunction createObserver() {\n  const options = {\n    root: null,\n    rootMargin: '0px',\n    threshold: 1\n  };\n  const observer = new IntersectionObserver((entries, observer) => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        animateImgCircle();\n      }\n    });\n  }, options);\n  const target = document.querySelector('.image');\n  observer.observe(target);\n}\n\nfunction animateImgCircle() {\n  let images = document.querySelectorAll('.image');\n  let zeroTop = 0;\n  let zeroLeft = 0;\n  let zeroTransform = \"\";\n\n  for (let i = 0; i < images.length; i++) {\n    let currentElement = images[i];\n    let nextElement = images[i + 1];\n\n    if (i === 0) {\n      zeroTop = window.getComputedStyle(currentElement, null).getPropertyValue('top');\n      zeroLeft = window.getComputedStyle(currentElement, null).getPropertyValue('left');\n      zeroTransform = window.getComputedStyle(currentElement, null).getPropertyValue('transform');\n    }\n\n    if (nextElement) {\n      const {\n        top,\n        left,\n        transform\n      } = getProperties(nextElement);\n      currentElement.style.top = top;\n      currentElement.style.left = left;\n      currentElement.style.transform = transform;\n    } else {\n      currentElement.style.top = zeroTop;\n      currentElement.style.left = zeroLeft;\n      currentElement.style.transform = zeroTransform;\n    }\n  }\n}\n\nfunction getProperties(element) {\n  const top = window.getComputedStyle(element, null).getPropertyValue('top');\n  const left = window.getComputedStyle(element, null).getPropertyValue('left');\n  const transform = window.getComputedStyle(element, null).getPropertyValue('transform');\n  return {\n    top,\n    left,\n    transform\n  };\n} //header\n\n\nlet prevScrollpos = window.pageYOffset;\nlet headerDiv = document.querySelector(\"header\");\nlet headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;\n\nfunction headerScroll() {\n  let currentScrollPos = window.pageYOffset;\n\n  if (prevScrollpos > currentScrollPos || currentScrollPos < headerBottom) {\n    headerDiv.style.top = \"0\";\n  } else {\n    headerDiv.style.top = \"-100px\";\n  }\n\n  prevScrollpos = currentScrollPos;\n}\n\n//# sourceURL=webpack://webpack_template/./src/js/front-page.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/Front-page.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/Front-page.scss ***!
  \*********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/images/front-page/hero/hero-bakground.jpg */ \"./src/assets/images/front-page/hero/hero-bakground.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/images/front-page/hero/Line.png */ \"./src/assets/images/front-page/hero/Line.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/images/front-page/serve/background-img.png */ \"./src/assets/images/front-page/serve/background-img.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* GLOBAL STYLES */\\n* {\\n  font-family: \\\"Roboto Condensed\\\", sans-serif;\\n  font-size: 16px;\\n  margin: 0;\\n  padding: 0;\\n  top: 0;\\n  left: 0;\\n  outline: none;\\n  border: none;\\n  text-decoration: none;\\n  max-width: 100%;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\n.heading__1 {\\n  font-weight: 700;\\n  font-size: 64px;\\n  line-height: 82px;\\n  letter-spacing: -1%;\\n}\\n.heading__2 {\\n  font-weight: 700;\\n  font-size: 48px;\\n  line-height: 64px;\\n  letter-spacing: -1%;\\n}\\n.heading__3 {\\n  font-weight: 700;\\n  font-size: 40px;\\n  line-height: 56px;\\n  letter-spacing: -1%;\\n}\\n.heading__4 {\\n  font-weight: 700;\\n  font-size: 32px;\\n  line-height: 44px;\\n  letter-spacing: -1%;\\n}\\n.heading__5 {\\n  font-weight: 700;\\n  font-size: 24px;\\n  line-height: 28px;\\n  letter-spacing: -1%;\\n}\\n.heading__6 {\\n  font-weight: 700;\\n  font-size: 16px;\\n  line-height: 24px;\\n  letter-spacing: -1%;\\n}\\n\\n@media (max-width: 1300px) {\\n  .heading__1 {\\n    font-weight: 700;\\n    font-size: 44px;\\n    line-height: 52px;\\n  }\\n  .heading__2 {\\n    font-weight: 700;\\n    font-size: 28px;\\n    line-height: 32px;\\n  }\\n  .heading__3 {\\n    font-weight: 700;\\n    font-size: 20px;\\n    line-height: 30px;\\n  }\\n  .heading__4 {\\n    font-weight: 700;\\n    font-size: 24px;\\n    line-height: 24px;\\n  }\\n  .heading__5 {\\n    font-weight: 700;\\n    font-size: 22px;\\n    line-height: 27px;\\n    letter-spacing: -1%;\\n  }\\n  .heading__6 {\\n    font-weight: 700;\\n    font-size: 16px;\\n    line-height: 24px;\\n  }\\n  .button__text {\\n    font-size: 14px;\\n  }\\n}\\n@media (max-width: 450px) {\\n  * {\\n    font-size: 10px;\\n  }\\n  .heading__1 {\\n    font-weight: 700;\\n    font-size: 34px;\\n    line-height: 52px;\\n    letter-spacing: -1%;\\n  }\\n  .heading__2 {\\n    font-weight: 700;\\n    font-size: 18px;\\n    line-height: 34px;\\n    letter-spacing: -1%;\\n  }\\n  .heading__3 {\\n    font-weight: 700;\\n    font-size: 10px;\\n    line-height: 26px;\\n    letter-spacing: -1%;\\n  }\\n  .heading__4 {\\n    font-weight: 700;\\n    font-size: 8px;\\n    line-height: 14px;\\n    letter-spacing: -1%;\\n  }\\n  .button__text {\\n    font-size: 10px;\\n  }\\n}\\n/* GLOBAL MODULES */\\n.header {\\n  background: #0D0D0D;\\n  height: 80px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  top: 0;\\n  left: 0;\\n  position: fixed;\\n  width: 100%;\\n  -webkit-transition: top 0.2s ease-in-out;\\n  transition: top 0.2s ease-in-out;\\n  z-index: 1000;\\n}\\n@media only screen and (min-width: 768px) {\\n  .header {\\n    height: 80px;\\n  }\\n}\\n.header__nav-bars {\\n  width: 100%;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n}\\n\\n.out {\\n  -webkit-transform: translateY(-100%);\\n          transform: translateY(-100%);\\n}\\n\\n.header-container {\\n  width: 100%;\\n}\\n\\n.nav-bar {\\n  height: 100%;\\n  width: 100%;\\n}\\n.nav-bar__logo {\\n  max-width: 20%;\\n}\\n@media only screen and (min-width: 1024px) {\\n  .nav-bar__logo {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-align: center;\\n        -ms-flex-align: center;\\n            align-items: center;\\n    height: 100%;\\n    margin-right: 4.4%;\\n    width: 20.5%;\\n  }\\n}\\n.nav-bar__links {\\n  width: 30%;\\n  margin-left: 4.3%;\\n}\\n@media only screen and (min-width: 400px) {\\n  .nav-bar__links {\\n    width: 55%;\\n  }\\n}\\n.nav-bar__links a {\\n  margin-right: 48px;\\n}\\n.nav-bar__button {\\n  width: 26%;\\n}\\n@media only screen and (min-width: 1024px) {\\n  .nav-bar__button {\\n    width: 19.3%;\\n  }\\n}\\n\\n.logo {\\n  width: 20%;\\n  max-width: 132px;\\n}\\n\\n.link__a {\\n  font-weight: 400;\\n  font-size: 10px;\\n  line-height: 12px;\\n  text-align: right;\\n  text-transform: uppercase;\\n  color: #fff;\\n  opacity: 0.9;\\n}\\n@media only screen and (min-width: 768px) {\\n  .link__a {\\n    font-weight: 400;\\n    font-size: 14px;\\n    line-height: 16px;\\n  }\\n}\\n@media only screen and (min-width: 1024px) {\\n  .link__a {\\n    font-weight: 400;\\n    font-size: 16px;\\n    line-height: 19px;\\n  }\\n}\\n\\n.link__a:hover {\\n  color: #FFD2A4;\\n  -webkit-transition-duration: 2s;\\n          transition-duration: 2s;\\n}\\n\\n.active-link {\\n  color: #FFD2A4;\\n}\\n\\n.nav-bar__button {\\n  height: 36px;\\n  max-width: 30%;\\n}\\n@media only screen and (min-width: 768px) {\\n  .nav-bar__button {\\n    max-width: 14%;\\n    height: 56px;\\n  }\\n}\\n\\n.button {\\n  background: #FFD2A4;\\n  border-radius: 12px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  cursor: pointer;\\n  -webkit-transition-duration: 0.5s;\\n          transition-duration: 0.5s;\\n}\\n.button__text {\\n  font-weight: 400;\\n  font-size: 10px;\\n  line-height: 14px;\\n  text-transform: uppercase;\\n  color: #1C1D28;\\n  margin: 0 auto;\\n  text-align: center;\\n}\\n@media only screen and (min-width: 768px) {\\n  .button__text {\\n    font-weight: 400;\\n    font-size: 16px;\\n    line-height: 16px;\\n  }\\n}\\n\\n.button:hover {\\n  background: #F2C79B;\\n}\\n\\n.footer {\\n  background: #161722;\\n  height: -webkit-fit-content;\\n  height: -moz-fit-content;\\n  height: fit-content;\\n}\\n\\n.footer-content {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -ms-flex-wrap: wrap;\\n      flex-wrap: wrap;\\n  padding-top: 8%;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  padding-bottom: 8%;\\n}\\n@media only screen and (min-width: 1440px) {\\n  .footer-content {\\n    -ms-flex-wrap: nowrap;\\n        flex-wrap: nowrap;\\n    padding-top: 64px;\\n  }\\n}\\n.footer-content__contact {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  width: 30%;\\n  padding-right: 10%;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n}\\n.footer-content__link {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n}\\n@media only screen and (min-width: 400px) {\\n  .footer-content__link {\\n    padding-left: 7%;\\n    padding-right: 4%;\\n  }\\n}\\n@media only screen and (min-width: 1024px) {\\n  .footer-content__link {\\n    padding-left: 3%;\\n    padding-right: 2%;\\n  }\\n}\\n@media only screen and (min-width: 1440px) {\\n  .footer-content__connect {\\n    padding-right: 9%;\\n  }\\n}\\n\\n.contact {\\n  color: #fff;\\n  text-transform: uppercase;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  font-weight: 400;\\n  font-size: 12px;\\n  line-height: 14px;\\n}\\n.contact__logo {\\n  width: 70%;\\n  padding-bottom: 20px;\\n}\\n@media only screen and (min-width: 1440px) {\\n  .contact__logo {\\n    width: 140px;\\n  }\\n}\\n.contact__autor {\\n  font-weight: 400;\\n  font-size: 8px;\\n  line-height: 10px;\\n  padding-bottom: 15px;\\n  width: 250px;\\n}\\n@media only screen and (min-width: 1440px) {\\n  .contact__autor {\\n    padding-top: 31px;\\n    padding-bottom: 32px;\\n  }\\n}\\n\\n.contact-link {\\n  margin-bottom: 16px;\\n  font-weight: 400;\\n  font-size: 8px;\\n  line-height: 10px;\\n  width: 80px;\\n  color: #fff;\\n}\\n@media only screen and (min-width: 1440px) {\\n  .contact-link {\\n    font-weight: 400;\\n    font-size: 12px;\\n    line-height: 14px;\\n    width: 148px;\\n  }\\n}\\n\\n.footer-link__main {\\n  text-transform: uppercase;\\n  color: #fff;\\n  padding-bottom: 20px;\\n}\\n@media only screen and (min-width: 1440px) {\\n  .footer-link__main {\\n    font-weight: 400;\\n    font-size: 16px;\\n    line-height: 20px;\\n  }\\n}\\n\\n.second-link {\\n  color: #fff;\\n  font-weight: 400;\\n  font-size: 8px;\\n  line-height: 10px;\\n  text-transform: uppercase;\\n  opacity: 0.78;\\n  padding-bottom: 16px;\\n  width: 66px;\\n}\\n@media only screen and (min-width: 1440px) {\\n  .second-link {\\n    font-weight: 400;\\n    font-size: 12px;\\n    line-height: 14px;\\n    padding-bottom: 24px;\\n  }\\n}\\n\\n.connect__img {\\n  width: 120px;\\n}\\n.connect__img img {\\n  padding-right: 5px;\\n}\\n@media only screen and (min-width: 1440px) {\\n  .connect__img img {\\n    padding-right: 20px;\\n  }\\n}\\n\\n.footer-form {\\n  padding-top: 20px;\\n}\\n.footer-form__title {\\n  color: #fff;\\n  text-transform: uppercase;\\n  font-weight: 700;\\n  font-size: 15px;\\n  line-height: 18px;\\n  padding-bottom: 15px;\\n}\\n@media only screen and (min-width: 1440px) {\\n  .footer-form__title {\\n    font-weight: 700;\\n    font-size: 32px;\\n    line-height: 44px;\\n    width: 85.5%;\\n    padding-bottom: 32px;\\n  }\\n}\\n\\n.form {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  max-width: 511px;\\n  position: relative;\\n}\\n\\n.input-email {\\n  border: 1px solid #fff;\\n  border-radius: 12px;\\n  background: #161722;\\n  width: 50%;\\n  height: 37px;\\n}\\n@media only screen and (min-width: 400px) {\\n  .input-email {\\n    width: 100%;\\n    height: 47px;\\n  }\\n}\\n@media only screen and (min-width: 1024px) {\\n  .input-email {\\n    max-width: 511px;\\n    width: 100%;\\n    height: 63px;\\n  }\\n}\\n\\n.footer__button {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 50%;\\n  max-width: 30%;\\n  height: 40px;\\n  border-radius: 12px;\\n  text-transform: uppercase;\\n}\\n@media only screen and (min-width: 400px) {\\n  .footer__button {\\n    max-width: 70%;\\n    height: 50px;\\n    left: 65%;\\n  }\\n}\\n@media only screen and (min-width: 1024px) {\\n  .footer__button {\\n    max-width: 201px;\\n    width: 100%;\\n    height: 65px;\\n    left: 60.7%;\\n  }\\n}\\n\\n.input-email[value] {\\n  color: #fff;\\n  line-height: 24px;\\n  padding-left: 20px;\\n}\\n\\n/* FRONT PAGE */\\n.hero {\\n  padding-top: 80px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center;\\n  background-size: cover;\\n}\\n\\n.container-main {\\n  margin-left: 7.3%;\\n  margin-right: 7.3%;\\n}\\n\\n.main-title {\\n  color: #232536;\\n}\\n.main-title__pre-title {\\n  font-weight: 700;\\n  font-size: 10px;\\n  line-height: 12px;\\n  color: #fff;\\n  text-transform: uppercase;\\n  padding-top: 10.3%;\\n}\\n@media only screen and (min-width: 1024px) {\\n  .main-title__pre-title {\\n    font-weight: 700;\\n    font-size: 16px;\\n    line-height: 19px;\\n  }\\n}\\n.main-title__title {\\n  color: #fff;\\n  max-width: 80%;\\n  width: 100%;\\n  padding-top: 16px;\\n  padding-bottom: 32px;\\n  text-transform: uppercase;\\n  font-weight: 700;\\n  font-size: 18px;\\n  line-height: 24px;\\n  letter-spacing: -1%;\\n}\\n@media only screen and (min-width: 400px) {\\n  .main-title__title {\\n    font-weight: 700;\\n    font-size: 18px;\\n    line-height: 34px;\\n  }\\n}\\n@media only screen and (min-width: 1024px) {\\n  .main-title__title {\\n    font-weight: 700;\\n    font-size: 64px;\\n    line-height: 82px;\\n    max-width: 46.3%;\\n  }\\n}\\n.main-title__button {\\n  max-width: 30%;\\n  height: 36px;\\n}\\n@media only screen and (min-width: 768px) {\\n  .main-title__button {\\n    height: 56px;\\n  }\\n}\\n@media only screen and (min-width: 1024px) {\\n  .main-title__button {\\n    max-width: 16.7%;\\n    height: 64px;\\n  }\\n}\\n.main-title__list {\\n  padding-top: 8%;\\n  padding-bottom: 10.3%;\\n  color: #fff;\\n  max-width: 50%;\\n  font-weight: 400;\\n  font-size: 10px;\\n  line-height: 14px;\\n}\\n@media only screen and (min-width: 1024px) {\\n  .main-title__list {\\n    font-weight: 400;\\n    font-size: 16px;\\n    line-height: 24px;\\n    max-width: 20.5%;\\n    padding-top: 64px;\\n  }\\n}\\n.main-title__list li {\\n  padding-left: 12px;\\n  list-style-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n\\n.second-title {\\n  color: #161722;\\n  text-align: center;\\n}\\n.second-title__pre-title {\\n  font-weight: 400;\\n  font-size: 16px;\\n  line-height: 19px;\\n  text-transform: uppercase;\\n}\\n.second-title__title {\\n  text-transform: uppercase;\\n  max-width: 48%;\\n  padding-top: 16px;\\n  margin: 0 auto;\\n}\\n\\n.relevant-title {\\n  padding-top: 10.3%;\\n  margin: auto;\\n  display: block;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n}\\n\\n.relevant-blocks {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -ms-flex-wrap: wrap;\\n      flex-wrap: wrap;\\n  padding-top: 5%;\\n}\\n@media only screen and (min-width: 1024px) {\\n  .relevant-blocks {\\n    -ms-flex-wrap: nowrap;\\n        flex-wrap: nowrap;\\n  }\\n}\\n\\n.block-info {\\n  display: block;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  background: #FFF5EB;\\n  border-bottom: 16px solid #FFF5EB;\\n  max-width: 40%;\\n  width: -webkit-max-content;\\n  width: -moz-max-content;\\n  width: max-content;\\n  margin: 0 auto;\\n  margin-bottom: 20px;\\n  -webkit-transition-duration: 0.5s;\\n          transition-duration: 0.5s;\\n}\\n@media only screen and (min-width: 1024px) {\\n  .block-info {\\n    width: 100%;\\n    max-width: 32.1%;\\n    height: 100%;\\n  }\\n}\\n.block-info__icon {\\n  width: 48px;\\n  height: 48px;\\n  margin-top: 21%;\\n  margin-left: 19.5%;\\n  margin-bottom: 24px;\\n  background: #FFD2A4;\\n  border-radius: 50%;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n}\\n.block-info__icon img {\\n  width: 22px;\\n  height: 22px;\\n}\\n.block-info__title {\\n  text-transform: uppercase;\\n  margin-left: 19.5%;\\n  margin-bottom: 8px;\\n}\\n.block-info__text {\\n  line-height: 18px;\\n  margin-bottom: 21%;\\n  margin-left: 19.5%;\\n  max-width: 62%;\\n}\\n@media only screen and (min-width: 1440px) {\\n  .block-info__text {\\n    font-weight: 400;\\n    line-height: 24px;\\n  }\\n}\\n\\n.block-info:hover {\\n  border-bottom: 16px solid #FFD2A4;\\n}\\n\\n.compassion {\\n  padding-top: 10.3%;\\n  height: 550px;\\n}\\n@media only screen and (min-width: 400px) {\\n  .compassion {\\n    height: 700px;\\n  }\\n}\\n@media only screen and (min-width: 768px) {\\n  .compassion {\\n    height: 820px;\\n  }\\n}\\n.compassion__button {\\n  width: 16%;\\n  max-width: 100%;\\n  height: 64px;\\n}\\n\\n.second-title__title {\\n  font-weight: 700;\\n  font-size: 18px;\\n  line-height: 24px;\\n}\\n@media only screen and (min-width: 400px) {\\n  .second-title__title {\\n    font-weight: 700;\\n    font-size: 18px;\\n    line-height: 34px;\\n  }\\n}\\n@media only screen and (min-width: 1024px) {\\n  .second-title__title {\\n    font-weight: 700;\\n    font-size: 28px;\\n    line-height: 44px;\\n  }\\n}\\n@media only screen and (min-width: 768px) {\\n  .second-title__title {\\n    font-weight: 700;\\n    font-size: 48px;\\n    line-height: 64px;\\n  }\\n}\\n.second-title__text {\\n  max-width: 64.5%;\\n  margin: 0 auto;\\n  font-weight: 400;\\n  line-height: 24px;\\n  opacity: 0.78;\\n  padding-top: 32px;\\n  padding-bottom: 56px;\\n}\\n.second-title__button {\\n  margin: 0 auto;\\n  width: 30%;\\n  height: 40px;\\n}\\n@media only screen and (min-width: 768px) {\\n  .second-title__button {\\n    width: 16%;\\n    height: 64px;\\n  }\\n}\\n\\n.image {\\n  max-width: 22.3%;\\n  -webkit-transition: all 0.3s linear;\\n  transition: all 0.3s linear;\\n}\\n\\n.img-circle {\\n  margin-top: 48px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  position: relative;\\n  padding-bottom: 64px;\\n  height: 350px;\\n}\\n.img-circle__1 {\\n  position: absolute;\\n  top: -68px;\\n  left: 10%;\\n  -webkit-transform: scale(1);\\n          transform: scale(1);\\n}\\n.img-circle__2 {\\n  position: absolute;\\n  top: 5%;\\n  left: 38.5%;\\n  -webkit-transform: scale(1.3);\\n          transform: scale(1.3);\\n}\\n.img-circle__3 {\\n  position: absolute;\\n  top: -68px;\\n  left: 67.1%;\\n  -webkit-transform: scale(1);\\n          transform: scale(1);\\n}\\n\\n.selebrate-title {\\n  padding-top: 5%;\\n  padding-bottom: 10.3%;\\n}\\n.selebrate-title__text {\\n  padding-top: 16px;\\n  padding-bottom: 16px;\\n}\\n.selebrate-title__link {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n}\\n\\n.link__text {\\n  font-weight: 400;\\n  font-size: 14px;\\n  line-height: 16px;\\n  color: #161722;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  padding-right: 6px;\\n}\\n\\n.link__arrow img {\\n  width: 38px;\\n  height: 20px;\\n  margin-right: 6px;\\n  margin-top: 5px;\\n  color: #33343E;\\n}\\n\\n.benefits {\\n  background: #F5F2F0;\\n  height: -webkit-fit-content;\\n  height: -moz-fit-content;\\n  height: fit-content;\\n}\\n\\n.benefits-title {\\n  padding-top: 10.3%;\\n}\\n.benefits-title__title {\\n  padding-top: 20px;\\n  padding-bottom: 7%;\\n}\\n\\n.block-articles {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -ms-flex-wrap: wrap;\\n      flex-wrap: wrap;\\n  padding-bottom: 10.3%;\\n}\\n\\n.article {\\n  overflow: hidden;\\n  -webkit-transform: translateY(0);\\n          transform: translateY(0);\\n  margin: auto;\\n  margin-bottom: 5%;\\n}\\n.article__img {\\n  position: relative;\\n  width: 100%;\\n  height: 100%;\\n  z-index: 10;\\n  cursor: pointer;\\n}\\n.article__info {\\n  position: absolute;\\n  z-index: 1000;\\n  background: linear-gradient(184.38deg, #060606 2%, rgba(0, 0, 0, 0.02) 96.44%);\\n  -webkit-transform: translateY(110%);\\n          transform: translateY(110%);\\n  -webkit-transition: all 1.5s ease;\\n  transition: all 1.5s ease;\\n}\\n@media only screen and (min-width: 400px) {\\n  .article__info {\\n    -webkit-transform: translateY(100%);\\n            transform: translateY(100%);\\n  }\\n}\\n\\n.article:hover .article__info {\\n  -webkit-transform: translateY(0%);\\n          transform: translateY(0%);\\n}\\n\\n.info {\\n  text-align: left;\\n}\\n.info__heading {\\n  font-weight: 700;\\n  font-size: 24px;\\n  line-height: 28px;\\n  margin-top: 70px;\\n  margin-left: 5%;\\n  color: #fff;\\n  width: 80%;\\n}\\n.info__text {\\n  margin-top: 16px;\\n  line-height: 24px;\\n  font-weight: 400;\\n  color: #fff;\\n  margin-bottom: 32px;\\n  margin-left: 5%;\\n}\\n\\n.join {\\n  padding-top: 10.3%;\\n}\\n\\n.join-part {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -ms-flex-wrap: wrap;\\n      flex-wrap: wrap;\\n}\\n@media only screen and (min-width: 1440px) {\\n  .join-part {\\n    -ms-flex-wrap: nowrap;\\n        flex-wrap: nowrap;\\n  }\\n}\\n.join-part__calendar {\\n  position: relative;\\n  width: 80%;\\n  height: auto;\\n  margin: 0 auto;\\n}\\n@media only screen and (min-width: 768px) {\\n  .join-part__calendar {\\n    width: 60%;\\n  }\\n}\\n@media only screen and (min-width: 1024px) {\\n  .join-part__calendar {\\n    width: 50%;\\n  }\\n}\\n@media only screen and (min-width: 1440px) {\\n  .join-part__calendar {\\n    width: 34%;\\n    height: 512px;\\n    padding-top: 19px;\\n  }\\n}\\n.join-part__img {\\n  width: 80%;\\n  margin: 20px auto;\\n}\\n@media only screen and (min-width: 1440px) {\\n  .join-part__img {\\n    width: 66%;\\n  }\\n}\\n.join-part__link {\\n  text-align: right;\\n  padding-bottom: 10.3%;\\n}\\n@media only screen and (min-width: 1024px) {\\n  .join-part__link {\\n    padding-top: 48px;\\n  }\\n}\\n.join-part__link__link-text {\\n  font-family: \\\"Roboto Condensed\\\", sans-serif;\\n  font-weight: 400;\\n  font-size: 24px;\\n  line-height: 32px;\\n}\\n.join-part__link__link-arrow img {\\n  margin-left: 11px;\\n}\\n\\n.join-title__title {\\n  padding-top: 16px;\\n  padding-bottom: 7%;\\n}\\n\\n.calendar-box {\\n  background: #FFF5EB;\\n  height: 100%;\\n  width: 100%;\\n}\\n\\n.calendar-container {\\n  margin-left: 20%;\\n}\\n\\n.calendar {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n}\\n.calendar__pre-title {\\n  font-weight: 700;\\n  font-size: 10px;\\n  line-height: 12px;\\n  margin-top: 10%;\\n  letter-spacing: 8%;\\n  color: transparent;\\n  -webkit-background-clip: text;\\n          background-clip: text;\\n  background-image: linear-gradient(109.61deg, #A54E2B -53.83%, #DC9853 62.61%);\\n  text-transform: uppercase;\\n  width: 48%;\\n  margin-bottom: 3%;\\n}\\n@media only screen and (min-width: 400px) {\\n  .calendar__pre-title {\\n    font-weight: 700;\\n    font-size: 12px;\\n    line-height: 14px;\\n  }\\n}\\n.calendar__title {\\n  width: 59%;\\n  margin-bottom: 3%;\\n  font-weight: 700;\\n  font-size: 10px;\\n  line-height: 18px;\\n}\\n@media only screen and (min-width: 400px) {\\n  .calendar__title {\\n    font-weight: 700;\\n    font-size: 20px;\\n    line-height: 24px;\\n  }\\n}\\n@media only screen and (min-width: 1440px) {\\n  .calendar__title {\\n    font-weight: 700;\\n    font-size: 24px;\\n    line-height: 28px;\\n  }\\n}\\n.calendar__text {\\n  color: #161722;\\n  font-weight: 400;\\n  font-size: 10px;\\n  line-height: 12px;\\n  opacity: 0.78;\\n  width: 80%;\\n  margin-bottom: 3%;\\n}\\n@media only screen and (min-width: 400px) {\\n  .calendar__text {\\n    font-weight: 400;\\n    font-size: 16px;\\n    line-height: 24px;\\n    margin-bottom: 6%;\\n  }\\n}\\n.calendar__button {\\n  background: #161722;\\n  max-width: 44%;\\n  width: 100%;\\n  height: 64px;\\n  margin-bottom: 6%;\\n  -webkit-transition-duration: 0.5s;\\n          transition-duration: 0.5s;\\n}\\n.calendar__button-text {\\n  color: #FFD2A4;\\n}\\n\\n.calendar__button:hover {\\n  background: #161722;\\n}\\n\\n.date {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  padding-bottom: 6%;\\n}\\n.date__icon {\\n  width: 10px;\\n  padding-right: 16px;\\n}\\n@media only screen and (min-width: 400px) {\\n  .date__icon {\\n    width: 20px;\\n    height: 20px;\\n  }\\n}\\n.date__icon img {\\n  padding-bottom: 8px;\\n}\\n@media only screen and (min-width: 400px) {\\n  .date__icon img {\\n    padding-bottom: 16px;\\n  }\\n}\\n\\n.text__text {\\n  color: #161722;\\n  font-weight: 400;\\n  line-height: 12px;\\n  padding-bottom: 3%;\\n}\\n@media only screen and (min-width: 400px) {\\n  .text__text {\\n    line-height: 24px;\\n  }\\n}\\n\\n.number {\\n  color: #161722;\\n  position: absolute;\\n  top: 6%;\\n  right: 6%;\\n}\\n.number__date {\\n  font-weight: 700;\\n  font-size: 24px;\\n  line-height: 28px;\\n  letter-spacing: -1%;\\n  text-align: right;\\n}\\n.number__month {\\n  font-weight: 400;\\n  line-height: 19px;\\n  text-transform: uppercase;\\n  text-align: right;\\n}\\n\\n.serve {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") no-repeat center;\\n  background-size: cover;\\n  height: -webkit-fit-content;\\n  height: -moz-fit-content;\\n  height: fit-content;\\n  position: relative;\\n  display: block;\\n}\\n\\n.serve::after {\\n  content: \\\"\\\";\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  display: inline-block;\\n  top: 0;\\n  left: 0;\\n  background: transparent;\\n  background-image: linear-gradient(109.61deg, #CD5423 -53.83%, #FFD0A0 62.61%);\\n  -webkit-transform: matrix(-1, 0, 0, 1, 0, 0);\\n          transform: matrix(-1, 0, 0, 1, 0, 0);\\n  mix-blend-mode: soft-light;\\n  opacity: 0.8;\\n}\\n\\n.serve-container {\\n  padding-top: 10.3%;\\n  padding-bottom: 10.3%;\\n}\\n\\n.serve-form {\\n  background: #fff;\\n  width: 80%;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  margin: auto;\\n  z-index: 1000;\\n  position: relative;\\n  border-bottom: 16px solid #fff;\\n  -webkit-transition-duration: 0.5s;\\n          transition-duration: 0.5s;\\n}\\n@media only screen and (min-width: 400px) {\\n  .serve-form {\\n    width: 60%;\\n  }\\n}\\n@media only screen and (min-width: 768px) {\\n  .serve-form {\\n    height: 464px;\\n  }\\n}\\n\\n.serve-form:hover {\\n  border-bottom: 16px solid #FFD2A4;\\n}\\n\\n.box-content {\\n  margin-left: 48px;\\n  color: #161722;\\n}\\n.box-content__title {\\n  padding-top: 10%;\\n  font-weight: 700;\\n  font-size: 18px;\\n  line-height: 22px;\\n  max-width: 52%;\\n  text-transform: uppercase;\\n}\\n@media only screen and (min-width: 768px) {\\n  .box-content__title {\\n    font-weight: 700;\\n    font-size: 26px;\\n    line-height: 30px;\\n  }\\n}\\n@media only screen and (min-width: 1024px) {\\n  .box-content__title {\\n    font-weight: 700;\\n    font-size: 48px;\\n    line-height: 64px;\\n  }\\n}\\n.box-content__text {\\n  width: 60%;\\n  font-weight: 400;\\n  line-height: 18px;\\n  opacity: 0.78;\\n  padding-top: 16px;\\n  padding-bottom: 16px;\\n}\\n@media only screen and (min-width: 768px) {\\n  .box-content__text {\\n    width: 40%;\\n    font-weight: 400;\\n    font-size: 16px;\\n    line-height: 24px;\\n  }\\n}\\n.box-content__button {\\n  width: 100%;\\n  max-width: 100px;\\n  height: 36px;\\n  margin-bottom: 6%;\\n}\\n@media only screen and (min-width: 768px) {\\n  .box-content__button {\\n    width: 100%;\\n    max-width: 162px;\\n    height: 64px;\\n  }\\n}\\n\\n.box-form__quotes {\\n  max-width: 24.2%;\\n  width: 100%;\\n  position: absolute;\\n  right: 6.3%;\\n  top: 22.1%;\\n  bottom: 22.1%;\\n  left: 69.4%;\\n}\\n\\n.blog-title__pre-title {\\n  padding-top: 10.3%;\\n}\\n.blog-title__title {\\n  padding-bottom: 64px;\\n}\\n\\n.blog-calendar {\\n  width: 80%;\\n  height: -webkit-fit-content;\\n  height: -moz-fit-content;\\n  height: fit-content;\\n  border-bottom: 16px solid #FFF5EB;\\n  margin-right: 24px;\\n  margin: 2% auto;\\n}\\n@media only screen and (min-width: 400px) {\\n  .blog-calendar {\\n    width: 45%;\\n  }\\n}\\n@media only screen and (min-width: 1024px) {\\n  .blog-calendar {\\n    width: 23.6%;\\n    height: 351px;\\n  }\\n}\\n\\n.blog-calendar:hover {\\n  border-bottom: 16px solid #FFD2A4;\\n  -webkit-transition-duration: 3s;\\n          transition-duration: 3s;\\n}\\n\\n.blog-container {\\n  margin-left: 32px;\\n}\\n.blog-container__pre-title {\\n  padding-top: 20px;\\n}\\n@media only screen and (min-width: 768px) {\\n  .blog-container__pre-title {\\n    padding-top: 48px;\\n  }\\n}\\n.blog-container__title {\\n  width: 72%;\\n}\\n.blog-container__text {\\n  width: 79%;\\n}\\n\\n.text__text {\\n  width: 100%;\\n}\\n\\n.blog__text {\\n  padding-bottom: 0px;\\n}\\n\\n.blog-boxs {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -ms-flex-wrap: wrap;\\n      flex-wrap: wrap;\\n  padding-bottom: 10.3%;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack_template/./src/scss/Front-page.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack_template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack_template/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack_template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/Front-page.scss":
/*!**********************************!*\
  !*** ./src/scss/Front-page.scss ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Front_page_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./Front-page.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/Front-page.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Front_page_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Front_page_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Front_page_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Front_page_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Front_page_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./Front-page.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/Front-page.scss\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Front_page_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./Front-page.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/Front-page.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Front_page_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Front_page_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Front_page_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Front_page_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Front_page_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Front_page_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Front_page_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Front_page_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack_template/./src/scss/Front-page.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/images/front-page/hero/Line.png":
/*!****************************************************!*\
  !*** ./src/assets/images/front-page/hero/Line.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"972be79c325e57fb6bbd.png\";\n\n//# sourceURL=webpack://webpack_template/./src/assets/images/front-page/hero/Line.png?");

/***/ }),

/***/ "./src/assets/images/front-page/hero/hero-bakground.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/images/front-page/hero/hero-bakground.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1fdec26cd1e6a226e406.jpg\";\n\n//# sourceURL=webpack://webpack_template/./src/assets/images/front-page/hero/hero-bakground.jpg?");

/***/ }),

/***/ "./src/assets/images/front-page/serve/background-img.png":
/*!***************************************************************!*\
  !*** ./src/assets/images/front-page/serve/background-img.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0cd8c8ba06380bcc28cb.png\";\n\n//# sourceURL=webpack://webpack_template/./src/assets/images/front-page/serve/background-img.png?");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("frontpage." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("37f34fc4fda3e6cd9270")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "webpack_template:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"frontpage": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatewebpack_template"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Front-page.js");
/******/ 	
/******/ })()
;