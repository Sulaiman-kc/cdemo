(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~signup-signup-module~tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-tabs>\n    <div class=\"bgc\">\n      <div class=\"container\">\n        <div class=\"form\">\n          <ion-label position=\"stacked\" class=\"font\">Username</ion-label>\n          <ion-input required type=\"text\" (change)=\"user($event.target.value)\" [(ngModel)]=\"username\" class=\"inp\"></ion-input>\n\n          <!-- <ion-input type=\"text\" [(ngModel)]=\"name\" name=\"username\" class=\"inp\"></ion-input> -->\n          <br>\n          <!-- <ion-label position=\"stacked\" class=\"font\">E-mail</ion-label>\n          <ion-input required type=\"text\" [(ngModel)]=\"email\" class=\"inp\"></ion-input>\n          <br>\n          <ion-label position=\"stacked\" class=\"font\">Mobile Number</ion-label>\n          <ion-input required type=\"text\" [(ngModel)]=\"number\" class=\"inp\"></ion-input>\n          <br>  -->\n          <ion-label position=\"stacked\" class=\"font\">Password</ion-label>\n          <ion-input type=\"password\" (change)=\"pass($event.target.value)\" [(ngModel)]=\"password\" class=\"inp\"></ion-input>\n          <br>\n          <br>\n          <ion-button class=\"btn\" (click)=\"signup()\">SignUp</ion-button>\n          <br>\n          <br>\n          <div class=\"font2\">Already have? <a href=\"\">Log In</a></div>\n        </div>\n      </div>\n    </div>\n  </ion-tabs>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <div class=\"bgc\">\n    <div class=\"container\">\n      <div class=\"image\">\n        <img src=\"assets/image/demo-icon.png\" alt=\"image\">\n      </div>\n      <div class=\"form\">\n        <ion-label position=\"stacked\" class=\"font\">Username</ion-label>\n        <ion-input required type=\"text\" oninput=\"handleFirstNameValue(event)\" [(ngModel)]=\"username\" class=\"inp\"></ion-input>\n        <br>\n        <ion-label position=\"stacked\" class=\"font\">Password</ion-label>\n        <ion-input required type=\"password\" oninput=\"handleFirstNameValue(event)\" [(ngModel)]=\"password\" class=\"inp\"></ion-input>\n        <br>\n        <br>\n        <div class=\"font1\"><a href=\"\">Forgot Password?</a></div>\n        <br>\n        <ion-button class=\"btn\" (click)=\"login()\">Login</ion-button>\n        <br>\n        <br>\n        <div class=\"font2\">New user? <a href=\"signup\">Sign Up</a></div>\n      </div>\n    </div>\n  </div>\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bgc {\n  height: 100%;\n  background-color: #182426;\n  position: relative;\n}\n\n.container {\n  position: absolute;\n  width: 70%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.image {\n  text-align: center;\n}\n\nimg {\n  width: 120px;\n}\n\n.font {\n  font-weight: 600;\n  color: #30564f;\n}\n\n.inp {\n  width: 100%;\n  height: 35px;\n  background-color: #182426;\n  border: 0;\n  border-bottom: 1px solid #705f5f;\n  color: white;\n}\n\n.font1 {\n  text-align: right;\n  font-weight: bold;\n}\n\n.font1 a {\n  text-decoration: none;\n  color: #30564f;\n}\n\n.btn {\n  width: 100%;\n  height: 40px;\n  border-radius: 20px !important;\n  --background:#42d069;\n  --border-radius: 20px;\n}\n\n.font2 {\n  text-align: center;\n  color: #30564f;\n  font-weight: 500;\n}\n\n.font2 a {\n  text-decoration: none;\n  font-weight: 700;\n  color: #42d069;\n}\n\n.inp:active {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0M6XFxVc2Vyc1xcc3VsYWltYW4ga2NcXERlc2t0b3BcXHByb2plY3RcXGNjIERlbW9cXGNjL3NyY1xcYXBwXFxzaWdudXBcXHNpZ251cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUlBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNESjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDR0o7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBR0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnY3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODI0MjY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyBtYXJnaW46IDI1JSAxMiU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG4uaW1hZ2V7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG59XHJcbi5mb250e1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiMzMDU2NGY7XHJcbn1cclxuLmlucHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MjQyNjtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzA1ZjVmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC8vIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuLmZvbnQxe1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZm9udDEgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiMzMDU2NGY7XHJcbn1cclxuLmJ0bntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzQyZDA2OSAhaW1wb3J0YW50O1xyXG4gICAgLy8gYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiM0MmQwNjk7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLmZvbnQye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IzMwNTY0ZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmZvbnQyIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IzQyZDA2OTtcclxufVxyXG4uaW5wOmFjdGl2ZXtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufSIsIi5iZ2Mge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODI0MjY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDcwJTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5pbWFnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG4uZm9udCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzA1NjRmO1xufVxuXG4uaW5wIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MjQyNjtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcwNWY1ZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZm9udDEge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb250MSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzMwNTY0Zjtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiM0MmQwNjk7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmZvbnQyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzMwNTY0ZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmZvbnQyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNDJkMDY5O1xufVxuXG4uaW5wOmFjdGl2ZSB7XG4gIGJvcmRlcjogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let SignupPage = class SignupPage {
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
};
SignupPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")).default]
    })
], SignupPage);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bgc {\n  height: 100%;\n  background-color: #182426;\n  position: relative;\n}\n\n.container {\n  position: absolute;\n  width: 70%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.image {\n  text-align: center;\n}\n\nimg {\n  width: 120px;\n}\n\n.font {\n  font-weight: 600;\n  color: #30564f;\n}\n\n.inp {\n  width: 100%;\n  height: 35px;\n  background-color: #182426;\n  border: 0;\n  border-bottom: 1px solid #705f5f;\n  color: white;\n}\n\n.font1 {\n  text-align: right;\n  font-weight: bold;\n}\n\n.font1 a {\n  text-decoration: none;\n  color: #30564f;\n}\n\n.btn {\n  width: 100%;\n  height: 40px;\n  border-radius: 20px !important;\n  --background:#42d069;\n  --border-radius: 20px;\n}\n\n.font2 {\n  text-align: center;\n  color: #30564f;\n  font-weight: 500;\n}\n\n.font2 a {\n  text-decoration: none;\n  font-weight: 700;\n  color: #42d069;\n}\n\n.inp:active {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxcVXNlcnNcXHN1bGFpbWFuIGtjXFxEZXNrdG9wXFxwcm9qZWN0XFxjYyBEZW1vXFxjYy9zcmNcXGFwcFxcdGFic1xcdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBSUEsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0RKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUNHSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFHQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ2N7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODI0MjY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgLy8gbWFyZ2luOiAyNSUgMTIlO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmltYWdle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmltZ3tcbiAgICB3aWR0aDogMTIwcHg7XG59XG4uZm9udHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiMzMDU2NGY7XG59XG4uaW5we1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgyNDI2O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcwNWY1ZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAvLyBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuLmZvbnQxe1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZvbnQxIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiMzMDU2NGY7XG59XG4uYnRue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJkMDY5ICFpbXBvcnRhbnQ7XG4gICAgLy8gYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IzQyZDA2OTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uZm9udDJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiMzMDU2NGY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5mb250MiBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiM0MmQwNjk7XG59XG4uaW5wOmFjdGl2ZXtcbiAgICBib3JkZXI6IG5vbmU7XG59IiwiLmJnYyB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MjQyNjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNzAlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmltYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTIwcHg7XG59XG5cbi5mb250IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMDU2NGY7XG59XG5cbi5pbnAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgyNDI2O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzA1ZjVmO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mb250MSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZvbnQxIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMzA1NjRmO1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IzQyZDA2OTtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uZm9udDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzA1NjRmO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZm9udDIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICM0MmQwNjk7XG59XG5cbi5pbnA6YWN0aXZlIHtcbiAgYm9yZGVyOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let TabsPage = class TabsPage {
    constructor(afAuth, toastController, router) {
        this.afAuth = afAuth;
        this.toastController = toastController;
        this.router = router;
        this.username = '';
        this.password = '';
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { username, password } = this;
            console.log(username);
            try {
                const res = yield this.afAuth.signInWithEmailAndPassword(username + '@gmail.com', password);
                console.log(res);
                if (res.operationType == 'signIn') {
                    this.presentToast("Your successfully Logged In");
                    this.router.navigate(['/dashboard']);
                }
            }
            catch (err) {
                console.dir(err.code);
                if (err.code == "auth/user-not-found") {
                    this.presentToast("User not Found");
                }
                if (err.code == "auth/wrong-password") {
                    this.presentToast("Please Check Your Password");
                }
            }
        });
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
};
TabsPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    })
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=default~signup-signup-module~tabs-tabs-module-es2015.js.map