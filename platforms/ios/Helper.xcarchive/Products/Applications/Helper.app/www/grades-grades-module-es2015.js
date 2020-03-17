(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grades-grades-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/grades/grades.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grades/grades.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            Grades\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\">\n        <ion-refresher-content\n                pullingIcon=\"arrow-down\"\n                pullingText=\"Refresh\"\n                refreshingSpinner=\"circular\"\n                refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ul class=\"gradesUL\" id=\"rows\">\n    </ul>\n    <a (click)=\"signOut()\" class=\"currentUser\" id=\"currentUserGR\">\n        <b>Sign Out: 06########</b>\n    </a>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/grades/grades-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/grades/grades-routing.module.ts ***!
  \*************************************************/
/*! exports provided: GradesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesPageRoutingModule", function() { return GradesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _grades_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grades.page */ "./src/app/grades/grades.page.ts");




const routes = [
    {
        path: '',
        component: _grades_page__WEBPACK_IMPORTED_MODULE_3__["GradesPage"]
    }
];
let GradesPageRoutingModule = class GradesPageRoutingModule {
};
GradesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GradesPageRoutingModule);



/***/ }),

/***/ "./src/app/grades/grades.module.ts":
/*!*****************************************!*\
  !*** ./src/app/grades/grades.module.ts ***!
  \*****************************************/
/*! exports provided: GradesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesPageModule", function() { return GradesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _grades_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grades-routing.module */ "./src/app/grades/grades-routing.module.ts");
/* harmony import */ var _grades_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grades.page */ "./src/app/grades/grades.page.ts");







let GradesPageModule = class GradesPageModule {
};
GradesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _grades_routing_module__WEBPACK_IMPORTED_MODULE_5__["GradesPageRoutingModule"]
        ],
        declarations: [_grades_page__WEBPACK_IMPORTED_MODULE_6__["GradesPage"]]
    })
], GradesPageModule);



/***/ }),

/***/ "./src/app/grades/grades.page.scss":
/*!*****************************************!*\
  !*** ./src/app/grades/grades.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyYWRlcy9ncmFkZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/grades/grades.page.ts":
/*!***************************************!*\
  !*** ./src/app/grades/grades.page.ts ***!
  \***************************************/
/*! exports provided: GradesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesPage", function() { return GradesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
function fetchAsync(url) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        const response = yield fetch(url);
        return yield response.text();
    });
}
let GradesPage = class GradesPage {
    constructor(router, loadingController, navCtrl) {
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
    }
    doRefresh(event) {
        const rows = document.getElementById('rows');
        const rowChildren = rows.children;
        // @ts-ignore
        for (const child of rowChildren) {
            for (const innerChild of child.children) {
                innerChild.disabled = true;
            }
        }
        rows.classList.add('blur');
        this.getLogin().then(r => {
            const endpoint = `https://pinnacle-scraper.herokuapp.com/api?un=${r.un}&pw=${r.pw}`;
            fetchAsync(endpoint).then(data => {
                rows.classList.remove('blur');
                event.target.complete();
                rows.textContent = '';
                const jData = JSON.parse(data);
                for (const i of jData) {
                    if (i.Grade === '') {
                        this.addGrade(i.Course, '', JSON.stringify(i.Assignments));
                    }
                    else {
                        this.addGrade(i.Course, i.Grade + '%', JSON.stringify(i.Assignments));
                    }
                }
            });
        });
    }
    getLogin() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const ret = yield Storage.get({ key: 'login' });
            return JSON.parse(ret.value);
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
        });
    }
    selectColor(grade) {
        const g100 = '#5FB45F';
        const g98 = '#74D674';
        const g96 = '#89EE89';
        const g94 = '#A4F5A4';
        const g92 = '#C1FFC1';
        const g90 = '#D1FAD1';
        const g88 = '#FFFFCE';
        const g86 = '#F8F890';
        const g84 = '#F8F86A';
        const g82 = '#FDFD46';
        const g80 = '#FDFD03';
        const g78 = '#FCC273';
        const g76 = '#FDB34E';
        const g74 = '#DD932E';
        const g72 = '#BB7516';
        const g70 = '#9E5D04';
        const g00 = '#a52a2a';
        if (grade >= 100) {
            return g100;
        }
        if (grade >= 100) {
            return g100;
        }
        if (grade >= 98) {
            return g98;
        }
        if (grade >= 96) {
            return g96;
        }
        if (grade >= 94) {
            return g94;
        }
        if (grade >= 92) {
            return g92;
        }
        if (grade >= 90) {
            return g90;
        }
        if (grade >= 88) {
            return g88;
        }
        if (grade >= 86) {
            return g86;
        }
        if (grade >= 84) {
            return g84;
        }
        if (grade >= 82) {
            return g82;
        }
        if (grade >= 80) {
            return g80;
        }
        if (grade >= 78) {
            return g78;
        }
        if (grade >= 76) {
            return g76;
        }
        if (grade >= 74) {
            return g74;
        }
        if (grade >= 72) {
            return g72;
        }
        if (grade >= 70) {
            return g70;
        }
        if (grade < 70) {
            return g00;
        }
    }
    addGrade(name, grade, assignments) {
        const rows = document.getElementById('rows');
        const nameContainer = document.createElement('li');
        const n1 = document.createElement('h2');
        n1.textContent = name;
        nameContainer.append(n1);
        const gradeContainer = document.createElement('li');
        const g1 = document.createElement('button');
        g1.textContent = grade;
        const gNumber = parseInt(grade.replace('%', ''), 10);
        g1.style.backgroundColor = this.selectColor(gNumber);
        g1.onclick = () => {
            const navigationExtras = {
                state: {
                    jsonData: assignments,
                    title: name
                }
            };
            this.router.navigate(['/assignments'], navigationExtras);
        };
        gradeContainer.append(g1);
        rows.append(nameContainer);
        rows.append(gradeContainer);
    }
    setLogin(uun, upw) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield Storage.set({
                key: 'login',
                value: JSON.stringify({
                    un: uun,
                    pw: upw
                })
            });
        });
    }
    signOut() {
        this.setLogin('', '').then(r => this.router.navigateByUrl('/login'));
    }
    ngOnInit() {
        this.getLogin().then(r => document.getElementById('currentUserGR').innerHTML = `Sign Out: <b>${r.un}</b>`);
        this.presentLoading();
        this.getLogin().then(r => {
            const endpoint = `https://pinnacle-scraper.herokuapp.com/api?un=${r.un}&pw=${r.pw}`;
            fetchAsync(endpoint).then(data => {
                this.loadingController.dismiss();
                const jData = JSON.parse(data);
                for (const i of jData) {
                    if (i.Grade === '') {
                        this.addGrade(i.Course, '', JSON.stringify(i.Assignments));
                    }
                    else {
                        this.addGrade(i.Course, i.Grade + '%', JSON.stringify(i.Assignments));
                    }
                }
            });
        });
    }
};
GradesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
GradesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grades',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grades.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/grades/grades.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grades.page.scss */ "./src/app/grades/grades.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], GradesPage);



/***/ })

}]);
//# sourceMappingURL=grades-grades-module-es2015.js.map