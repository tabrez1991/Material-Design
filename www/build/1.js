webpackJsonp([1],{

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab6PageModule", function() { return Tab6PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab6__ = __webpack_require__(688);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab6PageModule = /** @class */ (function () {
    function Tab6PageModule() {
    }
    Tab6PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab6__["a" /* Tab6Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab6__["a" /* Tab6Page */]),
            ],
        })
    ], Tab6PageModule);
    return Tab6PageModule;
}());

//# sourceMappingURL=tab6.module.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab6Page; });
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


var Tab6Page = /** @class */ (function () {
    function Tab6Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = {
            itemName: 'First item in the list',
            checked: false
        };
    }
    Tab6Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tab6Page');
    };
    Tab6Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab6',template:/*ion-inline-start:"/Users/tarvez/Desktop/MaterialDesign/src/pages/tab6/tab6.html"*/'\n<ion-header>\n\n  <ion-navbar class="toolbar-background">\n      <ion-buttons start>\n          <button ion-button menuToggle>\n            <ion-icon name="menu" color="light"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title class="title">Tab 6</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="sectionfull">\n  <ion-item class="t6item1">\n    <ion-label class="t6label">One</ion-label>\n    <ion-checkbox checked="false"></ion-checkbox>\n  </ion-item>\n  <ion-item class="t6item2">\n    <ion-label class="t6label">Two</ion-label>\n    <ion-checkbox checked="true"></ion-checkbox>\n  </ion-item>\n  <ion-item class="t6item3">\n    <ion-label class="t6label">Three</ion-label>\n    <ion-checkbox checked="false"></ion-checkbox>\n  </ion-item>\n  <ion-item class="t6item4">\n    <ion-label class="t6label">Four</ion-label>\n    <ion-checkbox checked="false"></ion-checkbox>\n  </ion-item>\n  <ion-item class="t6item5">\n    <ion-label class="t6label">Five</ion-label>\n    <ion-checkbox checked="false"></ion-checkbox>\n  </ion-item>\n  <ion-item class="t6item6" no-lines>\n    <ion-fab right top>\n      <button ion-fab class="fabss"><ion-icon name="md-add"></ion-icon></button>\n    </ion-fab>\n  </ion-item>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/tarvez/Desktop/MaterialDesign/src/pages/tab6/tab6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Tab6Page);
    return Tab6Page;
}());

//# sourceMappingURL=tab6.js.map

/***/ })

});
//# sourceMappingURL=1.js.map