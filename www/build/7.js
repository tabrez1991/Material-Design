webpackJsonp([7],{

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(681);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams, settings) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settings = settings;
        this.rootPage = 'TabsPage';
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
    }
    MenuPage.prototype.chooseTheme = function (event) {
        switch (event.toElement.attributes.color.value) {
            case 'Red':
                this.settings.setActiveTheme('red-theme');
                break;
            case 'Pink':
                this.settings.setActiveTheme('pink-theme');
                break;
            case 'Purple':
                this.settings.setActiveTheme('purple-theme');
                break;
            case 'DeepPurple':
                this.settings.setActiveTheme('deeppurple-theme');
                break;
            case 'Indigo':
                this.settings.setActiveTheme('indigo-theme');
                break;
            case 'Blue':
                this.settings.setActiveTheme('blue-theme');
                break;
            case 'LightBlue':
                this.settings.setActiveTheme('lightblue-theme');
                break;
            case 'Cyan':
                this.settings.setActiveTheme('cyan-theme');
                break;
            case 'Teal':
                this.settings.setActiveTheme('teal-theme');
                break;
            case 'Green':
                this.settings.setActiveTheme('green-theme');
                break;
            case 'LightGreen':
                this.settings.setActiveTheme('lightgreen-theme');
                break;
            case 'Lime':
                this.settings.setActiveTheme('lime-theme');
                break;
            case 'Yellow':
                this.settings.setActiveTheme('yellow-theme');
                break;
            case 'Amber':
                this.settings.setActiveTheme('amber-theme');
                break;
            case 'Orange':
                this.settings.setActiveTheme('orange-theme');
                break;
            case 'DeepOrange':
                this.settings.setActiveTheme('deeporange-theme');
                break;
            case 'Brown':
                this.settings.setActiveTheme('brown-theme');
                break;
            case 'Grey':
                this.settings.setActiveTheme('grey-theme');
                break;
            case 'BlueGrey':
                this.settings.setActiveTheme('bluegrey-theme');
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/tarvez/Desktop/MaterialDesign/src/pages/menu/menu.html"*/'<ion-menu [content]="content">\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Colors</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n      <ion-item menuClose (click)="chooseTheme($event)" id="red">\n        <ion-label color="Red">Red</ion-label>\n      </ion-item>\n      <ion-item menuClose (click)="chooseTheme($event)" id="pink">\n        <ion-label color="Pink">Pink</ion-label>\n      </ion-item>\n      <ion-item menuClose (click)="chooseTheme($event)" id="purple">\n        <ion-label color="Purple">Purple</ion-label>\n      </ion-item>\n      <ion-item menuClose (click)="chooseTheme($event)" id="deeppurple">\n        <ion-label color="DeepPurple">Deep Purple</ion-label>\n      </ion-item>\n      <ion-item menuClose (click)="chooseTheme($event)" id="indigo">\n        <ion-label color="Indigo">Indigo</ion-label>\n      </ion-item>\n      <ion-item menuClose (click)="chooseTheme($event)" id="blue">\n        <ion-label color="Blue">Blue</ion-label>\n      </ion-item>\n      <ion-item menuClose (click)="chooseTheme($event)" id="lightblue">\n        <ion-label color="LightBlue">Light Blue</ion-label>\n      </ion-item>\n      <ion-item menuClose (click)="chooseTheme($event)" id="cyan">\n        <ion-label color="Cyan">Cyan</ion-label>\n      </ion-item>\n      <ion-item menuClose (click)="chooseTheme($event)" id="teal">\n        <ion-label color="Teal">Teal</ion-label>\n      </ion-item>\n      <ion-item menuClose (click)="chooseTheme($event)" id="green">\n        <ion-label color="Green">Green</ion-label>\n      </ion-item>\n      <ion-item menuClose (click)="chooseTheme($event)" id="lightgreen">\n        <ion-label color="LightGreen">Light Green</ion-label>\n      </ion-item>\n      <ion-item menuClose (click)="chooseTheme($event)" id="lime">\n        <ion-label color="Lime">Lime</ion-label>\n      </ion-item>\n      <ion-item menuClose (click)="chooseTheme($event)" id="yellow">\n        <ion-label color="Yellow">Yellow</ion-label>\n      </ion-item>\n      <ion-item menuClose (click)="chooseTheme($event)" id="amber">\n        <ion-label color="Amber">Amber</ion-label>\n      </ion-item>\n      <ion-item menuClose (click)="chooseTheme($event)" id="orange">\n        <ion-label color="Orange">Orange</ion-label>\n      </ion-item>\n      <ion-item menuClose (click)="chooseTheme($event)" id="deeporange">\n        <ion-label color="DeepOrange">Deep Orange</ion-label>\n      </ion-item>\n      <ion-item menuClose (click)="chooseTheme($event)" id="brown">\n        <ion-label color="Brown">Brown</ion-label>\n      </ion-item>\n      <ion-item menuClose (click)="chooseTheme($event)" id="grey">\n        <ion-label color="Grey">Grey</ion-label>\n      </ion-item>\n      <ion-item menuClose (click)="chooseTheme($event)" id="bluegrey">\n        <ion-label color="BlueGrey">Blue Grey</ion-label>\n      </ion-item>\n  </ion-list>\n</ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/tarvez/Desktop/MaterialDesign/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__["a" /* SettingsProvider */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=7.js.map