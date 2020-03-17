(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assignments-assignments-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/assignments.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/assignments.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title id=\"asTitle\">\n      Assignments - [Name]\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ul class=\"gradesUL\" id=\"assignmentRows\">\n  </ul>\n  <a (click)=\"signOut()\" class=\"currentUser\" id=\"currentUserAS\">\n    <b>Sign Out: 06########</b>\n  </a>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/assignments/assignments-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/assignments/assignments-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AssignmentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsPageRoutingModule", function() { return AssignmentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _assignments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignments.page */ "./src/app/assignments/assignments.page.ts");




const routes = [
    {
        path: '',
        component: _assignments_page__WEBPACK_IMPORTED_MODULE_3__["AssignmentsPage"]
    }
];
let AssignmentsPageRoutingModule = class AssignmentsPageRoutingModule {
};
AssignmentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AssignmentsPageRoutingModule);



/***/ }),

/***/ "./src/app/assignments/assignments.module.ts":
/*!***************************************************!*\
  !*** ./src/app/assignments/assignments.module.ts ***!
  \***************************************************/
/*! exports provided: AssignmentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsPageModule", function() { return AssignmentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _assignments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assignments-routing.module */ "./src/app/assignments/assignments-routing.module.ts");
/* harmony import */ var _assignments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assignments.page */ "./src/app/assignments/assignments.page.ts");







let AssignmentsPageModule = class AssignmentsPageModule {
};
AssignmentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _assignments_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssignmentsPageRoutingModule"]
        ],
        declarations: [_assignments_page__WEBPACK_IMPORTED_MODULE_6__["AssignmentsPage"]]
    })
], AssignmentsPageModule);



/***/ }),

/***/ "./src/app/assignments/assignments.page.scss":
/*!***************************************************!*\
  !*** ./src/app/assignments/assignments.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL2Fzc2lnbm1lbnRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/assignments/assignments.page.ts":
/*!*************************************************!*\
  !*** ./src/app/assignments/assignments.page.ts ***!
  \*************************************************/
/*! exports provided: AssignmentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsPage", function() { return AssignmentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");





const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
let AssignmentsPage = class AssignmentsPage {
    constructor(route, router, loadingController) {
        this.route = route;
        this.router = router;
        this.loadingController = loadingController;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.assignments = this.router.getCurrentNavigation().extras.state.jsonData;
                this.title = this.router.getCurrentNavigation().extras.state.title;
            }
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
    getLogin() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const ret = yield Storage.get({ key: 'login' });
            return JSON.parse(ret.value);
        });
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
    addGrade(name, grade) {
        const rows = document.getElementById('assignmentRows');
        const nameContainer = document.createElement('li');
        const n1 = document.createElement('h2');
        n1.textContent = name;
        nameContainer.append(n1);
        const gradeContainer = document.createElement('li');
        const g1 = document.createElement('h3');
        if (Number.isNaN(grade)) {
            g1.style.backgroundColor = '#F0F0F0';
            g1.textContent = '';
        }
        else if (grade === Number.POSITIVE_INFINITY || grade === Number.NEGATIVE_INFINITY) {
            g1.style.backgroundColor = '#3F51B5';
            g1.textContent = '100%';
        }
        else {
            g1.style.backgroundColor = this.selectColor(grade);
            g1.textContent = grade + '%';
        }
        gradeContainer.append(g1);
        rows.append(nameContainer);
        rows.append(gradeContainer);
    }
    signOut() {
        this.setLogin('', '').then(r => this.router.navigateByUrl('/login'));
    }
    ngOnInit() {
        document.getElementById('asTitle').textContent = 'Assignments - ' + this.title;
        this.getLogin().then(r => document.getElementById('currentUserAS').innerHTML = `Sign Out: <b>${r.un}</b>`);
        for (const i of JSON.parse(this.assignments)) {
            this.addGrade(i.Name, Math.floor((parseFloat(i.Points) / parseFloat(i.Max)) * 100));
        }
        if (this.assignments === '[]') {
            const rows = document.getElementById('assignmentRows');
            const label = document.createElement('h2');
            label.textContent = 'No assignments have been assigned.';
            rows.append(label);
        }
    }
};
AssignmentsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
AssignmentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assignments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assignments.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignments/assignments.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assignments.page.scss */ "./src/app/assignments/assignments.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], AssignmentsPage);



/***/ })

}]);
//# sourceMappingURL=assignments-assignments-module-es2015.js.map