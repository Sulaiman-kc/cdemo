(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-app>\n    <ion-menu side=\"start\" content-id=\"main-content\">\n      <ion-header class=\"header\">\n        <ion-toolbar translucent  class=\"content\">\n          <ion-title>Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content class=\"content\">\n        <ion-list>\n          <ion-item class=\"content\">\n            <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n            <ion-label>Inbox</ion-label>\n          </ion-item>\n          <ion-item class=\"content\">\n            <ion-icon name=\"paper-plane\" slot=\"start\"></ion-icon>\n            <ion-label>Outbox</ion-label>\n          </ion-item>\n          <ion-item class=\"content\">\n            <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\n            <ion-label>Favorites</ion-label>\n          </ion-item>\n          <ion-item class=\"content\">\n            <ion-icon name=\"archive\" slot=\"start\"></ion-icon>\n            <ion-label>Archived</ion-label>\n          </ion-item>\n          <ion-item class=\"content\">\n            <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\n            <ion-label>Trash</ion-label>\n          </ion-item>\n          <ion-item class=\"content\">\n            <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\n            <ion-label (click)=\"logout()\" >Log Out</ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n    <div class=\"ion-page\" id=\"main-content\">\n      <ion-header>\n        <ion-toolbar class=\"content\">\n          <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n          <ion-title>Inbox</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content class=\"ion-padding\" class=\"body\">\n        <ion-slides>\n\n          <ion-slide>\n            <div class=\"slide slider\">\n              <!-- <img src=\"./slide-1.png\"/> -->\n              <h2>Welcome</h2>\n              <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p>\n            </div>\n          </ion-slide>\n  \n          <ion-slide>\n            <div class=\"slide slider\">\n              <!-- <img src=\"./slide-1.png\"/> -->\n              <h2>Welcome</h2>\n              <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p>\n            </div>\n          </ion-slide>\n  \n          <ion-slide>\n            <div class=\"slide slider\">\n              <!-- <img src=\"./slide-1.png\"/> -->\n              <h2>Welcome</h2>\n              <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p>\n            </div> \n          </ion-slide>\n  \n          <ion-slide>\n            <div class=\"slide slider\">\n              <!-- <img src=\"./slide-1.png\"/> -->\n              <h2>Welcome</h2>\n              <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p>\n            </div>\n          </ion-slide>\n  \n        </ion-slides>\n      </ion-content>\n    </div>\n  </ion-app>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bgc {\n  height: 100%;\n  background-color: #182426;\n  position: relative;\n}\n\n.container {\n  position: absolute;\n  width: 70%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.image {\n  text-align: center;\n}\n\nimg {\n  width: 120px;\n}\n\n.font {\n  font-weight: 600;\n  color: #30564f;\n}\n\n.inp {\n  width: 100%;\n  height: 35px;\n  background-color: #182426;\n  border: 0;\n  border-bottom: 1px solid #705f5f;\n  color: white;\n}\n\n.font1 {\n  text-align: right;\n  font-weight: bold;\n}\n\n.font1 a {\n  text-decoration: none;\n  color: #30564f;\n}\n\n.btn {\n  width: 100%;\n  height: 40px;\n  border-radius: 20px !important;\n  --background:#42d069;\n  --border-radius: 20px;\n}\n\n.font2 {\n  text-align: center;\n  color: #30564f;\n  font-weight: 500;\n}\n\n.font2 a {\n  text-decoration: none;\n  font-weight: 700;\n  color: #42d069;\n}\n\n.inp:active {\n  border: none;\n}\n\n.header {\n  background-color: #182426;\n}\n\n.content {\n  --background:#182426;\n}\n\n.body {\n  --background:#6f8083;\n}\n\n.slider {\n  --background:#0d3238;\n  background-color: #0d3238 !important;\n  margin: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcc3VsYWltYW4ga2NcXERlc2t0b3BcXHByb2plY3RcXGNjIERlbW9cXGNjL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUlBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNESjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDR0o7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBR0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7QUNLSjs7QURBQTtFQUNJLHlCQUFBO0FDR0o7O0FEREE7RUFFSSxvQkFBQTtBQ0dKOztBREFBO0VBQ0ksb0JBQUE7QUNHSjs7QUREQTtFQUNJLG9CQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ2N7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgyNDI2O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgLy8gbWFyZ2luOiAyNSUgMTIlO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuLmltYWdle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiAxMjBweDtcclxufVxyXG4uZm9udHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjojMzA1NjRmO1xyXG59XHJcbi5pbnB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODI0MjY7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcwNWY1ZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8vIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAvLyBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcbi5mb250MXtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmZvbnQxIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjojMzA1NjRmO1xyXG59XHJcbi5idG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM0MmQwNjkgIWltcG9ydGFudDtcclxuICAgIC8vIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDojNDJkMDY5O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5mb250MntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiMzMDU2NGY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5mb250MiBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiM0MmQwNjk7XHJcbn1cclxuLmlucDphY3RpdmV7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuLmhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODI0MjY7XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IzE4MjQyNjsgICBcclxuICAgIC8vIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5ib2R5e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiM2ZjgwODM7XHJcbn1cclxuLnNsaWRlcntcclxuICAgIC0tYmFja2dyb3VuZDojMGQzMjM4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkMzIzOCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxMCU7XHJcbn0iLCIuYmdjIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgyNDI2O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3MCU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uaW1hZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLmZvbnQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMwNTY0Zjtcbn1cblxuLmlucCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODI0MjY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3MDVmNWY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvbnQxIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9udDEgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzMDU2NGY7XG59XG5cbi5idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDojNDJkMDY5O1xuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5mb250MiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzMDU2NGY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5mb250MiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzQyZDA2OTtcbn1cblxuLmlucDphY3RpdmUge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgyNDI2O1xufVxuXG4uY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDojMTgyNDI2O1xufVxuXG4uYm9keSB7XG4gIC0tYmFja2dyb3VuZDojNmY4MDgzO1xufVxuXG4uc2xpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiMwZDMyMzg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDMyMzggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let DashboardPage = class DashboardPage {
    constructor(afAuth, toastController, router) {
        this.afAuth = afAuth;
        this.toastController = toastController;
        this.router = router;
        this.username = '';
        this.password = '';
    }
    signup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { username, password } = this;
            console.log(username);
            try {
                const res = yield this.afAuth.createUserWithEmailAndPassword(username + '@gmail.com', password);
                console.log(res);
                if (res.operationType == 'signIn') {
                    this.presentToast('Successfully User Created');
                    this.router.navigate(['/']);
                }
            }
            catch (err) {
                console.log(err);
                if (err.code == 'auth/invalid-email') {
                    this.presentToast('Enter the Username');
                }
                if (err.code == 'auth/weak-password') {
                    this.presentToast('The password must be 6 characters long or more.');
                }
                if (err.code == 'auth/email-already-in-use') {
                    this.presentToast('The email address is already in use by another account.');
                }
            }
        });
    }
    user(event) {
        console.log(event);
        this.username = event;
    }
    pass(event) {
        console.log(event);
        this.password = event;
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
    logout() {
        return this.afAuth.signOut().then(() => {
            this.router.navigate(['']);
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/dashboard/dashboard.page.scss")).default]
    })
], DashboardPage);



/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~tabs-tabs-module-es2015.js.map