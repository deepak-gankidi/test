(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/404/404.component.html":
/*!****************************************!*\
  !*** ./src/app/404/404.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 i18n=\"@@notFoundTitle\">\r\n    Not found 404\r\n  </h1>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/404/404.component.scss":
/*!****************************************!*\
  !*** ./src/app/404/404.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  text-align: center;\n  min-height: calc(100vh - 20px); }\n"

/***/ }),

/***/ "./src/app/404/404.component.ts":
/*!**************************************!*\
  !*** ./src/app/404/404.component.ts ***!
  \**************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-404',
            template: __webpack_require__(/*! ./404.component.html */ "./src/app/404/404.component.html"),
            styles: [__webpack_require__(/*! ./404.component.scss */ "./src/app/404/404.component.scss")]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container autosize>\r\n\r\n  <!-- top bar -->\r\n  <mat-toolbar class=\"toolbar\">\r\n    <i (click)=\"drawer.toggle()\" class=\"icon ion-md-menu menu-icon\"></i>\r\n    <span i18n=\"@@toolbar-title\" class=\"title\">My Application</span>\r\n    <span class=\"spacer\"></span>\r\n\r\n    <mat-list-item *ngFor=\"let locale of locales\">\r\n      <a class=\"lang-option\" [href]=\"'/' + locale.code + currentUrl\">{{ locale.text }}</a>\r\n    </mat-list-item>\r\n  </mat-toolbar>\r\n\r\n  <!-- sidemenu -->\r\n  <mat-drawer #drawer class=\"sidenav\" mode=\"side\">\r\n    <mat-list class=\"sidenav-list\">\r\n      <mat-list-item class=\"sidenav-list-item\">\r\n        <a i18n=\"@@tutorial-button\" [routerLink]=\"['/']\">Tutorials</a>\r\n      </mat-list-item>\r\n      <mat-list-item>\r\n        <a i18n=\"@@template-button\" [routerLink]=\"['/templates']\">Templates</a>\r\n      </mat-list-item>\r\n    </mat-list>\r\n  </mat-drawer>\r\n\r\n  <router-outlet></router-outlet>\r\n</mat-drawer-container>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\n  background-color: #ddd; }\n  .sidenav .sidenav-list {\n    margin-top: 60px;\n    color: #FFF; }\n  .sidenav .sidenav-list .sidenav-list-item {\n      color: #FFF; }\n  .toolbar {\n  background-color: #DD0031; }\n  .toolbar .menu-icon {\n    margin-right: 20px;\n    color: #FFF; }\n  .toolbar .title {\n    color: #FFF; }\n  .toolbar .spacer {\n    flex: 1 1 auto; }\n  .toolbar .lang-title {\n    color: #FFF;\n    font-size: 16px; }\n  .toolbar .lang-option {\n    color: #FFF;\n    margin-right: 15px;\n    font-size: 16px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _locales_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locales.values */ "./src/app/locales.values.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AppComponent = /** @class */ (function () {
    function AppComponent(locale, router) {
        this.locale = locale;
        this.router = router;
        this.locales = [];
        this.currentUrl = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locales = _locales_values__WEBPACK_IMPORTED_MODULE_2__["locales"];
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function (event) {
            _this.currentUrl = _this.router.url;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])),
        __metadata("design:paramtypes", [String, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nguniversal/common */ "./node_modules/@nguniversal/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _404_404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./404/404.component */ "./src/app/404/404.component.ts");
/* harmony import */ var _templates_templates_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/templates.component */ "./src/app/templates/templates.component.ts");
/* harmony import */ var _tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tutorials/tutorials.component */ "./src/app/tutorials/tutorials.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_7__["TutorialsComponent"],
                _templates_templates_component__WEBPACK_IMPORTED_MODULE_6__["TemplatesComponent"],
                _404_404_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'my-app' }),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: '', component: _tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_7__["TutorialsComponent"] },
                    { path: 'templates', component: _templates_templates_component__WEBPACK_IMPORTED_MODULE_6__["TemplatesComponent"] },
                    { path: '**', component: _404_404_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
                ]),
                _nguniversal_common__WEBPACK_IMPORTED_MODULE_3__["TransferHttpCacheModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/locales.values.ts":
/*!***********************************!*\
  !*** ./src/app/locales.values.ts ***!
  \***********************************/
/*! exports provided: locales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
var locales = [
    {
        code: 'en',
        text: 'English',
    },
    {
        code: 'es',
        text: 'Español',
    }
];


/***/ }),

/***/ "./src/app/templates/templates.component.html":
/*!****************************************************!*\
  !*** ./src/app/templates/templates.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"title\">\r\n    <h1 i18n=\"@@templatesTitle\">\r\n      Templates\r\n    </h1>\r\n  </div>\r\n  <div class=\"paragraphs\">\r\n    <p i18n=\"@@FirstParagraphTemplates\">\r\n      <b><a href=\"https://angular-templates.io/product/angular-site-template\" target=\"_blank\">Angular 6 Site Template</a></b>: Reuse the beautiful, responsive and flexible\r\n      custom components we built for this Angular 6 Template. With Bootstrap 4,\r\n      Angular Universal (Server Side Rendering), SEO, Lazy Loading and a detailed\r\n      documentation on how to get started building Angular apps. Tons of use cases\r\n      implemented the Angular way such as authentication flows, product listing,\r\n      filtering, forms, routing guards and more.\r\n    </p>\r\n    <p i18n=\"@@SecondParagraphTemplates\">\r\n      <b><a href=\"https://angular-templates.io/product/angular-admin-template\" target=\"_blank\">Angular Admin Template</a></b>: Created with performance and ease of\r\n      development in mind, this Angular 5 web template is something you will love.\r\n      It includes all the components that you might need inside a project and a\r\n      detailed documentation on how to get started.\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/templates/templates.component.scss":
/*!****************************************************!*\
  !*** ./src/app/templates/templates.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  text-align: center;\n  margin-top: 30px; }\n\n.paragraphs {\n  margin-left: 20px;\n  margin-top: 30px;\n  margin-right: 20px; }\n\n.container {\n  min-height: calc(100vh - 20px); }\n"

/***/ }),

