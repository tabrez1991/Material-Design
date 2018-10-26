webpackJsonp([2],{

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageModule", function() { return Tab5PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab5__ = __webpack_require__(685);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab5PageModule = /** @class */ (function () {
    function Tab5PageModule() {
    }
    Tab5PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab5__["a" /* Tab5Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab5__["a" /* Tab5Page */]),
            ],
        })
    ], Tab5PageModule);
    return Tab5PageModule;
}());

//# sourceMappingURL=tab5.module.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Tab5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tab5Page = /** @class */ (function () {
    function Tab5Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Tab5Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tab5Page');
    };
    Tab5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab5',template:/*ion-inline-start:"/Users/tarvez/Desktop/MaterialDesign/src/pages/tab5/tab5.html"*/'\n<ion-header>\n\n  <ion-navbar class="ttttt">\n      <ion-buttons start>\n          <button ion-button menuToggle>\n            <ion-icon name="menu" color="light"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>Tab 5</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="row t5section1">\n    <div class="col">\n        <ion-card>\n            <div class="ccontent">\n            <ion-card-header>\n              Header\n            </ion-card-header>\n            <ion-card-content text-center>\n                <img src="assets/imgs/logo.png" />\n                This is materialized app in ionic. You can select many theme form the menu bar and on click it apply the whole application you choose which color you want for your applicaiton.\n            </ion-card-content>\n          </div>\n          </ion-card>\n      <ion-fab right bottom>\n        <button ion-fab class="fabss"><ion-icon name="md-add"></ion-icon></button>\n      </ion-fab>\n    </div>\n  </div>\n  <div class="row t5section3">\n    <div class="col" >\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/tarvez/Desktop/MaterialDesign/src/pages/tab5/tab5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Tab5Page);
    return Tab5Page;
}());

//# sourceMappingURL=tab5.js.map

/***/ })

});
//# sourceMappingURL=2.js.map