(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCalendarCalendarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Calendar\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <img alt=\"\" src=\"../../assets/calendar.jpg\">\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/calendar/calendar-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/calendar/calendar-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: CalendarPageRoutingModule */

  /***/
  function srcAppCalendarCalendarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarPageRoutingModule", function () {
      return CalendarPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _calendar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./calendar.page */
    "./src/app/calendar/calendar.page.ts");

    const routes = [{
      path: '',
      component: _calendar_page__WEBPACK_IMPORTED_MODULE_3__["CalendarPage"]
    }];
    let CalendarPageRoutingModule = class CalendarPageRoutingModule {};
    CalendarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CalendarPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/calendar/calendar.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/calendar/calendar.module.ts ***!
    \*********************************************/

  /*! exports provided: CalendarPageModule */

  /***/
  function srcAppCalendarCalendarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function () {
      return CalendarPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./calendar-routing.module */
    "./src/app/calendar/calendar-routing.module.ts");
    /* harmony import */


    var _calendar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./calendar.page */
    "./src/app/calendar/calendar.page.ts");

    let CalendarPageModule = class CalendarPageModule {};
    CalendarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalendarPageRoutingModule"]],
      declarations: [_calendar_page__WEBPACK_IMPORTED_MODULE_6__["CalendarPage"]]
    })], CalendarPageModule);
    /***/
  },

  /***/
  "./src/app/calendar/calendar.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/calendar/calendar.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCalendarCalendarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2NhbGVuZGFyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/calendar/calendar.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/calendar/calendar.page.ts ***!
    \*******************************************/

  /*! exports provided: CalendarPage */

  /***/
  function srcAppCalendarCalendarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarPage", function () {
      return CalendarPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let CalendarPage = class CalendarPage {
      constructor(router) {
        this.router = router;
      }

      ngOnInit() {}

      homePage() {
        this.router.navigateByUrl('/home');
      }

    };

    CalendarPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    CalendarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-calendar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./calendar.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./calendar.page.scss */
      "./src/app/calendar/calendar.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], CalendarPage);
    /***/
  }
}]);
//# sourceMappingURL=calendar-calendar-module-es5.js.map