/***/ "./src/app/templates/templates.component.ts":
/*!**************************************************!*\
  !*** ./src/app/templates/templates.component.ts ***!
  \**************************************************/
/*! exports provided: TemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesComponent", function() { return TemplatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TemplatesComponent = /** @class */ (function () {
    function TemplatesComponent() {
    }
    TemplatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-templates',
            template: __webpack_require__(/*! ./templates.component.html */ "./src/app/templates/templates.component.html"),
            styles: [__webpack_require__(/*! ./templates.component.scss */ "./src/app/templates/templates.component.scss")]
        })
    ], TemplatesComponent);
    return TemplatesComponent;
}());



/***/ }),

/***/ "./src/app/tutorials/tutorials.component.html":
/*!****************************************************!*\
  !*** ./src/app/tutorials/tutorials.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"title\">\r\n    <h1 i18n=\"@@homeTitle\">\r\n      Tutorials\r\n    </h1>\r\n  </div>\r\n  <div class=\"paragraphs\">\r\n    <p i18n=\"@@FirstParagraphTutorials\">\r\n      <b><a href=\"https://angular-templates.io/tutorials/about/firebase-authentication-with-angular\" target=\"_blank\">Firebase Authentication with Angular</a></b>: When developing web applications, any\r\n      type of authentication feature is necessary. If you think of the many social\r\n      platforms and email sign in options available, authentication looks like a\r\n      very complex task. In this Angular 5 tutorial we will explore how to setup\r\n      an email/password as well as social login authentication workflows for\r\n      Angular 5 apps using AngularFire2 library.\r\n    </p>\r\n    <p i18n=\"@@SecondParagraphTutorials\">\r\n      <b><a href=\"https://angular-templates.io/tutorials/about/learn-angular-from-scratch-step-by-step\" target=\"_blank\">Learn Angular from scratch step by step</a></b>: Angular step by step tutorial\r\n      covering from basic concepts of Angular Framework to building a complete\r\n      Angular 5 app using Angular Material components. We will go through the main\r\n      building blocks of an Angular application as well as the best practices for\r\n      building a complete app with Angular. Also, this tutorial shows how to setup\r\n      your development environment and workflow so you can start developing Angular\r\n      apps right away.\r\n    </p>\r\n    <p i18n=\"@@ThirdParagraphTutorials\">\r\n      <b><a href=\"https://angular-templates.io/tutorials/about/angular-forms-and-validations\" target=\"_blank\">Angular 5 Forms and Validations</a></b>: We created this angular forms\r\n      tutorial to help you learn everything about Angular forms validations in\r\n      angular 5 apps. These angular forms examples are updated using the best\r\n      (coding) practices to build Angular 5 apps with Material Design.\r\n    </p>\r\n    <p i18n=\"@@FourthParagraphTutorials\">\r\n      <b><a href=\"https://angular-templates.io/tutorials/about/learn-how-to-build-a-mean-stack-application\" target=\"_blank\">Learn how to build a MEAN stack application in this Angular tutorial</a></b>:\r\n      The goal of this Angular tutorial is to guide you through the coding of a\r\n      full-stack JavaScript example application project and connecting a backend\r\n      API to an Angular 5 front-end application employing the MEAN stack. By the\r\n      end of this Angular advanced tutorial, you will learn about the MEAN stack\r\n      from scratch, including how to build a RESTful API with Loopback and using\r\n      it to perform CRUD operations on a MongoDB database through an Angular\r\n      frontend.\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tutorials/tutorials.component.scss":
/*!****************************************************!*\
  !*** ./src/app/tutorials/tutorials.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  text-align: center;\n  margin-top: 30px; }\n\n.paragraphs {\n  margin-left: 20px;\n  margin-top: 30px;\n  margin-right: 20px; }\n\n.container {\n  min-height: calc(100vh - 20px); }\n"

/***/ }),

/***/ "./src/app/tutorials/tutorials.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tutorials/tutorials.component.ts ***!
  \**************************************************/
/*! exports provided: TutorialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialsComponent", function() { return TutorialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TutorialsComponent = /** @class */ (function () {
    function TutorialsComponent() {
    }
    TutorialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./tutorials.component.html */ "./src/app/tutorials/tutorials.component.html"),
            styles: [__webpack_require__(/*! ./tutorials.component.scss */ "./src/app/tutorials/tutorials.component.scss")]
        })
    ], TutorialsComponent);
    return TutorialsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\users\dgankidi\workspace\deepak-test\angular6-i18n-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map