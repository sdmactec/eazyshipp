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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mar_top {\r\n    margin-top: 129px;\r\n }\r\n \r\n .h2_after::after { \r\n     content: \"\";\r\n     display: block;\r\n     margin: 4px 100px 27px;\r\n     width: 4rem;\r\n     height: .25rem;\r\n     background: #350e3f;\r\n   }\r\n \r\n .h2_after{\r\n   width: 315px;\r\n     font-weight: bold;\r\n     margin: auto;\r\n }\r\n \r\n .formuls{\r\n \r\n     background: #e3e3e5;\r\n     padding:3px 5px;\r\n     border: 1px solid #d0b9d6;\r\n }"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-homenavbar></app-homenavbar>\r\n\r\n<div class=\"container mar_top\">\r\n    <div class=\"col-md-12 text-center\"><h3 class=\"h2_after\">About Us</h3></div>\r\n   <div class=\"row\">\r\n      <div class=\"col-md-5 text-center\">\r\n         <img  style=\"height: 155px;\" src=\"assets/Mopad.png\"/>\r\n      </div>\r\n      <div class=\"col-md-7\">\r\n         <span>Easy Ship is a Hyper-Local logistics service that enables a User for a ‘Quick Pick & Drop’ facility as well\r\n         posting jobs for errands. Accentuated by technology, Easy Ship is an intuitive product that has massive \r\n         opportunity for not only intra city logistics, but also employment opportunities. Easy Shipping engages time \r\n         bound resources for daily chores, odd jobs or anything that needs to be picked or dropped from a location to another.\r\n         </span>\r\n      </div>\r\n   </div>\r\n   <div class=\"row\" style=\"margin-top: 80px;\">\r\n      \r\n      <div class=\"col-md-7\">\r\n         <span>Any customer can create a User ID and Password in the Application seek service for</span>\r\n         <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n               <h5><strong>1.shipping</strong></h5>\r\n               <ul>\r\n                  <li>Pick  Drop</li>\r\n                  <li>\tStore pick-up</li>\r\n                  <li>\tPosting Instant Jobs </li>\r\n               </ul>\r\n               <h5><strong>2.Posting Instant Jobs</strong> </h5>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n               <h5><strong>App shows the pricing based on</strong></h5>\r\n               <ul>\r\n                  <li>Distance       </li>\r\n                  <li>\tShipping Timeline</li>\r\n                  <li>Shipping Mode </li>\r\n               </ul>\r\n            </div>\r\n         </div>\r\n      </div>\r\n      <div class=\"col-md-5 text-center\">\r\n          <img  style=\"height: 155px;\" src=\"assets/Truck.png\"/>\r\n       </div>\r\n   </div>\r\n   <div  style=\"margin-top: 80px;    display: flex;\">\r\n      \r\n    <div>\r\n         <img  style=\"height: 155px;\" src=\"assets/Truck Mini.png\"/>\r\n      </div>\r\n      \r\n      <div>\r\n          <h5><strong>Formula for shipping Cost:</strong></h5>\r\n          <span class=\"formuls\">[KMS*Shipping mode]+[Shipping timeline for instance shipping]</span>\r\n         <ul class=\"mar_t2\">\r\n              <li> Ex for 2 wheelers:[24*10]+300=540</li>\r\n              <li>Ex for 3 wheelers:[24*20]+300=780</li>\r\n              <li>\t   Ex for 4 wheelers:[24*30]+300=1020 </li>\r\n           </ul>\r\n          </div>\r\n          <div>\r\n           <h5><strong>Customer enters details for ‘Shipping Timeline’:</strong></h5>\r\n           \r\n           <ul class=\"mar_t2\">\r\n              <li> Instant shipping - 300Rs</li>\r\n              <li>4 hours shipping - 150Rs</li>\r\n              <li>24 hours shipping - 50Rs</li>\r\n           </ul>\r\n           </div>\r\n           \r\n     \r\n   </div>\r\n<div class=\"row\" style=\"margin-top: 80px;\" >\r\n   <div class=\"col-md-6\">\r\n      <h5><strong>The cost should vary based on shipping timeline </strong></h5>\r\n      <span>Customer enters shipping mode :</span>\r\n      <ul class=\"mar_t2\">\r\n         <li> Instant shipping - 300Rs</li>\r\n         <li>4 hours shipping - 150Rs</li>\r\n         <li>24 hours shipping - 50Rs</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <strong>The cost should vary based on shipping timeline</strong>\r\n        <br>\r\n        <strong>Customer enters shipping mode</strong>\r\n        <br>\r\n        <span class=\"formuls\">[KMS*Shipping mode]+[Shipping timeline for instance shipping]</span>\r\n\r\n        <ul class=\"mar_t2\">\r\n            <li> 2 wheeler - 10/-per/km</li>\r\n            <li>3 wheeler - 20/-per/km</li>\r\n            <li>4 wheeler - 30/-per/km</li>\r\n         </ul>\r\n</div>\r\n    </div>\r\n\r\n\r\n    <strong> The cost of Charges per KM should vary based on shipping mod</strong>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shipping/shipping.component */ "./src/app/shipping/shipping.component.ts");
/* harmony import */ var _modulewise_jobcreate_jobcreate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modulewise/jobcreate/jobcreate.component */ "./src/app/modulewise/jobcreate/jobcreate.component.ts");
/* harmony import */ var _storecreate_storecreate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storecreate/storecreate.component */ "./src/app/storecreate/storecreate.component.ts");
/* harmony import */ var _myshippings_myshippings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./myshippings/myshippings.component */ "./src/app/myshippings/myshippings.component.ts");
/* harmony import */ var _shipcreate_shipcreate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shipcreate/shipcreate.component */ "./src/app/shipcreate/shipcreate.component.ts");
/* harmony import */ var _shipslist_shipslist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shipslist/shipslist.component */ "./src/app/shipslist/shipslist.component.ts");
/* harmony import */ var _modulewise_shippingdata_shippingdata_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modulewise/shippingdata/shippingdata.component */ "./src/app/modulewise/shippingdata/shippingdata.component.ts");
/* harmony import */ var _modulewise_jobsdata_jobsdata_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modulewise/jobsdata/jobsdata.component */ "./src/app/modulewise/jobsdata/jobsdata.component.ts");
/* harmony import */ var _modulewise_joblist_joblist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modulewise/joblist/joblist.component */ "./src/app/modulewise/joblist/joblist.component.ts");
/* harmony import */ var _shippchange_shippchange_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shippchange/shippchange.component */ "./src/app/shippchange/shippchange.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/notifications/notifications.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _invite_invite_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./invite/invite.component */ "./src/app/invite/invite.component.ts");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./success/success.component */ "./src/app/success/success.component.ts");
/* harmony import */ var _fail_fail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./fail/fail.component */ "./src/app/fail/fail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'shipping', component: _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_4__["ShippingComponent"] },
    { path: 'JobcreateComponent', component: _modulewise_jobcreate_jobcreate_component__WEBPACK_IMPORTED_MODULE_5__["JobcreateComponent"] },
    { path: 'store', component: _storecreate_storecreate_component__WEBPACK_IMPORTED_MODULE_6__["StorecreateComponent"] },
    { path: 'myshippings', component: _myshippings_myshippings_component__WEBPACK_IMPORTED_MODULE_7__["MyshippingsComponent"] },
    { path: 'Registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_14__["RegistrationComponent"] },
    { path: 'shippingdata', component: _modulewise_shippingdata_shippingdata_component__WEBPACK_IMPORTED_MODULE_10__["ShippingdataComponent"] },
    { path: 'jobsdata', component: _modulewise_jobsdata_jobsdata_component__WEBPACK_IMPORTED_MODULE_11__["JobsdataComponent"] },
    { path: 'joblist', component: _modulewise_joblist_joblist_component__WEBPACK_IMPORTED_MODULE_12__["JoblistComponent"] },
    { path: 'shipslist', component: _shipslist_shipslist_component__WEBPACK_IMPORTED_MODULE_9__["ShipslistComponent"] },
    { path: 'shipcreate', component: _shipcreate_shipcreate_component__WEBPACK_IMPORTED_MODULE_8__["ShipcreateComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"] },
    { path: 'Shippchange', component: _shippchange_shippchange_component__WEBPACK_IMPORTED_MODULE_13__["ShippchangeComponent"] },
    { path: 'notifications', component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"] },
    { path: 'support', component: _support_support_component__WEBPACK_IMPORTED_MODULE_17__["SupportComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"] },
    { path: 'invite', component: _invite_invite_component__WEBPACK_IMPORTED_MODULE_19__["InviteComponent"] },
    { path: 'Shipping_Payment_Success/:term', component: _success_success_component__WEBPACK_IMPORTED_MODULE_20__["SuccessComponent"] },
    { path: 'Shipping_Payment_Failed', component: _fail_fail_component__WEBPACK_IMPORTED_MODULE_21__["FailComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                /* CommonModule */
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w3-light-grey, .w3-hover-light-grey:hover, .w3-light-gray, .w3-hover-light-gray:hover {\r\n    color: #fff!important;\r\n    background-color: #2d2a2d!important;\r\n}\r\n\r\n.w3-padding-32 {\r\n    padding-top: 10px!important;\r\n    padding-bottom: 2px!important;\r\n}\r\n\r\n.css_bottom{\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n}\r\n\r\n.cc-margin-bottom{\r\n    margin-bottom: 530px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<footer class=\"w3-center w3-light-grey w3-padding-32 mar_t2 css_bottom\">\r\n\t\t<p>© 2018 MacTec IT Solutions. All rights reserved. <a href=\"https://www.w3schools.com/w3css/default.asp\" title=\"W3.CSS\" target=\"_blank\" class=\"w3-hover-text-green\">Mactec</a></p>\r\n\t  </footer>"

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
/* harmony import */ var _toasterservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toasterservice.service */ "./src/app/toasterservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(toastservice) {
        this.toastservice = toastservice;
        this.title = 'Eazyshippweb';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_toasterservice_service__WEBPACK_IMPORTED_MODULE_1__["ToasterserviceService"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shipping/shipping.component */ "./src/app/shipping/shipping.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var ng6_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng6-bootstrap-modal */ "./node_modules/ng6-bootstrap-modal/index.js");
/* harmony import */ var ng6_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng6_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./jobs/jobs.component */ "./src/app/jobs/jobs.component.ts");
/* harmony import */ var _storecreate_storecreate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./storecreate/storecreate.component */ "./src/app/storecreate/storecreate.component.ts");
/* harmony import */ var _stotecreate_stotecreate_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stotecreate/stotecreate.component */ "./src/app/stotecreate/stotecreate.component.ts");
/* harmony import */ var _homenavbar_homenavbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./homenavbar/homenavbar.component */ "./src/app/homenavbar/homenavbar.component.ts");
/* harmony import */ var _myshippings_myshippings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./myshippings/myshippings.component */ "./src/app/myshippings/myshippings.component.ts");
/* harmony import */ var angular_popper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-popper */ "./node_modules/angular-popper/fesm5/angular-popper.js");
/* harmony import */ var _modulewise_shippingcreationsdata_tolocation_tolocation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modulewise/shippingcreationsdata/tolocation/tolocation.component */ "./src/app/modulewise/shippingcreationsdata/tolocation/tolocation.component.ts");
/* harmony import */ var _modulewise_shippingcreationsdata_fromlocation_fromlocation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modulewise/shippingcreationsdata/fromlocation/fromlocation.component */ "./src/app/modulewise/shippingcreationsdata/fromlocation/fromlocation.component.ts");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toast-notifications */ "./node_modules/ngx-toast-notifications/dist/index.js");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _tofare_tofare_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tofare/tofare.component */ "./src/app/tofare/tofare.component.ts");
/* harmony import */ var _fareestimate_fareestimate_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./fareestimate/fareestimate.component */ "./src/app/fareestimate/fareestimate.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/fesm5/agm-direction.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _modulewise_joblist_joblist_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modulewise/joblist/joblist.component */ "./src/app/modulewise/joblist/joblist.component.ts");
/* harmony import */ var _modulewise_jobsdata_jobsdata_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modulewise/jobsdata/jobsdata.component */ "./src/app/modulewise/jobsdata/jobsdata.component.ts");
/* harmony import */ var _modulewise_jobcreate_jobcreate_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./modulewise/jobcreate/jobcreate.component */ "./src/app/modulewise/jobcreate/jobcreate.component.ts");
/* harmony import */ var _modulewise_shippingdata_shippingdata_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./modulewise/shippingdata/shippingdata.component */ "./src/app/modulewise/shippingdata/shippingdata.component.ts");
/* harmony import */ var _shipslist_shipslist_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shipslist/shipslist.component */ "./src/app/shipslist/shipslist.component.ts");
/* harmony import */ var _shipcreate_shipcreate_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shipcreate/shipcreate.component */ "./src/app/shipcreate/shipcreate.component.ts");
/* harmony import */ var _storelist_storelist_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./storelist/storelist.component */ "./src/app/storelist/storelist.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _shippchange_shippchange_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./shippchange/shippchange.component */ "./src/app/shippchange/shippchange.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _tolocstore_tolocstore_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./tolocstore/tolocstore.component */ "./src/app/tolocstore/tolocstore.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/notifications/notifications.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _invite_invite_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./invite/invite.component */ "./src/app/invite/invite.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./success/success.component */ "./src/app/success/success.component.ts");
/* harmony import */ var _fail_fail_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./fail/fail.component */ "./src/app/fail/fail.component.ts");
/* harmony import */ var _hhh_hhh_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./hhh/hhh.component */ "./src/app/hhh/hhh.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _fareestimate_fareestimate_component__WEBPACK_IMPORTED_MODULE_22__["FareestimateComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _tofare_tofare_component__WEBPACK_IMPORTED_MODULE_21__["TofareComponent"],
                _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_9__["ShippingComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _modulewise_jobcreate_jobcreate_component__WEBPACK_IMPORTED_MODULE_30__["JobcreateComponent"],
                _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_12__["JobsComponent"],
                _storecreate_storecreate_component__WEBPACK_IMPORTED_MODULE_13__["StorecreateComponent"],
                _stotecreate_stotecreate_component__WEBPACK_IMPORTED_MODULE_14__["StotecreateComponent"],
                _homenavbar_homenavbar_component__WEBPACK_IMPORTED_MODULE_15__["HomenavbarComponent"],
                _myshippings_myshippings_component__WEBPACK_IMPORTED_MODULE_16__["MyshippingsComponent"],
                _modulewise_joblist_joblist_component__WEBPACK_IMPORTED_MODULE_28__["JoblistComponent"],
                _modulewise_jobsdata_jobsdata_component__WEBPACK_IMPORTED_MODULE_29__["JobsdataComponent"],
                _modulewise_shippingdata_shippingdata_component__WEBPACK_IMPORTED_MODULE_31__["ShippingdataComponent"],
                _modulewise_shippingcreationsdata_tolocation_tolocation_component__WEBPACK_IMPORTED_MODULE_18__["TolocationComponent"],
                _modulewise_shippingcreationsdata_fromlocation_fromlocation_component__WEBPACK_IMPORTED_MODULE_19__["FromlocationComponent"],
                _shipslist_shipslist_component__WEBPACK_IMPORTED_MODULE_32__["ShipslistComponent"],
                _shipcreate_shipcreate_component__WEBPACK_IMPORTED_MODULE_33__["ShipcreateComponent"],
                _storelist_storelist_component__WEBPACK_IMPORTED_MODULE_34__["StorelistComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_35__["ProfileComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_37__["RegistrationComponent"],
                _shippchange_shippchange_component__WEBPACK_IMPORTED_MODULE_38__["ShippchangeComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_39__["CarouselComponent"],
                _tolocstore_tolocstore_component__WEBPACK_IMPORTED_MODULE_40__["TolocstoreComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_41__["NotificationsComponent"],
                _support_support_component__WEBPACK_IMPORTED_MODULE_42__["SupportComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_43__["AboutComponent"],
                _invite_invite_component__WEBPACK_IMPORTED_MODULE_44__["InviteComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_46__["LoaderComponent"],
                _success_success_component__WEBPACK_IMPORTED_MODULE_47__["SuccessComponent"],
                _fail_fail_component__WEBPACK_IMPORTED_MODULE_48__["FailComponent"],
                _hhh_hhh_component__WEBPACK_IMPORTED_MODULE_49__["HhhComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_36__["Ng4LoadingSpinnerModule"].forRoot(),
                angular_datatables__WEBPACK_IMPORTED_MODULE_25__["DataTablesModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_45__["BrowserAnimationsModule"],
                angular_popper__WEBPACK_IMPORTED_MODULE_17__["NgxPopper"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_20__["ToastNotificationsModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({ positionClass: 'toast-top-center' }), _agm_core__WEBPACK_IMPORTED_MODULE_23__["AgmCoreModule"].forRoot({
                    apiKey: "AIzaSyAydmR78Smnp8A_B7eh-9fvijHD0I_xVtQ",
                    libraries: ["places"]
                }), agm_direction__WEBPACK_IMPORTED_MODULE_24__["AgmDirectionModule"],
                ng6_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["BootstrapModalModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"], _angular_common__WEBPACK_IMPORTED_MODULE_50__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.Customer = "http://test.mactecit.com/eazyshipp/";
    }
    //public Customer: any = "http://test.mactecit.com/eazyshipp/"
    //public Customer: any = "http://192.168.1.147:2020/eazyshipp-web/"
    AuthService.prototype.loginCustomer = function (formdata) {
        console.log(formdata);
        //alert( JSON.stringify(formdata));
        localStorage.setItem("mobile", JSON.stringify(formdata.mobile));
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.http.post(this.Customer + "app/customer/login", JSON.stringify(formdata), { headers: headers });
    };
    AuthService.prototype.otpCustomer = function (otp) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var body = {
            "otp": otp.otp,
            "mobile": localStorage.mobile
        };
        /* console.log(body) */
        return this.http.post(this.Customer + "app/customer/login", JSON.stringify(body), { headers: headers });
    };
    AuthService.prototype.StoreCreate = function (StoreData) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        var body = {
            "customer": {
                "id": localStorage.userid,
            },
            "name": StoreData.title,
            "address": localStorage.formatted_address,
            "Lat": localStorage.fromlat,
            "Lng": localStorage.fromlng
        };
        console.log(body);
        return this.http.post(this.Customer + "app/customer/stores", JSON.stringify(body), { headers: headers });
    };
    AuthService.prototype.Registration = function (RegistrationData) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var body = {
            "address": RegistrationData.address,
            "authkey": localStorage.authKey,
            "dob": "24-07-2018",
            "email": RegistrationData.email,
            "firstName": RegistrationData.firstName,
            "gender": RegistrationData.gender,
            "lastName": RegistrationData.lastName,
            "terms": true
        };
        /* console.log(body) */
        return this.http.post(this.Customer + "app/customer/update", JSON.stringify(body), { headers: headers });
    };
    AuthService.prototype.CustomerStoreslist = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.get(this.Customer + "app/customer/my/stores/list", { headers: headers });
    };
    AuthService.prototype.itemslist = function (id) {
        /* 	console.log(id); */
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.get(this.Customer + "app/customer/shipping/" + id + "/details", { headers: headers });
    };
    AuthService.prototype.CustomerShippingslist = function () {
        console.log('lll');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.get(this.Customer + "app/customer/shippings/list", { headers: headers });
    };
    AuthService.prototype.dateWiseShippingList = function (data) {
        console.log('lll');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.get(this.Customer + "app/customer/shippings/from/" + data.formDate + "/to/" + data.toDate + "/list", { headers: headers });
    };
    AuthService.prototype.storeslist = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.get(this.Customer + "app/customer/my/stores/list", { headers: headers });
    };
    AuthService.prototype.createshipping = function (ch) {
        /*     console.log(ch); */
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.post(this.Customer + "app/customer/shippings", ch, { headers: headers });
    };
    /* createshipping(ch):Observable<any>{
        console.log(ch);
        let headers = new HttpHeaders();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey',localStorage.authKey);
        return this.http.post(this.Customer+"app/customer/shippings",ch,{headers:headers})
    } */
    AuthService.prototype.createjobs = function (ch) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.post(this.Customer + "app/customer/jobs", ch, { headers: headers });
    };
    /* profilepic(ch):Observable<any>{
        let headers = new HttpHeaders();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey',localStorage.authKey);
        return this.http.get(this.Customer+"app/customer/488/profilePic",{headers:headers})
    } */
    AuthService.prototype.CustomerJobslist = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.get(this.Customer + "app/customer/my/jobs/list", { headers: headers });
    };
    AuthService.prototype.GetAddressfor = function (ab, bc) {
        // alert('serb=vice call hitting data');
        // alert(ab); geolocation servivce call
        // alert(bc);
        return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + ab + "," + bc + "&key=AIzaSyBAMYFGB8QwlV_bUVh8aPIkUavByvLumi8");
    };
    AuthService.prototype.vehiclelist = function (s) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.get(this.Customer + "app/customer/shipping/weight/" + s + "/vehicle-types/list", { headers: headers });
    };
    //
    AuthService.prototype.CustomerProfileData = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.get(this.Customer + "app/customer/profileData", { headers: headers });
    };
    AuthService.prototype.uom = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.get(this.Customer + "app/customer/uom", { headers: headers });
    };
    AuthService.prototype.paymentmode = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.get(this.Customer + "app/customer/shipping/payment/modes", { headers: headers });
    };
    AuthService.prototype.paymentmodessss = function () {
        return this.http.get(this.Customer + "app/customer/beforeLogin/shippingPayment/modes");
    };
    AuthService.prototype.CustomerJobsList = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.get(this.Customer + "app/customer/my/jobs/list", { headers: headers });
    };
    AuthService.prototype.VehicalList = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.get(this.Customer + "app/customer/shippingVehicles/list", { headers: headers });
    };
    AuthService.prototype.PaymentModes = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.get(this.Customer + "app/customer/shipping/payment/modes", { headers: headers });
    };
    AuthService.prototype.retry = function (shippingId) {
        /* 	console.log(shippingId); */
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.post(this.Customer + "app/customer/shippings/" + shippingId + "/re-submit", {}, { headers: headers });
    };
    AuthService.prototype.locationValidator = function (lat, lng) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.post(this.Customer + "app/customer/shippings/lat/" + lat + "/lng/" + lng + "/location/validate", {}, { headers: headers });
    };
    AuthService.prototype.jobcloscancel = function (v) {
        /* 	console.log(v.id);
            console.log(v.serv); */
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.post(this.Customer + "app/customer/job/" + v.id + "/status/" + v.serv + "/change", {}, { headers: headers });
    };
    AuthService.prototype.approvedselectlist = function (v) {
        /* 	console.log(v) */ ;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.get(this.Customer + "app/customer/job/" + v.id + "/drivers/list", { headers: headers });
    };
    AuthService.prototype.selectapplicantsforapproved = function (v) {
        /* 	console.log(v);
                console.log(v.jobs.id);
                    console.log(v.driver.id); */
        /* 		console.log(v.serv); */
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.post(this.Customer + "app/customer/job/" + v.jobs.id + "/driver/" + v.driver.id + "/status/" + v.serv + "/change", {}, { headers: headers });
    };
    AuthService.prototype.deletestore = function (c) {
        /* 	console.log(c);
             */
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.get(this.Customer + "app/customer/stores/" + c.id + "/delete", { headers: headers });
    };
    AuthService.prototype.createjoblimitmode = function () {
        /* 	console.log("createjoblimitmode"); */
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.get(this.Customer + "app/customer/limitModes", { headers: headers });
    };
    AuthService.prototype.createshippayat = function () {
        /* 	console.log("createshippayat"); */
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.get(this.Customer + "app/customer/paying/at", { headers: headers });
    };
    AuthService.prototype.createshippaymentmodes = function () {
        /* console.log("createshippayat"); */
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.get(this.Customer + "app/customer/payment/modes", { headers: headers });
    };
    AuthService.prototype.imageupload = function (v) {
        /* 	console.log(v); */
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'text/plain'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.post(this.Customer + "app/customer/uploadProfilePic", JSON.stringify(v), { headers: headers });
    };
    AuthService.prototype.payuget = function (gg, ff) {
        /*
               console.log(gg);
                console.log(ff); */
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.get(this.Customer + "app/customer/" + ff + "/payumoney/" + gg + "/getPayuMoneyForm", { headers: headers });
    };
    AuthService.prototype.payumoney = function (ccc) {
        /*
                console.log(ccc);
                console.log(ccc); */
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        /*    headers = headers.set('Content-Type', 'text/plain'),
           headers = headers.set('authKey',localStorage.authKey); */
        return this.http.post("https://secure.payu.in/_payment", JSON.stringify(ccc));
    };
    AuthService.prototype.addItemdetails = function (kgg, ac) {
        /* 		console.log(kgg);
                 */
        /* 				console.log(ac); */
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.post(this.Customer + "app/customer/shipping/" + kgg + "/items", ac, { headers: headers });
    };
    AuthService.prototype.uploadItemsDocumentsUrl = function (kgg, ac) {
        /* 		console.log(kgg); */
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.post(this.Customer + "app/customer/shippingItems/" + kgg + "/documents/save", ac, { headers: headers });
    };
    AuthService.prototype.updateprofile = function (ccc) {
        /* 	console.log(ccc); */
        ccc.authkey = localStorage.authKey;
        /* 	console.log(ccc); */
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.post(this.Customer + "app/customer/update", ccc, { headers: headers });
    };
    AuthService.prototype.uploadProfilePic = function (url) {
        var dto = {};
        dto.file = url;
        dto.fileName = "profilePic";
        dto.authkey = localStorage.authKey;
        console.log(dto);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json'),
            headers = headers.set('authKey', localStorage.authKey);
        return this.http.post(this.Customer + "app/customer/Profile/uploadPic", dto, { headers: headers });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {\r\n    color: #555;\r\n    background-color: #c39e9e;\r\n}\r\n\r\n.wrapper {\r\n    height: calc(100vh - 0rem);\r\n    background-color: #e8e8e8;\r\n}\r\n\r\na, a:hover{\r\n    color: #E91E63;\r\n    text-decoration: none\r\n}\r\n\r\n.h-100vh {\r\n    height: calc(100vh - 0rem);\r\n}\r\n\r\n.h7{\r\n    font-size: 0.87rem;\r\n    font-weight: 400;\r\n}\r\n\r\n.h8{\r\n    font-size: 0.78rem;\r\n    font-weight: 400;\r\n}\r\n\r\n.mx-6{\r\n    margin-left: 4rem;\r\n    margin-right: 4rem;\r\n}\r\n\r\n.carousel-control-prev, .carousel-control-next{\r\n    height: 3rem;\r\n    width: 3rem;\r\n    border-radius: 50%;\r\n    background-color:#f1427d;\r\n    margin-top: auto;\r\n    margin-bottom: auto\r\n}\r\n\r\n.form-search, .btn-search, .form-search:placeholder-shown{\r\n    background-color: #ffecf2;\r\n    border-color: #ffdbde;\r\n   \r\n}\r\n\r\n.form-search::-webkit-input-placeholder{\r\n    color: #f89ca5\r\n}\r\n\r\n.form-search::-ms-input-placeholder{\r\n    color: #f89ca5\r\n}\r\n\r\n.form-search::placeholder{\r\n    color: #f89ca5\r\n}\r\n\r\n.form-search:focus{\r\n    color: #dc3545;         \r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .w-300{\r\n        max-width: 33rem;\r\n        padding: 6rem 0;\r\n        background-color: #ffffff\r\n    }\r\n    .w-300 img{\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n        height: 12.7rem;\r\n    }\r\n    .w-300 .carousel-item{\r\n        padding: 0 4rem;\r\n    }\r\n    .w3-white, .w3-hover-white:hover {\r\n        color: #000!important;\r\n        background-color: #ffffff0a!important;\r\n    }\r\n}\r\n\r\n.navbar{\r\n    background: #0c73cc !important;\r\n}\r\n\r\n.dropdown{\r\n    border-radius:0;\r\n    border:0;\r\n}\r\n\r\n.dropdown-menu{\r\n    background: #0c73cc;\r\n    border:0;\r\n    top:80%;\r\n    border-radius:0px 0px 5px 5px;\r\n}\r\n\r\n.dropdown-item:hover{\r\n    background:#085ca5;\r\n    color:#fff;\r\n}\r\n\r\n.dropdown-menu a{\r\n    color:#fff;\r\n}\r\n\r\n.navbar .nav-item .nav-link{\r\n    color:#eee !important; \r\n    \r\n}\r\n\r\n.navbar .nav-item .nav-link:hover .navbar .nav-item .nav-link{\r\n    color:red !important;\r\n    \r\n}\r\n\r\n.carousel-control-prev{\r\n    height: 3rem;\r\n    width: 3rem;\r\n    z-index: 0;\r\n    border-radius: 50%;\r\n    background-color: #f1427d;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}\r\n\r\n.carousel-control-next{\r\n    height: 3rem;\r\n    width: 3rem;\r\n    z-index: 0;\r\n    border-radius: 50%;\r\n    background-color: #f1427d;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}\r\n\r\n.footer_css{\r\n\t\r\ncolor: #fff!important;\r\n    background-color: black;\t\r\n}\r\n\r\n.w3-padding-32 {\r\n    padding-top: 13px!important;\r\n    padding-bottom: 2px!important;\r\n}\r\n\r\n.w3-light-grey, .w3-hover-light-grey:hover, .w3-light-gray, .w3-hover-light-gray:hover {\r\n    color: #fff!important;\r\n    background-color: #131212!important;\r\n}\r\n\r\n.modal-title {\r\n    margin-bottom: 0;\r\n    line-height: 0.5;\r\n    font-size: 16px;\r\n}\r\n\r\n.home_icons_css{\r\nfont-size: 19px;\r\nfont-weight: 600;\r\n/* text-align: left; */\r\nmargin-top: 7px;\r\ncolor: #131212;\r\n}\r\n\r\n.css_sub_div {\r\n    \r\n    padding: 23px 9px 1px 4px;\r\n    border: 1px solid;\r\n    border-radius: 6px;\r\n}\r\n\r\n.css_sub_div {\r\n   \r\n    padding: 23px 9px 1px 4px;\r\n    border: 1px solid #e6dae0;\r\n    border-radius: 1px;\r\n    box-shadow: 3px 3px #f5e6ed;\r\n}\r\n\r\n.home_icons_css::after{\r\n    content: \"\";\r\n    height: 3px;\r\n    margin-bottom: 13px;\r\n    width: 57px;\r\n    margin-top: -3px;\r\n    display: block; \r\n    background: #e779ac;\r\n}\r\n\r\n.home_icons_css:hover:after {\r\n    width: 120px;\r\n    height: 3px;\r\n    background: #e779ac;\r\n    transition: width 0.5s;\r\n  }\r\n  \r\n"

/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row mar_t2\">\r\n        <div class=\"col-md-3\">\r\n                <a (click)=\"fareEstimetion()\">\r\n                        <div class=\"home_icons_css\">Fare Estimation</div>\r\n                    </a>\r\n            <div class=\"text-center css_sub_div\">\r\n                      <a (click)=\"fareEstimetion()\">\r\n                          <img width=\"75\"  src=\"../assets/fare-eastimate.png\" style=\"cursor: pointer;\">\r\n                      </a>\r\n                      <div class=\"mb-5\">\r\n                          \r\n                          <h1 class=\"h7\"> A statement of the approximate cost of work to be done, such as a shipping items</h1>\r\n                      </div>\r\n                  </div>\r\n        </div>\r\n        \r\n        <div class=\"col-md-3\">\r\n                <a (click)=\"fareEstimetion()\">\r\n                        <div class=\"home_icons_css\">New Shipping</div>\r\n                    </a>\r\n            <div class=\"text-center css_sub_div\">\r\n                      <a (click)=\"fareEstimetion()\">\r\n                          <img width=\"75\"  src=\"../assets/new_shipping.png\" style=\"cursor: pointer;\">\r\n                      </a>\r\n                      <div class=\"mb-5\">\r\n                          \r\n                          <h1 class=\"h7\"> A statement of the approximate cost of work to be done, such as a shipping items</h1>\r\n                      </div>\r\n                  </div>\r\n        </div>\r\n        \r\n        <div class=\"col-md-3\">\r\n                <a (click)=\"fareEstimetion()\">\r\n                        <div class=\"home_icons_css\">Stroes Shipping</div>\r\n                    </a>\r\n            <div class=\"text-center css_sub_div\">\r\n                      <a (click)=\"fareEstimetion()\">\r\n                          <img width=\"75\"  src=\"../assets/Stroes_Shipping.png\" style=\"cursor: pointer;\">\r\n                      </a>\r\n                      <div class=\"mb-5\">\r\n                         \r\n                          <h1 class=\"h7\"> A statement of the approximate cost of work to be done, such as a shipping items</h1>\r\n                      </div>\r\n                  </div>\r\n        </div>\r\n        \r\n        <div class=\"col-md-3\">\r\n                <a (click)=\"fareEstimetion()\">\r\n                        <div class=\"home_icons_css\">Job Post</div>\r\n                    </a>\r\n            <div class=\"text-center css_sub_div\">\r\n                      <a (click)=\"fareEstimetion()\">\r\n                          <img width=\"75\"  src=\"../assets/job_post.png\">\r\n                      </a>\r\n                      <div class=\"mb-5\">\r\n                         \r\n                          <h1 class=\"h7\"> A statement of the approximate cost of work to be done, such as a shipping items</h1>\r\n                      </div>\r\n                  </div>\r\n        </div>\r\n    </div>\t\r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    <div class=\"col-lg-12 \">\r\n        <div class=\"mar_t2\"  *ngIf=\"show\">\r\n            <app-fareestimate></app-fareestimate>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    \r\n    "

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/fail/fail.component.css":
/*!*****************************************!*\
  !*** ./src/app/fail/fail.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fail/fail.component.html":
/*!******************************************!*\
  !*** ./src/app/fail/fail.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  fail works!\n</p>\n"

/***/ }),

/***/ "./src/app/fail/fail.component.ts":
/*!****************************************!*\
  !*** ./src/app/fail/fail.component.ts ***!
  \****************************************/
/*! exports provided: FailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailComponent", function() { return FailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FailComponent = /** @class */ (function () {
    function FailComponent() {
    }
    FailComponent.prototype.ngOnInit = function () {
    };
    FailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fail',
            template: __webpack_require__(/*! ./fail.component.html */ "./src/app/fail/fail.component.html"),
            styles: [__webpack_require__(/*! ./fail.component.css */ "./src/app/fail/fail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FailComponent);
    return FailComponent;
}());



/***/ }),

/***/ "./src/app/fareestimate/fareestimate.component.css":
/*!*********************************************************!*\
  !*** ./src/app/fareestimate/fareestimate.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 300px;\r\n}\r\n.bor_btm{\r\n    border-bottom: 1px #191717 dotted;\t\r\n    min-height: 23px;\r\n}\r\n.btn-eazyship {\r\n  background-color: rgb(211,15,108);\r\n  color: white;\r\n  margin-bottom: 12px;\r\n}"

/***/ }),

/***/ "./src/app/fareestimate/fareestimate.component.html":
/*!**********************************************************!*\
  !*** ./src/app/fareestimate/fareestimate.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!-- <button data-toggle=\"modal\" data-target=\"#from\"> add from location</button> -->\r\n<div class=\"card\">\r\n<div class=\"card-header\"><b>Fare Estimation</b></div>\r\n<!-- <button type=\"button\"   style=\"margin-top:90px\"data-toggle=\"modal\" data-target=\"#from\" class=\"btn btn-primary\" style=\"text-align:center\">Add From LOcation</button><br>\r\n< -->\r\n<div class=\"card-body\">\r\n<div class=\"row\">\r\n\r\n<div class=\"col col-sm-12 col-md-12 col-xl-12 col-lg-12\">\r\n<div class=\"row\">\r\n <div class=\"col-md-4\" >\r\n\t  <label>From location </label>\r\n        <input placeholder=\"search for From location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\"  (fromsubmit)=\"handleAddressChange($event)\"type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\r\n      </div>\r\n<div class=\"col-md-4\" >\r\n<app-tofare></app-tofare>\r\n</div>\r\n<div class=\"col-md-4\" >\r\n\t\t\t\t     <label for=\"width\">Shipping Timeline</label>\r\n                       <select  class=\"form-control\" name=\"Timeline\"  [(ngModel)]=\"model.Timeline\" \t(change)=\"onChanged()\"  >\r\n   <option name=\"Timeline\" [ngValue]=\"Timeline\" *ngFor=\"let Timeline of paymentmode\" > {{Timeline.title}}</option> </select>\r\n\t</div>\t\t\t\r\n\t\t\t \r\n\r\n</div>\r\n\t</div>\r\n\t<div class=\"col col-sm-12 col-md-12 col-xl-12\" >\r\n\t  <form name=\"form\" (ngSubmit)=\"f.form.valid &&  kms()\" #f=\"ngForm\" >\r\n                \r\n\t\t\t  \r\n\t\t\t  <h4><strong>Payment Mode</strong></h4>\r\n\r\n\t\t\t   <div class=\"row mar_t2\" style=\"    display: flex;justify-content: space-around;\">\r\n\t\t\t    \r\n                     <div *ngFor=\"let data of vehicleList\"> \r\n\t\t\t\t\t\r\n\t\t\t\t\t<div  *ngIf=\"data.vehicleType =='Two_Wheeler'\">\r\n\r\n\t\t\t\t\t<img  src=\"assets/Mopad_1.png\" (click)=\"selectVehicle(data)\"[style.border]=\"twoweel ? '2px solid #3f1a49' : 'none'\"  [style.border-radius]=\"twoweel ? '6px' : '0px'\" [style.background]=\"twoweel ? '#dbcfdeb3' : 'white'\"     [style.padding]=\"twoweel ? '14px' : '0px'\"         >\r\n\t\t         </div>  \r\n\t\t        <div  *ngIf=\"data.vehicleType =='Three_Wheeler'\" > \t\r\n\t\t\t\t<img  (click)=\"selectVehicle(data)\"src=\"assets/Truck Mini_1.png\"[style.border]=\"threeweel ? '2px solid #3f1a49' : 'none'\"  [style.border-radius]=\"threeweel ? '6px' : '0px'\" [style.background]=\"threeweel ? '#dbcfdeb3' : 'white'\"     [style.padding]=\"threeweel ? '14px' : '0px'\" (click)=\"selectVehicle(data)\">\r\n               </div> \r\n               <div   *ngIf=\"data.vehicleType =='Four_Wheeler'\">\r\n\t\t\t   <img  src=\"assets/Truck_1.png\" (click)=\"selectVehicle(data)\" [style.border]=\"fourweel\t ? '2px solid #3f1a49' : 'none'\"  [style.border-radius]=\"fourweel ? '6px' : '0px'\" [style.background]=\"fourweel ? '#dbcfdeb3' : 'white'\"     [style.padding]=\"fourweel ? '14px' : '0px'\">\r\n\t           </div> \t\r\n\t\t\t   \r\n                </div>\r\n\t\t\t\t</div>\r\n\t\t\t \r\n\t\t\t   \r\n\t\t\t    <div class=\"form-group\" style=\"text-align:center\" >\r\n                        <button class=\"btn button-color btn-md\" style=\"background-color:rgb(211,15,108);color:white;margin-bottom: 12px;\">Calculate</button>\r\n                    </div>\r\n                </form>\r\n\t\r\n\t\r\n\t</div>\r\n</div>\r\n</div>\r\n\r\n<!-- <div >\r\n\t <label> {{subtotal+timelinebased}}</label>\r\n\t    hello\r\n\t  \r\n\t  </div> -->\r\n\t  \r\n\t  \r\n\t  \r\n\t  \r\n  <div class=\"modal fade\" id=\"from\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n    \r\n      <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\" *ngIf=\"from\">\r\n\t\t\t\t<h5 class=\"modal-title\">add from location</h5>\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t  <span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-header\" *ngIf=\"to\">\r\n\t\t\t\t<h5 class=\"modal-title\">add To location</h5>\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t  <span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n        <div class=\"modal-body\">\r\n\t\t\t <div class=\"form-group\" >\r\n\t  <label>From location </label>\r\n        <input placeholder=\"search for From location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\r\n      </div>\r\n\r\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n</agm-map>\r\n\t\t</div>\r\n\t\t\t <div class=\"modal-body\"  *ngIf=\"from\">\r\n          <button type=\"button\" class=\"btn btn-primary\"(click)=\"fromsubmit()\">from submit</button>\r\n        </div>\r\n\t\t<div  *ngIf=\"to\">\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"tosubmit()\"> tosubmit</button>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n    \r\n  \r\n  \r\n  \r\n  \r\n  <div class=\"modal fade\" id=\"dataoffare\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n    \r\n      <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h5 class=\"modal-title\">Fare Details</h5>\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t  <span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>  \r\n        <div class=\"modal-body\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-6\">\r\n\t\tTotal Distance<div class=\"bor_btm\">{{dista}}</div></div>\r\n\t\t<div class=\"col-md-6\">\r\n\t\tTotal Duration<div class=\"bor_btm\">{{durat}}</div></div>\r\n\t\t</div>\r\n\t\t<div class=\"row mar_t2\">\r\n\t\t\t\t<div class=\"col-md-6\">\r\n\t\tVehicle Type <div class=\"bor_btm\">{{kl}}</div></div>\r\n\t\t\t <div class=\"col-md-6\"> Cost  of Delivery<div class=\"bor_btm\"> <strong>{{total}}</strong></div>\r\n\t</div>\r\n\t\t\t </div>\t\r\n\t\t\t\r\n\t\t<div class=\"col-md-12 mar_t2 text-center\">\r\n\t\t\t<button class=\"btn btn-eazyship btn-sm \" (click)=\"addToShipping()\">continue to shipping</button>\r\n      </div> </div>\r\n      \r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n"

/***/ }),

/***/ "./src/app/fareestimate/fareestimate.component.ts":
/*!********************************************************!*\
  !*** ./src/app/fareestimate/fareestimate.component.ts ***!
  \********************************************************/
/*! exports provided: FareestimateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FareestimateComponent", function() { return FareestimateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FareestimateComponent = /** @class */ (function () {
    function FareestimateComponent(authservice, mapsAPILoader, ngZone, router) {
        var _this = this;
        this.authservice = authservice;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.router = router;
        this.track = false;
        this.shipps = false;
        this.contacty = false;
        this.model = {};
        this.shippingObject = {};
        this.vehicle = {};
        this.jjjj = false;
        this.twoweel = false;
        this.threeweel = false;
        this.fourweel = false;
        this.isLoginError = false;
        this.x = [];
        this.dirty = false;
        this.dir = undefined;
        this.from = true;
        this.to = false;
        localStorage.removeItem('dir');
        localStorage.removeItem('distancee');
        localStorage.removeItem('durationeee');
        localStorage.removeItem('fromlat');
        localStorage.removeItem('fromlng');
        localStorage.removeItem('ch');
        localStorage.removeItem('tolat');
        localStorage.removeItem('tolng');
        this.userlocation();
        /*  this.createshippaymentmodes();
       this.createshippayat(); */
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    console.log(place);
                    localStorage.setItem('fromfarelocation', place.formatted_address);
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.lat = place.geometry.location.lat();
                    /*   console.log(this.lat);  */
                    localStorage.setItem('fromfarelat', _this.lat);
                    /*   this.fromlat=this.latitude; */
                    _this.lng = place.geometry.location.lng();
                    /* 		 console.log( this.lng); */
                    localStorage.setItem('fromfarelng', _this.lng);
                    /*  this.fromlong=this.longiitude; */
                    _this.zoom = 12;
                });
            });
        });
        /*  this.findMe(); */
        /* 	this.chaitu(); */
        /*  if (window.navigator && window.navigator.geolocation) {
             console.log('ll')
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.geolocationPosition = position,
                    console.log(position)
            },
            error => {
                switch (error.code) {
                    case 1:
                        console.log('Permission Denied');
                        break;
                    case 2:
                        console.log('Position Unavailable');
                        break;
                    case 3:
                        console.log('Timeout');
                        break;
                }
            }
        );
    }; */
    }
    FareestimateComponent.prototype.onChanged = function () {
        this.timelinebased.amount = this.model.Timeline.amount;
        localStorage.setItem('timelinebasedfare', JSON.stringify(this.model.Timeline));
        this.calculateAndDisplayRoute();
    };
    FareestimateComponent.prototype.list = function () {
        var _this = this;
        this.authservice.VehicalList()
            .subscribe(function (data) {
            _this.vehicleList = data.response;
            _this.selectVehicle(_this.vehicleList[0]);
            localStorage.setItem('vehicleListfare', _this.vehicleList[0]);
        }, function (err) {
            _this.isLoginError = true;
        });
    };
    FareestimateComponent.prototype.paymentmodeyyyyy = function () {
        var _this = this;
        this.authservice.paymentmode()
            .subscribe(function (data) {
            _this.paymentmode = data.response;
            _this.model.Timeline = _this.paymentmode[0];
            _this.timelinebased = _this.paymentmode[0].amount;
            localStorage.setItem('timelinebasedfare', JSON.stringify(_this.model.Timeline));
        }, function (err) {
            _this.isLoginError = true;
        });
    };
    FareestimateComponent.prototype.createshippaymentmodes = function () {
        this.authservice.createshippaymentmodes()
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    FareestimateComponent.prototype.fromsubmit = function () {
        /*    console.log( this.lat);
             console.log( this.lng); */
        this.fromlat = this.lat;
        this.fromlng = this.lng;
        $('#from').modal('hide');
    };
    FareestimateComponent.prototype.tosubmit = function () {
        /*   console.log( this.lat);
            console.log( this.lng); */
        this.tolat = localStorage.getItem('tofarelat');
        this.tolng = localStorage.getItem('tofarelng');
        this.dir = {
            origin: { lat: JSON.parse(this.lat), lng: JSON.parse(this.lng) },
            destination: { lat: JSON.parse(this.tolat), lng: JSON.parse(this.tolng) }
        };
        console.log(this.dir);
        this.calculateAndDisplayRoute();
    };
    FareestimateComponent.prototype.calculateAndDisplayRoute = function () {
        /* 	console.log('calculateAndDisplayRoute'); */
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        console.log(this.dir);
        directionsService.route({
            origin: this.dir.origin,
            destination: this.dir.destination,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                /*   console.log(response); */
                directionsDisplay.setDirections(response);
                console.log(response.routes["0"].legs["0"].distance.value);
                console.log(response.routes["0"].legs["0"].duration.text);
                this.distanceee = response.routes["0"].legs["0"].distance.value;
                this.durationeee = response.routes["0"].legs["0"].duration.text;
                localStorage.setItem('distancee', this.distanceee);
                localStorage.setItem('durationeee', this.durationeee);
                /*   console.log(this.distanceee);
                  
                console.log(this.distanceee);   */
                this.distancee = localStorage.getItem('distancee');
                this.durationeee = localStorage.getItem('durationeee');
                /* 	  console.log(this.distancee);  */
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
            /*   console.log(this.distanceee);
              
                  console.log(this.distanceee);  */
        });
    };
    FareestimateComponent.prototype.addToShipping = function () {
        this.shippingObject = {
            "fromlatfare": localStorage.getItem('fromfarelat'),
            "tolatfare": localStorage.getItem('tofarelat'),
            "tolngfare": localStorage.getItem('tofarelng'),
            "fromlngfare": localStorage.getItem('fromfarelng'),
            "timelinefare": localStorage.getItem('timelinebasedfare'),
            "distafare": localStorage.getItem('distafare'),
            "duratfare": localStorage.getItem('duratfare'),
            "fromfarelocation": localStorage.getItem('fromfarelocation'),
            "tofarelocation": localStorage.getItem('tofarelocation'),
            "klfare": localStorage.getItem('klfare'),
            "ratefare": localStorage.getItem('ratefare'),
            "totalfare": localStorage.getItem('totalfare'),
            "timelinebasedfare": JSON.parse(localStorage.getItem('timelinebasedfare')),
        };
        console.log(this.shippingObject);
        $('#dataoffare').modal('hide');
        //	localStorage.setItem('objectFromFare', this.shippingObject);
        alert(this.shippingObject);
        this.router.navigate(["shippingdata"], { queryParams: { term: JSON.stringify(this.shippingObject) } });
    };
    FareestimateComponent.prototype.kms = function () {
        if (this.model.Timeline == '' && this.model.vehicleType == '') {
            alert('not selt');
        }
        else {
            console.log('this.mocccccccccccccdel');
            console.log(this.model);
            this.dista = localStorage.getItem('distancee');
            alert(this.dista);
            this.dista = this.dista / 1000;
            localStorage.setItem('distafare', this.dista);
            alert(this.dista);
            this.durat = localStorage.getItem('durationeee');
            localStorage.setItem('duratfare', this.durat);
            /*   console.log(this.dista);
             alert(this.dista)

        
               console.log(this.durat); */
            this.kl = this.model.vehicleType.title;
            localStorage.setItem('klfare', this.kl);
            this.rate = this.model.vehicleType.ratePerKm;
            localStorage.setItem('ratefare', this.rate);
            console.log(this.rate);
            this.timelinebased = this.model.Timeline;
            console.log(this.timelinebased);
            localStorage.setItem('timelinebasedfare', JSON.stringify(this.timelinebased));
            //	this.timelinebased = JSON.parse(this.timelinebased);
            console.log(this.timelinebased);
            this.subtotal = (this.dista * (this.rate));
            console.log(this.subtotal);
            localStorage.setItem('subtotalfare', this.subtotal);
            this.total = this.subtotal + this.timelinebased.amount;
            console.log(this.total);
            localStorage.setItem('totalfare', this.total);
            console.log(this.total);
            this.jjjj = true;
            $('#dataoffare').modal('show');
        }
    };
    FareestimateComponent.prototype.selectVehicle = function (vehicle) {
        localStorage.setItem('vehicleListfare', vehicle);
        /*   console.log(vehicle);  */
        if (vehicle.vehicleType == 'Two_Wheeler') {
            this.twoweel = true;
            this.threeweel = false;
            this.fourweel = false;
            this.model.vehicleType = vehicle;
            alert("its a two wheeler its cost is 10rs per km");
            localStorage.setItem('klfare', vehicle.vehicleType);
        }
        else if (vehicle.vehicleType == 'Three_Wheeler') {
            alert("its a three wheeler its cost is 10rs per km");
            this.twoweel = false;
            this.threeweel = true;
            this.fourweel = false;
            this.model.vehicleType = vehicle;
            localStorage.setItem('klfare', vehicle.vehicleType);
        }
        else {
            alert("its a four wheeler its cost is 10rs per km");
            this.twoweel = false;
            this.threeweel = false;
            this.fourweel = true;
            this.model.vehicleType = vehicle;
            localStorage.setItem('klfare', vehicle.vehicleType);
        }
        /* this.selectedVehicle = vehicle;
            console.log(JSON.stringify(this.selectedVehicle)); */
        /* $scope.calculateTotal(); */
    };
    FareestimateComponent.prototype.add = function () {
        this.from = false;
        this.to = true;
    };
    FareestimateComponent.prototype.ngOnInit = function () {
        this.list();
        this.paymentmodeyyyyy();
    };
    /*  	  chaitu(){
        if (navigator.geolocation.getCurrentPosition) {
                console.log('vvffffv');
        navigator.geolocation.getCurrentPosition((position) => {
            this.showPosition(position);
            
            showPosition(position) {
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
    console.log(this.currentLong );
        let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.panTo(location);
    
        if (!this.marker) {
          this.marker = new google.maps.Marker({
            position: location,
            map: this.map,
            title: 'Got you!'
          });
        }
        else {
          this.marker.setPosition(location);
        }
            }
            
          }
          )
    }else {
          alert("Geolocation is not supported by this browser.");
        }
          } */
    /*
  findMe() {
      console.log('ldddll');
      var options = {
          
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
     console.log('chaieeetu');
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
     console.log('chaidddtu');
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
    console.log('chaitu');
  } */
    FareestimateComponent.prototype.userlocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            /*   console.log('ccchh'); */
            navigator.geolocation.getCurrentPosition(function (p) {
                _this.lat = p.coords.latitude;
                /* 	 console.log( this.lat); */
                _this.lng = p.coords.longitude;
                /*   console.log( this.lng); */
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("search"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FareestimateComponent.prototype, "searchElementRef", void 0);
    FareestimateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fareestimate',
            template: __webpack_require__(/*! ./fareestimate.component.html */ "./src/app/fareestimate/fareestimate.component.html"),
            styles: [__webpack_require__(/*! ./fareestimate.component.css */ "./src/app/fareestimate/fareestimate.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FareestimateComponent);
    return FareestimateComponent;
}());



/***/ }),

/***/ "./src/app/hhh/hhh.component.css":
/*!***************************************!*\
  !*** ./src/app/hhh/hhh.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hhh/hhh.component.html":
/*!****************************************!*\
  !*** ./src/app/hhh/hhh.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  hhh works!\n</p>\n"

/***/ }),

/***/ "./src/app/hhh/hhh.component.ts":
/*!**************************************!*\
  !*** ./src/app/hhh/hhh.component.ts ***!
  \**************************************/
/*! exports provided: HhhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HhhComponent", function() { return HhhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HhhComponent = /** @class */ (function () {
    function HhhComponent() {
    }
    HhhComponent.prototype.ngOnInit = function () {
    };
    HhhComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hhh',
            template: __webpack_require__(/*! ./hhh.component.html */ "./src/app/hhh/hhh.component.html"),
            styles: [__webpack_require__(/*! ./hhh.component.css */ "./src/app/hhh/hhh.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HhhComponent);
    return HhhComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {\r\n    color: #555;\r\n    background-color: #c39e9e;\r\n}\r\n\r\n.wrapper {\r\n    height: calc(100vh - 0rem);\r\n    background-color: #e8e8e8;\r\n}\r\n\r\na, a:hover{\r\n    color: #E91E63;\r\n    text-decoration: none\r\n}\r\n\r\n.h-100vh {\r\n    height: calc(100vh - 0rem);\r\n}\r\n\r\n.h7{\r\n    font-size: 0.87rem;\r\n    font-weight: 400;\r\n}\r\n\r\n.h8{\r\n    font-size: 0.78rem;\r\n    font-weight: 400;\r\n}\r\n\r\n.mx-6{\r\n    margin-left: 4rem;\r\n    margin-right: 4rem;\r\n}\r\n\r\n.carousel-control-prev, .carousel-control-next{\r\n    height: 3rem;\r\n    width: 3rem;\r\n    border-radius: 50%;\r\n    background-color:#f1427d;\r\n    margin-top: auto;\r\n    margin-bottom: auto\r\n}\r\n\r\n.form-search, .btn-search, .form-search:placeholder-shown{\r\n    background-color: #ffecf2;\r\n    border-color: #ffdbde;\r\n   \r\n}\r\n\r\n.form-search::-webkit-input-placeholder{\r\n    color: #f89ca5\r\n}\r\n\r\n.form-search::-ms-input-placeholder{\r\n    color: #f89ca5\r\n}\r\n\r\n.form-search::placeholder{\r\n    color: #f89ca5\r\n}\r\n\r\n.form-search:focus{\r\n    color: #dc3545;         \r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .w-300{\r\n        max-width: 33rem;\r\n        padding: 6rem 0;\r\n        background-color: #ffffff\r\n    }\r\n    .w-300 img{\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n        height: 12.7rem;\r\n    }\r\n    .w-300 .carousel-item{\r\n        padding: 0 4rem;\r\n    }\r\n    .w3-white, .w3-hover-white:hover {\r\n        color: #000!important;\r\n        background-color: #ffffff0a!important;\r\n    }\r\n}\r\n\r\n.navbar{\r\n    background: #0c73cc !important;\r\n}\r\n\r\n.dropdown{\r\n    border-radius:0;\r\n    border:0;\r\n}\r\n\r\n.dropdown-menu{\r\n    background: #0c73cc;\r\n    border:0;\r\n    top:80%;\r\n    border-radius:0px 0px 5px 5px;\r\n}\r\n\r\n.dropdown-item:hover{\r\n    background:#085ca5;\r\n    color:#fff;\r\n}\r\n\r\n.dropdown-menu a{\r\n    color:#fff;\r\n}\r\n\r\n.navbar .nav-item .nav-link{\r\n    color:#eee !important; \r\n    \r\n}\r\n\r\n.navbar .nav-item .nav-link:hover .navbar .nav-item .nav-link{\r\n    color:red !important;\r\n    \r\n}\r\n\r\n.carousel-control-prev{\r\n    height: 3rem;\r\n    width: 3rem;\r\n    z-index: 0;\r\n    border-radius: 50%;\r\n    background-color: #f1427d;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}\r\n\r\n.carousel-control-next{\r\n    height: 3rem;\r\n    width: 3rem;\r\n    z-index: 0;\r\n    border-radius: 50%;\r\n    background-color: #f1427d;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}\r\n\r\n.footer_css{\r\n\t\r\ncolor: #fff!important;\r\n    background-color: black;\t\r\n}\r\n\r\n.w3-padding-32 {\r\n    padding-top: 13px!important;\r\n    padding-bottom: 2px!important;\r\n}\r\n\r\n.w3-light-grey, .w3-hover-light-grey:hover, .w3-light-gray, .w3-hover-light-gray:hover {\r\n    color: #fff!important;\r\n    background-color: #131212!important;\r\n}\r\n\r\n.modal-title {\r\n    margin-bottom: 0;\r\n    line-height: 0.5;\r\n    font-size: 16px;\r\n}\r\n\r\n.home_icons_css{\r\nfont-size: 19px;\r\nfont-weight: 600;\r\n/* text-align: left; */\r\nmargin-top: 7px;\r\ncolor: #131212;\r\n}\r\n\r\n.css_sub_div {\r\n    padding: 23px 9px 1px 4px;\r\n    border: 1px solid #e6dae0;\r\n    border-radius: 1px;\r\n    box-shadow: 3px 3px #f5e6ed;\r\n}\r\n\r\n.class_img {\r\n    border-bottom: 2px solid #e779ac;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n<nav class=\"navbar navbar-default\" style=\"background-color: #DE6262;\r\nborder-color: #DE6262;\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"#\" style=\"color:white\">Eazyshipp</a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"active\"><a href=\"#\" style=\"color:white\">Home</a></li>\r\n      <li><a href=\"#\" style=\"color:white\">Page 1</a></li>\r\n      <li><a href=\"#\" style=\"color:white\">Page 2</a></li>\r\n      <li><a href=\"#\" style=\"color:white\">Page 3</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n  \r\n<div class=\"container\">\r\n  <h3>Basic Navbar Example</h3>\r\n  <p>A navigation bar is a navigation header that is placed at the top of the page.</p>\r\n</div> -->\r\n\r\n<!-- <div class=\"w3-teal\">\r\n  <button class=\"w3-button w3-teal w3-xlarge\" (click)=\"w3_open()\">☰</button>\r\n  <div class=\"w3-container\">\r\n    <h1>My Page</h1>\r\n  </div>\r\n</div> -->\r\n<app-homenavbar></app-homenavbar>\r\n\r\n\r\n\r\n<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\r\n  <!-- Indicators -->\r\n  <ul class=\"carousel-indicators\">\r\n    <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\r\n    <li data-target=\"#demo\" data-slide-to=\"1\"></li>\r\n    <li data-target=\"#demo\" data-slide-to=\"2\"></li>\r\n  </ul>\r\n  \r\n  <!-- The slideshow -->\r\n  <div class=\"carousel-inner\">\r\n\t\t  <div class=\"carousel-item active\">\r\n\t\t <div class=\"row class_img\"><img src=\"../assets/HAND_COROSEL_PHOTO.png\" class=\"img-fluid\" alt=\"Eazyshipimg\"><div class=\"d-flex align-items-center flex-column justify-content-center\"><h1 class=\"class_text\">Eazyshipp to reach</h1>\r\n\t\t  <p ><strong>Lorem Ipsum is simply dummy text of the printing</strong></p> </div></div>\r\n\t  </div>\r\n\t  <div class=\"carousel-item\">\r\n\t\t  \r\n\t\t  <div class=\"row class_img\"><img style=\"height: 34rem;\" class=\"img-fluid\" src=\"../assets/mobile_navigation.png\" alt=\"Chicago\"><div class=\"d-flex align-items-center flex-column justify-content-center\"><h1 class=\"class_text\">Eazyshipp to reach</h1>\r\n\t\t\t  <p ><strong>Lorem Ipsum is simply dummy text of the printing</strong></p> </div></div>\r\n\t\t</div>\r\n\t\t\r\n\t\t  \r\n\t\t</div>\r\n  \r\n  <!-- Left and right controls -->\r\n  <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\"></span>\r\n  </a>\r\n  <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\"></span>\r\n  </a>\r\n</div>\r\n<div class=\"container\">\r\n<div class=\"row mar_t2\" style=\"margin-bottom: 90px;\">\r\n\t<div class=\"col-md-3\">\r\n\t\t<div class=\"text-center css_sub_div\">\r\n                  <a (click)=\"fareEstimetion()\">\r\n                      <img width=\"75\"  src=\"../assets/fare-eastimate.png\" style=\"cursor: pointer;\">\r\n                  </a>\r\n                  <div class=\"mb-5\">\r\n                      <a (click)=\"fareEstimetion()\">\r\n                          <div class=\"home_icons_css\">Fare Estimation</div>\r\n                      </a>\r\n                      <h1 class=\"h7\"> A statement of the approximate cost of work to be done, such as a shipping items</h1>\r\n                  </div>\r\n              </div>\r\n\t</div>\r\n\t\r\n\t<div class=\"col-md-3\">\r\n\t\t<div class=\"text-center css_sub_div\">\r\n                  <a >\r\n                      <img width=\"75\"  src=\"../assets/new_shipping.png\" style=\"cursor: pointer;\">\r\n                  </a>\r\n                  <div class=\"mb-5\">\r\n                      <a (click)=\"Shipping()\">\r\n                          <div class=\"home_icons_css\">New Shipping</div>\r\n                      </a>\r\n                      <h1 class=\"h7\"> A statement of the approximate cost of work to be done, such as a shipping items</h1>\r\n                  </div>\r\n              </div>\r\n\t</div>\r\n\t\r\n\t<div class=\"col-md-3\">\r\n\t\t<div class=\"text-center css_sub_div\">\r\n                  <a >\r\n                      <img width=\"75\"  src=\"../assets/Stroes_Shipping.png\" style=\"cursor: pointer;\">\r\n                  </a>\r\n                  <div class=\"mb-5\">\r\n                      <a (click)=\"Stores()\">\r\n                          <div class=\"home_icons_css\">Stores Shipping</div>\r\n                      </a>\r\n                      <h1 class=\"h7\"> A statement of the approximate cost of work to be done, such as a shipping items</h1>\r\n                  </div>\r\n              </div>\r\n\t</div>\r\n\t\r\n\t<div class=\"col-md-3\">\r\n\t\t<div class=\"text-center css_sub_div\">\r\n                  <a >\r\n                      <img width=\"75\"  src=\"../assets/job_post.png\">\r\n                  </a>\r\n                  <div class=\"mb-5\">\r\n                      <a (click)=\"Job()\">\r\n                          <div class=\"home_icons_css\">Job Post</div>\r\n                      </a>\r\n                      <h1 class=\"h7\"> A statement of the approximate cost of work to be done, such as a shipping items</h1>\r\n                  </div>\r\n              </div>\r\n\t</div>\r\n</div>\t\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"col-lg-12 \">\r\n\t<div class=\"mar_t2\"  *ngIf=\"show\">\r\n\t\t<app-fareestimate></app-fareestimate>\r\n\t  </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- Page content -->\r\n<!-- <div class=\"w3-content\" style=\"max-width:1100px\">\r\n\r\n  \r\n  <div class=\"w3-row w3-padding-64\" id=\"about\">\r\n    <div class=\"w3-col m6 w3-padding-large w3-hide-small\">\r\n     <img src=\"https://i.ibb.co/pyy0CHQ/CF043988.png\" class=\"w3-round w3-image w3-opacity-min\" alt=\"Table Setting\" width=\"600\" height=\"750\">\r\n    </div>\r\n\r\n    <div class=\"w3-col m6 w3-padding-large\">\r\n      <h1 class=\"w3-center\">About Auto</h1><br>\r\n      <h5 class=\"w3-center\">Tradition since 1889</h5>\r\n      <p class=\"w3-large\">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span class=\"w3-tag w3-light-grey\">seasonal</span> ingredients.</p>\r\n      <p class=\"w3-large w3-text-grey w3-hide-medium\">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n    </div>\r\n  </div>\r\n  \r\n  <hr>\r\n  \r\n  \r\n  <div class=\"w3-row w3-padding-64\" id=\"menu\">\r\n    <div class=\"w3-col l6 w3-padding-large\">\r\n      <h1 class=\"w3-center\">Our Menu</h1><br>\r\n      <h4>Bread Basket</h4>\r\n      <p class=\"w3-text-grey\">Assortment of fresh baked fruit breads and muffins 5.50</p><br>\r\n    \r\n      <h4>Honey Almond Granola with Fruits</h4>\r\n      <p class=\"w3-text-grey\">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p><br>\r\n    \r\n      <h4>Belgian Waffle</h4>\r\n      <p class=\"w3-text-grey\">Vanilla flavored batter with malted flour 7.50</p><br>\r\n    \r\n      <h4>Scrambled eggs</h4>\r\n      <p class=\"w3-text-grey\">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p><br>\r\n    \r\n      <h4>Blueberry Pancakes</h4>\r\n      <p class=\"w3-text-grey\">With syrup, butter and lots of berries 8.50</p>    \r\n    </div>\r\n    \r\n    <div class=\"w3-col l6 w3-padding-large\">\r\n      <img src=\"/w3images/tablesetting.jpg\" class=\"w3-round w3-image w3-opacity-min\" alt=\"Menu\" style=\"width:100%\">\r\n    </div>\r\n  </div>\r\n\r\n  <hr>\r\n\r\n  \r\n  <div class=\"w3-container w3-padding-64\" id=\"contact\">\r\n    <h1>Contact</h1><br>\r\n    <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>\r\n    <p class=\"w3-text-blue-grey w3-large\"><b>Catering Service, 42nd Living St, 43043 New York, NY</b></p>\r\n    <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>\r\n    <form action=\"/action_page.php\" target=\"_blank\">\r\n      <p><input class=\"w3-input w3-padding-16\" type=\"text\" placeholder=\"Name\" required name=\"Name\"></p>\r\n      <p><input class=\"w3-input w3-padding-16\" type=\"number\" placeholder=\"How many people\" required name=\"People\"></p>\r\n      <p><input class=\"w3-input w3-padding-16\" type=\"datetime-local\" placeholder=\"Date and time\" required name=\"date\" value=\"2017-11-16T20:00\"></p>\r\n      <p><input class=\"w3-input w3-padding-16\" type=\"text\" placeholder=\"Message \\ Special requirements\" required name=\"Message\"></p>\r\n      <p><button class=\"w3-button w3-light-grey w3-section\" type=\"submit\">SEND MESSAGE</button></p>\r\n    </form>\r\n  </div>\r\n  \r\n\r\n</div> -->\r\n\r\n<!-- Footer -->\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.show = false;
        this.menuShow = true;
        this.menuHide = false;
        console.log(this.menuShow);
        console.log(this.menuHide);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.fareEstimetion = function () {
        this.show = true;
    };
    HomeComponent.prototype.Shipping = function () {
        this.router.navigate(['shippingdata']);
    };
    HomeComponent.prototype.Stores = function () {
        this.router.navigate(['store']);
    };
    HomeComponent.prototype.Job = function () {
        this.router.navigate(['jobsdata']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/homenavbar/homenavbar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/homenavbar/homenavbar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w3-sidebar {\r\n  height: 100%;\r\n  width: 200px;\r\n  background-color:#ddd;\r\n  position: absolute !important;\r\n  z-index: 9999999;\r\n  overflow: auto;\r\n}\r\n.w3-white, .w3-hover-white:hover {\r\n  color: #000!important;\r\n  background-color: #fff!important;\r\n  border-bottom: 2px solid #350e3f;\r\n}\r\n.fa_css{\r\n  background-color: #350e3f;\r\n  padding: 5px 9px 9px 10px;\r\n  border-radius: 18px;\r\n  font-size: 16px;\r\n  color: white;\r\n  margin-right: 8px;\r\n}\r\n.w3-bar-item-1:hover {\r\n  color: #fff!important;\r\n  background-color: #53325c!important;\r\n  text-decoration: none;\r\n}\r\n.css_navbar {\r\n  font-size: 17px;\r\n  margin-right: 12px;\r\n}\r\n.dropbtn {\r\n\r\ncolor: white;\r\n\r\nfont-size: 16px;\r\nborder: none;\r\n}\r\n.dropdown {\r\n  position: absolute;\r\n  display: inline-block;\r\nright:0px;\r\n}\r\n.dropdown-content {\r\ndisplay: none;\r\nposition: absolute;\r\nbackground-color: #f1f1f1;\r\nmin-width: 160px;\r\nbox-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\nz-index: 1;\r\n}\r\n.dropdown-content a {\r\ncolor: black;\r\npadding: 12px 16px;\r\ntext-decoration: none;\r\ndisplay: block;\r\n}\r\n.dropdown-content a:hover {background-color: #ddd;}\r\n.dropdown:hover .dropdown-content {display: block;right: -6px;}\r\n.userc-css {\r\n  font-size: 15px;\r\n  background: #350e3f;\r\n  color: #ffffff;\r\n  padding: 7px 9px 8px 10px;\r\n  margin-right: 10px;\r\n  border-radius: 50%;\r\n}"

/***/ }),

/***/ "./src/app/homenavbar/homenavbar.component.html":
/*!******************************************************!*\
  !*** ./src/app/homenavbar/homenavbar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\r\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\r\n\r\n<link href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\"\r\n  integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<div class=\"\">\r\n  <div class=\"w3-bar w3-white w3-padding\">\r\n    <a class=\"w3-bar-item w3-button\"\r\n      style=\"font-style: oblique;font-weight: 1000;color: #dc3545!important;font-size: 20px;\" (click)=\"w3_open()\"><span>\r\n        <b>☰</b><img style=\"width: 130px;margin-top: 5px;margin-left: 14px;\" src=\"../assets/pppp.png\" /></span> </a>\r\n\r\n\r\n\r\n    <div class=\"w3-right dropdown\" style=\"font-weight: 600;margin-top: 16px;margin-right: 39px;\">\r\n\r\n\r\n\r\n<img alt=\"...\" class=\"avatar border-gray\"   id=\"profilePic\" [src]=\"url\" style=\"height: 20px;width:23px;border-radius:33px\">\r\n               \r\n\t  <b>Settings</b>\r\n      <div class=\"dropdown-content\">\r\n        <a (click)=\"profile()\"><i class=\"fa fa-user userc-css\" aria-hidden=\"true\"></i>Profile</a>\r\n        <a (click)=\"logout()\"><i class=\"fa fa-sign-out userc-css\" aria-hidden=\"true\"></i>Logout</a>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"w3-sidebar w3-bar-block w3-border-right  w3-animate-left \" style=\"display:none\" id=\"mySidebar\">\r\n    <button (click)=\"w3_close()\" class=\"w3-bar-item w3-bar-item-1 w3-large\">Close <span\r\n        class=\"pull-right\">&times;</span></button>\r\n    <a (click)=\"home()\"  id=\"hom\"class=\"w3-bar-item-1 w3-bar-item w3-button\"><i class=\"fa fa-home css_navbar\"\r\n        aria-hidden=\"true\"></i>Home</a>\r\n    <a (click)=\"shipping()\" id=\"ship\"class=\"w3-bar-item-1 w3-bar-item w3-button\"><i class=\"fa fa-truck css_navbar\"\r\n        aria-hidden=\"true\"></i>Shipping</a>\r\n    <a (click)=\"store()\" id=\"store\"class=\"w3-bar-item-1 w3-bar-item w3-button\"><i class=\"fa fa-shopping-cart css_navbar\"\r\n        aria-hidden=\"true\"></i>Store to customer</a>\r\n    <a (click)=\"jobsdata()\"id=\"jobsdata\" class=\"w3-bar-item-1 w3-bar-item w3-button\"><i class=\"fa fa-tasks css_navbar\"\r\n        aria-hidden=\"true\"></i>Jobs</a>\r\n    <a (click)=\"profile()\" id=\"profile\"class=\"w3-bar-item-1 w3-bar-item w3-button\"><i class=\"fa fa-user css_navbar\" aria-hidden=\"true\"></i>Profile</a>\r\n\r\n    <a (click)=\"notifications()\"id=\"notification\" class=\"w3-bar-item-1 w3-bar-item w3-button\"><i class=\"fa fa-bell css_navbar\" aria-hidden=\"true\"></i>Notifications</a>\r\n    <a (click)=\"support()\" id=\"support\"class=\"w3-bar-item-1 w3-bar-item w3-button\"><i class=\"fa fa-life-ring css_navbar\" aria-hidden=\"true\"></i>Support</a>\r\n    <a (click)=\"about()\" id=\"about\" class=\"w3-bar-item-1 w3-bar-item w3-button\"><i class=\"fa fa-info-circle css_navbar\" aria-hidden=\"true\"></i>About</a>\r\n    <a (click)=\"invite()\" id=\"invite\"class=\"w3-bar-item-1 w3-bar-item w3-button\"><i class=\"fa fa-envelope css_navbar\" aria-hidden=\"true\"></i>Invite</a>  <a (click)=\"logout()\" class=\"w3-bar-item-1 w3-bar-item w3-button\"><i class=\"fa fa-sign-out css_navbar\" aria-hidden=\"true\"></i>LogOut</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/homenavbar/homenavbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/homenavbar/homenavbar.component.ts ***!
  \****************************************************/
/*! exports provided: HomenavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomenavbarComponent", function() { return HomenavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomenavbarComponent = /** @class */ (function () {
    function HomenavbarComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
        this.clickcolor = 'red';
        this.commonColor = 'blue';
        this.url = "../assets/max-rehkopf.png";
        this.ProfileData();
        var ch = JSON.parse(localStorage.getItem('userid'));
        this.url = this.authservice.Customer + "app/customer/" + ch + "/profilePic";
    }
    HomenavbarComponent.prototype.profile = function () {
        this.router.navigate(['profile']);
    };
    HomenavbarComponent.prototype.logout = function () {
        delete localStorage.authKey;
        delete localStorage.distafare;
        delete localStorage.distanceee;
        delete localStorage.duratfare;
        delete localStorage.fromfarelat;
        delete localStorage.fromfarelng;
        delete localStorage.fromfarelocation;
        delete localStorage.klfare;
        delete localStorage.mobile;
        delete localStorage.mobileeazy;
        delete localStorage.ratefare;
        delete localStorage.subtotalfare;
        delete localStorage.timelinebasedfare;
        delete localStorage.tofarelat;
        delete localStorage.tofarelng;
        delete localStorage.tofarelocation;
        delete localStorage.totalfare;
        delete localStorage.userid;
        delete localStorage.vehicleListfare;
        this.router.navigate(['login']);
    };
    HomenavbarComponent.prototype.ngOnInit = function () {
    };
    HomenavbarComponent.prototype.imageChanged = function () {
        var ch = JSON.parse(localStorage.getItem('userid'));
        this.url = this.authservice.Customer + "app/customer/" + ch + "/profilePic";
    };
    HomenavbarComponent.prototype.shipping = function () {
        this.router.navigate(['shippingdata']);
    };
    HomenavbarComponent.prototype.jobsdata = function () {
        this.router.navigate(['jobsdata']);
    };
    HomenavbarComponent.prototype.support = function () {
        this.router.navigate(['support']);
    };
    HomenavbarComponent.prototype.about = function () {
        this.router.navigate(['about']);
    };
    HomenavbarComponent.prototype.invite = function () {
        this.router.navigate(['invite']);
    };
    HomenavbarComponent.prototype.notifications = function () {
        this.router.navigate(['notifications']);
    };
    HomenavbarComponent.prototype.home = function () {
        this.router.navigate(['home']);
    };
    HomenavbarComponent.prototype.store = function () {
        this.router.navigate(['store']);
    };
    HomenavbarComponent.prototype.w3_open = function () {
        document.getElementById("mySidebar").style.display = "block";
    };
    HomenavbarComponent.prototype.w3_close = function () {
        document.getElementById("mySidebar").style.display = "none";
    };
    HomenavbarComponent.prototype.ProfileData = function () {
        var _this = this;
        this.authservice.CustomerProfileData()
            .subscribe(function (data) {
            _this.data = data;
            console.log(data);
            if (data.status == "success") {
                _this.details = data.response;
                _this.detailss = data.response.firstName;
                console.log(_this.detailss);
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomenavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homenavbar',
            template: __webpack_require__(/*! ./homenavbar.component.html */ "./src/app/homenavbar/homenavbar.component.html"),
            styles: [__webpack_require__(/*! ./homenavbar.component.css */ "./src/app/homenavbar/homenavbar.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomenavbarComponent);
    return HomenavbarComponent;
}());



/***/ }),

/***/ "./src/app/invite/invite.component.css":
/*!*********************************************!*\
  !*** ./src/app/invite/invite.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/invite/invite.component.html":
/*!**********************************************!*\
  !*** ./src/app/invite/invite.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-homenavbar></app-homenavbar>\r\n<p>\r\n  invite works!\r\n</p>\r\n "

/***/ }),

/***/ "./src/app/invite/invite.component.ts":
/*!********************************************!*\
  !*** ./src/app/invite/invite.component.ts ***!
  \********************************************/
/*! exports provided: InviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteComponent", function() { return InviteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InviteComponent = /** @class */ (function () {
    function InviteComponent() {
    }
    InviteComponent.prototype.ngOnInit = function () {
    };
    InviteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invite',
            template: __webpack_require__(/*! ./invite.component.html */ "./src/app/invite/invite.component.html"),
            styles: [__webpack_require__(/*! ./invite.component.css */ "./src/app/invite/invite.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InviteComponent);
    return InviteComponent;
}());



/***/ }),

/***/ "./src/app/jobs/jobs.component.css":
/*!*****************************************!*\
  !*** ./src/app/jobs/jobs.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/jobs/jobs.component.html":
/*!******************************************!*\
  !*** ./src/app/jobs/jobs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  jobs works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/jobs/jobs.component.ts":
/*!****************************************!*\
  !*** ./src/app/jobs/jobs.component.ts ***!
  \****************************************/
/*! exports provided: JobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsComponent", function() { return JobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobsComponent = /** @class */ (function () {
    function JobsComponent() {
    }
    JobsComponent.prototype.ngOnInit = function () {
    };
    JobsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jobs',
            template: __webpack_require__(/*! ./jobs.component.html */ "./src/app/jobs/jobs.component.html"),
            styles: [__webpack_require__(/*! ./jobs.component.css */ "./src/app/jobs/jobs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JobsComponent);
    return JobsComponent;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/*!*********************************************!*\
  !*** ./src/app/loader/loader.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  loader works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url(\"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css\");\n/* li a.active{\r\n\tcolor:#39be56 !important;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n  .panel-success>.panel-heading {\r\n  \r\n  \r\n  width:100%;\r\n  }\r\n}@media only screen and (max-width: 600px) {\r\n  .ch {\r\n  \r\n  \r\n  width:100%;\r\n  }\r\n}\r\n\r\n.btn_csss {\r\n  padding: 6px 8px;\r\n  background: #101010;\r\n  border: 1px solid white;\r\n  margin-left: 11px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.css_body {\r\n  background: #302a39;\r\n  height: -webkit-fill-available;\r\n}\r\n\r\n.css_mrgin_bottom {\r\n  margin-bottom: 150px;\r\n}\r\n\r\n.css_to_font{\r\n  color: white;\r\n  font-weight: lighter;\r\n \r\n}\r\n\r\n.css_user_1{\r\n  left: 48%;\r\n  top: -14%;\r\n  padding: 8px 13px;\r\n  height: 50px;\r\n  background: #e7e2ef;\r\n  width: 50px;\r\n  border-radius: 50%;\r\n  border: 1px solid #302a39;\r\n  font-size: 28px;\r\n  position: absolute;\r\n}\r\n\r\n.mar_t2{\r\n  margin-top: 20px;\r\n}\r\n.btn_css {\r\n  background: #d30f6c;\r\n  padding: 5px 15px;\r\n  margin-top: -7px;\r\n  border: none;\r\n  color: white;\r\n  border-radius: 18px;\r\n}\r\n\r\n.body_bacK{\r\n  min-height: 100vh;\r\n  background: #302a39;\r\n}\r\n\r\n.width_button {\r\n  width: 100%;\r\n}\r\n\r\n.padd_eazy {\r\n  padding: 214px 75px 67px 446px;\r\n}\r\n\r\n.card-bodt-css{\r\n  height: 400px;\r\n  line-height: 57px;\r\n}\r\n\r\n.card_csss{\r\n  border-radius: 7px;\r\n  min-height: 154px;\r\n  line-height: 36px;\r\n  margin: -55px;\r\n  z-index: 99;\r\n  box-shadow: 0px 3px 70px #302a39;\r\n}\r\n\r\n.css_inputfield {\r\n  border-radius: 23px;\r\n}\r\n\r\n.login_css_2 {\r\n      top: -10%;\r\n    border-radius: 12px;\r\n}\r\n\r\n.login_css{\r\n  text-align: center;\r\n  font-weight: lighter;\r\n}\r\n\r\n\r\n.Login_css {\r\n    border-radius: 17px;\r\n    margin-top: 18px;\r\n}\r\n\r\n.login-wrap {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n    padding: 20px 20px 150px 20px;\r\n    position: relative;\r\n}\r\n\r\n.login-header {\r\n    margin-top: 10px;\r\n   \r\n}\r\n.flex-grid {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-flex-wrap: wrap;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n} */\n.login-block{\r\n    background: #DE6262;  / fallback for old browsers /\r\nbackground: -webkit-linear-gradient(to bottom, #FFB88C, #DE6262);  / Chrome 10-25, Safari 5.1-6 /\r\nbackground: linear-gradient(to bottom, #FFB88C, #DE6262); / W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ /\r\nfloat:left;\r\nwidth:100%;\r\npadding : 50px 0;\r\n}\n.carousel-inner{border-radius:0 10px 10px 0;}\n.carousel-caption{text-align:left; left:5%;}\n.login-sec{padding: 50px 30px; position:relative;}\n.login-sec .copy-text{position:absolute; width:80%; bottom:20px; font-size:13px; text-align:center;}\n.login-sec .copy-text i{color:#FEB58A;}\n.login-sec .copy-text a{color:#E36262;}\n.login-sec h2{margin-bottom:30px; font-weight:800; font-size:30px; color: #1a071f;}\n.login-sec h2:after{\r\n  content: \" \";\r\n    width: 53px;\r\n    height: 3px;\r\n    background: #1a071f;\r\n    display: block;\r\n    margin-top: 5px;\r\n    border-radius: 3px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\n.btn-login{background: #DE6262; color:#fff; font-weight:600;}\n.banner-text{width:70%; position:absolute; bottom:40px; padding-left:20px;}\n.banner-text h2{color:#fff; font-weight:600;}\n.banner-text h2:after{content:\" \"; width:100px; height:5px; background:#FFF; display:block; margin-top:20px; border-radius:3px;}\n.banner-text p{color:#fff;}\n.modal-content{\r\n    width: 180%;\r\n    right: 188px;\r\n}\n.btn-eazyship {\r\n  background-color: rgb(211,15,108);\r\n  color: white;\r\n  margin-bottom: 12px;\r\n}\n.btn3d {\r\n  position:relative;\r\n  top: -6px;\r\n  border:0;\r\n   transition: all 40ms linear;\r\n   margin-top:10px;\r\n   margin-bottom:10px;\r\n   margin-left:2px;\r\n   margin-right:2px;\r\n}\n.btn3d:active:focus,\r\n.btn3d:focus:hover,\r\n.btn3d:focus {\r\n  -moz-outline-style:none;\r\n       outline:medium none;\r\n}\n.btn3d:active, .btn3d.active {\r\n  top:2px;\r\n}\n.btn3d.btn-white {\r\n  color: #666666;\r\n  box-shadow:0 0 0 1px #ebebeb inset, 0 0 0 2px rgba(255,255,255,0.10) inset, 0 8px 0 0 #f5f5f5, 0 8px 8px 1px rgba(0,0,0,.2);\r\n  background-color:#fff;\r\n}\n.btn3d.btn-white:active, .btn3d.btn-white.active {\r\n  color: #666666;\r\n  box-shadow:0 0 0 1px #ebebeb inset, 0 0 0 1px rgba(255,255,255,0.15) inset, 0 1px 3px 1px rgba(0,0,0,.1);\r\n  background-color:#fff;\r\n}\n.btn3d.btn-default {\r\n \r\n  box-shadow:0 0 0 1px #ebebeb inset, 0 0 0 2px rgba(255,255,255,0.10) inset, 0 8px 0 0 #BEBEBE, 0 8px 8px 1px rgba(0,0,0,.2);\r\n  \r\n  background-color: #de6262;\r\n    color: white;\r\n}\n.btn3d.btn-default:active, .btn3d.btn-default.active {\r\n  color: #666666;\r\n  box-shadow:0 0 0 1px #ebebeb inset, 0 0 0 1px rgba(255,255,255,0.15) inset, 0 1px 3px 1px rgba(0,0,0,.1);\r\n  background-color:#f9f9f9;\r\n}\n.btn3d.btn-primary {\r\n  box-shadow:0 0 0 1px #417fbd inset, 0 0 0 2px rgba(255,255,255,0.15) inset, 0 8px 0 0 #4D5BBE, 0 8px 8px 1px rgba(0,0,0,0.5);\r\n  background-color:#4274D7;\r\n}\n.btn3d.btn-primary:active, .btn3d.btn-primary.active {\r\n  box-shadow:0 0 0 1px #417fbd inset, 0 0 0 1px rgba(255,255,255,0.15) inset, 0 1px 3px 1px rgba(0,0,0,0.3);\r\n  background-color:#4274D7;\r\n}\n.btn3d.btn-success {\r\n  box-shadow:0 0 0 1px #31c300 inset, 0 0 0 2px rgba(255,255,255,0.15) inset, 0 8px 0 0 #5eb924, 0 8px 8px 1px rgba(0,0,0,0.5);\r\n  background-color:#78d739;\r\n}\n.btn3d.btn-success:active, .btn3d.btn-success.active {\r\n  box-shadow:0 0 0 1px #30cd00 inset, 0 0 0 1px rgba(255,255,255,0.15) inset, 0 1px 3px 1px rgba(0,0,0,0.3);\r\n  background-color: #78d739;\r\n}\n.btn3d.btn-info {\r\n  box-shadow:0 0 0 1px #00a5c3 inset, 0 0 0 2px rgba(255,255,255,0.15) inset, 0 8px 0 0 #348FD2, 0 8px 8px 1px rgba(0,0,0,0.5);\r\n  background-color:#39B3D7;\r\n}\n.btn3d.btn-info:active, .btn3d.btn-info.active {\r\n  box-shadow:0 0 0 1px #00a5c3 inset, 0 0 0 1px rgba(255,255,255,0.15) inset, 0 1px 3px 1px rgba(0,0,0,0.3);\r\n  background-color: #39B3D7;\r\n}\n.btn3d.btn-warning {\r\n  box-shadow:0 0 0 1px #d79a47 inset, 0 0 0 2px rgba(255,255,255,0.15) inset, 0 8px 0 0 #D79A34, 0 8px 8px 1px rgba(0,0,0,0.5);\r\n  background-color:#FEAF20;\r\n}\n.btn3d.btn-warning:active, .btn3d.btn-warning.active {\r\n  box-shadow:0 0 0 1px #d79a47 inset, 0 0 0 1px rgba(255,255,255,0.15) inset, 0 1px 3px 1px rgba(0,0,0,0.3);\r\n  background-color: #FEAF20;\r\n}\n.btn3d.btn-danger {\r\n  box-shadow:0 0 0 1px #b93802 inset, 0 0 0 2px rgba(255,255,255,0.15) inset, 0 8px 0 0 #AA0000, 0 8px 8px 1px rgba(0,0,0,0.5);\r\n  background-color:#D73814;\r\n}\n.btn3d.btn-danger:active, .btn3d.btn-danger.active {\r\n  box-shadow:0 0 0 1px #b93802 inset, 0 0 0 1px rgba(255,255,255,0.15) inset, 0 1px 3px 1px rgba(0,0,0,0.3);\r\n  background-color: #D73814;\r\n}\n.btn3d.btn-magick {\r\n  color: #fff;\r\n  box-shadow:0 0 0 1px #9a00cd inset, 0 0 0 2px rgba(255,255,255,0.15) inset, 0 8px 0 0 #9823d5, 0 8px 8px 1px rgba(0,0,0,0.5);\r\n  background-color:#bb39d7;\r\n}\n.btn3d.btn-magick:active, .btn3d.btn-magick.active {\r\n  box-shadow:0 0 0 1px #9a00cd inset, 0 0 0 1px rgba(255,255,255,0.15) inset, 0 1px 3px 1px rgba(0,0,0,0.3);\r\n  background-color: #bb39d7;\r\n}\n.css_fnt_sze{\r\nfont-size: 27px;\r\n}\n.class_text {\r\n  color: #de4c91;\r\n}\n.class_text::after { \r\n  content: \"\";\r\n}\n.class_img{\r\n  border-bottom: 2px solid #e779ac;\r\n}\n.carousel-control-next {\r\n  height: 3rem;\r\n  width: 3rem;\r\n  z-index: 0;\r\n  border-radius: 50%;\r\n  background-color: #f1427d;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\n.carousel-control-prev {\r\n  height: 3rem;\r\n  width: 3rem;\r\n  z-index: 0;\r\n  border-radius: 50%;\r\n  background-color: #f1427d;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-top\">\r\n\t<div class=\"w3-bar w3-white w3-padding w3-card\" style=\"letter-spacing:4px;border-bottom: 2px solid #350e3f;    height: 71px;\r\n\">\r\n\t\t<a class=\"w3-bar-item w3-button\"\r\n\t\t\tstyle=\"font-style: oblique;font-weight: 1000;color: #dc3545!important;font-size: 20px;\"> <b *ngIf=\"menuShow\"\r\n\t\t\t\t(click)=\"w3_open()\">☰</b> <img style=\"width: 130px;margin-top: 16px;margin-left: 14px;\"\r\n\t\t\t\tsrc=\"../assets/pppp.png\" /> </a>\r\n\r\n\t\t<div class=\"w3-right \" style=\"\r\n    float: right;\r\n    height: 26px;\r\n    margin: 21px;\">\r\n\r\n\t\t\t<a href=\"#contact\" class=\"w3-bar-item w3-button\" style=\"font-weight: 1000;color: #dc3545!important;\"\r\n\t\t\t\tdata-toggle=\"modal\" data-target=\"#myModal\">Login</a>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n\r\n\r\n<!-- \r\n<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\"> -->\r\n\r\n\t<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\r\n\t\t<!-- Indicators -->\r\n\t\t<ul class=\"carousel-indicators\">\r\n\t\t  <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\r\n\t\t  <li data-target=\"#demo\" data-slide-to=\"1\"></li>\r\n\t\t  <li data-target=\"#demo\" data-slide-to=\"2\"></li>\r\n\t\t</ul>\r\n\t\t\r\n\t\t<!-- The slideshow -->\r\n\t\t\r\n\t  \r\n\t\t<div class=\"carousel-inner\">\r\n\t\t  <div class=\"carousel-item active\">\r\n\t\t <div class=\"row class_img\"><img src=\"../assets/HAND_COROSEL_PHOTO.png\" class=\"img-fluid\" alt=\"Eazyshipimg\"><div class=\"d-flex align-items-center flex-column justify-content-center\"><h1 class=\"class_text\">Eazyshipp to reach</h1>\r\n\t\t  <p ><strong>Lorem Ipsum is simply dummy text of the printing</strong></p> </div></div>\r\n\t  </div>\r\n\t  <div class=\"carousel-item\">\r\n\t\t  \r\n\t\t  <div class=\"row class_img\"><img style=\"height: 34rem;\" class=\"img-fluid\" src=\"../assets/mobile_navigation.png\" alt=\"Chicago\"><div class=\"d-flex align-items-center flex-column justify-content-center\"><h1 class=\"class_text\">Eazyshipp to reach</h1>\r\n\t\t\t  <p ><strong>Lorem Ipsum is simply dummy text of the printing</strong></p> </div></div>\r\n\t\t</div>\r\n\t\t\r\n\t\t  \r\n\t\t</div>\r\n\t\t\r\n\t\t<!-- Left and right controls -->\r\n\t\t<a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\r\n\t\t  <span class=\"carousel-control-prev-icon\"></span>\r\n\t\t</a>\r\n\t\t<a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\r\n\t\t  <span class=\"carousel-control-next-icon\"></span>\r\n\t\t</a>\r\n\t  </div>\r\n\r\n\r\n\r\n<app-carousel></app-carousel>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"myModals\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<div class=\"modal-content\">\r\n\r\n\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"container\" style=\"margin-top: 2px;\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-4 login-sec\" *ngIf=\"loginshow\">\r\n\t\t\t\t\t\t\t<h2 class=\"text-center\">Login Now</h2>\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t<form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"firstName\">First Name</label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\"\r\n\t\t\t\t\t\t\t\t\t\t#firstName=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && firstName.invalid }\" required />\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && firstName.invalid\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"firstName.errors.required\">First Name is required</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-eazyship\">Register</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t<form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"mobile\">Mobile Number</label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" name=\"mobile\" minlength=\"8\" [(ngModel)]=\"model.mobile\"\r\n\t\t\t\t\t\t\t\t\t\t#mobile=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && mobile.invalid }\" required />\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.submitted || mobile.invalid || (mobile.dirty || mobile.touched)\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"mobile.errors.required\">First Name is required</div>\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"mobile.errors.minlength\">Password must be at least 8 characters long</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-eazyship\">Register</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t<div class=\"copy-text\">Product By <a href=\"http://grafreez.com\">Mactec</a></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-4 login-sec \" *ngIf=\"otpshow\">\r\n\t\t\t\t\t\t\t<h2 class=\"text-center\"> Verify OTP </h2>\r\n\t\t\t\t\t\t\t{{otp2}}\r\n\t\t\t\t\t\t\t<form class=\"login-form\" novalidate #otpForm=\"ngForm\" (ngSubmit)=\"otpForm.form.valid && otpSubmit()\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"otp\"> Enter OTP </label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" name=\"otp\" [(ngModel)]=\"model.otp\" #otp=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': otpForm.submitted && otp.invalid }\" required />\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"otpForm.submitted || otp.invalid || (otp.dirty || otp.touched)\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"otp.errors.required\">OTP Number is required</div>\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"otp.errors.minlength\">Password must be at least 8 characters long</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-eazyship\">submit</button>\r\n\t\t\t\t\t\t\t\r\n</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t<p *ngIf=\"afterTime\" (click)=\"resend()\" style=\"color:blue;cursor:pointer;\"> Resend OTP?</p>\r\n\r\n\t\t\t\t\t\t\t<div class=\"copy-text\">Created by <a href=\"http://grafreez.com\">Mactec</a></div>\r\n\r\n\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-8 banner-sec\">\r\n\t\t\t\t\t\t\t<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\t\t\t\t\t\t\t\t<ol class=\"carousel-indicators\">\r\n\t\t\t\t\t\t\t\t\t<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n\t\t\t\t\t\t\t\t\t<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n\t\t\t\t\t\t\t\t\t<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t<div class=\"carousel-inner\" role=\"listbox\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"carousel-item active\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"d-block img-fluid\" src=\"https://static.pexels.com/photos/33972/pexels-photo.jpg\"\r\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"max-height: 350px;min-width: 100%;\" alt=\"First slide\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-caption d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"banner-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h2>This is Heaven</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"carousel-item\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"d-block img-fluid\" style=\"max-height: 350px;min-width: 100%;\"\r\n\t\t\t\t\t\t\t\t\t\t\tsrc=\"https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg\" alt=\"First slide\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-caption d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"banner-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h2>This is Heaven</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"carousel-item\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"d-block img-fluid\" style=\"max-height: 350px;min-width: 100%;\"\r\n\t\t\t\t\t\t\t\t\t\t\tsrc=\"https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg\" alt=\"First slide\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-caption d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"banner-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h2>This is Heaven</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"myModal\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<div class=\"modal-content\">\r\n\r\n\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"container\" style=\"margin-top: 2px;\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-4 login-sec\" *ngIf=\"loginshow\">\r\n\t\t\t\t\t\t\t<h2 class=\"text-center\">Login Now</h2>\r\n\r\n\t\t\t\t\t\t\t<form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"mobile\">Mobile Number</label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" name=\"mobile\" minlength=\"8\" [(ngModel)]=\"model.mobile\"\r\n\t\t\t\t\t\t\t\t\t\t#mobile=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && mobile.invalid }\" required />\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.submitted || mobile.invalid || (mobile.dirty || mobile.touched)\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t<div >Mobile Number is required</div>\r\n\t\t\t\t\t\t\t\t\t\t<div >Password must be at least 8 characters long</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group text-right\"  >\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-eazyship\">Send OTP</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<a href=\"http://localhost:8081\" target=\"_blank\"> Register as Service Provider?</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"copy-text\">Product By <a href=\"http://grafreez.com\">Mactec</a></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-4 login-sec \" *ngIf=\"otpshow\">\r\n\t\t\t\t\t\t\t<h2 class=\"text-center\">OTP</h2>\r\n\t\t\t\t\t\t\t{{otp2}}\r\n\t\t\t\t\t\t\t<form class=\"login-form\" #otpForm=\"ngForm\" (ngSubmit)=\"otpSubmit(otpForm.value)\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\" class=\"text-uppercase\">Enter Otp</label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"number\" #otp=\"ngModel\" ngModel name=\"otp\" class=\"form-control\" placeholder=\"\">\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" style=\"float: right;\" class=\"btn btn-eazyship\">Submit</button>\r\n\r\n\t\t\t\t\t\t\t\t<p (click)=\"resend()\" > Resend OTP</p>\r\n\r\n\r\n\t\t\t\t\t\t\t</form>\r\n\r\n\r\n\t\t\t\t\t\t\t<div class=\"copy-text\">Created by <a href=\"http://grafreez.com\">Mactec</a></div>\r\n\r\n\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-8 banner-sec\">\r\n\t\t\t\t\t\t\t<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\t\t\t\t\t\t\t\t<ol class=\"carousel-indicators\">\r\n\t\t\t\t\t\t\t\t\t<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n\t\t\t\t\t\t\t\t\t<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n\t\t\t\t\t\t\t\t\t<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t<div class=\"carousel-inner\" role=\"listbox\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"carousel-item active\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"d-block img-fluid\" src=\"https://static.pexels.com/photos/33972/pexels-photo.jpg\"\r\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"max-height: 350px;min-width: 100%;\" alt=\"First slide\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-caption d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"banner-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h2>This is Heaven</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"carousel-item\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"d-block img-fluid\" style=\"max-height: 350px;min-width: 100%;\"\r\n\t\t\t\t\t\t\t\t\t\t\tsrc=\"https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg\" alt=\"First slide\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-caption d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"banner-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h2>This is Heaven</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"carousel-item\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"d-block img-fluid\" style=\"max-height: 350px;min-width: 100%;\"\r\n\t\t\t\t\t\t\t\t\t\t\tsrc=\"https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg\" alt=\"First slide\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-caption d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"banner-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h2>This is Heaven</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toast-notifications */ "./node_modules/ngx-toast-notifications/dist/index.js");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authservice, router, toaccstr, toaster) {
        this.authservice = authservice;
        this.router = router;
        this.toaccstr = toaccstr;
        this.toaster = toaster;
        this.afterTime = false;
        this.KLS = {};
        this.dat = {};
        this.model = {};
        this.data = [];
        this.objects = {};
        this.otpshow = false;
        this.loginshow = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        localStorage.setItem('mobileeazy', this.model.mobile);
        this.authservice.loginCustomer(this.model)
            .subscribe(function (data) {
            _this.data = data;
            console.log(data);
            if (data.status == "success") {
                var ch = data.response.id;
                localStorage.setItem('userid', ch);
                $('#myModal').modal('hide');
                _this.toaccstr.success('One Time Password sent to your Registered Mobile Number', 'Success!');
                $('#myModals').modal('show');
                setTimeout(function () { _this.afterTime = true; }, 10000);
                _this.otp = data.response.otp;
                console.log(_this.otp);
                _this.otp2 = _this.otp;
                console.log(_this.otp2);
                _this.otpshow = true;
                _this.loginshow = false;
            }
        }, function (err) {
            console.log(err);
        });
    };
    LoginComponent.prototype.otpSubmit = function () {
        var _this = this;
        console.log(this.model.otp);
        this.otp = this.model.otp;
        this.mobilelocal = localStorage.getItem('mobileeazy');
        /*  */
        this.objects = {
            "otp": this.otp,
            "mobile": this.mobilelocal
        };
        console.log(this.objects);
        this.authservice.loginCustomer(this.objects)
            .subscribe(function (data) {
            _this.data = data;
            if (data.status == "success") {
                _this.toaccstr.success('Login Successfully!', 'Success!');
                $('#myModals').modal('hide');
                localStorage.setItem('authKey', data.response.authkey);
                if (data.response.firstName || data.response.lastName) {
                    _this.router.navigate(["home"]);
                }
                if (!data.response.firstName) {
                    _this.router.navigate(["Registration"]);
                }
                _this.menuShow = true;
                _this.menuHide = false;
            }
        }, function (err) {
            console.log(err);
        });
    };
    LoginComponent.prototype.resend = function () {
        console.log('lll');
        this.KLS.mobile = localStorage.getItem('mobileeazy');
        this.model = this.KLS;
        this.login();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4__["Toaster"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modulewise/jobcreate/jobcreate.component.css":
/*!**************************************************************!*\
  !*** ./src/app/modulewise/jobcreate/jobcreate.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n/* Created by Filipe Pina\r\n * Specific styles of signin, register, component\r\n */\r\n/*\r\n * General styles\r\n */\r\n#playground-container {\r\n    height: 1000px;\r\n    overflow: hidden !important;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n.main{\r\n \tmargin:50px 15px;\r\n}\r\nh1.title { \r\n\tfont-size: 50px;\r\n\tfont-family: 'Passion One', cursive; \r\n\tfont-weight: 400; \r\n}\r\nhr{\r\n\twidth: 10%;\r\n\tcolor: #fff;\r\n}\r\n.form-group{\r\n\tmargin-bottom: 15px;\r\n}\r\nlabel{\r\n\tmargin-bottom: 15px;\r\n}\r\ninput,\r\ninput::-webkit-input-placeholder {\r\n    font-size: 11px;\r\n    padding-top: 3px;\r\n}\r\n.main-login{\r\n \tbackground-color: #fff;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\r\n}\r\n.form-control {\r\n    height: auto!important;\r\npadding: 8px 12px !important;\r\n}\r\n.input-group {\r\n    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;\r\n}\r\n#button {\r\n    border: 1px solid #ccc;\r\n    margin-top: 28px;\r\n    padding: 6px 12px;\r\n    color: #666;\r\n    text-shadow: 0 1px #fff;\r\n    cursor: pointer;\r\n    border-radius: 3px 3px;\r\n    box-shadow: 0 1px #fff inset, 0 1px #ddd;\r\n    background: #f5f5f5;\r\n    background: -ms-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5f5f5', endColorstr='#eeeeee', GradientType=0);\r\n}\r\n.main-center{\r\n \tmargin-top: 30px;\r\n \tmargin: 0 auto;\r\n \tmax-width: 400px;\r\n    padding: 10px 40px;\r\n\tbackground:#dc35458c;;\r\n\t    color: #FFF;\r\n    text-shadow: none;\r\nbox-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);\r\n\r\n}\r\nspan.input-group-addon i {\r\n    color: #009edf;\r\n    font-size: 17px;\r\n}\r\n.login-button{\r\n\tmargin-top: 5px;\r\n}\r\n.login-register{\r\n\tfont-size: 11px;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modulewise/jobcreate/jobcreate.component.html":
/*!***************************************************************!*\
  !*** ./src/app/modulewise/jobcreate/jobcreate.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">  \r\n<div class=\"card mar_t2\">\r\n\t\t\t<div class=\"card-header\"><b>Create Jobs</b></div>\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate style=\"color:black\">\r\n\t\t\t\t\t <div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-lg-6 col-xs-6\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\" >\r\n\t\t\t\t\t\t\t\t<label for=\"jobtitle\">Job Title</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"jobtitle\" [(ngModel)]=\"model.jobtitle\" #jobtitle=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && jobtitle.invalid }\" required />\r\n\t\t\t\t\t\t\t <div *ngIf=\"f.submitted && jobtitle.invalid\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"jobtitle.errors.required\">jobtitle is required</div>\r\n\t\t\t\t\t\t\t\t</div>   \r\n\t\t\t\t\t\t\t\t<!-- <div *ngIf=\"f.submitted || jobtitle.invalid || (jobtitle.dirty || jobtitle.touched)\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"jobtitle.errors.required\"> jobtitle is required</div>\r\n\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-lg-6 col-xs-6\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"jobreqmem\">Job Req Members(count)</label>\r\n\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" name=\"jobreqmem\" [(ngModel)]=\"model.jobreqmem\" #jobreqmem=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && jobreqmem.invalid }\" required />\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && jobreqmem.invalid\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"jobreqmem.errors.required\">jobreqmem required</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t   <div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-lg-6 col-xs-6\">\r\n\t\t\t\t\t\t\t <div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"jobdescription\">Job Description</label>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<textarea  rows=\"3\" id=\"jobdescription\" type=\"text\" class=\"form-control\" name=\"jobdescription\" [(ngModel)]=\"model.jobdescription\" #jobdescription=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && jobdescription.invalid }\" required ></textarea>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && jobdescription.invalid\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"jobdescription.errors.required\">job description is required</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-lg-6 col-xs-6\">\r\n\t\t\t\t\t\t\t <div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"jobaddress\">Job Address</label>\r\n\t\t\t\t\t\t\t<textarea  rows=\"3\" id=\"jobaddress\"  type=\"text\" class=\"form-control\" name=\"jobaddress\" [(ngModel)]=\"model.jobaddress\" #jobaddress=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && jobaddress.invalid }\" required ></textarea>\r\n\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && jobaddress.invalid\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"jobaddress.errors.required\">job address is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-lg-3 col-xs-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"gender\">Gender</label>\r\n\t\t\t\t\t\t\t\t\t<!-- \t\t<select id=\"flatBlock\"class=\"form-control\"   [(ngModel)]=\"model.gender\" #gender=\"ngModel\" name=\"gender\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Male\">Male</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <option value=\"Female\">Female</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select> -->\r\n\t\t\t\t\t\t\t\t <select  class=\"form-control\"  [(ngModel)]=\"model.gender\" #gender=\"ngModel\" name=\"gender\">\r\n\t\t\t\t\t\t\t\t\t<option name=\"gender\" *ngFor=\"let gender of genders\">{{gender}}</option>\r\n\t\t\t\t\t\t\t\t </select>\r\n\t\t\t\t\t\t\t\t <div *ngIf=\"f.submitted && gender.invalid\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"gender.errors.required\">gender required</div>\r\n\t\t\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-lg-3 col-xs-3\">\r\n\t\t\t\t\t\t\t <div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"jobduration\">Job Duration</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"jobduration\" [(ngModel)]=\"model.jobduration\" #jobduration=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && jobduration.invalid }\" required />\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && jobduration.invalid\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"jobduration.errors.required\">jobduration required</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-lg-3 col-xs-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"durationmode\">Duration Mode</label>\r\n\t\t\t\t\t\t\t\t\t<!-- \t<select id=\"flatBlock\" class=\"form-control\"  [(ngModel)]=\"model.durationmode\" #durationmode=\"ngModel\" name=\"durationmode\">\r\n\t\t\t\t\t\t\t\t\t\t  <option value=\"Hours\">Hours</option>\r\n\t\t\t\t\t\t\t\t\t\t  <option value=\"Days\">Days</option>\r\n\t\t\t\t\t\t\t\t\t\t  <option value=\"Weeks\">Weeks</option><option value=\"Months\">Months</option>\r\n\t\t\t\t\t\t\t\t\t\t</select> -->\r\n\t\t\t\t\t\t\t\t <select  class=\"form-control\"  [(ngModel)]=\"model.durationmode\" #durationmode=\"ngModel\" name=\"durationmode\">\r\n\t\t\t\t\t\t\t\t\t<option name=\"durationmode\" *ngFor=\"let mode of modes\">{{mode}}</option> \r\n\t\t\t\t\t\t\t\t </select>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t  <!--   <input type=\"text\" class=\"form-control\" name=\"durationmode\" [(ngModel)]=\"model.durationmode\" #durationmode=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && durationmode.invalid }\" required />\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && durationmode.invalid\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"durationmode.errors.required\">durationmode required</div>\r\n\t\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-lg-3 col-xs-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"payingperhead\">Paying Per Person</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"payingperhead\" [(ngModel)]=\"model.payingperhead\" #payingperhead=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && payingperhead.invalid }\" required />\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && payingperhead.invalid\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"payingperhead.errors.required\">payingperhead required</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-lg-3 col-xs-3\">\r\n\t\t\t\t\t\t\t <div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"FromDate\">From Date</label>\r\n\t\t\t\t\t\t\t\t<!-- <my-date-picker name=\"mydate\" [options]=\"myDatePickerOptions\"class=\"form-control\"\r\n\t\t\t\t\t\t\t\tformControlName=\"startDate\" (dateChanged)=\"onDateChanged($event)\" [(ngModel)]=\"model.FromDate\" #FromDate=\"ngModel\" name=\"FromDate\" ></my-date-picker>\r\n\t\t\t\t\t\t -->\r\n\t\t\t\t\t\t <input type=\"date\"class=\"form-control\"[(ngModel)]=\"model.FromDate\" #FromDate=\"ngModel\" name=\"FromDate\" > \r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-lg-3 col-xs-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"fromtime\">From Timess</label>\r\n\t\t\t\t\t\t\t\t<input  type=\"time\" class=\"form-control\" [(ngModel)]=\"model.fromtime\" #fromtime=\"ngModel\" name=\"fromtime\" id=\"fromtime\" >\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-lg-3 col-xs-3\">\r\n\t\t\t\t\t\t\t\t <div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"ToDate\">To Date</label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"date\"class=\"form-control\"  [(ngModel)]=\"model.ToDate\" #ToDate=\"ngModel\" name=\"ToDate\" id=\"to\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3 col-lg-3 col-xs-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"Totime\">To Time</label>\r\n\t\t\t\t\t\t\t\t<input  type=\"time\"class=\"form-control\"  [(ngModel)]=\"model.Totime\" #Totime=\"ngModel\" name=\"Totime\" id=\"Totime\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group text-center\">\r\n\t\t\t\t\t\t<button class=\"btn button-color\" style=\"background-color:rgb(211,15,108);color:white;\" >Create</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n</div>\r\n   \r\n  </div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modulewise/jobcreate/jobcreate.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modulewise/jobcreate/jobcreate.component.ts ***!
  \*************************************************************/
/*! exports provided: JobcreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobcreateComponent", function() { return JobcreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobcreateComponent = /** @class */ (function () {
    function JobcreateComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
        this.model = {};
        this.genders = [];
        this.modes = [];
        this.genders = ["Any", "Male", "Female"];
        this.createjoblimitmode();
    }
    JobcreateComponent.prototype.ngOnInit = function () {
        this.model.gender = "Any";
        var d1 = Date.now();
        alert(d1);
        this.today = new Date();
    };
    JobcreateComponent.prototype.createjoblimitmode = function () {
        var _this = this;
        this.authservice.createjoblimitmode()
            .subscribe(function (data) {
            /* 	 console.log(data); */
            _this.modes = data.response;
            /* 	console.log(this.modes)
                console.log(this.genders) */
        }, function (err) {
            console.log(err);
        });
    };
    JobcreateComponent.prototype.onSubmit = function () {
        /*    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model)) */
        var _this = this;
        var ch = {
            "customer": {
                "id": localStorage.userid
            },
            "title": this.model.jobtitle,
            "description": this.model.jobdescription,
            "address": this.model.jobaddress,
            "gender": this.model.gender,
            "reqMembers": this.model.jobreqmem,
            "limits": this.model.jobduration,
            "limitMode": this.model.durationmode,
            "amount": this.model.payingperhead,
            "from_date": this.model.FromDate,
            "to_date": this.model.ToDate,
            "start_time": this.model.fromtime,
            "end_time": this.model.Totime
        };
        console.log(ch);
        /* 	  alert(ch); */
        this.authservice.createjobs(ch)
            .subscribe(function (data) {
            /* 	 console.log(data); */
            _this.sizes = data.response;
            if (data.status == "success") {
                alert("job created successfully and your job id is" + data.response);
                _this.form.resetForm();
                //this.router.navigate(["jobslist"])
                _this.router.navigate(['home']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], JobcreateComponent.prototype, "form", void 0);
    JobcreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jobcreate',
            template: __webpack_require__(/*! ./jobcreate.component.html */ "./src/app/modulewise/jobcreate/jobcreate.component.html"),
            styles: [__webpack_require__(/*! ./jobcreate.component.css */ "./src/app/modulewise/jobcreate/jobcreate.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], JobcreateComponent);
    return JobcreateComponent;
}());



/***/ }),

/***/ "./src/app/modulewise/joblist/joblist.component.css":
/*!**********************************************************!*\
  !*** ./src/app/modulewise/joblist/joblist.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dataTables_scroll {\r\n    overflow: auto;\r\n    position: relative;\r\n}\r\n.bor_btm{\r\n    border-bottom: 1px #101010 dotted;\r\n    min-height: 23px;\r\n}\r\n.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\r\n    color: #ffffff;\r\n    background-color: #53325c;\r\n    border-color: #dee2e6 #dee2e6 #fff;\r\n}\r\n.nav-tabs .nav-link {\r\n    border: 1px solid #e4a7c4;\r\n    border-top-left-radius: 2.5rem;\r\n    border-top-right-radius: 14rem;\r\n    width: 120px;\r\n    background: #d9cce0;\r\n    padding: 0.3rem 11px;\r\n}\r\n.nav-tabs {\r\n    border-bottom: 1px solid #dee2e6;\r\n    margin-top: 2rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/modulewise/joblist/joblist.component.html":
/*!***********************************************************!*\
  !*** ./src/app/modulewise/joblist/joblist.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<!-- <div style=\"margin-top:90px;height:100%;\">\r\n\t<div class=\"container\">\r\n\t\t\r\n\t\t\t\t\t<ul class=\"nav nav-tabs\">\r\n\t\t\t\t\t\t  <li class=\"nav-item\">\r\n\t\t\t\t\t\t\t\t<a class=\"nav-link active\" data-toggle=\"tab\" href=\"#saved\"><b>saved <a style=\"color:blue\">( {{ this.savedjobs.length}} )</a></b></a>\r\n\t\t\t\t\t\t  </li>\r\n\t\t\t\t\t\t  <li class=\"nav-item\">\r\n\t\t\t\t\t\t\t\t<a class=\"nav-link\" data-toggle=\"tab\" href=\"#Approved\"><b>Approved  <a style=\"color:green\">( {{ this.Approved.length}} )</a></b></a>\r\n\t\t\t\t\t\t  </li>\r\n\t\t\t\t\t\t  <li class=\"nav-item\">\r\n\t\t\t\t\t\t\t\t<a class=\"nav-link\" data-toggle=\"tab\" href=\"#Closed\"><b>Closed <a style=\"color:orange\"> ( {{ this.Closed.length}} )</a></b> </a>\r\n\t\t\t\t\t\t  </li>\r\n\t\t\t\t\t\t  <li class=\"nav-item\">\r\n\t\t\t\t\t\t\t\t<a class=\"nav-link\" data-toggle=\"tab\" href=\"#Cancelled\"><b>Cancelled <a style=\"color:red\">( {{ this.Cancelled.length}} )</a></b></a>\r\n\t\t\t\t\t\t  </li>\r\n\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"tab-content\" style=\"border-top-color: white;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"tab-pane container active\" id=\"saved\">\r\n\t\t\t\t\t\t\t\t\t\t<table datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-stripedstriped table-bordered \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\">ID</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Title</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Description</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Address</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\">Status</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\" style=\"min-width: 88px;\">Full Details</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let job of savedjobs\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"text-center\">{{job.id}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{job.title}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"widths\">{{job.description}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"widths\">{{job.address}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"text-center\">{{job.status}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"text-center\" (click)=\"modal(job)\" data-toggle=\"modal\" data-target=\"#jobdetails\"><button class=\"btn button-color\">Details</button></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"tab-pane container fade\" id=\"Approved\">\r\n\t\t\t\t\t\t\t\t\t\t<table datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped table-bordered table-hover\">\r\n\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\">ID</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Title</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Description</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Address</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\">Status</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\" style=\"min-width: 81px;\">Full Details</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\" style=\"min-width: 81px;\">Full Details</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let job of Approved\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{job.id}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td >{{job.title}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"widths\" >{{job.description}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"widths\">{{job.address}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"text-center\">{{job.status}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\" (click)=\"modal(job)\" data-toggle=\"modal\" data-target=\"#jobdetails\"><button class=\"btn button-color\">Applicants</button></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\" (click)=\"modal(job)\" data-toggle=\"modal\" data-target=\"#jobdetails\"><button class=\"btn button-color\">Details</button></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"tab-pane container fade\" id=\"Closed\">\r\n\t\t\t\t\t\t\t\t\t\t<table datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped table-bordered table-hover\">\r\n\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\">ID</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Title</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Description</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Address</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\">Status</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\" style=\"min-width: 81px;\">Full Details</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\" style=\"min-width: 81px;\">Full Details</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let job of Closed\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"text-center\">{{job.id}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{job.title}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"widths\">{{job.description}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"widths\">{{job.address}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"text-center\">{{job.status}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\" (click)=\"modal(job)\" data-toggle=\"modal\" data-target=\"#jobdetails\"><button class=\"btn button-color\">Applicants</button></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"text-center\" (click)=\"modal(job)\" data-toggle=\"modal\" data-target=\"#jobdetails\"><button class=\"btn button-color\"> Details</button></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"tab-pane container fade\" id=\"Cancelled\">\r\n\t\t\t\t\t\t\t\t\t\t<table datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped table-bordered table-hover\">\r\n\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\">Id</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Title</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Description</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Address</th>\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\">Status</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\" style=\"min-width: 81px;\">Full Details</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th  class=\"text-center\" style=\"min-width: 81px;\">Full Details</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let job of Cancelled\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"text-center\">{{job.id}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{job.title}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"widths\">{{job.description}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"widths\">{{job.address}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"text-center\">{{job.status}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\" (click)=\"modal(job)\" data-toggle=\"modal\" data-target=\"#jobdetails\"><button class=\"btn button-color\">Applicants</button></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"text-center button button-primary\" (click)=\"modal(job)\" data-toggle=\"modal\" data-target=\"#jobdetails\"><button class=\"btn button-color\"> Details</button></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\r\n</div>\r\n\r\n</div> -->\r\n\r\n<div style=\"margin-top:10px;height:100%;\"><!-- <p *ngFor=\"let job of jobs\">\r\n\t{{job.id}} </p>-->\r\n\t\r\n\t\r\n\t\t\t<div class=\"row\">\r\n\t\t\t   <div class=\"col-md-12\">\r\n\t\t\t\t   <ul class=\"nav nav-tabs\">\r\n\t\t\t\t\t\t\t <li class=\"nav-item\">\r\n\t\t\t\t\t\t\t   <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#saved\">saved <a style=\"color:orange\">{{ this.savedjobs.length}}</a></a>\r\n\t\t\t\t\t\t\t </li>\r\n\t\t\t\t\t\t\t <li class=\"nav-item\">\r\n\t\t\t\t\t\t\t   <a class=\"nav-link\" data-toggle=\"tab\" href=\"#Approved\">Approved</a>\r\n\t\t\t\t\t\t\t </li>\r\n\t\t\t\t\t\t\t <li class=\"nav-item\">\r\n\t\t\t\t\t\t\t   <a class=\"nav-link\" data-toggle=\"tab\" href=\"#Closed\">Closed<a style=\"color:orange\">{{ this.Closed.length}}</a> </a>\r\n\t\t\t\t\t\t\t </li>\r\n\t\t\t\t\t\t\t  <li class=\"nav-item\">\r\n\t\t\t\t\t\t\t   <a class=\"nav-link\" data-toggle=\"tab\" href=\"#Cancelled\">canceled<a style=\"color:orange\">{{ this.Cancelled.length}}</a></a>\r\n\t\t\t\t\t\t\t </li>\r\n\t\t\t\t   </ul>\r\n   \r\n\t\t   <!-- Tab panes -->\r\n\t\t   \r\n\t\t   \r\n\t\t   <div class=\"card\">\r\n\t\t\t<div class=\"card-header\"><b> Jobs list</b></div>\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t   <div class=\"tab-content\">\r\n\t\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"saved\">\r\n\t\t\t\t\t\t\t   \r\n\t\t\t\t\t\t\t\t\t\t   <table datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table  table-striped  table-bordered scroll_table\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t   <thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <th  class=\"text-center\">ID</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <th>Title</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <th>Description</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <th>Address</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <th  class=\"text-center\">Status</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t   \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <th  class=\"text-center\" style=\"min-width: 88px;\">Full Details</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t   </thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t   <tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <tr *ngFor=\"let job of savedjobs\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <td  class=\"text-center\">{{job.id}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <td>{{job.title}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <td class=\"widths\">{{job.description}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <td class=\"widths\">{{job.address}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <td  class=\"text-center\">{{job.status}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t   \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <td  class=\"text-center\" (click)=\"modal(job)\" data-toggle=\"modal\" data-target=\"#jobdetails\"><button class=\"btn button-color btn-sm\" style=\"background-color:rgb(211,15,108);color:white;\">Details</button></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t   </tbody>\r\n\t\t\t\t\t\t\t\t\t\t   </table>\r\n\t\t\t\t\t\t\t\t\t   \r\n\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t   <div class=\"tab-pane fade\" id=\"Approved\">\r\n\t\t\t\t\t\t\t\t\t   \r\n\t\t\t\t\t\t\t\t\t\t   <table datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table  scroll_table table-striped  table-bordered table-hover\">\r\n\t\t\t\t\t\t\t\t\t\t\t   <thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t   <tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <th  class=\"text-center\">ID</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <th>Title</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <th>Description</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <th>Address</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <th  class=\"text-center\">Status</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <th  class=\"text-center\" style=\"min-width: 81px;\">Full Details</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <th  class=\"text-center\" style=\"min-width: 81px;\">Full Details</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t   </tr>\r\n\t\t\t\t\t\t\t\t\t\t\t   </thead>\r\n\t\t\t\t\t\t\t\t\t\t\t   <tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t   <tr *ngFor=\"let job of Approved\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <td class=\"text-center\">{{job.id}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <td >{{job.title}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <td class=\"widths\" >{{job.description}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <td class=\"widths\">{{job.address}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <td  class=\"text-center\">{{job.status}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <td class=\"text-center\" (click)=\"modal(job)\" data-toggle=\"modal\" data-target=\"#jobdetails\"><button class=\"btn button-color\" style=\"background-color:rgb(211,15,108);color:white;\">Applicants</button></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <td class=\"text-center\" (click)=\"modal(job)\" data-toggle=\"modal\" data-target=\"#jobdetails\"><button class=\"btn button-color\" style=\"background-color:rgb(211,15,108);color:white;\">Details</button></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t   </tr>\r\n\t\t\t\t\t\t\t\t\t\t\t   </tbody>\r\n\t\t\t\t\t\t\t\t\t\t   </table>\r\n\t\t\t\t\t\t\t\t\t   \r\n\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t   <div class=\"tab-pane fade\" id=\"Closed\">\r\n\t\t\t\t\t\t\t\t\t\t   <table datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table  scroll_table table-striped  table-bordered table-hover\">\r\n\t\t\t\t\t\t\t\t\t\t\t   <thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t   <tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <th  class=\"text-center\">ID</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <th>Title</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <th>Description</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <th>Address</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <th  class=\"text-center\">Status</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <th  class=\"text-center\" style=\"min-width: 81px;\">Full Details</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <th  class=\"text-center\" style=\"min-width: 81px;\">Full Details</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t   </tr>\r\n\t\t\t\t\t\t\t\t\t\t\t   </thead>\r\n\t\t\t\t\t\t\t\t\t\t\t   <tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t   <tr *ngFor=\"let job of Closed\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <td  class=\"text-center\">{{job.id}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <td>{{job.title}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <td class=\"widths\">{{job.description}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <td class=\"widths\">{{job.address}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <td  class=\"text-center\">{{job.status}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <td class=\"text-center\" (click)=\"modal(job)\" data-toggle=\"modal\" data-target=\"#jobdetails\"><button class=\"btn button-color\" style=\"background-color:rgb(211,15,108);color:white;\">Applicants</button></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <td  class=\"text-center\" (click)=\"modal(job)\" data-toggle=\"modal\" data-target=\"#jobdetails\"><button class=\"btn button-color\" style=\"background-color:rgb(211,15,108);color:white;\"> Details</button></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t   </tr>\r\n\t\t\t\t\t\t\t\t\t\t\t   </tbody>\r\n\t\t\t\t\t\t\t\t\t\t   </table>\r\n\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t   <div class=\"tab-pane fade\" id=\"Cancelled\">\r\n\t\t\t\t\t\t\t\t\t\t   <table datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table  scroll_table table-striped  table-bordered table-hover\">\r\n\t\t\t\t\t\t\t\t\t\t\t   <thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t   <tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <th  class=\"text-center\">Id</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <th>Title</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <th>Description</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <th>Address</th>\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <th  class=\"text-center\">Status</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <th  class=\"text-center\" style=\"min-width: 81px;\">Full Details</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <th  class=\"text-center\" style=\"min-width: 81px;\">Full Details</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t   </tr>\r\n\t\t\t\t\t\t\t\t\t\t\t   </thead>\r\n\t\t\t\t\t\t\t\t\t\t\t   <tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t   <tr *ngFor=\"let job of Cancelled\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <td  class=\"text-center\">{{job.id}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <td>{{job.title}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <td class=\"widths\">{{job.description}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <td class=\"widths\">{{job.address}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <td  class=\"text-center\">{{job.status}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <td class=\"text-center\" (click)=\"modal(job)\" data-toggle=\"modal\" data-target=\"#jobdetails\"><button class=\"btn button-color\" style=\"background-color:rgb(211,15,108);color:white;\">Applicants</button></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <td  class=\"text-center button button-primary\" (click)=\"modal(job)\" data-toggle=\"modal\" data-target=\"#jobdetails\"><button class=\"btn button-color\" style=\"background-color:rgb(211,15,108);color:white;\"> Details</button></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t   </tr>\r\n\t\t\t\t\t\t\t\t\t\t\t   </tbody>\r\n\t\t\t\t\t\t\t\t\t\t   </table>\r\n\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t   \r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\r\n\t\t\t\t   </div>\r\n   \r\n   \r\n\t\t\t\t\t   </div>\r\n\t\t   </div></div></div>\r\n   </div>\r\n   \r\n   <div class=\"modal fade\" id=\"jobdetails\" role=\"dialog\">\r\n\t   <div class=\"modal-dialog modal-lg\">\r\n\t\t   <div class=\"modal-content\">\r\n\t\t\t   \r\n\t\t\t   <div class=\"modal-header\">\r\n\t\t\t\t   <h5 class=\"modal-title col-md-12 col-sm-12 col-lg-12 col-xs-12\" *ngIf=\"modaljobs.status==='Saved'\"> Saved Job Details</h5>\r\n\t\t\t\t   \r\n\t\t\t\t   <h5 class=\"modal-title col-md-12 col-sm-12 col-lg-12 col-xs-12\" *ngIf=\"modaljobs.status==='Approved'\"> Approved Job Details</h5>\r\n\t\t\t\t   \r\n\t\t\t\t   <h5 class=\"modal-title col-md-12 col-sm-12 col-lg-12 col-xs-12\" *ngIf=\"modaljobs.status==='Closed'\"> Closed Job Details</h5>\r\n\t\t\t\t   \r\n\t\t\t\t   <h5 class=\"modal-title col-md-12 col-sm-12 col-lg-12 col-xs-12\" *ngIf=\"modaljobs.status==='Cancelled'\"> Cancelled Job Details</h5>\r\n\t\t\t\t   <button type=\"button\" class=\"close\" data-dismiss=\"modal\" style=\"color:white;margin-left: calc(5% - 75px);\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span></button>\r\n\t\t\t   </div>\r\n\t\t\t   <div class=\"modal-body\">\r\n\t\t\t\t\t\t\t   <div class=\"row\">\r\n\t\t\t\t\t\t\t\t   <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t Job Id\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"bor_btm\">\t   {{modaljobs.id}}</div>\r\n\t\t\t\t\t\t\t\t\t</div>\t\t   \r\n\t\t\t\t\t\t\t\t\t\t\t   \r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t   Title\r\n\t\t\t\t\t\t\t\t\t\t\t   <div class=\"bor_btm\">  {{modaljobs.title}}</div>\r\n\t\t\t\t\t\t\t\t\t</div>\t\t   \r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\t   \r\n\t\t\t\t\t\t\t\t\t\t\t   Required Members\r\n\t\t\t\t\t\t\t\t\t\t\t   <div class=\"bor_btm\">   {{modaljobs.reqMembers}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t   \r\n\t\t\t\t\t\t\t\t\t</div>\t\t   \r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\t\r\n\t\t\t\t\t\t\t\t\tFrom Date\r\n\t\t\t\t\t\t\t\t\t<div class=\"bor_btm\">   {{modaljobs.fromDate | date: 'dd/MM/yyyy'}}</div>\r\n\t\t\t\t\t\t\t\t\t\t</div></div>\r\n\t\t\t\t\t\t\t\t\t\t\t   \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row mar_t2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t   To Date\r\n\t\t\t\t\t\t\t\t\t\t\t\t   <div class=\"bor_btm\"> {{modaljobs.toDate | date: 'dd/MM/yyyy'}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t </div>  \r\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-md-3\">\t\r\n\t\t\t\t\t\t\t\t\t\t\t   Amount\r\n\t\t\t\t\t\t\t\t\t\t\t   <div class=\"bor_btm\">  Rs.{{modaljobs.amount}}/</div>\r\n\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t   \r\n\t\t\t\t\t\t\t\t\t\t\t  <div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t Address\r\n\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"bor_btm\"> {{modaljobs.address}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t   <div class=\"row mar_t2\">\r\n\t\t\t\t\t\t\t\t\t   <div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\tDescription\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"bor_btm\"> {{modaljobs.description}}</div>\r\n\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t   <div class=\"row text-center mar_t2\">\r\n\t\t\t\t\t\t\t\t\t  <div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t   <button class=\"btn button-color\" style=\"background-color:rgb(211,15,108);color:white;\" *ngIf=\"modaljobs.status==='Saved'||modaljobs.status==='Approved'\" (click)=\"savedclose(modaljobs)\"> Close</button>\r\n\t\t\t\t\t\t\t\t\t   \r\n\t\t\t\t\t\t\t\t\t   <button class=\"btn button-color ml-1\" style=\"background-color:rgb(211,15,108);color:white;\" *ngIf=\"modaljobs.status==='Saved'||modaljobs.status==='Approved'\" (click)=\"savedcancel(modaljobs)\" >Cancel</button>\r\n\t\t\t\t\t\t\t\t\t\t   <button class=\"btn button-color ml-1s\" style=\"background-color:rgb(211,15,108);color:white;\" *ngIf=\"modaljobs.status==='Approved'||modaljobs.status==='Cancelled'||modaljobs.status==='Closed'\" (click)=\"approvedselectlist(modaljobs)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   Applications </button>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t   \r\n\t\t\t   \r\n\t\t\t\t\t\t\t\t   </div>\t\r\n\t\t\t\t   \r\n\t\t\t   </div>\r\n\t\t\t  \r\n\t\t\t   <div class=\"card-body\" *ngIf=\"apply==true\">\r\n\t\t\t\t   <ul class=\"nav nav-tabs\">\r\n\t\t\t\t\t\t <li class=\"nav-item\">\r\n\t\t\t\t\t\t   <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#pending\">Pending</a>\r\n\t\t\t\t\t\t </li>\r\n\t\t\t\t\t\t <li class=\"nav-item\">\r\n\t\t\t\t\t\t   <a class=\"nav-link\" data-toggle=\"tab\" href=\"#selected\">Selected</a>\r\n\t\t\t\t\t\t </li>\r\n\t\t\t\t   </ul><br>\r\n   \r\n\t\t\t   \r\n\t\t\t\t   <div class=\"tab-content\">\r\n\t\t\t\t\t <div class=\"tab-pane container active\" id=\"pending\">\r\n\t\t\t\t\t\t   <div class=\"card\" *ngFor=\"let p of Pending\">\r\n\t\t\t\t\t\t   <div class=\"card-header\">{{p.driver.firstName}}  {{p.driver.lastName}}<i class=\"fa fa-phone\" style=\"    font-size: 24px;    color: green;    float: right;\"></i></div>\r\n\t\t\t\t\t\t   <table class=\"table table-bordered\">\r\n\t\t\t\t\t\t\t   <thead>\r\n\t\t\t\t\t\t\t\t   <tr>\r\n\t\t\t\t\t\t\t\t\t   <td>Mobile Number</td>\r\n\t\t\t\t\t\t\t\t\t   <th>{{p.driver.mobile}}</th>\r\n\t\t\t\t\t\t\t\t   </tr>\r\n\t\t\t\t\t\t\t\t   <tr>\r\n\t\t\t\t\t\t\t\t\t   <td>Email</td>\r\n\t\t\t\t\t\t\t\t\t   <td>{{p.driver.email}}</td>\r\n\t\t\t\t\t\t\t\t   </tr>\r\n\t\t\t\t\t\t\t\t   <tr>\r\n\t\t\t\t\t\t\t\t\t   <td>Aadhaar</td>\r\n\t\t\t\t\t\t\t\t\t   <td>{{p.driver.aadhar}}</td>\r\n\t\t\t\t\t\t\t\t   </tr>\r\n\t\t\t\t\t\t\t\t   <tr>\r\n\t\t\t\t\t\t\t\t\t   <td>Current Address</td>\r\n\t\t\t\t\t\t\t\t\t   <td>{{p.driver.currentAddress}}</td>\r\n\t\t\t\t\t\t\t\t   </tr>\r\n\t\t\t\t\t\t\t   </thead>\r\n\t\t\t\t\t\t   </table>\r\n\t\t\t\t\t\t   <button class=\"btn button-color\" (click)=\"selectapprovedapplicant(p)\" style=\"margin-top: calc(1% - 18px);\"> select</button>\r\n\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"tab-pane container fade\" id=\"selected\">\r\n\t\t\t\t\t\t   <div class=\"card\" *ngFor=\"let p of Selected\">\r\n\t\t\t\t\t\t\t   <div class=\"card-header\">{{p.driver.firstName}}  {{p.driver.lastName}}</div>\r\n\t\t\t\t\t\t   <table class=\"table table-bordered\">\r\n\t\t\t\t\t\t\t   <thead>\r\n\t\t\t\t\t\t\t\t   <tr>\r\n\t\t\t\t\t\t\t\t\t   <td>Mobile Number</td>\r\n\t\t\t\t\t\t\t\t\t   <th>{{p.driver.mobile}}</th>\r\n\t\t\t\t\t\t\t\t   </tr>\r\n\t\t\t\t\t\t\t\t   <tr>\r\n\t\t\t\t\t\t\t\t\t   <td>Email</td>\r\n\t\t\t\t\t\t\t\t\t   <td>{{p.driver.email}}</td>\r\n\t\t\t\t\t\t\t\t   </tr>\r\n\t\t\t\t\t\t\t\t   <tr>\r\n\t\t\t\t\t\t\t\t\t   <td>Aadhaar</td>\r\n\t\t\t\t\t\t\t\t\t   <td>{{p.driver.aadhar}}</td>\r\n\t\t\t\t\t\t\t\t   </tr>\r\n\t\t\t\t\t\t\t\t   <tr>\r\n\t\t\t\t\t\t\t\t\t   <td>Current Address</td>\r\n\t\t\t\t\t\t\t\t\t   <td>{{p.driver.currentAddress}}</td>\r\n\t\t\t\t\t\t\t\t   </tr>\r\n\t\t\t\t\t\t\t   </thead>\r\n\t\t\t\t\t\t   </table>\r\n\t\t\t\t\t   \r\n\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t </div>\r\n\t\t\t\t   </div> \r\n\t\t\t   </div>\r\n\t\t\t   \r\n\t\t   </div>\r\n\t   </div>\r\n   </div>"

/***/ }),

/***/ "./src/app/modulewise/joblist/joblist.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/modulewise/joblist/joblist.component.ts ***!
  \*********************************************************/
/*! exports provided: JoblistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoblistComponent", function() { return JoblistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JoblistComponent = /** @class */ (function () {
    function JoblistComponent(authservice) {
        this.authservice = authservice;
        this.servicy = {};
        this.applications = {};
        this.apply = false;
        this.jobs = [];
        this.jobmodal = [];
        this.modaljobs = [];
        this.savedjobs = [];
        this.Approved = [];
        this.Closed = [];
        this.Cancelled = [];
        this.Selected = [];
        this.Pending = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"];
    }
    JoblistComponent.prototype.ngOnInit = function () {
        this.jobslist();
        this.dtOptions = {
            pagingType: 'full_numbers', pageLength: 10
        };
    };
    JoblistComponent.prototype.jobslisty = function () {
        this.savedjobs = [];
        this.Approved = [];
        this.Closed = [];
        this.Cancelled = [];
        this.jobslist();
    };
    JoblistComponent.prototype.savedclose = function (ch) {
        var _this = this;
        this.servicy = ch;
        this.servicy.serv = "Closed";
        this.authservice.jobcloscancel(this.servicy)
            .subscribe(function (data) {
            /*  console.log(data); */
            _this.jobslisty();
        }, function (err) {
            console.log(err);
        });
    };
    JoblistComponent.prototype.savedcancel = function (ch) {
        var _this = this;
        this.servicy = ch;
        this.servicy.serv = "Cancelled";
        this.authservice.jobcloscancel(this.servicy)
            .subscribe(function (data) {
            /* 	 console.log(data); */
            _this.jobslisty();
        }, function (err) {
            console.log(err);
        });
    };
    JoblistComponent.prototype.approvedselectlist = function (ch) {
        var _this = this;
        this.Pending = [];
        this.Selected = [];
        this.servicy = ch;
        this.authservice.approvedselectlist(this.servicy)
            .subscribe(function (data) {
            /*  console.log(data); */
            /*  this.savedjobs=[];this.Approved=[];this.Closed=[];this.Cancelled=[];
    this.jobslist(); */
            _this.apply = true;
            _this.applications = data.response;
            /*  console.log(this.applications.length) */
            for (var i = 0; i < _this.applications.length; i++) {
                if (_this.applications[i].status == "Selected_By_Customer") {
                    _this.Selected.push(_this.applications[i]);
                }
                else if (_this.applications[i].status == "Applied") {
                    _this.Pending.push(_this.applications[i]);
                }
                /*  console.log( this.Selected);
          console.log( this.Pending); */ }
        }, function (err) {
            console.log(err);
        });
    };
    JoblistComponent.prototype.selectapprovedapplicant = function (p) {
        /* 	  console.log(p); */
        this.servicy = p;
        this.servicy.serv = "Selected_By_Customer";
        this.authservice.selectapplicantsforapproved(this.servicy)
            .subscribe(function (data) {
            /*  console.log(data); */
        }, function (err) {
            console.log(err);
        });
    };
    JoblistComponent.prototype.jobslist = function () {
        var _this = this;
        this.authservice.CustomerJobslist()
            .subscribe(function (data) {
            /* 	 console.log(data); */
            _this.jobs = data.response;
            /* 	 console.log(this.jobs.length) */
            for (var i = 0; i < _this.jobs.length; i++) {
                if (_this.jobs[i].status == "Saved") {
                    _this.savedjobs.push(_this.jobs[i]);
                }
                else if (_this.jobs[i].status == "Approved") {
                    _this.Approved.push(_this.jobs[i]);
                }
                else if (_this.jobs[i].status == "Closed") {
                    _this.Closed.push(_this.jobs[i]);
                }
                else if (_this.jobs[i].status == "Cancelled") {
                    _this.Cancelled.push(_this.jobs[i]);
                }
            }
            _this.dtTrigger.next();
            /*  console.log(this.savedjobs);
             console.log(this.Approved);
             
             console.log(this.Closed);
             console.log(this.Cancelled); */
        }, function (err) {
            console.log(err);
        });
    };
    JoblistComponent.prototype.modal = function (id) {
        this.Pending = [];
        this.Selected = [];
        /* 	console.log(id); */
        this.modaljobs = id;
        /* console.log(this.modaljobs.status); */
        this.apply = false;
    };
    JoblistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-joblist',
            template: __webpack_require__(/*! ./joblist.component.html */ "./src/app/modulewise/joblist/joblist.component.html"),
            styles: [__webpack_require__(/*! ./joblist.component.css */ "./src/app/modulewise/joblist/joblist.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], JoblistComponent);
    return JoblistComponent;
}());

$('.scroll_table').wrap('<div class="dataTables_scroll"/>');


/***/ }),

/***/ "./src/app/modulewise/jobsdata/jobsdata.component.css":
/*!************************************************************!*\
  !*** ./src/app/modulewise/jobsdata/jobsdata.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".router-link-active {\r\n\tcolor: #000;\r\n\tfont-weight: bold;\r\n}\r\n.project-tab {\r\n   position: relative;\r\n\r\n   \r\n}\r\n.project-tab #tabs{\r\n    background: #007b5e;\r\n    color: #eee;\r\n}\r\n.project-tab #tabs h6.section-title{\r\n    color: #eee;\r\n}\r\n.project-tab #tabs .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\r\n   \r\n\tcolor: #cc0079;\r\n    background-color: transparent;\r\n    border-color: transparent transparent #f3f3f3;\r\n    border-bottom: 3px solid !important;\r\n    font-size: 16px;\r\n    font-weight: bold; \r\n\t\r\n}\r\n.project-tab .nav-link {\r\n    border: 1px solid transparent;\r\n    border-top-left-radius: .25rem;\r\n    border-top-right-radius: .25rem;\r\n    color: #0062cc;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n}\r\n.project-tab .nav-link:hover {\r\n    border: none;\r\n}\r\n.project-tab thead{\r\n    background: #f3f3f3;\r\n    color: #333;\r\n}\r\n.project-tab a{\r\n    text-decoration: none;\r\n    color: #333;\r\n    font-weight: 600;\r\n}\r\nnav{\r\n    margin-top: 17px;\r\n    z-index: 10;\r\n    width: 50%;\r\n}\r\n.project-tab #tabs .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\r\n     color: #d61e75;\r\n    background-color: transparent;\r\n    border-color: transparent transparent #f3f3f3;\r\n    border-bottom: 3px solid !important;\r\n    font-size: 17px;\r\n    font-weight: bold;\r\n}\r\n.project-tab .nav-link{\r\n    border: 1px solid transparent;\r\n    border-top-left-radius: .25rem;\r\n    border-top-right-radius: .25rem;\r\n    color: #020202;\r\n    font-size: 16px;\r\n    \r\n}\r\n.mar_t2{\r\n    margin-top: 20px;\r\n}\r\n.cc-margin-bottom{\r\n    margin-bottom: 20px;\r\n}\r\n.cc_style {\r\n    color: white;\r\n    background: #d61e75;\r\n    padding: 0px 11px;\r\n    border-radius: 4px;\r\n}"

/***/ }),

/***/ "./src/app/modulewise/jobsdata/jobsdata.component.html":
/*!*************************************************************!*\
  !*** ./src/app/modulewise/jobsdata/jobsdata.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n<!-- <app-homenavbar></app-homenavbar><br><br><br>\r\n   <p>\r\n     jobsdata works!\r\n   </p>\r\n    <div class=\"btn-group\">\r\n       <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['JobcreateComponent']\"  routerLinkActive=\"router-link-active\" [routerLinkActiveOptions]=\"{exact:\r\n   true}\">Jobcreate</button>\r\n    \r\n       <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['Joblist']\"  routerLinkActive=\"router-link-active\">Joblist</button>\r\n     </div> -->\r\n<!-- <a  [routerLink]=\"['JobcreateComponent']\"  routerLinkActive=\"router-link-active\" [routerLinkActiveOptions]=\"{exact:\r\n   true}\">Jobcreate</a>\r\n   <a  [routerLink]=\"['Joblist']\"  routerLinkActive=\"router-link-active\">Joblist</a> -->\r\n<!-- <router-outlet></router-outlet> -->\r\n<app-homenavbar></app-homenavbar>\r\n<section id=\"tabs\" class=\"project-tab\">\r\n   <div class=\"\">\r\n      <div class=\"row\">\r\n         <div class=\"col-md-12\">\r\n            <nav>\r\n               <div class=\"nav nav-tabs pt-4\" id=\"nav-tab\" role=\"tablist\">\r\n                  <a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">Create Jobs</a>\r\n                  <a class=\"nav-item nav-link\" id=\"nav-profile-tab\" data-toggle=\"tab\" href=\"#nav-profile\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\">Jobs list</a>\r\n               </div>\r\n            </nav>\r\n\r\n              \r\n\r\n\r\n            <div class=\"tab-content\" id=\"nav-tabContent\" >\r\n               <div class=\"tab-pane fade  show active\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\r\n                  <div class=\"container-fluid\">\r\n                     <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                           <app-jobcreate></app-jobcreate>\r\n                        </div>\r\n                        \r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"tab-pane fade\" id=\"nav-profile\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\">\r\n                  <div class=\"container-fluid\">\r\n                     <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                           <app-joblist></app-joblist>\r\n                        </div>\r\n                        \r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>"

/***/ }),

/***/ "./src/app/modulewise/jobsdata/jobsdata.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modulewise/jobsdata/jobsdata.component.ts ***!
  \***********************************************************/
/*! exports provided: JobsdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsdataComponent", function() { return JobsdataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobsdataComponent = /** @class */ (function () {
    function JobsdataComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
        this.model = {};
        this.genders = [];
        this.modes = [];
        this.servicy = {};
        this.applications = {};
        this.apply = false;
        this.jobs = [];
        this.jobmodal = [];
        this.modaljobs = [];
        this.savedjobs = [];
        this.Approved = [];
        this.Closed = [];
        this.Cancelled = [];
        this.Selected = [];
        this.Pending = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"];
        this.genders = ["Male", "Female"];
        this.createjoblimitmode();
    }
    JobsdataComponent.prototype.ngOnInit = function () {
        this.jobslist();
        this.dtOptions = {
            pagingType: 'full_numbers', pageLength: 10
        };
    };
    JobsdataComponent.prototype.createjoblimitmode = function () {
        var _this = this;
        this.authservice.createjoblimitmode()
            .subscribe(function (data) {
            /* 	 console.log(data); */
            _this.modes = data.response;
            /* 	console.log(this.modes)
                console.log(this.genders) */
        }, function (err) {
            console.log(err);
        });
    };
    JobsdataComponent.prototype.onSubmit = function () {
        var _this = this;
        /*    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model)) */
        var ch = {
            "customer": {
                "id": localStorage.userid
            },
            "title": this.model.jobtitle,
            "description": this.model.jobdescription,
            "address": this.model.jobaddress,
            "gender": this.model.gender,
            "reqMembers": this.model.jobreqmem,
            "limits": this.model.jobduration,
            "limitMode": this.model.durationmode,
            "amount": this.model.payingperhead,
            "from_date": this.model.FromDate,
            "to_date": this.model.ToDate,
            "start_time": this.model.fromtime,
            "end_time": this.model.Totime
        };
        console.log(ch);
        /* 	  alert(ch); */
        this.authservice.createjobs(ch)
            .subscribe(function (data) {
            /* 	 console.log(data); */
            _this.sizes = data.response;
            if (data.status == "success") {
                alert("job created successfully and your job id is" + data.response);
                _this.form.reset();
                //this.router.navigate(["jobslist"])
                _this.router.navigate(['jobsdata/Joblist']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    JobsdataComponent.prototype.jobslisty = function () {
        this.savedjobs = [];
        this.Approved = [];
        this.Closed = [];
        this.Cancelled = [];
        this.jobslist();
    };
    JobsdataComponent.prototype.savedclose = function (ch) {
        var _this = this;
        this.servicy = ch;
        this.servicy.serv = "Closed";
        this.authservice.jobcloscancel(this.servicy)
            .subscribe(function (data) {
            /*  console.log(data); */
            _this.jobslisty();
        }, function (err) {
            console.log(err);
        });
    };
    JobsdataComponent.prototype.savedcancel = function (ch) {
        var _this = this;
        this.servicy = ch;
        this.servicy.serv = "Cancelled";
        this.authservice.jobcloscancel(this.servicy)
            .subscribe(function (data) {
            /* 	 console.log(data); */
            _this.jobslisty();
        }, function (err) {
            console.log(err);
        });
    };
    JobsdataComponent.prototype.approvedselectlist = function (ch) {
        var _this = this;
        this.Pending = [];
        this.Selected = [];
        this.servicy = ch;
        this.authservice.approvedselectlist(this.servicy)
            .subscribe(function (data) {
            /*  console.log(data); */
            /*  this.savedjobs=[];this.Approved=[];this.Closed=[];this.Cancelled=[];
    this.jobslist(); */
            _this.apply = true;
            _this.applications = data.response;
            /*  console.log(this.applications.length) */
            for (var i = 0; i < _this.applications.length; i++) {
                if (_this.applications[i].status == "Selected_By_Customer") {
                    _this.Selected.push(_this.applications[i]);
                }
                else if (_this.applications[i].status == "Applied") {
                    _this.Pending.push(_this.applications[i]);
                }
                /*  console.log( this.Selected);
          console.log( this.Pending); */ }
        }, function (err) {
            console.log(err);
        });
    };
    JobsdataComponent.prototype.selectapprovedapplicant = function (p) {
        /* 	  console.log(p); */
        this.servicy = p;
        this.servicy.serv = "Selected_By_Customer";
        this.authservice.selectapplicantsforapproved(this.servicy)
            .subscribe(function (data) {
            /*  console.log(data); */
        }, function (err) {
            console.log(err);
        });
    };
    JobsdataComponent.prototype.jobslist = function () {
        var _this = this;
        this.authservice.CustomerJobslist()
            .subscribe(function (data) {
            /* 	 console.log(data); */
            _this.jobs = data.response;
            /* 	 console.log(this.jobs.length) */
            for (var i = 0; i < _this.jobs.length; i++) {
                if (_this.jobs[i].status == "Saved") {
                    _this.savedjobs.push(_this.jobs[i]);
                }
                else if (_this.jobs[i].status == "Approved") {
                    _this.Approved.push(_this.jobs[i]);
                }
                else if (_this.jobs[i].status == "Closed") {
                    _this.Closed.push(_this.jobs[i]);
                }
                else if (_this.jobs[i].status == "Cancelled") {
                    _this.Cancelled.push(_this.jobs[i]);
                }
            }
            _this.dtTrigger.next();
            /*  console.log(this.savedjobs);
             console.log(this.Approved);
             
             console.log(this.Closed);
             console.log(this.Cancelled); */
        }, function (err) {
            console.log(err);
        });
    };
    JobsdataComponent.prototype.modal = function (id) {
        this.Pending = [];
        this.Selected = [];
        /* 	console.log(id); */
        this.modaljobs = id;
        /* console.log(this.modaljobs.status); */
        this.apply = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], JobsdataComponent.prototype, "form", void 0);
    JobsdataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jobsdata',
            template: __webpack_require__(/*! ./jobsdata.component.html */ "./src/app/modulewise/jobsdata/jobsdata.component.html"),
            styles: [__webpack_require__(/*! ./jobsdata.component.css */ "./src/app/modulewise/jobsdata/jobsdata.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], JobsdataComponent);
    return JobsdataComponent;
}());



/***/ }),

/***/ "./src/app/modulewise/shippingcreationsdata/fromlocation/fromlocation.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modulewise/shippingcreationsdata/fromlocation/fromlocation.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\r\n\t<!-- <div class=\"card-body\"> -->\r\n\t\t\t<div class=\" form-group\" >\r\n\t\t\t\t\t<label>From location </label>\r\n\t\t\t\t <div class=\"input-group mb-3\">\r\n\t\t\t\t\t<input  [(ngModel)]=\"GeolocationAddress.address\"  autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\r\n\t\t\t\t\t<div class=\"input-group-append\">\r\n\t\t\t\t<span class=\"input-group-text\"   *ngIf=\"originalFrom\"   (click)=\"openStoreModal()\"><i class=\"fa fa-home\"style=\"font-size: 20px;color:#3c1646;\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t<span class=\"input-group-text\"  *ngIf=\"originalFrom\"  (click)=\"GetCurrentLocation()\"><i style=\"font-size: 20px;color:#d41570;\" class=\" fa fa-crosshairs\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t<span class=\"input-group-text\"   *ngIf=\"StoreFrom\" (click)=\"openoriginal()\"><i class=\"fa fa-minus-circle\"style=\"font-size: 20px;color:red\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t<span class=\"input-group-text\"  *ngIf=\"StoreFrom\" (click)=\"GetCurrentLocation()\"><i style=\"font-size: 20px;;color:#d41570;\" class=\" fa fa-crosshairs\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t<span class=\"input-group-text\" *ngIf=\"Geolocationdata\" (click)=\"openStoreModal()\"><i class=\"fa fa-home\"style=\"font-size: 20px;color:#3c1646;\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t<span class=\"input-group-text\" *ngIf=\"Geolocationdata\" (click)=\"openoriginal()\"><i style=\"font-size: 20px;color:red\" class=\" fa  fa-minus-circle\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n<!-- \r\n\t\t<div class=\" form-group\" *ngIf=\"originalFrom\" >\r\n\t\t\t<label>From location </label>\r\n\t\t\t<input placeholder=\"search for From location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\r\n\t\t<button (click)=\"openStoreModal()\"> cli</button>\r\n\t\t<button (click)=\"GetCurrentLocation()\"> cli</button>\r\n\t\t</div> -->\r\n\t\t<!-- <div class=\" form-group\"  >\r\n\t\t\t<label>From location </label>\t <div class=\"input-group mb-3\">\r\n\t\t\t<input [placeholder]=\"locationField.address\" readonly=\"true\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\r\n\t\t\t<div class=\"input-group-append\">\r\n\t\t\t\t\r\n\t\t\t\t\t\t</div></div>\r\n\t\r\n\t\t\r\n\t\t\r\n\t\t</div>\r\n\t\t<div class=\" form-group\"  >\r\n\t\t\t<label>From location </label> <div class=\"input-group mb-3\">\r\n\t\t\t<input [placeholder]=\"GeolocationAddress\"  readonly=\"true\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\">\r\n\t\t\t<div class=\"input-group-append\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div></div>\r\n\t\t</div> -->\r\n\t\t\r\n\t<!-- </div> -->\r\n  \r\n<div class=\"modal fade\" id=\"storelistmodal\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n    \r\n      <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h5 class=\"modal-title\">Store Details</h5>\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t  <span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n        <div class=\"modal-body\">\r\n\t\t\r\n\r\n\t\t\t<ul id=\"menu\">\r\n\t\t\t\t\t<li><i aria-hidden=\"true\"></i></li>\r\n\t\t\t\t\r\n\t\t\t\t\t<li><strong>Store Name</strong></li>\r\n\t\t\t\t\t<li><strong>Add</strong></li>\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t<ul id=\"menu\" *ngFor=\"let job of jobs;let myindex=index\">\r\n\t\t\t\t\t\t<li><i class=\"fa fa-long-arrow-right css_fontt\" aria-hidden=\"true\"></i></li>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<li>{{job.name}}</li>\r\n\t\t\t\t\t\t<li (click)=\"addingLocation(job)\"><button type=\"button\" class=\"btn button-color btn-sm\" style=\"background-color:rgb(211,15,108);color:white;\"> Add</button></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\r\n\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t</div>\r\n\t\t\t\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n\r\n "

/***/ }),

/***/ "./src/app/modulewise/shippingcreationsdata/fromlocation/fromlocation.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modulewise/shippingcreationsdata/fromlocation/fromlocation.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FromlocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromlocationComponent", function() { return FromlocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toast-notifications */ "./node_modules/ngx-toast-notifications/dist/index.js");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FromlocationComponent = /** @class */ (function () {
    function FromlocationComponent(mapsAPILoader, ngZone, authservice, toaccstr, toaster) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.authservice = authservice;
        this.toaccstr = toaccstr;
        this.toaster = toaster;
        this.err = {};
        this.gecode = {};
        this.originalFrom = false;
        this.StoreFrom = false;
        this.Geolocationdata = true;
        this.GeolocationAddress = {};
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"];
        this.locationField = {};
        /* public zoom: Number = 14; */
        this.dir = undefined;
        this.GeolocationAddress.address = "";
        this.address = localStorage.getItem('fromfarelocation');
        //alert(this.address);
        console.log(this.address);
        if (this.address == null) {
            this.getLocation();
        }
        else {
            this.GeolocationAddress.address = this.address;
        }
    }
    FromlocationComponent.prototype.getLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                if (position) {
                    console.log("Latitude: " + position.coords.latitude +
                        "Longitude: " + position.coords.longitude);
                    _this.lat = position.coords.latitude;
                    _this.lng = position.coords.longitude;
                    localStorage.setItem('fromlng', _this.lng);
                    localStorage.setItem('fromlat', _this.lat);
                    // this.toaster.open({
                    //   text: this.lat,
                    //   caption: ' notification',
                    //   type: 'success',
                    // });
                    _this.GetCurrentLocation();
                    // 'console'.log(this.lng);  
                }
            }, function (error) { return console.log(error); });
        }
        else {
            console.log("Geolocation is not supported by this browser.");
        }
    };
    FromlocationComponent.prototype.GetCurrentLocation = function () {
        this.locationaddress();
    };
    FromlocationComponent.prototype.locationaddress = function () {
        var _this = this;
        this.authservice.locationValidator(this.lat, this.lng)
            .subscribe(function (data) {
            console.log(data);
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        this.authservice.GetAddressfor(this.lat, this.lng)
            .subscribe(function (data) {
            _this.GeolocationAddress.address = data.results[0].formatted_address;
            localStorage.setItem('fromlocation', _this.GeolocationAddress.address);
            _this.originalFrom = false;
            _this.StoreFrom = false;
            _this.Geolocationdata = true;
        }, function (err) {
            _this.err = err;
            console.log(err);
            console.log(err);
            if (err.status == 423) {
                _this.toaccstr.error(_this.err.data.response, 'Blocked!');
                _this.GeolocationAddress.address = "";
            }
        });
        //for reference check the below link
        //chaitanya reddy
        //https://developers.google.com/maps/documentation/javascript/examples/geocoding-reverse
        //      this.gecode= new google.maps.Geocoder;
        //      let latlng = {lat: parseFloat(this.lat), lng: parseFloat(this.lng)};
        //      this.gecode.geocode({'location': latlng},(results, status) => {
        // console.log(status);
        // alert('this is results');
        // alert(results);
        //         if (status === 'OK') {
        //           alert('ok ok ok')
        //           if (results[0]) {
        //             alert(results[0].formatted_address)
        //             this.Geolocationaddress=results[0].formatted_address;
        //             alert(  this.Geolocationaddress);
        //           } else {
        //            alert('No results found');
        //           }
        //           }
        //           else {
        //             alert('Geocoder failed due to: ' + status);
        //           }
        //           this.originalFrom=false;
        //           this.StoreFrom=false;
        //           this.Geolocationdata=true;
        //       });
    };
    FromlocationComponent.prototype.openStoreModal = function () {
        this.storelist();
        $('#storelistmodal').modal('show');
    };
    FromlocationComponent.prototype.openoriginal = function () {
        this.GeolocationAddress.address = "";
        this.originalFrom = true;
        this.StoreFrom = false;
        this.Geolocationdata = false;
    };
    FromlocationComponent.prototype.openthird = function () {
        this.originalFrom = false;
        this.StoreFrom = false;
        this.Geolocationdata = true;
    };
    FromlocationComponent.prototype.startOneOpen = function () {
        this.originalFrom = true;
        this.StoreFrom = false;
        this.Geolocationdata = false;
    };
    FromlocationComponent.prototype.addingLocation = function (locationData) {
        this.GeolocationAddress.address = locationData.address;
        localStorage.setItem('fromlocation', this.GeolocationAddress.address);
        this.originalFrom = false;
        this.StoreFrom = true;
        $('#storelistmodal').modal('hide');
        localStorage.setItem('fromlat', locationData.Lat);
        /*   this.fromlat=this.latitude; */
        // this.longitude = place.geometry.location.lng();
        //console.log( this.longitude);
        localStorage.setItem('fromlng', locationData.Lng);
        this.originalFrom = false;
        this.Geolocationdata = false;
        this.StoreFrom = true;
    };
    FromlocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // localStorage.setItem('fromlat', '17.00');
        //     localStorage.setItem('fromlng', '81.00');
        this.getDirection();
        /*   this.zoom = 4; */
        /*   this.latitude = 39.8282;
          this.longitude = -98.5795; */
        //create search FormControl
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        //this.searcControl = new FormControl();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    console.log(place);
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    console.log(_this.latitude);
                    _this.authservice.locationValidator(_this.latitude, _this.longitude)
                        .subscribe(function (data) {
                        console.log(data);
                        console.log(data);
                    }, function (err) {
                        console.log(err);
                        if (err.status == 423) {
                            _this.toaccstr.error('You are not in my Boundaries!', 'Blocked!');
                            _this.GeolocationAddress.address = "";
                        }
                    });
                    localStorage.setItem('fromlat', _this.latitude);
                    /*   this.fromlat=this.latitude; */
                    _this.longitude = place.geometry.location.lng();
                    console.log(_this.longitude);
                    localStorage.setItem('fromlng', _this.longitude);
                    /*  this.fromlong=this.longiitude; */
                    _this.zoom = 12;
                    _this.dir = {
                        origin: { lat: _this.latitude, lng: _this.longitude },
                        destination: { lat: _this.latitude, lng: _this.longitude }
                    };
                    console.log(_this.dir);
                });
            });
        });
        this.dtOptions = {
            pagingType: 'full_numbers', pageLength: 10, paging: false,
        };
    };
    FromlocationComponent.prototype.storelist = function () {
        var _this = this;
        this.authservice.storeslist()
            .subscribe(function (data) {
            _this.jobs = data.response;
            _this.dtTrigger.next();
        }, function (err) {
            console.log(err);
        });
    };
    FromlocationComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                //this.zoom = 12;
            });
        }
    };
    FromlocationComponent.prototype.getDirection = function () {
        // this.dir = {
        //   origin: { lat: 18.888, lng: 78.979021 },
        //   destination: { lat: 16.799524, lng: 80.975017 }
        // }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("search"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FromlocationComponent.prototype, "searchElementRef", void 0);
    FromlocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fromlocation',
            template: __webpack_require__(/*! ./fromlocation.component.html */ "./src/app/modulewise/shippingcreationsdata/fromlocation/fromlocation.component.html"),
            styles: [__webpack_require__(/*! ./fromlocation.css */ "./src/app/modulewise/shippingcreationsdata/fromlocation/fromlocation.css")]
        }),
        __metadata("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_6__["Toaster"]])
    ], FromlocationComponent);
    return FromlocationComponent;
}());



/***/ }),

/***/ "./src/app/modulewise/shippingcreationsdata/fromlocation/fromlocation.css":
/*!********************************************************************************!*\
  !*** ./src/app/modulewise/shippingcreationsdata/fromlocation/fromlocation.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul\r\n{\r\n  display:flex;  \r\n  list-style:none;\r\n}\r\nli{\r\n    width:33.3333%;\r\n}\r\n.css_fontt {\r\n   \r\n    color: #d30f6c;\r\n  \r\n    font-size: 31px;\r\n    padding: 2px 8px;\r\n    border-radius: 2px;\r\n}"

/***/ }),

/***/ "./src/app/modulewise/shippingcreationsdata/tolocation/tolocation.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modulewise/shippingcreationsdata/tolocation/tolocation.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\t  <div class=\" form-group \" >\r\n\t  <label >To location </label> <div class=\"input-group mb-3\">\r\n        <input [placeholder]=\"responseAdrress\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\r\n   \r\n        <div class=\"input-group-append\">\r\n             <span class=\"input-group-text\"  *ngIf=\"startone\" (click)=\"CurrentLocation()\"><i style=\"font-size: 20px;;color:#d41570;\" class=\" fa fa-crosshairs\" aria-hidden=\"true\"></i></span>\r\n             <span class=\"input-group-text\"   *ngIf=\"secondone\" (click)=\"UserEntredLocation()\"><i style=\"color:red;font-size:20px;\" class=\" fa fa-minus-circle\" aria-hidden=\"true\"></i></span>\r\n                \r\n              </div></div> \r\n\t  \r\n     </div>\r\n   \r\n     <!-- <div class=\" form-group \" >\r\n        <label>To location </label> <div class=\"input-group mb-3\">\r\n            <input [placeholder]=\"responseAdrress\"  readonly=\"true\" class=\"form-control\" >\r\n       \r\n            <div class=\"input-group-append\">\r\n                \r\n                  </div></div>\r\n        \r\n         </div> -->\r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t "

/***/ }),

/***/ "./src/app/modulewise/shippingcreationsdata/tolocation/tolocation.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modulewise/shippingcreationsdata/tolocation/tolocation.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TolocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TolocationComponent", function() { return TolocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shipping/shipping.component */ "./src/app/shipping/shipping.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toast-notifications */ "./node_modules/ngx-toast-notifications/dist/index.js");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { ShippingdetailsComponent } from '../shippingdetails/shippingdetails.component';

var TolocationComponent = /** @class */ (function () {
    function TolocationComponent(mapsAPILoader, authservice, toaccstr, toaster, ngZone, ShippingComponent) {
        this.mapsAPILoader = mapsAPILoader;
        this.authservice = authservice;
        this.toaccstr = toaccstr;
        this.toaster = toaster;
        this.ngZone = ngZone;
        this.ShippingComponent = ShippingComponent;
        this.startone = true;
        this.secondone = false;
        /* public zoom: Number = 14; */
        this.dir = undefined;
        this.responseAdrress = '';
        this.address = localStorage.getItem('tofarelocation');
        //alert(this.address);
        if (this.address == null) {
            this.getViewData();
            // this.getDirection() ; 
        }
        else {
            this.responseAdrress = this.address;
        }
    }
    TolocationComponent.prototype.ngOnInit = function () { };
    TolocationComponent.prototype.getViewData = function () {
        var _this = this;
        localStorage.setItem('tolat', '17.00');
        localStorage.setItem('tolng', '81.00');
        /*   this.zoom = 4; */
        /*   this.latitude = number;
        this.longitude = number;  */
        //create search FormControl
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        //this.searcControl = new FormControl();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    console.log(place);
                    localStorage.setItem('tolocation', place.formatted_address);
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    console.log(_this.latitude);
                    _this.longitude = place.geometry.location.lng();
                    console.log(_this.longitude);
                    _this.authservice.locationValidator(_this.latitude, _this.longitude)
                        .subscribe(function (data) {
                        console.log(data);
                        console.log(data);
                        localStorage.setItem('tolat', _this.latitude);
                        /*   this.fromlat=this.latitude; */
                        localStorage.setItem('tolng', _this.longitude);
                        /*  this.fromlong=this.longiitude; */
                        _this.zoom = 12;
                        var ch = JSON.parse(localStorage.getItem('fromlat'));
                        /*  console.log(ch); */
                        var chh = JSON.parse(localStorage.getItem('fromlng'));
                        /*  console.log(chh); */
                        _this.dir = {
                            origin: { lat: ch, lng: chh },
                            destination: { lat: _this.latitude, lng: _this.longitude }
                        };
                        /*    console.log(this.dir); */
                        localStorage.setItem('dir', JSON.stringify(_this.dir));
                        /*  console.log(this.dir); */
                        _this.ShippingComponent.calculateAndDisplayRoute();
                    }, function (err) {
                        console.log(err);
                        _this.responseAdrress = '';
                        if (err.status == 423) {
                            _this.toaccstr.error('You are not in my Boundaries!', 'Blocked!');
                        }
                        _this.responseAdrress = '';
                    });
                    //public ShippingdetailsComponent:ShippingdetailsComponent,
                });
            });
        });
        /*   console.log( this.longitude); */
    };
    TolocationComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    // getDirection() {
    //   this.dir = {
    //     origin: { lat: 18.888, lng: 78.979021 },
    //     destination: { lat: 16.799524, lng: 80.975017 }
    //   }
    // 
    // }
    TolocationComponent.prototype.CurrentLocation = function () {
        this.responseAdrress = '';
        this.getLocation();
    };
    TolocationComponent.prototype.getLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                if (position) {
                    console.log("Latitude: " + position.coords.latitude +
                        "Longitude: " + position.coords.longitude);
                    _this.lat = position.coords.latitude;
                    _this.lng = position.coords.longitude;
                    console.log(_this.lat);
                    console.log(_this.lng);
                    _this.authservice.locationValidator(_this.latitude, _this.longitude)
                        .subscribe(function (data) {
                        console.log(data);
                        console.log(data);
                        _this.locationaddress();
                    }, function (err) {
                        console.log(err);
                        _this.responseAdrress = '';
                        if (err.status == 423) {
                            _this.toaccstr.error('You are not in my Boundaries!', 'Blocked!');
                            _this.responseAdrress = '';
                        }
                    });
                    // this.toaster.open({
                    //   text: this.latitude,
                    //   caption: ' notification',
                    //   type: 'success',
                    // });
                }
            }, function (error) { return console.log(error); });
        }
        else {
            console.log("Geolocation is not supported by this browser.");
        }
    };
    TolocationComponent.prototype.locationaddress = function () {
        var _this = this;
        console.log('entered to location addres');
        this.toaccstr.success('Hello world!', 'Toadstr fun!');
        console.log(this.lat);
        console.log(this.lng);
        this.latitude = this.lat;
        this.longitude = this.lng;
        this.authservice.GetAddressfor(this.latitude, this.longitude)
            .subscribe(function (data) {
            console.log(data);
            console.log(data.results[0].formatted_address);
            console.log('get service all data');
            _this.responseAdrress = data.results[0].formatted_address;
            localStorage.setItem('tolat', _this.latitude);
            localStorage.setItem('tolng', _this.longitude);
            var ch = JSON.parse(localStorage.getItem('fromlat'));
            var chh = JSON.parse(localStorage.getItem('fromlng'));
            _this.dir = {
                origin: { lat: ch, lng: chh },
                destination: { lat: _this.latitude, lng: _this.longitude }
            };
            console.log(_this.dir);
            localStorage.setItem('dir', JSON.stringify(_this.dir));
            console.log(_this.dir);
            _this.ShippingComponent.ToLocationBasedCall();
        }, function (err) {
            console.log(err);
        });
        //for reference check the below link
        //chaitanya reddy
        //https://developers.google.com/maps/documentation/javascript/examples/geocoding-reverse
        //      this.gecode= new google.maps.Geocoder;
        //      let latlng = {lat: parseFloat(this.lat), lng: parseFloat(this.lng)};
        //      this.gecode.geocode({'location': latlng},(results, status) => {
        // console.log(status);
        // alert('this is results');
        // alert(results);
        //         if (status === 'OK') {
        //           alert('ok ok ok')
        //           if (results[0]) {
        ////             alert(results[0].formatted_address)
        //             this.Geolocationaddress=results[0].formatted_address;
        //             alert(  this.Geolocationaddress);
        //           } else {
        //            alert('No results found');
        //           }
        //           }
        //           else {
        //             alert('Geocoder failed due to: ' + status);
        //           }
        //           this.originalFrom=false;
        //           this.StoreFrom=false;
        //           this.Geolocationdata=true;
        //       });
        this.startone = false;
        this.secondone = true;
    };
    TolocationComponent.prototype.UserEntredLocation = function () {
        this.responseAdrress = '';
        this.startone = true;
        this.secondone = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("search"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TolocationComponent.prototype, "searchElementRef", void 0);
    TolocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tolocation',
            template: __webpack_require__(/*! ./tolocation.component.html */ "./src/app/modulewise/shippingcreationsdata/tolocation/tolocation.component.html"),
            styles: [__webpack_require__(/*! ./tolocation.css */ "./src/app/modulewise/shippingcreationsdata/tolocation/tolocation.css")]
        }),
        __metadata("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_6__["MapsAPILoader"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_5__["Toaster"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_2__["ShippingComponent"]])
    ], TolocationComponent);
    return TolocationComponent;
}());



/***/ }),

/***/ "./src/app/modulewise/shippingcreationsdata/tolocation/tolocation.css":
/*!****************************************************************************!*\
  !*** ./src/app/modulewise/shippingcreationsdata/tolocation/tolocation.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n      height: 600px;\r\n    }"

/***/ }),

/***/ "./src/app/modulewise/shippingdata/shippingdata.component.css":
/*!********************************************************************!*\
  !*** ./src/app/modulewise/shippingdata/shippingdata.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "..router-link-active {\r\n\tcolor: #000;\r\n\tfont-weight: bold;\r\n}\r\n.project-tab {\r\n   position: relative;\r\n    margin-top: 62px;\r\n   \r\n}\r\n.project-tab #tabs{\r\n    background: #007b5e;\r\n    color: #eee;\r\n}\r\n.project-tab #tabs h6.section-title{\r\n    color: #eee;\r\n}\r\n.project-tab #tabs .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\r\n   \r\n\tcolor: #cc0079;\r\n    background-color: transparent;\r\n    border-color: transparent transparent #f3f3f3;\r\n    border-bottom: 3px solid !important;\r\n    font-size: 16px;\r\n    font-weight: bold; \r\n\t\r\n}\r\n.project-tab .nav-link {\r\n    border: 1px solid transparent;\r\n    border-top-left-radius: .25rem;\r\n    border-top-right-radius: .25rem;\r\n    color: #0062cc;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n}\r\n.project-tab .nav-link:hover {\r\n    border: none;\r\n}\r\n.project-tab thead{\r\n    background: #f3f3f3;\r\n    color: #333;\r\n}\r\n.project-tab a{\r\n    text-decoration: none;\r\n    color: #333;\r\n    font-weight: 600;\r\n}"

/***/ }),

/***/ "./src/app/modulewise/shippingdata/shippingdata.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modulewise/shippingdata/shippingdata.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-homenavbar></app-homenavbar>\r\n\r\n\r\n<ng4-loading-spinner> </ng4-loading-spinner>\r\n\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n\r\n            <section id=\"tabs\" class=\"\">\r\n\r\n\r\n\r\n                <nav>\r\n                    <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                        <a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\"\r\n                            role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">Shipping Form</a>\r\n                        <a class=\"nav-item nav-link\" id=\"nav-profile-tab\" data-toggle=\"tab\" href=\"#nav-profile\"\r\n                            role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\">Shipping List </a>\r\n                    </div>\r\n                </nav>\r\n                <div class=\"tab-content\" id=\"nav-tabContent\">\r\n                    <div class=\"tab-pane fade show active\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\r\n\r\n                        <app-shipping></app-shipping>\r\n                    </div>\r\n                    <div class=\"tab-pane fade\" id=\"nav-profile\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\">\r\n                        <app-shipslist></app-shipslist>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n\r\n            </section>\r\n\r\n\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modulewise/shippingdata/shippingdata.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modulewise/shippingdata/shippingdata.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShippingdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingdataComponent", function() { return ShippingdataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShippingdataComponent = /** @class */ (function () {
    function ShippingdataComponent() {
    }
    ShippingdataComponent.prototype.ngOnInit = function () {
    };
    //callShippListTab from shipping data page
    ShippingdataComponent.prototype.callShippListTab = function () {
        $("#nav-profile-tab").click();
    };
    ShippingdataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shippingdata',
            template: __webpack_require__(/*! ./shippingdata.component.html */ "./src/app/modulewise/shippingdata/shippingdata.component.html"),
            styles: [__webpack_require__(/*! ./shippingdata.component.css */ "./src/app/modulewise/shippingdata/shippingdata.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShippingdataComponent);
    return ShippingdataComponent;
}());

$(".hide").click(function () {
    $(".hide").hide();
});


/***/ }),

/***/ "./src/app/myshippings/myshippings.component.css":
/*!*******************************************************!*\
  !*** ./src/app/myshippings/myshippings.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heitrelated{\r\n\theight:800px;\r\n}"

/***/ }),

/***/ "./src/app/myshippings/myshippings.component.html":
/*!********************************************************!*\
  !*** ./src/app/myshippings/myshippings.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <div class=\"card border-success mb-3\" style=\"max-width: 18rem;margin-left: 30PX;\">\r\n    <div class=\"card-header bg-transparent border-success\">Header</div>\r\n    <div class=\"card-body text-success\">\r\n      <h5 class=\"card-title\">Success card title</h5>\r\n      <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n    </div>\r\n    <div class=\"card-footer bg-transparent border-success\">Footer</div>\r\n  </div> -->\r\n  <div class=\"padding_adjust\" style=\"\">\r\n \t<div class=\"container-fluid\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header\" style=\"background-color:rgb(53,14,63);color:white;position:sticky\"><b>Shipping Lists</b></div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"card-header\" style=\"background-color:rgb(53,14,63);color:white;\"><b>Shipping Lists</b></div>\r\n<div class=\"row\"style=\"padding:22px\">\r\n\r\n\r\n<div class=\"col col-sm-12 col-md-12 col-lg-6\" style=\"\">\r\n\r\n\t<div class=\"row\">\r\n\t<div class=\"col col-sm-12 col-md-12 col-lg-6\" *ngFor=\"let list of shippslist\"  style=\"\">\r\n\t\t<div class=\"card text-white bg-success mb-3 colo \" (click)=\"changeSelected(list)\" style=\"width: 100%;color:black\">\r\n\t\t\t<div class=\"\">\r\n\t\t\t\t<div class=\"col card-header colo\" style=\"background-color:rgb(53,11,63)\"><b style=\"color:white\">{{list.shippId}}</b><span class=\"pull-right\" style=\"color: rgb(211,15,108);float:right\" (click)=\"retry(list.id)\"*ngIf=\"list.status=='Delayed'\" ><b>Retry</b></span></div>\r\n\t\t\t\t<div class=\"col card-header colo\"  *ngIf=\"list.status=='Submit'\">\r\n\t\t\t\t\t <i><img src=\"../assets/1111.png\"  style=\"\" *ngIf=\"list.status=='Closed'\" ></i>\r\n\t\t\t\t\t\t<i><img src=\"../assets/111.png\"  style=\"width:10%\" *ngIf=\"list.status=='DriverAccept'\" ></i>\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t<div style=\"text-align:center;color: rgb(211,15,108);\" ><b>Service Provider</b></div> \r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card-body colo\">\r\n\t\t\t<div  *ngFor=\"let select of Selected\">\r\n\t\t\t\t\t <div *ngIf=\"select.shipping.id==list.id\" style=\"margin-top:calc(5% - 33px);\">\r\n\t\t\t\t\t \r\n\t\t\t\t\t \r\n\t\t\t\t\t  <div  *ngFor=\"let items of select.shippingsItems; let i=index\">\r\n\t\t\t\t  \r\n\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t  <div class=\"col-md-12 text-center\"><div class=\"card\" *ngIf=\" select.itemDocs[items.id].length==0 && i<1\" style=\"background-color:white;margin-top:5px;\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t  \r\n\t\t\t\t\t\t  <img src=\"assets/noimages.png\"     height=\"92px\"  width=\"100%\" style=\"box-shadow: 6px 6px 5px 0px rgba(178,184,184,1) ! important;border-radius: 6px;background: rgba(0, 0, 0, 0.08);\"/>\r\n\t\t\t\t\t\t </div> \r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t<!--  <div class=\"card\" *ngIf=\"!select.itemDocs[items.id]\" style=\"background-color:white;margin-top:5px;\">\r\n\t\t\t\t\t\t  <img src=\"assets/noimages.png\"     height=\"92px\"  width=\"100%\" style=\"box-shadow: 6px 6px 5px 0px rgba(178,184,184,1) ! important;border-radius: 6px;background: rgba(0, 0, 0, 0.08);\"/>\r\n\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t  -->\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t <div class=\"card\" *ngIf=\"\" style=\"background-color:white;margin-top:5px;\">\r\n\t\t\t\t\t\t  <img src=\"assets/noimages.png\"     height=\"92px\"  width=\"100%\" style=\"box-shadow: 6px 6px 5px 0px rgba(178,184,184,1) ! important;border-radius: 6px;background: rgba(0, 0, 0, 0.08);\"/>\r\n\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t </div>\r\n\t\t\t\t\r\n\t\t\t\t<div *ngIf=\"select.itemDocs[items.id].length>0 && i<1\" style=\"margin-top:5px;\">\r\n\t\t\t\t\t\t<div   *ngFor=\"let doc of select.itemDocs[items.id]; let i=index\"    >\r\n\t\t\t\t\t\t\t<div class=\"card\"*ngIf = \"i<1\" style=\"box-shadow: 6px 6px 5px 0px rgba(178,184,184,1) ! important;border-radius: 6px;background: rgba(0, 0, 0, 0.08);\">\r\n\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<img src=\"http://192.168.1.49:8080/eazyshipp/app/customer/{{doc.id}}/itemImage\"     height=\"92px\"  width=\"100%\" style=\"margin-top: calc(5% - 14px);\"/>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t \r\n\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div *ngIf=\"select.shipping.id==list.id\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t</div>\r\n<div class=\"row\">\r\n<div class=\"col p\">Ship Id</div><div><p class=\"card-text p\" style=\"float:right\">{{list.id}}</p></div></div>\r\n<div class=\"row\">\r\n<div class=\"col p\">Pay Mode</div><div><p class=\"card-text p \" style=\"float:right\">{{list.paymentMode}}</p></div></div>\r\n<div class=\"row\">\r\n<div class=\"col p\">Pay At</div><div><p class=\"card-text p\" style=\"float:right\">{{list.payingAt}}</p></div></div>\r\n<div class=\"row\">\r\n<div class=\"col p\">Mobile</div><div><p class=\"card-text p\" style=\"float:right\">{{list.toContactNumber}}</p></div></div>\r\n<div class=\"row\">\r\n<div class=\"col p\">Vechicle Type</div><div><p class=\"card-text p\" style=\"float:right\">{{list.toContactNumber}}</p></div></div>\r\n<div class=\"row\">\r\n<div class=\"col p\">Amount</div><div><p class=\"card-text p\" style=\"float:right\">Rs.{{list.total}}/-</p></div>\r\n</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t  <div class=\"col\">\r\n\t\t\t\t\t      <button class=\"btn button-color\" (click)=\"modals(list)\" data-toggle=\"modal\" data-target=\"#shippdetails\">Details</button>\r\n\t\t\t\t\t      </div>\r\n\t\t\t\t\t      <div >\r\n\t\t\t\t\t      <button class=\"btn \" (click)=\"track(list)\" data-toggle=\"modal\" data-target=\"#tackshipp\">Tracking</button>\r\n\t\t\t\t\t      </div>  \r\n\t\t\t\t\t   \r\n\t\t\t   </div>\r\n\t\t\t\t\t\t\r\n </div>\r\n</div>\r\n </div>\r\n </div>\r\n\r\n\r\n</div>\r\n\r\n<div class=\"col col-sm-12 col-md-12 col-lg-6\">\r\n<div style=\"position:fixed\"><div style=\"\">\r\n\t\t<div class=\"card heitrelated text-white bg-success mb-3 colo \" style=\"width: 700px;color:black\">\r\n\t\t\t<div class=\"\">\r\n\t\t\t\t<div class=\"col card-header colo\" style=\"background-color:rgb(53,11,63)\"><b style=\"color:white\">{{list.shippId}}</b><span class=\"pull-right\" style=\"color: rgb(211,15,108);float:right\" (click)=\"retry(list.id)\"*ngIf=\"list.status=='Delayed'\" ><b>Retry</b></span></div>\r\n\t\t\t\t<div class=\"col card-header colo\"  *ngIf=\"list.status=='Submit'\">\r\n\t\t\t\t\t <i><img src=\"../assets/1111.png\"  style=\"\" *ngIf=\"list.status=='Closed'\" ></i>\r\n\t\t\t\t\t\t<i><img src=\"../assets/111.png\"  style=\"width:10%\" *ngIf=\"list.status=='DriverAccept'\" ></i>\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t<div style=\"text-align:center;color: rgb(211,15,108);\" ><b>Service Provider</b></div> \r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card-body colo\">\r\n\t\t\t<div  *ngFor=\"let select of Selected\">\r\n\t\t\t\t\t <div *ngIf=\"select.shipping.id==list.id\" style=\"margin-top:calc(5% - 33px);\">\r\n\t\t\t\t\t \r\n\t\t\t\t\t \r\n\t\t\t\t\t  <div  *ngFor=\"let items of select.shippingsItems; let i=index\">\r\n\t\t\t\t  \r\n\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t  <div class=\"col-md-12 text-center\"><div class=\"card\" *ngIf=\" select.itemDocs[items.id].length==0 && i<1\" style=\"background-color:white;margin-top:5px;\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t  \r\n\t\t\t\t\t\t  <img src=\"assets/noimages.png\"     height=\"92px\"  width=\"100%\" style=\"box-shadow: 6px 6px 5px 0px rgba(178,184,184,1) ! important;border-radius: 6px;background: rgba(0, 0, 0, 0.08);\"/>\r\n\t\t\t\t\t\t </div> \r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t<!--  <div class=\"card\" *ngIf=\"!select.itemDocs[items.id]\" style=\"background-color:white;margin-top:5px;\">\r\n\t\t\t\t\t\t  <img src=\"assets/noimages.png\"     height=\"92px\"  width=\"100%\" style=\"box-shadow: 6px 6px 5px 0px rgba(178,184,184,1) ! important;border-radius: 6px;background: rgba(0, 0, 0, 0.08);\"/>\r\n\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t  -->\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t <div class=\"card\" *ngIf=\"\" style=\"background-color:white;margin-top:5px;\">\r\n\t\t\t\t\t\t  <img src=\"assets/noimages.png\"     height=\"92px\"  width=\"100%\" style=\"box-shadow: 6px 6px 5px 0px rgba(178,184,184,1) ! important;border-radius: 6px;background: rgba(0, 0, 0, 0.08);\"/>\r\n\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t </div>\r\n\t\t\t\t\r\n\t\t\t\t<div *ngIf=\"select.itemDocs[items.id].length>0 && i<1\" style=\"margin-top:5px;\">\r\n\t\t\t\t\t\t<div   *ngFor=\"let doc of select.itemDocs[items.id]; let i=index\"    >\r\n\t\t\t\t\t\t\t<div class=\"card\"*ngIf = \"i<1\" style=\"box-shadow: 6px 6px 5px 0px rgba(178,184,184,1) ! important;border-radius: 6px;background: rgba(0, 0, 0, 0.08);\">\r\n\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<img src=\"http://192.168.1.49:8080/eazyshipp/app/customer/{{doc.id}}/itemImage\"     height=\"92px\"  width=\"100%\" style=\"margin-top: calc(5% - 14px);\"/>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t \r\n\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div *ngIf=\"select.shipping.id==list.id\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t</div>\r\n<div class=\"row\">\r\n<div class=\"col p\">Ship Id</div><div><p class=\"card-text p\" style=\"float:right\">{{list.id}}</p></div></div>\r\n<div class=\"row\">\r\n<div class=\"col p\">Pay Mode</div><div><p class=\"card-text p \" style=\"float:right\">{{list.paymentMode}}</p></div></div>\r\n<div class=\"row\">\r\n<div class=\"col p\">Pay At</div><div><p class=\"card-text p\" style=\"float:right\">{{list.payingAt}}</p></div></div>\r\n<div class=\"row\">\r\n<div class=\"col p\">Mobile</div><div><p class=\"card-text p\" style=\"float:right\">{{list.toContactNumber}}</p></div></div>\r\n<div class=\"row\">\r\n<div class=\"col p\">Vechicle Type</div><div><p class=\"card-text p\" style=\"float:right\">{{list.toContactNumber}}</p></div></div>\r\n<div class=\"row\">\r\n<div class=\"col p\">Amount</div><div><p class=\"card-text p\" style=\"float:right\">Rs.{{list.total}}/-</p></div>\r\n</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t  <div class=\"col\">\r\n\t\t\t\t\t      <button class=\"btn button-color\" (click)=\"modals(list)\" data-toggle=\"modal\" data-target=\"#shippdetails\">Details</button>\r\n\t\t\t\t\t      </div>\r\n\t\t\t\t\t      <div >\r\n\t\t\t\t\t      <button class=\"btn \" (click)=\"track(list)\" data-toggle=\"modal\" data-target=\"#tackshipp\">Tracking</button>\r\n\t\t\t\t\t      </div>  \r\n\t\t\t\t\t   \r\n\t\t\t   </div>\r\n\t\t\t\t\t\t\r\n </div>\r\n</div>\r\n\r\n </div>\r\n\r\n</div></div>\r\n</div> \r\n\t\t\t\t\t\t  \r\n</div>\r\n</div>\r\n\r\n</div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"shippdetails\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n    \r\n      <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"modal-title  col-md-12 col-sm-12 col-lg-12 col-xs-12\">Shipping Details</h5>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" style=\"color:white;margin-left:calc(5% - 56px)\" aria-label=\"Close\">\r\n\t\t\t\t\t\t\t\t  <span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t</div>\r\n           <div class=\"modal-body\">\r\n\t\t   <div id=\"map\">\r\n\t\t   </div>\r\n\t\t   \t\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"shipping.status=='Closed'\" style=\"margin-top: 20px;\">\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div style=\"color:green;font-size: 12px;\">Your Shipping Successfully Completed !</div>\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"shipping.status=='Delayed'\" style=\"\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div style=\"color:red;font-size: 12px;text-align:center\">Your order not accepted any service provider !</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div style=\"color:#350e3f;text-align:center;cursor:pointer\" (click)=\"retry(mo.id)\"><b> Retry </b></div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"item item-divider\" *ngIf=\"shipping.status!='Delayed'\" style=\"text-align:center;color:green\">\r\n\t\t\t\t\t\t\t\t\t\t\t<b>Service Provider</b>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t<table class=\"table table-bordered\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t  <tr style=\"border:1px solid white;\">\r\n\t\t\t\t\t\t<td style=\"border:1px solid white;float:left\">Ship Id</td>\r\n\t\t\t\t\t\t<td style=\"border:1px solid white;float:right\">Amount</td>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr style=\"border:1px solid white;\">\r\n\t\t\t\t\t\t<th style=\"border:1px solid white;float:left\">{{mo.shippId}}</th>\r\n\t\t\t\t\t\t<th style=\"border:1px solid white;;float:right\">Rs.{{mo.subTotal}}/-</th>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t <tr>\r\n\t\t\t\t\t <th colspan=\"2\">\r\n\t\t\t<div class=\"card\" style=\"    width: 100%;\">\r\n\t\t\t\t<ul class=\"nav nav-tabs\">\r\n\t\t\t\t\t  <li class=\"nav-item\">\r\n\t\t\t\t\t\t<a class=\"nav-link active\" data-toggle=\"tab\" href=\"#pending\">From Location</a>\r\n\t\t\t\t\t  </li>\r\n\t\t\t\t\t  <li class=\"nav-item\">\r\n\t\t\t\t\t\t<a class=\"nav-link\" data-toggle=\"tab\" href=\"#selected\">To Location</a>\r\n\t\t\t\t\t  </li>\r\n\t\t\t\t\t  <li class=\"nav-item\">\r\n\t\t\t\t\t\t<a class=\"nav-link\" data-toggle=\"tab\" href=\"#approved\">Vehicle Type</a>\r\n\t\t\t\t\t  </li>\r\n\t\t\t\t</ul><br>\r\n\t\t\t\t\t  \r\n\t\t\t\t\t  \r\n\t\t\t\t\t  \r\n\t\t\t\t\t  <div class=\"tab-content\">\r\n\t\t\t\t\t\t  <div class=\"tab-pane container active\" id=\"pending\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<table class=\"table table-bordered\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<!--  <tr><th colspan=\"2\">From Location</th></tr> -->\r\n\t\t\t\t\t\t\t\t\t\t  <tr><td colspan=\"2\">{{mo.fromLocation}}</td></tr>\r\n\t\t\t\t\t\t\t\t\t\t  <tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>Name</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{mo.fromContactName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t\t\t\t\t  <tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>Mobile</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{mo.fromContactNumber}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div class=\"tab-pane container fade\" id=\"selected\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<table class=\"table table-bordered\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <tr><th colspan=\"2\">To Location</th></tr> -->\r\n\t\t\t\t\t\t\t\t\t\t  <tr><td colspan=\"2\">{{mo.toLocation}}</td></tr>\r\n\t\t\t\t\t\t\t\t\t\t  <tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>Name</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{mo.toContactName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t\t\t\t\t  <tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>Mobile</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{mo.toContactNumber}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div class=\"tab-pane container fade\" id=\"approved\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<table class=\"table table-bordered\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t  <tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>Vehicle</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{mo.vehicleType}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t\t\t\t\t  <tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>Shipping Mode</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{mo.title}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t  <tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>Pay Mode</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{mo.paymentMode}}</td>\r\n\t\t\t\t\t\t\t\t\t\t </tr>\r\n\t\t\t\t\t\t\t\t\t\t  <tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>Pay At</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{mo.payingAt}}</td>\r\n\t\t\t\t\t\t\t\t\t\t </tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div> \r\n\t\t\t</div></th></tr>\r\n\t\t\t\t\t \r\n\t\t\t\t\t  \r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div  *ngFor=\"let items of shippingsItems\">\r\n\t\t\t\t\t<div class=\"row\" style=\"background-color:rgba(202, 202, 202, 0.66);text-align:center\">\r\n\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t<div style=\"color:#1a237e\"><b>{{items.description}} </b></div></div></div>\r\n\t\t\t\t\t\t<div class=\"row\" style=\"background-color:rgba(202, 202, 202, 0.66);text-align:center\">\r\n\t\t\t\t\t\t<div class=\"col\">Height :<b>{{items.height}}{{items.widthUom}}</b></div>\r\n\t\t\t\t\t\t<div class=\"col\">Width  :<b>{{items.width}}{{items.widthUom}}</b></div></div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<div *ngIf=\"!itemDocs[items.id] || itemDocs[items.id].length==0\" style=\"text-align:center\">Image Not Avaliable !</div> <br>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div *ngIf=\"itemDocs[items.id].length>0\">\r\n\t\t\t\t\t\t<div class=\"scrollmenu\"   >\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!-- \t<div class=\"card\" style=\"box-shadow: 6px 6px 5px 0px rgba(178,184,184,1) ! important;border-radius: 6px;background: rgba(0, 0, 0, 0.08);\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div style=\"color:black;font-size: 14px !important;text-align: center;\">{{doc.documentName || 'No Name'}}</div>\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"http://192.168.1.49:8080/eazyshipp/app/customer/{{doc.id}}/itemImage\"     height=\"150px\"  width=\"100%\" style=\"margin-top: calc(5% - 26px);\"/>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t\t\r\n  <a href=\"#home\" *ngFor=\"let doc of itemDocs[items.id]\"><img src=\"http://192.168.1.49:8080/eazyshipp/app/customer/{{doc.id}}/itemImage\"     height=\"150px\"  width=\"100%\" style=\"margin-top: calc(5% - 26px);\"/></a>\r\n<!--   <a href=\"#news\">News</a>\r\n  <a href=\"#contact\">Contact</a>\r\n  <a href=\"#about\">About</a>\r\n  <a href=\"#support\">Support</a>\r\n  <a href=\"#blog\">Blog</a>\r\n  <a href=\"#tools\">Tools</a>  \r\n  <a href=\"#base\">Base</a>\r\n  <a href=\"#custom\">Custom</a>\r\n  <a href=\"#more\">More</a>\r\n  <a href=\"#logo\">Logo</a>\r\n  <a href=\"#friends\">Friends</a>\r\n  <a href=\"#partners\">Partners</a>\r\n  <a href=\"#people\">People</a>\r\n  <a href=\"#work\">Work</a> -->\r\n</div>\r\n</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<!-- <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\" *ngIf=\"itemDocs[items.id].length>0\">\r\n\t\t\t\t\t\t<div *ngIf=\"!itemDocs[items.id] || itemDocs[items.id].length==0\" style=\"text-align:center\">Image Not Avaliable !</div> <br> -->\r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t <!--  <div  class=\"scrollmenu\" direction=\"x\" class=\"wide-as-needed\" ng-if=\"itemDocs[items.id].length>0\" style=\"margin-top:5px;\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"button\" style=\"width:60%;padding: 2px;line-height: 0px;    text-align: -webkit-match-parent;border-width: 0px;border-style: none;background-color: white; \"  ng-repeat=\"doc in itemDocs[items.id]\"  ng-click=\"viewImageAsModal(doc)\"  >\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card animated bounceIn\" style=\"box-shadow: 6px 6px 5px 0px rgba(178,184,184,1) ! important;border-radius: 6px;background: rgba(0, 0, 0, 0.08);\">\r\n\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t\t<center> <p class=\"cut-textss\" style=\"margin-top:5%;\"><tt style=\"color:black;font-size: 14px !important;\">{{doc.documentName || 'No Name'}}</tt></p></center> \r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"http://192.168.1.49:8080/eazyshipp/app/customer/{{doc.id}}/itemImage\"     height=\"92px\"  width=\"100%\" style=\"margin-top: calc(5% - 26px);\"/>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t<!-- <div class=\"carousel-inner\" *ngIf=\"itemDocs[items.id].length>0\">\r\n\t\t\t\t\t\t\t\t<div class=\"carousel-item active\" >\r\n\t\t\t\t\t\t\t\t  <div   *ngFor=\"let doc of itemDocs[items.id]\"  (click)=\"viewImageAsModal(doc)\"  >\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card\" style=\"box-shadow: 6px 6px 5px 0px rgba(178,184,184,1) ! important;border-radius: 6px;background: rgba(0, 0, 0, 0.08);\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div style=\"color:black;font-size: 14px !important;text-align: center;\">{{doc.documentName || 'No Name'}}</div>\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"http://192.168.1.49:8080/eazyshipp/app/customer/{{doc.id}}/itemImage\"     height=\"150px\"  width=\"100%\" style=\"margin-top: calc(5% - 26px);\"/>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"carousel-item\">\r\n\t\t\t\t\t\t\t\t  <img class=\"d-block w-100\" src=\"assets/2.png\" alt=\"Second slide\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"carousel-item\">\r\n\t\t\t\t\t\t\t\t  <img class=\"d-block w-100\" src=\"assets/2.png\" alt=\"Third slide\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t  </div> -->\r\n\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t<!--   <div class=\"carousel-inner\" *ngIf=\"itemDocs[items.id].length>0\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t  <div   *ngFor=\"let doc of itemDocs[items.id];let i=index\"  >\r\n\t\t\t\t\t\t\t\t  {{i}}\r\n\t\t\t\t\t\t\t\t<div class=\"carousel-item  active\" *ngIf=\"i==0\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"http://192.168.1.49:8080/eazyshipp/app/customer/{{doc.id}}/itemImage\"     height=\"150px\"  width=\"100%\" style=\"margin-top: calc(5% - 26px);\"/>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"carousel-item\" *ngIf=\"i==1\">\r\n\t\t\t\t\t\t\t\t \t<img src=\"http://192.168.1.49:8080/eazyshipp/app/customer/{{doc.id}}/itemImage\"     height=\"150px\"  width=\"100%\" style=\"margin-top: calc(5% - 26px);\"/>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"carousel-item\" *ngIf=\"i==2\">\r\n\t\t\t\t\t\t\t\t \t<img src=\"http://192.168.1.49:8080/eazyshipp/app/customer/{{doc.id}}/itemImage\"     height=\"150px\"  width=\"100%\" style=\"margin-top: calc(5% - 26px);\"/>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div> -->\r\n\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t<!--   <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\" style=\"background:#d30f6c\">\r\n\t\t\t\t\t\t\t\t<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\" ></span>\r\n\t\t\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\r\n\t\t\t\t\t\t\t  </a>\r\n\t\t\t\t\t\t\t  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\" style=\"background:#d30f6c\">\r\n\t\t\t\t\t\t\t\t<span class=\"carousel-control-next-icon\" aria-hidden=\"true\" ></span>\r\n\t\t\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\r\n\t\t\t\t\t\t\t  </a>  --> \r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"row\" style=\"background-color:rgba(202, 202, 202, 0.66);text-align:center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"color:#1a237e\"><b>{{items.description}} </b></div></div></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\" style=\"background-color:rgba(202, 202, 202, 0.66);text-align:center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col\">Height :<b>{{items.height}}{{items.widthUom}}</b></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col\">Width  :<b>{{items.width}}{{items.widthUom}}</b></div></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div *ngIf=\"!itemDocs[items.id] || itemDocs[items.id].length==0\" style=\"text-align:center\">Image Not Avaliable !</div>  -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div *ngIf=\"itemDocs[items.id].length>0\" style=\"margin-top:5px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div   *ngFor=\"let doc of itemDocs[items.id]\"  (click)=\"viewImageAsModal(doc)\"  >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card\" style=\"box-shadow: 6px 6px 5px 0px rgba(178,184,184,1) ! important;border-radius: 6px;background: rgba(0, 0, 0, 0.08);\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"color:black;font-size: 14px !important;text-align: center;\">{{doc.documentName || 'No Name'}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"http://192.168.1.49:8080/eazyshipp/app/customer/{{doc.id}}/itemImage\"     height=\"92px\"  width=\"100%\" style=\"margin-top: calc(5% - 26px);\"/>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>  -->\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- </div> -->\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\r\n\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t  </div>\r\n\t\t\r\n\t\t\t\r\n      </div>\r\n\t \r\n      \r\n    </div>\r\n</div>\r\n</div>\r\n  \r\n<!--   <div class=\"modal fade\" id=\"tackshipp\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n    \r\n      \r\n         <div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\" style=\"background: #350d3f;    text-align: center;    color: white;\">\r\n\t\t\t<h5 class=\"modal-title  col-md-12 col-sm-12 col-lg-12 col-xs-12\">Tracking</h5>\r\n\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" style=\"color:white;margin-left:calc(5% - 56px)\" aria-label=\"Close\">\r\n\t\t\t  <span aria-hidden=\"true\">&times;</span>\r\n\t\t\t</button>\r\n\t\t\t</div>\r\n        \r\n\t\t\r\n\t\t\t\r\n      </div> \r\n\t  <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n  <agm-direction *ngIf=\"dir\" \r\n    [origin]=\"dir.origin\" [destination]=\"dir.destination\">\r\n  </agm-direction>\r\n</agm-map>\r\n\t \r\n      \r\n    </div>\r\n  </div>  -->\r\n\r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/myshippings/myshippings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/myshippings/myshippings.component.ts ***!
  \******************************************************/
/*! exports provided: MyshippingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyshippingsComponent", function() { return MyshippingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyshippingsComponent = /** @class */ (function () {
    function MyshippingsComponent(authservice) {
        this.authservice = authservice;
        this.shippslist = [];
        this.mo = {};
        this.shippingVehicle = {};
        this.chaitu = {};
        this.itemDocs = [];
        this.lat = 24.799448;
        this.lng = 120.979021;
        this.zoom = 14;
        this.kkkkf = true;
        this.feature = 'Feature 1';
        this.Selected = [];
        this.dir = undefined;
        this.itemsslist = [];
        this.tracklist = [];
        this.shippingsItems = [];
        this.shipping = [];
        this.ispaying = [];
        this.driversShipps = [];
        this.shippId = [];
        this.CustomerShippingslist();
    }
    MyshippingsComponent.prototype.ngOnInit = function () {
    };
    MyshippingsComponent.prototype.changeSelected = function (val) {
        this.list = val;
    };
    MyshippingsComponent.prototype.CustomerShippingslist = function () {
        var _this = this;
        this.Selected = [];
        this.authservice.CustomerShippingslist()
            .subscribe(function (data) {
            /* 	 console.log(data); */
            _this.shippslist = data.response;
            /* 	console.log(this.shippslist); */
            _this.list = data.response[0];
            for (var i = 0; i < _this.shippslist.length; i++) {
                _this.itemm = _this.shippslist[i];
                /* console.log(this.itemm.id); */
                _this.authservice.itemslist(_this.itemm.id)
                    .subscribe(function (data) {
                    /*   console.log(data); */
                    _this.Selected.push(data.response);
                    /*  console.log( this.Selected);  */
                    /* 					 	this.shippslist[i].forEach((key) => {
              key["data.response.shipping"] = 0;
            }) */
                    /*  this.itemsslist=data.response;
                        console.log( this.itemsslist);
                        
                         this.shipping = data.response.shipping;
                                    this.ispaying = this.shipping.payingAt;
                                     
                                     this.driversShipps =data.response.driversShipps;
                                     
                                     this.shippId = this.shipping.shippId;
                         this.itemDocs =data.response.itemDocs;
                          this.shippingsItems = data.response.shippingsItems ;*/
                    /* 	this.shippslist[i].push(this.feature);   */
                    /* console.log(this.shippslist[i]); */
                }, function (err) {
                    console.log(err);
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    MyshippingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myshippings',
            template: __webpack_require__(/*! ./myshippings.component.html */ "./src/app/myshippings/myshippings.component.html"),
            styles: [__webpack_require__(/*! ./myshippings.component.css */ "./src/app/myshippings/myshippings.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], MyshippingsComponent);
    return MyshippingsComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-header-success {\r\n    color:#fff;\r\n    padding:9px 15px;\r\n    border-bottom:1px solid #eee;\r\n    background-color: #5cb85c;\r\n    -webkit-border-top-left-radius: 5px;\r\n    -webkit-border-top-right-radius: 5px;\r\n    -moz-border-radius-topleft: 5px;\r\n    -moz-border-radius-topright: 5px;\r\n     border-top-left-radius: 5px;\r\n     border-top-right-radius: 5px;\r\n}\r\n.modal-header-warning {\r\n    color:#fff;\r\n    padding:9px 15px;\r\n    border-bottom:1px solid #eee;\r\n    background-color: orange;\r\n    -webkit-border-top-left-radius: 5px;\r\n    -webkit-border-top-right-radius: 5px;\r\n    -moz-border-radius-topleft: 5px;\r\n    -moz-border-radius-topright: 5px;\r\n     border-top-left-radius: 5px;\r\n     border-top-right-radius: 5px;\r\n}\r\n.modal-header-primary {\r\n    color:#fff;\r\n    padding:9px 15px;\r\n    border-bottom:1px solid #eee;\r\n    background-color: #112299;\r\n    -webkit-border-top-left-radius: 5px;\r\n    -webkit-border-top-right-radius: 5px;\r\n    -moz-border-radius-topleft: 5px;\r\n    -moz-border-radius-topright: 5px;\r\n     border-top-left-radius: 5px;\r\n     border-top-right-radius: 5px;\r\n}\r\nbody{\r\n    font-family: 'Lato', sans-serif;\r\n    background: #f7f7f4;\r\n}\r\n.text-center{\r\n    text-align: center;\r\n    margin: 1.25rem 0;\r\n    border-bottom: 1px solid #dadada;\r\n    padding: 1.25rem 0;\r\n}\r\n.radio label input {\r\n    font-size: 100%;\r\n}\r\n.radio-choices {\r\n    font-size: 18px;\r\n}\r\ninput[type='radio'] {\r\n    width: auto;\r\n    height: 1.4em;\r\n}\r\n.radio-choices .radio:nth-of-type(even) {\r\n    background: #effafa;\r\n}\r\n.radio-choices .radio-left {\r\n    margin-right: 0;\r\n    padding-right: 0;\r\n}\r\n.radio-choices .radio-right {\r\n    margin-left: 0;\r\n    padding-left: 0;\r\n}\r\n/* media queries specific to alignment of forms \r\n   not using form-group Bootstrap to save space\r\n   so we compensate - some phones looked odd so\r\n   check before deployment\r\n */\r\n@media screen and (max-width: 540px) {\r\n    .radio {\r\n        margin-left: 1rem;\r\n        font-size: 1.25rem;\r\n    }\r\n    .radio-choices .radio-left {\r\n        float: left;\r\n        margin-left: -10px;\r\n        padding-left: 0;\r\n    }\r\n    .radio-choices .radio-right {\r\n        float: right;\r\n        margin-right: -10px;\r\n        padding-right: 0;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\r\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\r\n<!------ Include the above in your HEAD tag ---------->\r\n\r\n<link href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<div class=\"w3-top\">\r\n  <div class=\"w3-bar w3-white w3-padding w3-card\" style=\"letter-spacing:4px;border-bottom: 2px solid #350e3f;\">\r\n    <a  class=\"w3-bar-item w3-button\"  style=\"font-style: oblique;font-weight: 1000;color: #dc3545!important;font-size: 20px;\"> <b *ngIf=\"menuShow\" (click)=\"w3_open()\">☰</b> <img style=\"width: 130px;margin-top: 5px;margin-left: 14px;\" src=\"../assets/pppp.png\" /> </a>\r\n   \r\n   <div class=\"w3-right \">\r\n    \r\n      <a href=\"#contact\" class=\"w3-bar-item w3-button\" style=\"font-weight: 1000;color: #dc3545!important;\" *ngIf=\"menuShow\">Profile</a>\r\n      <a href=\"#contact\" class=\"w3-bar-item w3-button\" style=\"font-weight: 1000;color: #dc3545!important;\" data-toggle=\"modal\" data-target=\"#myModal\" *ngIf=\"menuHide\">Login</a>\r\n    </div>  \r\n  </div>\r\n  \r\n</div> \r\n<div class=\"w3-sidebar w3-bar-block w3-border-right  w3-animate-left \" style=\"display:none\" id=\"mySidebar\">\r\n  <button (click)=\"w3_close()\" class=\"w3-bar-item w3-large\">Close &times;</button>\r\n  <a href=\"home\" class=\"w3-bar-item w3-button\">Home</a>\r\n  <a href=\"shipping\" class=\"w3-bar-item w3-button\">Shipping</a>\r\n  <a href=\"store\" class=\"w3-bar-item w3-button\">Store to customer</a>\r\n  <a href=\"job\" class=\"w3-bar-item w3-button\">Jobs</a>\r\n   <a href=\"joblist\" class=\"w3-bar-item w3-button\">JobsList</a>\r\n  \r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.menuShow = false;
        this.menuHide = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.w3_open = function () {
        document.getElementById("mySidebar").style.display = "block";
    };
    NavbarComponent.prototype.w3_close = function () {
        document.getElementById("mySidebar").style.display = "none";
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.component.css":
/*!***********************************************************!*\
  !*** ./src/app/notifications/notifications.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notifications/notifications.component.html":
/*!************************************************************!*\
  !*** ./src/app/notifications/notifications.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-homenavbar></app-homenavbar>\r\n<p>\r\n  notifications works!\r\n</p>\r\n\r\n"

/***/ }),

/***/ "./src/app/notifications/notifications.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.css */ "./src/app/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.btn_eazy{\r\nbackground-color: rgb(211,15,108);\r\ncolor: white;\r\nmargin-bottom: 12px;\r\n}\r\n\r\n.w3-padding-32[_ngcontent-c0] {\r\n    padding-top: 10px!important;\r\n    padding-bottom: 2px!important;\r\n    margin-top: 103px;\r\n}\r\n\r\n#openWindow{\r\n    display:none;\r\n  }\r\n\r\n.profile_top {\r\n    margin-top: 10%;\r\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-homenavbar></app-homenavbar>\r\n<div  class=\"padding_adjust main-content container\">\r\n    <div class=\"row profile_top\" >\r\n      <div class=\"col-md-8\">\r\n        <div class=\"card \" style=\"background-color:#ffffff29\">\r\n          <div class=\"card-header\"><h5  class=\"title\">Profile</h5></div>\r\n          <div class=\"card-body\">\r\n            <form  name=\"form\"   novalidate (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" class=\"ng-untouched ng-pristine ng-valid\">\r\n              <div  class=\"row\">\r\n                <div  class=\"col-md-6 pr-1\">\r\n                  <div  class=\"form-group\">\r\n                      <label  class=\"klkls\">Mobile </label>\r\n                    <input type=\"mobile\" class=\"form-control\" name=\"mobile\" [(ngModel)]=\"details.mobile\" #mobile=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && mobile.invalid }\" required />\r\n                                    <div *ngIf=\"f.submitted && mobile.invalid\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"mobile.errors.required\">mobile required</div>\r\n                                    </div>\r\n                  </div>\r\n                </div>\r\n            \r\n                <div class=\"col-md-6 pl-1\">\r\n                  <div class=\"form-group\">\r\n                  <label for=\"exampleInputEmail1\">Email address</label>\r\n                <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"details.email\" #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required />\r\n                                <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"email.errors.required\">email required</div>\r\n                                </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 pr-1\">\r\n                <div class=\"form-group\" >\r\n                            <label for=\"firstName\">First Name</label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"details.firstName\" #firstName=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && firstName.invalid }\" required />\r\n                            <div *ngIf=\"f.submitted && firstName.invalid\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"firstName.errors.required\">firstName is required</div>\r\n                            </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 pl-1\">\r\n                <div class=\"form-group\">\r\n                  <label >Last Name</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"details.lastName\" #lastName=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && lastName.invalid }\" required />\r\n                                <div *ngIf=\"f.submitted && lastName.invalid\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"lastName.errors.required\">lastName is required</div>\r\n                                </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                  <label >Address</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"address\" [(ngModel)]=\"details.address\" #address=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && address.invalid }\" required />\r\n                                <div *ngIf=\"f.submitted && address.invalid\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"address.errors.required\">address is required</div>\r\n                                </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n            \r\n            \r\n            <!-- <div class=\"form-group text-center\">\r\n                      <button class=\"btn button-color btn_eazy\" >Edit 1</button>\r\n                    </div> -->\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"card card-user\"  style=\"background-color:#ffffff29\">\r\n        \r\n          <div class=\"card-body text-center\">\r\n            <div class=\"author\">\r\n              <a >\r\n              <img alt=\"...\" class=\"avatar border-gray\"  (click)=\"browseImage()\" id=\"profilePic\" [src]=\"url\" style=\"height: 158px;border-radius: 50%;\r\n              width: 200px;\">\r\n              <input type='file' (change)=\"onSelectFile($event)\" id=\"openWindow\">\r\n              <h5 class=\"title\">{{details.firstName}} {{details.lastName}}</h5>\r\n              </a>\r\n              <p class=\"description\">{{details.email}} </p>\r\n            </div>\r\n            <p class=\"description text-center\"> {{details.address}} <br> {{details.mobile}} </p>\r\n          </div>\r\n        \r\n        \r\n        </div>\r\n        <div class=\"row mar_t2\">\r\n          <div class=\"col-md-4 text-center\">\r\n            <button  href=\"#\"  style=\"background:white\">\r\n              <i class=\"fa fa-facebook-f\"></i>\r\n            </button>\r\n            </div>\r\n            <div class=\"col-md-4 text-center\">\r\n            <button  href=\"#\" style=\"background:white\">\r\n              <i class=\"fa fa-twitter\"></i>\r\n            </button>\r\n            </div>\r\n            <div class=\"col-md-4 text-center\">\r\n            <button  href=\"#\"  style=\"background:white\">\r\n              <i class=\"fa fa-google-plus\"></i>\r\n            </button>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      \r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authservice) {
        this.authservice = authservice;
        this.chai = [];
        this.detailss = {};
        this.vgh = false;
        this.gh = true;
        this.details = {};
        this.url = "../assets/max-rehkopf.png";
        this.ch = {};
        this.email = [];
        this.ProfileData();
        var ch = JSON.parse(localStorage.getItem('userid'));
        this.url = this.authservice.Customer + "app/customer/" + ch + "/profilePic";
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'addresses': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([
                this.createaddress()
            ])
        });
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        alert(JSON.stringify(this.details));
        this.details.dob = "31-12-2010";
        this.authservice.updateprofile(this.details)
            .subscribe(function (data) {
            _this.ProfileData();
        }, function (err) {
            console.log(err);
        });
    };
    ProfileComponent.prototype.ProfileData = function () {
        var _this = this;
        this.authservice.CustomerProfileData()
            .subscribe(function (data) {
            _this.data = data;
            console.log(data);
            if (data.status == "success") {
                _this.details = data.response;
                _this.detailss = data.response.firstName;
                console.log(_this.detailss);
                _this.userForm.value.addresses[0].firstName = _this.detailss;
                console.log(_this.userForm.value.addresses[0].firstName);
            }
        }, function (err) {
            console.log(err);
        });
    };
    /* Profile(){
       
        this.authservice.profilepic()
        .subscribe(
            data => {
            this.data = data;
                console.log(data)
                
            
            },
            err =>{
                console.log(err)
            }
        );
    } */
    ProfileComponent.prototype.removeaddress = function (index) {
        alert(index);
        var addres = this.userForm.get('addresses');
        addres.removeAt(index);
    };
    ProfileComponent.prototype.createaddress = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            'ItemQuantity': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            'width': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            'height': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            'imagename': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    };
    ProfileComponent.prototype.addaddress = function () {
        var addressarray = this.userForm.get('addresses');
        addressarray.push(this.createaddress());
    };
    ProfileComponent.prototype.edit = function () {
        this.vgh = true;
        this.gh = false;
    };
    ProfileComponent.prototype.browseImage = function () {
        $("#openWindow").click();
    };
    ProfileComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = function (event) {
                console.log(event);
                _this.url = reader.result;
                _this.authservice.uploadProfilePic(_this.url).subscribe(function (data) {
                    _this.data = data;
                    console.log(data);
                    if (data.status == "success") {
                        alert(data.response);
                    }
                }, function (err) {
                    console.log(err);
                });
            };
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.css_button_style {\r\n    width: 100%;\r\n    background: #d30f6c;\r\n    border: #d30f6c;\r\n}\r\n\r\n.style_css_row {\r\n    margin-top: 11%;\r\n}\r\n\r\n.bor_top_rigister {\r\n    border-top: 5px solid #d30f6c;\r\n}\r\n\r\n.style_rigistration {\r\n  \r\n    width: 100%;\r\n}\r\n\r\n.back_clr{\r\n    .style_rigistration {\r\n        margin:auto;\r\n        width:50%;\r\n    }\r\n\r\n    height: 100vh;\r\n    background-image: url(\"http://backgroundcheckall.com/wp-content/uploads/2017/12/background-images-for-registration-page-12.jpg\");\r\n    overflow-x: hidden;\r\n}\r\n\r\n.mar_t2_top {\r\n    margin-top: 152px;\r\n}\r\n\r\n.mar_bottom {\r\n    margin-bottom: 21px;\r\n}"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back_clr\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-12 col-sm-12 style_rigistration\">\r\n         <div class=\"card mar_t2_top\"  style=\"margin: auto; width: 37%;margin-top: 93px;    margin-bottom: 158px;\">\r\n          <div class=\"card-body bor_top_rigister\">\r\n            <h4 class=\"text-center mar_bottom\">Registration Form</h4>\r\n            <form #userFormm=\"ngForm\" (ngSubmit)=\"RegistrationForm(userFormm.value)\" id=\"form-box\">\r\n  \r\n            <div class=\"row\">\r\n               <div class=\"col-md-6 col-sm-12\">\r\n                <div class=\"input-group mb-3\">\r\n                 <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></span>\r\n                 </div>\r\n                 <input type=\"text\" name=\"firstName\" [(ngModel)]=\"firstName\" placeholder=\"first Name\" class=\"inp form-control\" required>\r\n                </div>\r\n               </div>\r\n               <div class=\"col-md-6 col-sm-12\">\r\n                <div class=\"input-group mb-3\">\r\n                 <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></span>\r\n                 </div>\r\n                 <input type=\"text\" name=\"lastName\" [(ngModel)]=\"lastName\" placeholder=\"Last Name\" class=\"inp form-control\" required>\r\n                </div>\r\n               </div>\r\n            </div>\r\n            <div class=\"row\">\r\n               <div class=\"col-md-12 col-sm-12\">\r\n                <div class=\"input-group mb-3\">\r\n                 <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></span>\r\n                 </div>\r\n                 <input type=\"email\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" class=\"inp form-control\" required>\r\n                </div>\r\n               </div>\r\n            </div>\r\n            <div class=\"row\">\r\n               <div class=\"col-md-12 col-sm-12\">\r\n                <div class=\"input-group mb-3\">\r\n                 <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-calendar\"></i></span>\r\n                 </div>\r\n                 <input type=\"date\" name=\"dob\" [(ngModel)]=\"dob\" placeholder=\"Date Of Birth\" class=\"inp form-control\" required>\r\n                </div>\r\n               </div>\r\n            </div>\r\n            <div class=\"row\">\r\n               <div class=\"col-md-12 col-sm-12\">\r\n                <div class=\"input-group mb-3\">\r\n                 <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-address-book\"></i></span>\r\n                 </div>\r\n                 <textarea type=\"textarea\" name=\"address\" [(ngModel)]=\"address\" placeholder=\"address\" class=\"inp form-control\" required></textarea>\r\n                </div>\r\n               </div>\r\n            </div>\r\n            <div class=\"row\">\r\n               <div class=\"col-md-12 col-sm-12\">\r\n                <div class=\"input-group mb-3\">\r\n                 <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-address-book\"></i></span>\r\n                 </div>\r\n                 <select  placeholder=\"Email\" class=\"inp form-control\"  name=\"gender\" [(ngModel)]=\"gender\">\r\n                    <option [ngValue]=\"Select\">Select Gender</option>\r\n                    <option value=\"Male\">Male</option>\r\n                    <option value=\"Female\">Female</option>\r\n                  </select>\r\n                </div>\r\n               </div>\r\n            </div>\r\n            <div class=\"row\">\r\n               <div class=\"col-md-12\">\t\t\t\t\r\n                <button type=\"submit\" name=\"submit\" class=\"btn btn-primary mar_t2 width_button btn_css css_button_style\">Primary</button>\r\n               </div>\r\n            </div>\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <button type=\"submit\">\t<p>Already have an account?&nbsp;<a href=\"#\">Login</a></p></button>\r\n  \r\n            </div>\r\n            </div>\t -->\t\t\t\r\n              <!-- <input type=\"submit\" name=\"submit\" value=\"REGISTER NOW\" class=\"sub-btn\">\t -->\r\n           </form>\r\n          </div>\r\n         </div>\r\n      </div>\r\n     </div>\r\n     </div>"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.RegistrationForm = function (RegistrationData) {
        var _this = this;
        console.log(RegistrationData);
        this.authservice.Registration(RegistrationData)
            .subscribe(function (data) {
            _this.data = data;
            console.log(data);
            if (data.status == "success") {
                _this.router.navigate(["home"]);
            }
        }, function (err) {
            console.log(err);
        });
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/shipcreate/shipcreate.component.css":
/*!*****************************************************!*\
  !*** ./src/app/shipcreate/shipcreate.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shipcreate/shipcreate.component.html":
/*!******************************************************!*\
  !*** ./src/app/shipcreate/shipcreate.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\r\n\r\n\r\n\r\n<!--  <h3 style=\"text-align:center\">Shipping Form</h3> -->\r\n<div class=\"container\" *ngIf=\"second\">\r\n\r\n\t\r\n\t\t\t\r\n\t\r\n\t\t\t <form name=\"form\" (ngSubmit)=\"f.form.valid &&  onSubmit4th()\" #f=\"ngForm\" novalidate>\r\n\t\t\t\t <div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-lg-6 col-xs-6\">\r\n\t\t\t\t\t\t<div class=\"form-group\" >\r\n\t\t\t\t\t\t\t<label for=\"fromHouseNo\">From Land Mark</label>\r\n\t\t\t\t\t\t\t <input type=\"text\" class=\"form-control is-invalid\" name=\"fromHouseNo\" [(ngModel)]=\"model.fromHouseNo\" #fromHouseNo=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && fromHouseNo.invalid }\" required />\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && fromHouseNo.invalid\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"fromHouseNo.errors.required\">fromHouseNo is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-lg-6 col-xs-6\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"toHouseNo\">To land Mark</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"toHouseNo\" [(ngModel)]=\"model.toHouseNo\" #toHouseNo=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && toHouseNo.invalid }\" required />\r\n\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && toHouseNo.invalid\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"toHouseNo.errors.required\">toHouseNo required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-lg-6 col-xs-6\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"fromContactName\">From Contact Name</label>\r\n\t\t\t\t\t\t\t   <input type=\"text\" class=\"form-control\" name=\"fromContactName\" [(ngModel)]=\"model.fromContactName\" #fromContactName=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && fromContactName.invalid }\" required />\r\n\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && fromContactName.invalid\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"fromContactName.errors.required\">From Contact Name required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-lg-6 col-xs-6\">\r\n\t\t\t\t\t\t<div class=\"form-group\" >\r\n\t\t\t\t\t\t\t<label for=\"toContactName\">To Contact Name</label>\r\n\t\t\t\t\t\t\t  <input type=\"text\" class=\"form-control\" name=\"toContactName\" [(ngModel)]=\"model.toContactName\" #toContactName=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && toContactName.invalid }\" required />\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && fromContactNumber.invalid\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"fromContactNumber.errors.required\">toContactNumber is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-lg-6 col-xs-6\">\r\n\t\t\t\t\t\t<div class=\"form-group\" >\r\n\t\t\t\t\t\t\t<label for=\"fromContactNumber\">From contact Number</label>\r\n\t\t\t\t\t\t\t  <input type=\"number\" class=\"form-control\" name=\"fromContactNumber\" [(ngModel)]=\"model.fromContactNumber\" #fromContactNumber=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && fromContactNumber.invalid }\" required />\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && fromContactNumber.invalid\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"fromContactNumber.errors.required\">fromContactNumber is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-lg-6 col-xs-6\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"toContactNumber\">To contact Number</label>\r\n\t\t\t\t\t\t\t  <input type=\"number\" class=\"form-control\" name=\"toContactNumber\" [(ngModel)]=\"model.toContactNumber\" #toContactNumber=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && toContactNumber.invalid }\" required />\r\n\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && toContactNumber.invalid\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"toContactNumber.errors.required\">toContactNumber required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  </div>\r\n\t\t\t\t\r\n                 <div class=\"row\">\r\n\t\t\t\t\t<div class=\" col \"><br>\r\n\t\t\t\t\t<label for=\"width\"><b>Shipping Timeline</b></label>\r\n                        <select  class=\"form-control\"name=\"Timeline\"  [(ngModel)]=\"model.Timeline\" >\r\n\t\t\t\t\t\t\t<option value={{Timeline.amount}} name=\"Timeline\" *ngFor=\"let Timeline of paymentmode\"> {{Timeline.title}}</option> \r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t   \r\n\t\t\t\t\t<div class=\" col \">\r\n\t\t\t\t\t<h5>Payment Mode</h5>\r\n\t\t\t\t\t\t<div style=\"margin-top:10%\">\r\n\t\t\t\t\t\t\t<div *ngFor=\"let data of vehicleList\" style=\"\" > \r\n\t\t\t\t\t\t\t\t<div  *ngIf=\"data.vehicleType =='Two_Wheeler'\"class=\"col-col-xs-4 col-sm-4 col-md-4\" style=\"    MARGIN-TOP: -32PX;\">\r\n\t\t\t\t\t\t\t\t\t<img  src=\"assets/Mopad.png\" (click)=\"selectVehicle(data)\"[style.border]=\"twoweel ? '5px solid #350e3f' : 'none'\" style=\"width: 95px;height: 95px;    margin-top: -17px;\">\r\n\t\t\t\t\t\t\t\t</div>  \r\n\t\t\t\t\t\t\t\t<div class=\"col-col-xs-4 col-sm-4 col-md-4\"style=\"    MARGIN-TOP: -32PX;\" *ngIf=\"data.vehicleType =='Three_Wheeler'\" > \t<img  (click)=\"selectVehicle(data)\"src=\"assets/Truck Mini.png\"[style.border]=\"threeweel ? '5px solid #350e3f' : 'none'\" (click)=\"selectVehicle(data)\" style=\"width: 129px;height: 95px;       margin-left: 157px; margin-top: -53px;\">\r\n\t\t\t\t\t\t\t    </div> \r\n\t\t\t\t\t\t\t    <div class=\"col-col-xs-4 col-sm-4 col-md-4\"  *ngIf=\"data.vehicleType =='Four_Wheeler'\"><img  src=\"assets/Truck.png\" (click)=\"selectVehicle(data)\" [style.border]=\"fourweel ? '5px solid #350e3f' : 'none'\" style=\"width: 95px;height: 95px;        margin-left: 357px;margin-top: -133px;\">\r\n\t\t\t\t\t\t\t    </div> \t\t\t\t\t \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t    \t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t     </div> \r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t<button type=\"button\"  (click)=\"add()\"  data-toggle=\"modal\" data-target=\"#recentjobs\" class=\"btn button-color\" style=\"float:right\">Add Items</button>\r\n    \t\t\t</div>\r\n\t\t\t\t<div class=\"container\">\r\n  \t\t\t\t\t<div class=\"row\" *ngFor=\"let p of cccc;let i=index\">\r\n\t\t\t\t\t\t<div class=\"col col-md-2 col-xs-2  col-sm-2 col-lg-2 col-xl-2\"  style=\" background-color:white;color:#d30f6c;margin-left:20px;margin-top:20px\" >\r\n\t\t\t\t\t\t\t<label  >ItemQuantity\r\n\t\t\t\t\t\t\t\t{{p.ItemQuantity}} </label><br></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col col-md-2 col-xs-2  col-sm-2 col-lg-2 col-xl-2\"  style=\" background-color:white;color:#d30f6c;margin-left:20px;margin-top:20px\" >\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<label >ImageName\r\n\t\t\t\t\t\t\t\t{{p.ImageName}}</label><br></div>\r\n\t\t\t\t\t\t\t\t<div class=\"col col-md-2 col-xs-2  col-sm-2 col-lg-2 col-xl-2\"  style=\" background-color:white;color:#d30f6c;margin-left:20px;margin-top:20px\" >\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<label >width\r\n\t\t\t\t\t\t\t\t{{p.width}} </label><br></div>\r\n\t\t\t\t\t\t\t\t<div class=\"col col-md-2 col-xs-2  col-sm-2 col-lg-2 col-xl-2\"  style=\" background-color:white;color:#d30f6c;margin-left:20px;margin-top:20px\" >\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<label >Itemheight\r\n\t\t\t\t\t\t\t\t{{p.height}}</label><br>\t</div>\r\n\t<div class=\"col col-md-1 col-xs-1  col-sm-1 col-lg-1 col-xl-1\"  style=\" background-color:white;color:#d30f6c;margin-left:20px;margin-top:20px\" >\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<button (click)=\"delete(p)\">delete</button></div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"col col-md-1 col-xs-1  col-sm-1 col-lg-1 col-xl-1\"   style=\" background-color:white;color:#d30f6c;margin-left:20px;margin-top:20px\" >\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<button (click)=\"edit(p)\">edit</button>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> \r\n\t\t\t \t </div>\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col col-sm-6 col-lg-6 col-xl-6 col-md-6\">\r\n\t\t\t\t\t  <h5 >Payment Type</h5><br>\r\n\t\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\"><!-- ng-click=\"shipping.paymentMode.isCash=true;shipping.paymentMode.isPayTM=false\" -->\r\n\t\t\t\t\t\t\t\t\t<div class=\"col\"  >\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\"value=\"PayTM\" name=\"Paymentmode\" #Paymentmode=\"ngModel\" (click)=\"paymode('PayTM')\" [(ngModel)]=\"model.Paymentmode\" > \r\n\t\t\t\t\t\t\t\t\t\t<img  src=\"assets/paytmM.png\" style=\"=   margin-top: -17px;    width: 50%;\">\r\n\t\t\t\t\t\t\t\t\t</div>         \r\n\t\t\t\t\t\t\t\t\t<div class=\"col\" >\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"Cash\" name=\"Paymentmode\" #Paymentmode=\"ngModel\" (click)=\"paymode('Cash')\" [(ngModel)]=\"model.Paymentmode\" >\r\n\t\t\t\t\t\t\t\t\t\t<img  src=\"assets/paytm.png\" style=\" margin-top: 14px;   width: 46%;\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t   </div> \r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"col col-sm-6 col-lg-6 col-xl-6 col-md-6\" *ngIf=\"paymtat\"><br>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n  \t\t\t\t\t\t\t<label for=\"Paymentmode\"><b>Payment At</b></label><br>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col\"  >\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\"value=\"Pick\" name=\"PaymentAt\" #PaymentAt=\"ngModel\"  [ngModel]=\"model.PaymentAt\" >  Pick Up\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col\" >\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"delivery\" name=\"PaymentAt\" #PaymentAt=\"ngModel\"  [ngModel]=\"model.PaymentAt\" >Delivery\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t</div> \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t  <div class=\"modal-body\" *ngIf=\"eeeee\">\r\n\t\ttotak distance:{{dista}}<br>\r\n\t\ttotal duration:{{durat}}<br>\r\n\t\t\r\n\t\tvehicle type :{{kl}}<br>\r\n\t\t\t  total Money : {{subtotal+timelinebased}}\r\n\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t</div>\r\n\t\t<!--  <div class=\"modal-body\" [hidden]=\"eeeee\">\r\n\t\ttotak distance:000<br>\r\n\t\ttotal duration:0000<br>\r\n\t\t\r\n\t\tvehicle type :jjjjj<br>\r\n\t\t\t<h1>  total Money : jjjjj</h1>\r\n\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t</div> -->\r\n\t\t\t    </div> <br>\r\n\t\t\t\t<div class=\"form-group\" style=\"text-align:center\" >\r\n                        <button class=\"btn button-color\" style=\"width:40%\">Next</button>\r\n                </div>\r\n        \t</form>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\r\n\r\n\r\n\t\t\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"recentjobs\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n    \r\n      <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h5 class=\"modal-title\">Add Item Details</h5>\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t  <span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n        <div class=\"modal-body\">\r\n\t\t\t      <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit2nd()\" #f=\"ngForm\" novalidate>\r\n            <h5>Item Description</h5> \r\n       <div class=\"row\">  <div class=\"col-md-12\">\r\n                        <label for=\"description\">Item Description</label>\r\n                        <input type=\"number\" class=\"form-control\" name=\"description\" [(ngModel)]=\"mode.description\" #description=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && description.invalid }\" required />\r\n                        <div *ngIf=\"f.submitted && description.invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"description.errors.required\">description is required</div>\r\n                        </div>\r\n                    </div>\r\n  </div>\r\n\r\n                   <div class=\"row\">  <div class=\"col-md-12\">\r\n                        <label for=\"qty\">Item Quantity</label>\r\n                        <input type=\"number\" class=\"form-control\" name=\"qty\" [(ngModel)]=\"mode.qty\" #qty=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && qty.invalid }\" required />\r\n                        <div *ngIf=\"f.submitted && qty.invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"qty.errors.required\">ItemQuantity is required</div>\r\n                        </div>\r\n                    </div>\r\n  </div>\r\n<div class=\"row\">  \r\n   <div class=\"col-md-6\">\r\n                        <label for=\"width\">Enter WIdth</label>\r\n                        <input type=\"number\" class=\"form-control\" name=\"width\" [(ngModel)]=\"mode.width\" #width=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && width.invalid }\" required />\r\n                        <div *ngIf=\"f.submitted && width.invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"width.errors.required\">width is required</div>\r\n                        </div>\r\n                    </div>\r\n<div class=\"col-md-6\">\r\n                        <label for=\"width\">Enter size</label>\r\n                       <select  class=\"form-control\">\r\n   <option name=\"size\" *ngFor=\"let size of sizes\">{{size}}</option> </select>\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n<div class=\"row\">  <div class=\"col-md-6\">\r\n <label for=\"Height\">Enter Height</label>\r\n                        <input type=\"number\" class=\"form-control\" name=\"height\" [(ngModel)]=\"mode.height\" #height=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && height.invalid }\" required />\r\n                        <div *ngIf=\"f.submitted && height.invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"height.errors.required\">height is required</div>\r\n                        </div>\r\n\r\n</div>\r\n<div class=\"col-md-6\">\r\n                        <label for=\"width\">Enter  size</label>\r\n                       <select  class=\"form-control\">\r\n   <option name=\"size\" [value]=\"size\" *ngFor=\"let size of sizes\">{{size}}</option> </select>\r\n                    </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- <div class=\"row\">\r\n\t\t\t    photo\r\n\t <input type=\"file\"(change)=\"preview($event)\" accept=\"image/*\">\r\n\t <br>\r\n\t <canvas #mycanvas  width=\"200\" height=\"200\"  style=\"border:1px solid red\"> </canvas>\r\n\t\t\t   \r\n\t\t\t</div>  -->\r\n<!-- <button class=\"btn-primary\" (click)=\"addimages()\">Add Images</button> -->\r\n<div class=\"text-center\">\r\n\t\t\t\t\t<button type=\"button\"  (click)=\"addimages()\"  class=\"btn button-color\" style=\"float:right\">Add Images</button>\r\n    \t\t\t</div>\r\n <div class=\"row\" *ngFor=\"let c of kkkk;let i=index\">\r\n\t\t\t    photo\r\n\t <input type=\"file\"(change)=\"preview($event,i)\" accept=\"image/*\">\r\n\t <br>\r\n\t <canvas #mycanvas  width=\"200\" height=\"200\"  style=\"border:1px solid red\"> </canvas>\r\n\t\t\t   <button (click)=\"deleteimages(c)\"  class=\"btn button-color\">Delete image</button>\r\n\t\t\t</div>   \r\n\r\n\r\n\r\n <div class=\"row\"> <!--  <div class=\"col-md-6\"><input type=\"file\" (change)=\"changeListner($event)\" />llll\r\n           <img class=\"image\" /> \r\n                       \r\n                    </div>-->\r\n <div class=\"col-md-6\">\r\n                        <label for=\"ImageName\">Image Name</label>\r\n                        <input type=\"ImageName\" class=\"form-control\" name=\"ImageName\" [(ngModel)]=\"mode.ImageName\" #ImageName=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && ImageName.invalid }\" required />\r\n                        <div *ngIf=\"f.submitted && ImageName.invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"ImageName.errors.required\">ImageName is required</div>\r\n                        </div>\r\n                    </div></div>\r\n\r\n\r\n         \r\n\r\n\r\n\r\n\r\n                  \r\n                   <div class=\"form-group\" style=\"text-align:center\" >\r\n                        <button class=\"btn btn-primary\" style=\"width:40%\">Add</button> \r\n                    </div>\r\n               </form>  \r\n\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t</div>\r\n\t\t\t\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/shipcreate/shipcreate.component.ts":
/*!****************************************************!*\
  !*** ./src/app/shipcreate/shipcreate.component.ts ***!
  \****************************************************/
/*! exports provided: ShipcreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipcreateComponent", function() { return ShipcreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShipcreateComponent = /** @class */ (function () {
    function ShipcreateComponent(authservice, http, router) {
        this.authservice = authservice;
        this.http = http;
        this.router = router;
        this.sizes = [];
        this.lll = [];
        /*  event.target.result={}; 160-179  */
        this.ppp = [];
        this.cccc = [];
        this.mnmnm = [];
        this.dir = undefined;
        this.dista = {};
        this.ll = 1;
        this.paymtat = false;
        this.eeeee = false;
        this.ksb = {};
        this.target = {};
        this.ch = {};
        this.chy = {};
        this.kkkk = [];
        this.kkbbsskk = [];
        this.chi = {};
        this.Timelines = [];
        this.isLoginError = false;
        this.selectedfile = null;
        this.mode = {};
        this.modell = {};
        this.model = {};
        this.twoweel = false;
        this.threeweel = false;
        this.fourweel = false;
        this.final = false;
        this.second = true;
        this.selectedFile = null;
        this.third = false;
        this.fourth = false;
        this.fifth = false;
        this.deleteimages = function (c) {
            console.log(c);
        };
        this.times = function (bb) {
            /*   console.log(bb) */
        };
        this.paymode = function (bb) {
            var k = bb;
            /* 	  console.log(bb) */
            if (bb === "Cash") {
                this.paymtat = true;
                /*   console.log('hh') */
            }
            else if (bb === "PayTM") {
                this.paymtat = false;
                /* 	  console.log('false') */
            }
        };
        /*
        function display()
  {
    var date=new Date();
  var day=date.getDate();
  var month=date.getMonth()+1;
  var year=date.getFullYear();
  document.write("<br>Date is: "+day+"/"+month+"/"+year);
  }
  display();  */
        this.model.Paymentmode = 'PayTM';
        this.model.PaymentAt = 'Pick';
        this.paymentmodeyssstt();
        this.uom();
        this.list();
        /* console.log(this.model.Timeline); */
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            'gender': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            'lastname': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            'addresses': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([
                this.createaddress()
            ])
        });
    }
    ShipcreateComponent.prototype.onEditClick = function (Timeline) {
        /*    console.log( Timeline) */
    };
    ShipcreateComponent.prototype.add = function () {
        var chy = this.ppp.length;
        this.ppp.push(this.chy);
        /* console.log(this.ppp); */
        this.chy = this.chy + 1;
    };
    ShipcreateComponent.prototype.createshippaymentmodes = function () {
        this.authservice.createshippaymentmodes()
            .subscribe(function (data) {
            /*  console.log(data); */
        }, function (err) {
            console.log(err);
        });
    };
    ShipcreateComponent.prototype.createshippayat = function () {
        this.authservice.createshippayat()
            .subscribe(function (data) {
            /*  console.log(data); */
        }, function (err) {
            console.log(err);
        });
    };
    /*   preview(e: any):void{
      let canvas = this.mycanvas.nativeElement;
      let context = canvas.getContext('2d');
      context.clearRect(0, 0, 300, 300);
      
      var render = new FileReader();
      render.onload=function(event){
          var img =new Image();
          img.onload=function(){
              console.log(img.width);
              canvas.width=300;
              canvas.height=500;
              context.drawImage(img, 0, 0);
          };
          this.model.items[0].image=event.target.result;
      };
      render.readAsDataURL(e.target.files[0]);
  }  */
    /* preview(e: any):void{
        let canvas = this.mycanvas.nativeElement;
        let context = canvas.getContext('2d');
        context.clearRect(0, 0, 300, 300);
        
        var render = new FileReader();
        render.onload=function(event){
            var img =new Image();
            img.onload=function(){
                console.log(img.width);
                canvas.width=200;
                canvas.height=200;
                context.drawImage(img, 0, 0);
            };
            this.img.src=event.target.result:{};
            console.log(img.src);
            localStorage.setItem('bb', img.src);
        };
        render.readAsDataURL(e.target.files[0]);
    }  */
    /* preview(e: any,k:any):void{
       console.log(k)
      let canvas = this.mycanvas.nativeElement;
      let context = canvas.getContext('2d');
      context.clearRect(0, 0, 300, 300);
      
      var render = new FileReader();
      render.onload=function(event){
          var img =new Image();
          img.onload=function(){
              console.log(img.width);
              canvas.width=200;
              canvas.height=200;
              context.drawImage(img, 0, 0);
          };
          img.src=event.target.result;
          console.log(img.src);
          localStorage.setItem('bb', img.src);
      
      };
          console.log(img.src);
      render.readAsDataURL(e.target.files[0]);
  }   */
    /*   changeListner(event) {
         console.log('kkk');
          var reader = new FileReader();
           var image = this.element.nativeElement.querySelector('.image');
   
           reader.onload = function(e) {
               var src = e.target.result;
               image.src = src;
           };
           
   
           reader.readAsDataURL(event.target.files[0]);
           } */
    ShipcreateComponent.prototype.changeListner = function (event) {
        /* 	console.log('kkk'); */
        this.selectedfile = event.target.files[0];
        /* 	console.log(this.selectedfile); */
        this.upload();
    };
    ShipcreateComponent.prototype.upload = function () {
        var _this = this;
        /* console.log('kkk'); */
        var fd = new FormData();
        /* 	console.log(this.selectedfile); */
        fd.append('image', this.selectedfile, this.selectedfile.name);
        this.authservice.imageupload(fd)
            .subscribe(function (data) {
            /*  console.log(data); */
            ;
        }, function (err) {
            _this.isLoginError = true;
        });
    };
    ShipcreateComponent.prototype.selectVehicle = function (vehicle) {
        /*   console.log(vehicle);  */
        if (vehicle.vehicleType == 'Two_Wheeler') {
            this.twoweel = true;
            this.threeweel = false;
            this.fourweel = false;
            this.model.vehicleType = vehicle;
            alert("its a two wheeler its cost is 10rs per km");
        }
        else if (vehicle.vehicleType == 'Three_Wheeler') {
            alert("its a three wheeler its cost is 10rs per km");
            this.twoweel = false;
            this.threeweel = true;
            this.fourweel = false;
            this.model.vehicleType = vehicle;
        }
        else {
            alert("its a four wheeler its cost is 10rs per km");
            this.twoweel = false;
            this.threeweel = false;
            this.fourweel = true;
            this.model.vehicleType = vehicle;
        }
        /* this.selectedVehicle = vehicle;
            console.log(JSON.stringify(this.selectedVehicle)); */
        /* $scope.calculateTotal(); */
        this.vehiclecost = vehicle.ratePerKm;
        /* console.log(this.vehiclecost) */
        this.calculateAndDisplayRoute();
    };
    ShipcreateComponent.prototype.edit = function (p) {
        console.log(p);
        // $('#recentjobs').modal('show');
        this.kkkkkk = p;
        this.mode = this.kkkkkk;
        /*delete this.cccc[4] */
    };
    ShipcreateComponent.prototype.delete = function (p) {
        console.log(p);
        for (var i = 0; i < this.cccc.length; i++) {
            /*  console.log(this.cccc[i].ItemQuantity)
              console.log(p.ItemQuantity) */
            if (p.length == this.cccc[i].length) {
                this.cccc.splice(i, 1);
                console.log(this.cccc);
            }
        }
        /*delete this.cccc[4] */
    };
    ShipcreateComponent.prototype.onSubmit2nd = function () {
        console.log(this.mode);
        if (this.mode.length >= 0) {
            console.log('hii');
            this.lll = this.mode;
            this.mnmnm = this.lll.length;
            console.log(this.mnmnm);
            this.cccc[this.mnmnm] = this.lll;
            console.log(this.cccc);
            /* 	console.log(this.cccc); */
            this.model.items = this.cccc;
            /* 	console.log(this.model.items);
                console.log() */
            this.mode = {};
            // $('#recentjobs').modal('hide');
            this.mode = {};
        }
        else {
            console.log('llllllkkkkkk');
            /*
              alert('SUrrrrrrffCCESS!! :-)\n\n' + JSON.stringify(this.mode)) */
            /* 	console.log( JSON.stringify(this.model.ItemQuantity)); */
            this.mode.length = this.cccc.length;
            this.lll = this.mode;
            this.cccc.push(this.lll);
            /* 	console.log(this.cccc); */
            this.model.items = this.cccc;
            /* 	console.log(this.model.items);
                console.log() */
            console.log(this.cccc.length);
            console.log(this.cccc);
            this.mode = {};
            // $('#recentjobs').modal('hide');
            /*  this.second=false;
            this.third=true;  */
        }
    };
    ShipcreateComponent.prototype.onSubmitss = function () {
        /*  alert('ll');
         const corporationObj =this.model.Timeline.value;
         console.log(this.corporationObj) */
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
        alert('created successfully');
        /* this.first=false;
        this.second=true; */
    };
    ShipcreateComponent.prototype.onSubmit40th = function () {
        var _this = this;
        this.ch = localStorage.getItem('ch');
        /*   console.log(JSON.parse(this.ch)); */
        alert('Srrrr!! :-)\n\n' + JSON.stringify(this.modell));
        /* 	  console.log(this.modell) */
        this.authservice.payumoney(this.modell)
            .subscribe(function (data) {
            /* 	 console.log(data); */
        }, function (err) {
            _this.isLoginError = true;
        });
        /*   console.log(this.ch);
          
              console.log(JSON.parse(this.ch));
           */
        this.authservice.createshipping(this.ch)
            .subscribe(function (data) {
            console.log(data);
            if (data.status = "success") {
                /* alert('created successfully')
                this.router.navigate(["Shippinglist"]) */
                var kls = data.response;
                /* 	console.log(kls); */
                /* 	var ksb=this.model.items;
                    console.log(ksb) */
                /* console.log(this.model.items); */
                /* this.ksb=this.model.items;
                console.log(this.ksb.reduce()); */
                console.log(_this.model.items);
                if (_this.model.items) {
                    for (var i = 0; i < _this.model.items.length; i++) {
                        /* this.ksb={
                            "description":this.model.items[i].description
                        }  */
                        /* 	console.log(i);
                                console.log(this.model.items[i]);
                             */
                        _this.authservice.addItemdetails(kls, JSON.stringify(_this.model.items[i]))
                            .subscribe(function (data) {
                            _this.data = data;
                            /* 	console.log(data); */
                            if (data.status = "success") {
                                _this.bb = localStorage.getItem('bb');
                                /* 	 console.log(this.bb); */
                                _this.authservice.uploadItemsDocumentsUrl(_this.data.response, _this.bb)
                                    .subscribe(function (data) {
                                    _this.data = data;
                                    /* 	console.log(data); */
                                    alert('created successfully');
                                    _this.router.navigate(["Shippinglist"]);
                                }, function (err) {
                                    console.log(err);
                                    /*console.log('not added images'); */
                                    alert('SHIPPING created successfully');
                                    _this.router.navigate(["Shippinglist"]);
                                });
                            }
                            else {
                                alert(data.response);
                            }
                        }, function (err) {
                            console.log(err);
                        });
                    }
                }
                console.log(_this.model.items);
                alert('created successfully');
                _this.router.navigate(["Shippinglist"]);
            }
        }, function (err) {
            console.log('error');
            _this.isLoginError = true;
        });
    };
    ShipcreateComponent.prototype.addimages = function () {
        /*  console.log(this.kkkk); */
        this.kkkk.push(this.ll);
        /*  console.log(this.kkkk); */
    };
    ShipcreateComponent.prototype.calculateAndDisplayRoute = function () {
        console.log('calculateAndDisplayRoute');
        console.log(localStorage.getItem('tolng'));
        var b = localStorage.getItem('fromlat');
        var c = localStorage.getItem('fromlng');
        var d = localStorage.getItem('tolat');
        var e = localStorage.getItem('tolng');
        /* console.log(b,c,d,e); */
        /* console.log(c)
 origin: { lat:b,lng:c},
 console.log(origin);
destination: { lat: d,lng:e } */
        this.dir = {
            origin: { lat: JSON.parse(b), lng: JSON.parse(c) },
            destination: { lat: JSON.parse(d), lng: JSON.parse(e) }
        };
        /*   console.log(this.dir); */
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        directionsService.route({
            origin: this.dir.origin,
            destination: this.dir.destination,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                console.log(response);
                directionsDisplay.setDirections(response);
                /*   console.log( response.routes["0"].legs["0"].distance.value);
                  console.log(response.routes["0"].legs["0"]. duration.text); */
                this.distanceee = response.routes["0"].legs["0"].distance.value;
                this.durationeee = response.routes["0"].legs["0"].duration.text;
                localStorage.setItem('distancee', this.distanceee);
                localStorage.setItem('durationeee', this.durationeee);
                console.log(this.distanceee);
                console.log(this.distanceee);
                this.distancee = localStorage.getItem('distancee');
                this.durationeee = localStorage.getItem('durationeee');
                /* 	  console.log(this.distancee);  */
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
            /*   console.log(this.distanceee);
              
                  console.log(this.distanceee);   */
        });
        this.kms();
    };
    ShipcreateComponent.prototype.time = function (time) {
        /*   console.log(time); */
        var vvvv = time;
        var kkls = JSON.parse(vvvv);
        /* 	  console.log(kkls); */
    };
    ShipcreateComponent.prototype.handleAddressChange = function (bb) {
        /* 	    console.log(bb); */
    };
    ShipcreateComponent.prototype.kms = function () {
        /* console.log(this.model.Timeline); */
        this.dista = localStorage.getItem('distancee');
        alert(this.dista);
        this.dista = this.dista / 1000;
        alert(this.dista);
        this.durat = localStorage.getItem('durationeee');
        /*  console.log(this.dista); */
        alert(this.dista);
        /*   console.log(this.durat); */
        this.kl = this.model.vehicleType.title;
        this.rate = this.model.vehicleType.ratePerKm;
        /*    console.log(  this.rate); */
        this.timelinebased = this.model.Timeline;
        /*     console.log( this.timelinebased); */
        this.subtotal = (this.dista * (this.rate));
        /*   console.log(  this.subtotal) */
        this.total = this.subtotal + this.timelinebased;
        /*   console.log(this.total) */
        this.jjjj = true;
        this.eeeee = true;
    };
    ShipcreateComponent.prototype.onSubmit3rd = function () {
        /*   alert('Srrrr!! :-)\n\n' + JSON.stringify(this.model))
          alert('gggggggg'); */
        this.third = false;
        this.fourth = true;
    };
    ShipcreateComponent.prototype.onSubmit4th = function () {
        var _this = this;
        console.log(this.model);
        console.log(this.model.Timeline);
        /*
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
          alert('created successfully'); */
        var userid = JSON.parse(localStorage.getItem('userid'));
        /*  console.log(userid); */
        var ch6 = JSON.parse(localStorage.getItem('fromlat'));
        /*  console.log(ch6); */
        this.model.fromlat = ch6;
        var ch2 = JSON.parse(localStorage.getItem('fromlng'));
        /*  console.log(ch2);  */ this.model.fromlng = ch2;
        var ch3 = JSON.parse(localStorage.getItem('tolat'));
        /*  console.log(ch3); */
        this.model.tolat = ch4;
        var ch4 = JSON.parse(localStorage.getItem('tolng'));
        /*  console.log(ch4); */
        this.model.tolng = ch4;
        /*    console.log('kkkk');  */
        var d = localStorage.getItem('tolat');
        var e = localStorage.getItem('tolng');
        var ch = {
            "customer": {
                "id": userid
            },
            "fromLocation": "kkkk",
            "fromLat": this.model.fromlat,
            "fromLng": this.model.fromlng,
            "fromNearBy": "",
            "fromHouseNo": this.model.fromHouseNo,
            "fromContactName": this.model.fromContactName,
            "fromContactNumber": this.model.fromContactNumber,
            "items": this.model.items,
            "file": "Not yet",
            "toLocation": "Plot # 2-92/1, Lane opposite Shilparamam, Diagonally Opposite Cyber Tower, Madhapur, Kothaguda, Hyderabad, Telangana 500081, India",
            "toLat": JSON.parse(d),
            "toLng": JSON.parse(e),
            "toNearBy": "",
            "toHouseNo": this.model.toHouseNo,
            "toContactName": this.model.toContactName,
            "toContactNumber": this.model.toContactNumber,
            "shippingMode": {
                "id": 38
                /* */
            },
            "shippingVehicle": this.model.vehicleType,
            "paymentMode": this.model.Paymentmode,
            "payingAt": "PickUp",
            "discount": 0,
            "subTotal": 356.19,
            "total": 356.19
        };
        /*    console.log(ch) */
        localStorage.setItem('ch', JSON.stringify(ch));
        /* 	 alert(ch); */
        //this.fourth=false;
        //console.log(JSON.stringify(this.model))
        /*  this.authservice.createshipping(ch)
         .subscribe((data : any)=>{
             console.log(data);
    if(data.status="success"){
        alert('created successfully')
    }
        
        
        },
        (err : HttpErrorResponse)=>{
          this.isLoginError = true;
          }); */
        var am = 1;
        /*    console.log(am); */
        /* 	 console.log(ch.paymentMode); */
        if (ch.paymentMode == "PayTM") {
            /*  	 console.log(ch.paymentMode); */
            this.authservice.payuget(am, ch.customer.id)
                .subscribe(function (data) {
                /*  console.log(data); */
                _this.modell = { 'key': data.response.customers.key,
                    'salt': data.response.customers.salt,
                    'hash': data.response.hash,
                    'payAmount': 1,
                    'transactionId': data.response.customers.transactionId,
                    'firstName': data.response.customers.firstName,
                    'email': 'chaitanyareddy.medapati@gmail.com',
                    'mobile': '9603974666',
                    'productinfo': data.response.productinfo,
                    'successUrl': data.response.successUrl,
                    'failureUrl': data.response.failureUrl,
                    'service_provider': 'payu_paisa'
                };
                /* console.log(this.modell.key); */
                /* this.modell.payu_paisa=payu_paisa; */
                if (data.status = "success") {
                    alert('created success   true    fully');
                    _this.fifth = true;
                    _this.second = false;
                    _this.fourth = false;
                }
            }, function (err) {
                _this.isLoginError = true;
            });
        }
        else if (ch.paymentMode == "Cash") {
            this.ch = localStorage.getItem('ch');
            /* 	  console.log(JSON.parse(this.ch)); */
            console.log(this.ch);
            this.authservice.createshipping(this.ch)
                .subscribe(function (data) {
                /*  console.log(data); */
                if (data.status = "success") {
                    /* alert('created successfully')
                    this.router.navigate(["Shippinglist"]) */
                    var kls = data.response;
                    /* 	console.log(kls); */
                    /* 	var ksb=this.model.items;
                        console.log(ksb) */
                    /* console.log(this.model.items); */
                    /* this.ksb=this.model.items;
                    console.log(this.ksb.reduce()); */
                    if (_this.model.items) {
                        for (var i = 0; i < _this.model.items.length; i++) {
                            /* this.ksb={
                                "description":this.model.items[i].description
                            }  */
                            _this.authservice.addItemdetails(kls, JSON.stringify(_this.model.items[i]))
                                .subscribe(function (data) {
                                _this.data = data;
                                console.log(data);
                                if (data.status = "success") {
                                    _this.bb = localStorage.getItem('bb');
                                    /* 					 console.log(this.bb); */
                                    _this.authservice.uploadItemsDocumentsUrl(_this.data.response, _this.bb)
                                        .subscribe(function (data) {
                                        _this.data = data;
                                        console.log(data);
                                        alert('created successfully');
                                        _this.router.navigate(["Shippinglist"]);
                                    }, function (err) {
                                        console.log(err);
                                        console.log('not added images');
                                        alert('SHIPPING created successfully');
                                        _this.router.navigate(["Shippinglist"]);
                                    });
                                }
                            }, function (err) {
                                console.log(err);
                            });
                        }
                    }
                    /* 	console.log(this.model.items) ; */
                    alert('created successfully');
                    _this.router.navigate(["Shippinglist"]);
                }
            }, function (err) {
                _this.isLoginError = true;
            });
        }
        else {
            console.log('vvvvv');
        }
    };
    ShipcreateComponent.prototype.ngOnInit = function () {
        this.list();
        this.uom();
        this.paymentmodeyssstt();
        this.createshippaymentmodes();
        this.createshippayat();
    };
    ShipcreateComponent.prototype.list = function () {
        var _this = this;
        this.authservice.VehicalList()
            .subscribe(function (data) {
            /* 	 console.log(data); */
            _this.vehicleList = data.response;
            /* 	console.log(this.vehicleList); */
        }, function (err) {
            _this.isLoginError = true;
        });
    };
    ShipcreateComponent.prototype.uom = function () {
        var _this = this;
        this.authservice.uom()
            .subscribe(function (data) {
            /*  console.log(data); */
            _this.sizes = data.response;
        }, function (err) {
            _this.isLoginError = true;
        });
    };
    ShipcreateComponent.prototype.paymentmodeyssstt = function () {
        var _this = this;
        this.authservice.paymentmode()
            .subscribe(function (data) {
            /*  console.log(data); */
            _this.paymentmode = data.response;
            _this.model.Timeline = _this.paymentmode[0].amount;
            /* console.log(this.paymentmode); */
        }, function (err) {
            _this.isLoginError = true;
        });
    };
    ShipcreateComponent.prototype.removeaddress = function (index) {
        alert(index);
        var addres = this.userForm.get('addresses');
        addres.removeAt(index);
    };
    ShipcreateComponent.prototype.createaddress = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            'ItemQuantity': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            'width': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            'height': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            'imagename': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
        });
    };
    ShipcreateComponent.prototype.addaddress = function () {
        var addressarray = this.userForm.get('addresses');
        addressarray.push(this.createaddress());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("mycanvas"),
        __metadata("design:type", Object)
    ], ShipcreateComponent.prototype, "mycanvas", void 0);
    ShipcreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipcreate',
            template: __webpack_require__(/*! ./shipcreate.component.html */ "./src/app/shipcreate/shipcreate.component.html"),
            styles: [__webpack_require__(/*! ./shipcreate.component.css */ "./src/app/shipcreate/shipcreate.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ShipcreateComponent);
    return ShipcreateComponent;
}());



/***/ }),

/***/ "./src/app/shippchange/shippchange.component.css":
/*!*******************************************************!*\
  !*** ./src/app/shippchange/shippchange.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shippchange/shippchange.component.html":
/*!********************************************************!*\
  !*** ./src/app/shippchange/shippchange.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  shippchange works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shippchange/shippchange.component.ts":
/*!******************************************************!*\
  !*** ./src/app/shippchange/shippchange.component.ts ***!
  \******************************************************/
/*! exports provided: ShippchangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippchangeComponent", function() { return ShippchangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShippchangeComponent = /** @class */ (function () {
    function ShippchangeComponent() {
    }
    ShippchangeComponent.prototype.ngOnInit = function () {
    };
    ShippchangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shippchange',
            template: __webpack_require__(/*! ./shippchange.component.html */ "./src/app/shippchange/shippchange.component.html"),
            styles: [__webpack_require__(/*! ./shippchange.component.css */ "./src/app/shippchange/shippchange.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShippchangeComponent);
    return ShippchangeComponent;
}());



/***/ }),

/***/ "./src/app/shipping/shipping.component.css":
/*!*************************************************!*\
  !*** ./src/app/shipping/shipping.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 400px;\r\n}\r\n\r\n.klkll{\r\nheight:60px;width:30px;\r\n}\r\n\r\n.modal-content {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  pointer-events: auto;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid rgba(0,0,0,.2);\r\n  border-radius: .3rem;\r\n  outline: 0;\r\n  z-index: 999999;\r\n}\r\n\r\ninput[type=file]{\r\npadding:10px;\r\nbackground:#2d2d2d;}\r\n\r\n#openWindow{\r\ndisplay:none;\r\n}\r\n\r\n#openWindow1{\r\ndisplay:none;\r\n}\r\n\r\n#openWindow2{\r\ndisplay:none;\r\n}\r\n\r\n#openWindow3{\r\ndisplay:none;\r\n}\r\n\r\ninput#file {\r\ndisplay: inline-block;\r\n  width: 90%;\r\n  padding: 120px 0 0 0;\r\n  height: 100px;\r\n  overflow: hidden;\r\n  box-sizing: border-box;\r\n  background: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698394-icon-130-cloud-upload-512.png) center center no-repeat #e4e4e4;\r\n  border-radius: 1px;\r\n  background-size: 60px 60px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shipping/shipping.component.html":
/*!**************************************************!*\
  !*** ./src/app/shipping/shipping.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng4-loading-spinner> </ng4-loading-spinner>\r\n<div *ngIf=\"second\">\r\n\r\n\t<div class=\"row mt-3\">\r\n\r\n\t\t<div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t<form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit4th()\" #f=\"ngForm\" novalidate>\r\n\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t<div class=\"card-header\">Items List\r\n\r\n\t\t\t\t\t\t<button type=\"button\" (click)=\"addItems()\" class=\"btn button-color btn-sm\"\r\n\t\t\t\t\t\t\tstyle=\"background-color:rgb(211,15,108);color:white;float: right;margin-bottom: 12px;\">Add\r\n\t\t\t\t\t\t\tItems</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<table class=\"table table-bordered\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th>S.No</th>\r\n\t\t\t\t\t\t\t\t\t<th>Quantity</th>\r\n\t\t\t\t\t\t\t\t\t<!-- <th>ImageName </th> -->\r\n\t\t\t\t\t\t\t\t\t<th>Description </th>\r\n\r\n\t\t\t\t\t\t\t\t\t<th>Delete</th>\r\n\t\t\t\t\t\t\t\t\t<th>Edit</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let p of cccc;let i=index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{p.qty}}</td>\r\n\t\t\t\t\t\t\t\t\t<!-- <td>{{p.ImageName}}</td> -->\r\n\t\t\t\t\t\t\t\t\t<td>{{p.description}}</td>\r\n\r\n\t\t\t\t\t\t\t\t\t<td class=\"tetxt-center\"><button type=\"button\" (click)=\"delete(p)\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"btn button-color btn-sm\"\r\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"background-color:rgb(211,15,108);color:white;\">Delete</button></td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"tetxt-center\"><button type=\"button\" (click)=\"edit(p)\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"btn button-color btn-sm\"\r\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"background-color:rgb(211,15,108);color:white;\">Edit</button></td>\r\n\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t<div class=\"card-header\">Shipping Form</div>\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<app-fromlocation> </app-fromlocation>\r\n\t\t\t\t\t\t<app-tolocation> </app-tolocation>\r\n\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\" col \">\r\n\t\t\t\t\t\t\t\t<label>Shipping Timeline</label>\r\n\t\t\t                        <select \r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\" \r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"model.Timeline\"\r\n\t\t\t\t\t\t\t\t\tname=\"Timeline\" \r\n\t\t\t\t\t\t\t\t\t(change)=\"onChanged()\" \r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t<option [ngValue]=\"Timeline\" name=\"Timeline\"\t *ngFor=\"let Timeline of paymentmode\">\r\n\t\t\t\t\t\t\t\t\t\t{{Timeline.title}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card-header\">Vehicle Type</div>\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"row\" style=\"display: flex;justify-content: space-around;\">\r\n\t\t\t\t\t\t\t<div *ngFor=\"let data of vehicleList\">\r\n\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"data.vehicle.vehicleType =='Two_Wheeler'\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"assets/Mopad_1.png\" (click)=\"selectVehicle(data)\"\r\n\t\t\t\t\t\t\t\t\t\t[style.border]=\"twoweel ? '5px solid #350e3f' : 'none'\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"data.vehicle.vehicleType =='Three_Wheeler'\"> <img (click)=\"selectVehicle(data)\"\r\n\t\t\t\t\t\t\t\t\t\tsrc=\"assets/Truck Mini_1.png\"\r\n\t\t\t\t\t\t\t\t\t\t[style.border]=\"threeweel ? '5px solid #350e3f' : 'none'\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"selectVehicle(data)\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"data.vehicle.vehicleType =='Four_Wheeler'\"><img src=\"assets/Truck_1.png\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"selectVehicle(data)\"\r\n\t\t\t\t\t\t\t\t\t\t[style.border]=\"fourweel ? '5px solid #350e3f' : 'none'\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t<div class=\"card\" style=\"margin-top:20px;\">\r\n\t\t\t\t\t\t\t<div class=\"card-header\">Pickup Details <input type=\"checkbox\" id=\"myCheck\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"myFunction()\">.</div>\r\n\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"fromHouseNo\">Land Mark<span class=\"eazyship_mandotary\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t\t\t <input type=\"text\" class=\"form-control is-invalid\" name=\"fromHouseNo\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"model.fromHouseNo\" #fromHouseNo=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid':f.submitted || ( fromHouseNo.touched &&fromHouseNo.invalid )}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\trequired />\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(f.submitted && fromHouseNo.invalid) || fromHouseNo.touched\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && fromHouseNo.invalid \">From ContactName is\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tRequired</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\" fromHouseNo.touched\">From ContactName is Required</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"fromContactName\">Contact Name<span class=\"eazyship_mandotary\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t\t\t   <input type=\"text\" class=\"form-control\" name=\"fromContactName\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tmaxlength=\"10\" [(ngModel)]=\"model.fromContactName\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t#fromContactName=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid':f.submitted || ( fromContactName.touched && fromContactName.invalid) }\"\r\n\t\t\t\t\t\t\t\t\t\t\t\trequired />\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(f.submitted && fromContactName.invalid) || fromContactName.touched\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && fromContactName.invalid \">From ContactName is\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tRequired</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\" fromContactName.touched\">From ContactName is Required</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"fromContactNumber\">Contact Number<span\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"eazyship_mandotary\" style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" name=\"fromContactNumber\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tmaxlength=\"10\" [(ngModel)]=\"model.fromContactNumber\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tpattern=\"^[6789]{1}\\d{9}$\" #fromContactNumber=\"ngModel\" max=\"9999999999\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid':f.submitted || ( fromContactNumber.touched && fromContactNumber.invalid) }\"\r\n\t\t\t\t\t\t\t\t\t\t\t\trequired />\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(f.submitted && fromContactNumber.invalid) || fromContactNumber.touched\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && fromContactNumber.invalid \">From\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tContactNumber is Required</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\" fromContactNumber.touched\">From ContactNumber Must be 10\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tdigits </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t<div class=\"card-header\">Recipient Details</div>\r\n\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"toHouseNo\">Land Mark<span class=\"eazyship_mandotary\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"toHouseNo\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"model.toHouseNo\" #toHouseNo=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid':f.submitted || (toHouseNo.touched && toHouseNo.invalid )}\"\r\n\t\t\t\t\t\t\t\t\t\t\trequired />\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(f.submitted && toHouseNo.invalid) || toHouseNo.touched\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && toHouseNo.invalid \">To Land Mark is Required\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\" toHouseNo.touched\">To Land Mark is Required</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"toContactName\">Contact Name<span class=\"eazyship_mandotary\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t\t  <input type=\"text\" class=\"form-control\" name=\"toContactName\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"model.toContactName\" #toContactName=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': f.submitted || (toContactName.touched && toContactName.invalid) }\"\r\n\t\t\t\t\t\t\t\t\t\t\trequired />\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(f.submitted && toContactName.invalid) || toContactName.touched\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && toContactName.invalid \">To Contact Name is\r\n\t\t\t\t\t\t\t\t\t\t\t\tRequired</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\" toContactName.touched\">To ContactName is Required </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"toContactNumber\">contact Number<span class=\"eazyship_mandotary\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t\t  <input type=\"number\" class=\"form-control\" name=\"toContactNumber\"\r\n\t\t\t\t\t\t\t\t\t\t\tmaxlength=\"10\" pattern=\"^[6789]{1}\\d{9}$\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"model.toContactNumber\" #toContactNumber=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': f.submitted || (toContactNumber.touched && toContactNumber.invalid) }\"\r\n\t\t\t\t\t\t\t\t\t\t\trequired />\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(f.submitted && toContactNumber.invalid) || toContactNumber.touched\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && toContactNumber.invalid \">To Contact Name is\r\n\t\t\t\t\t\t\t\t\t\t\t\tRequired</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\" toContactNumber.touched\">To Contact Number Must be 10 digits\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\r\n\t\t\t\t<div class=\"card\" style=\"margin-top:20px;\">\r\n\t\t\t\t\t<div class=\"card-header\">Payment Type</div>\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"funkyradio-default\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-cc-visa\" style=\"font-size: 30px;color: #d30f6c;\"></i>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t<span style=\"margin-left: 33px;margin-top: -12px;\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"PayTM\" name=\"Paymentmode\" #Paymentmode=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"paymode('PayTM')\" [(ngModel)]=\"model.Paymentmode\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"radio1\">Online</label>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"funkyradio-primary\">\r\n\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-money\" style=\"font-size: 30px;color:#d30f6c;\"\r\n\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t<span style=\"margin-left: 40px;margin-top: -12px;\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"Cash\" name=\"Paymentmode\" #Paymentmode=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"paymode('Cash')\" [(ngModel)]=\"model.Paymentmode\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"radio2\">COD</label>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"container-fluid text-center bg-grey\" *ngIf=\"paymtat\">\r\n\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t<div class=\"card-header\">Paying At</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"funkyradio-default\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"radio1\"><i\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"font-size: 25px;background-color: #d30f6c;color: #ffffff;padding: 5px 17px;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-map-marker\" aria-hidden=\"true\"></i><input\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin-left: 44px;\" type=\"radio\" value=\"PickUp\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"PaymentAt\" #PaymentAt=\"ngModel\" [(ngModel)]=\"model.PaymentAt\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\tPickup</label>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"funkyradio-primary\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-truck\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"font-size: 25px;background-color: #d30f6c;color: #ffffff;padding: 5px 17px;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\"></i> <input style=\"margin-left: 44px;\" type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"delivery\" name=\"PaymentAt\" #PaymentAt=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"model.PaymentAt\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"radio2\">Destination</label>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\" style=\"margin-top:15px\">\r\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-lg-6 text-center\">\r\n\t\t\t\t\t\t<button (click)=\"refresh()\" class=\"btn button-color btn-sm\"\r\n\t\t\t\t\t\t\tstyle=\"background-color:rgb(211,15,108);color:white;margin-bottom: 12px;\"\r\n\t\t\t\t\t\t\ttype=\"button\">Clear Form</button>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-lg-6 text-center\">\r\n\t\t\t\t\t\t<button class=\"btn button-color btn-sm\" [disabled]=\"f.invalid\"\r\n\t\t\t\t\t\t\tstyle=\"background-color:rgb(211,15,108);color:white;margin-bottom: 12px;\">Submit</button>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>   \r\n\t\t\t</form>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t<div style=\"max-width:1600px;min-width:500px\" id=\"home\">\r\n\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t<div class='card-header'>Shipping Route</div>\r\n\t\t\t\t\t<div class='card-body' style=\"\r\n\t\t\tmin-height: 500px;\">\r\n\t\t\t\t\t\t<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\r\n\t\t\t\t\t\t\t<agm-direction *ngIf=\"dir\" [origin]=\"dir.origin\" [destination]=\"dir.destination\">\r\n\t\t\t\t\t\t\t</agm-direction>\r\n\t\t\t\t\t\t</agm-map>\r\n\t\t\t\t\t\t<div *ngIf !=\"dir\"> <img class=\"w3-image\"\r\n\t\t\t\t\t\t\t\tsrc=\"https://s3-ap-south-1.amazonaws.com/av-blog-media/wp-content/uploads/2018/01/Google_Maps_Logo.png\"\r\n\t\t\t\t\t\t\t\twidth=\"1600\" style=\"height: 442px;\">\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<!-- \t  \r\n\t\t\t  <img class=\"w3-image\" src=\"https://s3-ap-south-1.amazonaws.com/av-blog-media/wp-content/uploads/2018/01/Google_Maps_Logo.png\"  width=\"1600\" style=\"height: 442px;\">\r\n\t\t\t  -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t<!-- <div class=\"card\"  *ngIf=\"total == 0\">\r\n\t\t\t\t\t\t<div class='card-header' >Shipping Route</div>\r\n\t\t\t\t\t\t<div class='card-body' style=\"\r\n\t\t\t\tmin-height: 500px;\">Display Map\r\n\t</div>\t</div>\t -->\r\n\r\n\t\t\t</div>\r\n\r\n\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-12\" style=\"margin-top:20px\">\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<div class=\"card-header\">Payment Details</div>\r\n\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-6 col-md-6 col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card card-stats\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- Card body -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title text-uppercase text-muted mb-0\"><strong>Total\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDistance</strong></h5>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <span class=\"h4 font-weight-bold mb-0\" *ngIf=\"total == 0\">0Km</span> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"h4 font-weight-bold mb-0\">{{dista}}Km</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-auto\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-road\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"font-size: 25px;color: white;margin-top: 18px;border-radius: 27px;padding: 12px;background: #d30f6c!important;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\"></i>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-6 col-md-6 col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card card-stats\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- Card body -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title text-uppercase text-muted mb-0\"><strong>Total\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDuration</strong></h5>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <span class=\"h4 font-weight-bold mb-0\" *ngIf=\"total == 0\">0 Min</span> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"h4 font-weight-bold mb-0\">{{durat}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-auto\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"font-size: 25px;color: white;margin-top: 18px;border-radius: 27px;padding: 12px;background: #d30f6c!important;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row mar_t2\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-6 col-md-6 col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card card-stats\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- Card body -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title text-uppercase text-muted mb-0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Vehicle Type</strong></h5>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"h4 font-weight-bold mb-0\">{{kl}}</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-auto\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-car\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"font-size: 25px;color: white;margin-top: 18px;border-radius: 27px;padding: 12px;background:#d30f6c!important;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\" aria-hidden=\"true\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-6 col-md-6 col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card card-stats\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title text-uppercase text-muted mb-0\"><strong>Total\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAmount</strong></h5>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"h4 font-weight-bold mb-0\">{{total}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-auto\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-money\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"font-size: 25px;color: white;margin-top: 18px;border-radius: 27px;padding: 12px;background:#d30f6c!important;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\" aria-hidden=\"true\" aria-hidden=\"true\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\r\n\r\n\r\n\r\n\t</div>\r\n</div>\r\n  \r\n<div class=\"modal fade\" id=\"recentjobs\" role=\"dialog\">\r\n\t<div class=\"modal-dialog modal-lg\">\r\n\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h5 class=\"modal-title\">Add Item Details</h5>\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t <form name=\"form\" (ngSubmit)=\"k.form.valid && onSubmit2nd(k)\" #k=\"ngForm\" novalidate>\r\n\r\n\t\t\t\t\t<div class=\"row\" style=\"margin-top: -33px;\">\r\n\t\t\t\t\t\t<div class=\"col-sm-3 col-md-3 col-lg-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"Quantity\">Quantity</label>\r\n\t\t\t\t\t\t\t\t<input type=\"number\" max=\"9999\" class=\"form-control\" name=\"qty\" [(ngModel)]=\"mode.qty\"\r\n\t\t\t\t\t\t\t\t\t#qty=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid':k.submitted || ( qty.touched && qty.invalid )}\"\r\n\t\t\t\t\t\t\t\t\trequired />\r\n\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"(k.submitted && qty.invalid) || qty.touched\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"k.submitted && qty.invalid \">quantity is Required</div>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\" qty.touched\">Quantity Touched</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- [ngClass]=\"{ 'is-invalid': f.submitted || (toContactName.touched && toContactName.invalid) }\"\r\n\t\t\t\t\t\trequired />\r\n\t\t\t\t\t<div *ngIf=\"(f.submitted && toContactName.invalid) || toContactName.touched\"\r\n\t\t\t\t\t\tclass=\"invalid-feedback\">\r\n\t\t\t\t\t\t<div *ngIf=\"f.submitted && toContactName.invalid \">To Contact Name is Required</div>\r\n\t\t\t\t\t\t<div *ngIf=\" toContactName.touched\">To ContactName is Required </div>\r\n\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t<!-- \t\t \r\n\t\t<div class=\"col-md-4\">\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"fromContactName\">From Contact Name</label>\r\n\t\t\t\t   <input type=\"text\" class=\"form-control\" name=\"fromContactName\" maxlength=\"10\"[(ngModel)]=\"model.fromContactName\" #fromContactName=\"ngModel\"\r\n\t\t\t\t[ngClass]=\"{ 'is-invalid':f.submitted || ( fromContactName.touched && fromContactName.invalid) }\" required />\r\n\t\t\t\t<div *ngIf=\"(f.submitted && fromContactName.invalid) || fromContactName.touched\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t<div *ngIf=\"f.submitted && fromContactName.invalid \">From ContactName is Required</div>\r\n\t\t\t\t\t\t<div *ngIf=\" fromContactName.touched\">From ContactName is Touched</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div> -->\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"col col-sm-9 col-md-9 col-lg-9\">\r\n\t\t\t\t\t\t\t<label for=\"description\">Item Description</label>\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"description\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"mode.description\" #description=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': k.submitted ||( description.touched&& description.invalid) }\"\r\n\t\t\t\t\t\t\t\t\trequired />\r\n\r\n\t\t\t\t\t\t\t\t<!--  <div *ngIf=\"k.submitted && description.invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"description.errors.required\">description is required</div>\r\n                        </div> -->\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"(k.submitted && description.invalid) || description.touched\"\r\n\t\t\t\t\t\t\t\t\tclass=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"k.submitted && description.invalid \">description is Required</div>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\" description.touched\">Description Touched</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row\" style=\"\">\r\n\t\t\t\t\t\t<div class=\"col-sm-3 col-md-3 col-lg-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"weight\">weight</label>\r\n\t\t\t\t\t\t\t\t<input type=\"number\" max=\"9999\" class=\"form-control\" name=\"weight\" [(ngModel)]=\"mode.weight\"\r\n\t\t\t\t\t\t\t\t\t#qty=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid':k.submitted || ( weight.touched && qty.invalid )}\"\r\n\t\t\t\t\t\t\t\t\trequired />\r\n\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"(k.submitted && weight.invalid) || weight.touched\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"k.submitted && weight.invalid \">weight is Required</div>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\" weight.touched\">weight Touched</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"col col-sm-9 col-md-9 col-lg-9\">\r\n\t\t\t\t\t\t\t<label for=\"size\">Select Weight</label>\r\n\t\t\t\t\t\t\t<select class=\"form-control\" name=\"weightUom\" [(ngModel)]=\"mode.weightUom\"\r\n\t\t\t\t\t\t\t\t\t#weightUom=\"ngModel\" [ngClass]=\"{ 'is-invalid':k.submitted || ( weightUom.touched && qty.invalid )}\"\r\n\t\t\t\t\t\t\t\t\trequired >\r\n\t\t\t\t\t\t\t   <option [value]=\"country\" *ngFor=\"let country of countries\"> {{country}}</option>\r\n\t\t\t\t\t\t\t </select>\r\n\t\t\t\t\t\t\t <div *ngIf=\"(k.submitted && weightUom.invalid) || weightUom.touched\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"k.submitted && weightUom.invalid \">weightUom is Required</div>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\" weightUom.touched\">weightUom Touched</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\r\n\r\n\r\n\t\t\t\t\t<div class=\"row\" style=\"\">\r\n                        <div class=\"col col-sm-3 col-md-3 col-lg-3\">\r\n\t\t\t\t\t\t\t<label for=\"width\">Enter Width</label>\r\n\t\t\t\t\t\t\t<div class=\"form-selct\">\r\n\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" name=\"width\" max=\"9999\" maxlength=\"4\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"mode.width\" #width=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': k.submitted ||( width.touched  && width.invalid )}\"\r\n\t\t\t\t\t\t\t\t\trequired />\r\n\t\t\t\t\t\t\t\t                 \r\n\t\t\t\t\t\t\t\t<!--  <div *ngIf=\"k.submitted && width.invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"width.errors.required\">width is required</div>\r\n                        </div>  -->\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"(k.submitted && width.invalid) || width.touched\" class=\"invalid-feedback\"\r\n\t\t\t\t\t\t\t\t\tstyle=\"margin-top:-20px\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"k.submitted && width.invalid \">width is Required</div>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\" width.touched\">Width must be 4digits</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t</div>  \r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col col-sm-3 col-md-3 col-lg-3\">\r\n\t\t\t\t\t\t\t<label for=\"size\">Enter size</label>\r\n\t\t\t\t\t\t\t<select class=\"form-control\">\r\n\t\t\t\t\t\t\t\t<option name=\"size\" *ngFor=\"let size of sizes\">{{size}}</option>\r\n\t\t\t\t\t\t\t</select>  \r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col col-sm-3 col-md-3 col-lg-3\">\r\n\t\t\t\t\t\t\t<label for=\"Height\">Enter Height</label>\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" name=\"height\" [(ngModel)]=\"mode.height\"\r\n\t\t\t\t\t\t\t\t\t#height=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': k.submitted ||( height.touched   && height.invalid )}\"\r\n\t\t\t\t\t\t\t\t\trequired />\r\n\t\t\t\t\t\t\t\t     \r\n\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"(k.submitted && height.invalid) || height.touched\" class=\"invalid-feedback\"\r\n\t\t\t\t\t\t\t\t\tstyle=\"margin-top:-20px\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"k.submitted && height.invalid \" style=\"mt-2\">Height is Required</div>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\" height.touched\" style=\"mt-2\">Height must be 4digits</div>\r\n\t\t\t\t\t\t\t\t</div>                \r\n\t\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col col-sm-3 col-md-3 col-lg-3\">\r\n\t\t\t\t\t\t\t<label for=\"size\">Enter size</label>\r\n\t\t\t\t\t\t\t<select class=\"form-control\">\r\n\t\t\t\t\t\t\t\t<option name=\"size\" *ngFor=\"let size of sizes\">{{size}}</option>\r\n\t\t\t\t\t\t\t</select>  \r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"row\" style=\"display:flex;justify-content:space-around\">\r\n\t\t\t\t\t\t           <img [src]=\"url\" (click)=\"calladdImages()\" height=\"100\" style=\"max-width:140px;\">\r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t<input type='file' (change)=\"onSelectFile($event)\" id=\"openWindow\">\r\n\r\n\t\t\t\t\t\t           <img [src]=\"url1\" (click)=\"calladdImages1()\" height=\"100\" style=\"max-width:140px;\">\r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t<input type='file' (change)=\"onSelectFile1($event)\" id=\"openWindow1\">\r\n\r\n\t\t\t\t\t\t           <img [src]=\"url2\" (click)=\"calladdImages2()\" height=\"100\" style=\"max-width:140px;\">\r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t<input type='file' (change)=\"onSelectFile2($event)\" id=\"openWindow2\">\r\n\r\n\t\t\t\t\t\t           <img [src]=\"url3\" (click)=\"calladdImages3()\" height=\"100\" style=\"max-width:140px;\">\r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t<input type='file' (change)=\"onSelectFile3($event)\" id=\"openWindow3\">\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t<!-- <div class=\"row\">\r\n\t\t\t    photo\r\n\t <input type=\"file\"(change)=\"preview($event)\" accept=\"image/*\">\r\n\t <br>\r\n\t <canvas #mycanvas  width=\"200\" height=\"200\"  style=\"border:1px solid red\"> </canvas>\r\n\t\t\t   \r\n\t\t\t</div>  -->\r\n\t\t\t\t\t<!-- <button class=\"btn-primary\" (click)=\"addimages()\">Add Images</button> -->\r\n\t\t\t\t\t<!-- <div class=\"text-center\">\r\n\t\t\t\t\t<button type=\"button\"  (click)=\"addimages()\"  class=\"btn button-color\" style=\"float:right\">Add Images</button>\r\n    \t\t\t</div> -->\r\n\r\n\r\n\t\t\t\t\t<!-- <div class=\"col-col-md-3 col-sm-3 col-lg-3\" *ngFor='let url of urls'>\r\n<img   [src]=\"url\" height=\"50\"> <br/>\r\n <input   type=\"ImageName\" class=\"form-control\" name=\"ImageName\"  required />\r\n     </div>                      -->\r\n\r\n\t\t\t\t\t<!--  <div class=\"row\" *ngFor=\"let c of kkkk;let i=index\">\r\n\t\t\t    photo\r\n\t <input type=\"file\"(change)=\"preview($event,i)\" accept=\"image/*\">\r\n\t <br>\r\n\t <canvas #mycanvas  width=\"200\" height=\"200\"  style=\"border:1px solid red\"> </canvas>\r\n\t\t\t   <button (click)=\"deleteimages(c)\"  class=\"btn button-color\">Delete image</button>\r\n\t\t\t</div>    -->\r\n\r\n\r\n\r\n\t\t\t\t\t<!-- <div class=\"row\"> \r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n                        <label for=\"ImageName\">Image Name</label>\r\n                        <input type=\"ImageName\" class=\"form-control\" name=\"ImageName\" [(ngModel)]=\"mode.ImageName\" #ImageName=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && ImageName.invalid }\" required />\r\n                        <div *ngIf=\"f.submitted && ImageName.invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"ImageName.errors.required\">ImageName is required</div>\r\n                        </div>\r\n                    </div>\r\n\r\n</div> -->\r\n\t\t\t\t\t<!-- <div class=\"row\">\r\n\t\t\t<div class=\"col-md-3\">\r\n\t\t\t<input type='file' onchange=\"readURL(this);\" id=\"openWindow\" />\r\n<img id=\"blah\" (click)=\"calladdImage()\" src=\"http://placehold.it/180\" alt=\"your image\" />\r\n\r\n\r\n\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\r\n<input type='file' onchange=\"onSelectFile($event);\" id=\"openWindows\" />\r\n<img id=\"blahs\" (click)=\"calladdImages()\" src=\"http://placehold.it/180\" alt=\"your image\" />\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t<input id=\"file\" (change)=\"onSelectFile($event)\" type=\"file\" />\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t<input id=\"file\" type='file' (change)=\"onSelectFile($event)\"/>\r\n\t\t\t\r\n\t\t\t</div>\r\n\t\t\t</div> -->\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t                   <div class=\"form-group\" style=\"text-align:center\">\r\n\t\t\t\t\t\t                        <button class=\"btn btn-primary\" [disabled]=\"k.invalid\"\r\n\t\t\t\t\t\t\tclass=\"btn button-color btn-sm\"\r\n\t\t\t\t\t\t\tstyle=\"background-color:rgb(211,15,108);color:white;margin-bottom: 12px;\">Add</button>\r\n\t\t\t\t\t\t                    </div>\r\n\t\t\t\t\t               \r\n\t\t\t\t</form>\r\n\r\n\r\n\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/shipping/shipping.component.ts":
/*!************************************************!*\
  !*** ./src/app/shipping/shipping.component.ts ***!
  \************************************************/
/*! exports provided: ShippingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingComponent", function() { return ShippingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modulewise_shippingdata_shippingdata_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modulewise/shippingdata/shippingdata.component */ "./src/app/modulewise/shippingdata/shippingdata.component.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toast-notifications */ "./node_modules/ngx-toast-notifications/dist/index.js");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ShippingComponent = /** @class */ (function () {
    function ShippingComponent(spinnerService, route, authservice, http, shipData, router, formBuilder, toaccstr, toaster) {
        this.spinnerService = spinnerService;
        this.route = route;
        this.authservice = authservice;
        this.http = http;
        this.shipData = shipData;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toaccstr = toaccstr;
        this.toaster = toaster;
        this.url = 'http://placehold.it/180';
        this.url1 = 'http://placehold.it/180';
        this.url2 = 'http://placehold.it/180';
        this.url3 = 'http://placehold.it/180';
        this.dataOfDest = {};
        this.dir = undefined;
        this.checkBox = {};
        this.directionsService = {};
        this.sizes = [];
        this.weight = [];
        this.mnmnm = [];
        this.lll = [];
        this.submitted = false;
        this.urls = [];
        this.kkkk = [];
        this.cccc = [];
        this.event = {};
        this.model = {};
        this.mapsFlag = false;
        this.total = 0;
        this.modell = {};
        this.mode = {};
        this.twoweel = false;
        this.threeweel = false;
        this.fourweel = false;
        this.durat = 0;
        this.ch = {};
        this.bb = {};
        this.data = {};
        this.dista = 0;
        this.timelinebased = {};
        this.subtotal = 0;
        this.faredata = {};
        this.isLoginError = false;
        this.chy = {};
        this.ppp = [];
        this.fareEstimationPagedata = {};
        this.fareEstimationFlags = false;
        this.ll = 1;
        this.second = true;
        this.localdata = {};
        this.ourWeight = [];
        this.countries = ['Kg'];
        this.paymode = function (bb) {
            var k = bb;
            if (bb === "Cash") {
                this.paymtat = true;
            }
            else if (bb === "PayTM") {
                this.paymtat = false;
            }
        };
        this.weight = [{ 'widthUom': 'Kg' }, { 'widthUom': 'Kg' }, { 'widthUom': 'Kg' }];
        console.log(this.weight);
        // this.localdata=	 localStorage.getItem('objectFromFare');
        // alert(this.localdata);
        // console.log(JSON.stringify(this.localdata));
        // if(this.localdata==''){
        // 	alert('this.localdata empytyyyyy');
        // }else{
        // 	alert('this.localdata');
        // 	alert(JSON.stringify(this.localdata));
        // }
        localStorage.removeItem('tolat');
        localStorage.removeItem('tolng');
        this.model.Paymentmode = 'PayTM';
        this.model.PaymentAt = 'PickUp';
        this.uom();
    }
    Object.defineProperty(ShippingComponent.prototype, "f", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ShippingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paymentmodeyssstt();
        this.route.queryParams.subscribe(function (params) {
            _this.faredata = params;
            console.log(_this.faredata);
            if (JSON.parse(_this.faredata.term)) {
                _this.fareEstimationPagedata = JSON.parse(_this.faredata.term);
                _this.fareEstimationFlags = true;
                _this.dista = _this.fareEstimationPagedata.distafare;
                _this.durat = _this.fareEstimationPagedata.duratfare;
                _this.kl = _this.fareEstimationPagedata.klfare;
                _this.total = _this.fareEstimationPagedata.totalfare;
                _this.model.total = _this.total;
                _this.subtotal = _this.fareEstimationPagedata.subtotalfare;
                _this.model.subtotal = _this.subtotal;
                _this.timelinebasedfare = _this.fareEstimationPagedata.timelinebasedfare;
                // this.model.Timeline=this.timelinebasedfare;
                // this.model.Timeline.amount=this.timelinebasedfare.amount;
                // this.timelinebased.amount =this.timelinebasedfare.amount
                _this.paymentmodeyssstt();
                _this.sending(_this.timelinebasedfare);
                //map related
                _this.fromlatfare = _this.fareEstimationPagedata.fromlatfare;
                _this.fromlngfare = _this.fareEstimationPagedata.fromlngfare;
                _this.tolatfare = _this.fareEstimationPagedata.tolatfare;
                _this.tolngfare = _this.fareEstimationPagedata.tolngfare;
                localStorage.setItem('fromlat', _this.fromlatfare);
                localStorage.setItem('fromlng', _this.fromlngfare);
                localStorage.setItem('tolat', _this.tolatfare);
                localStorage.setItem('tolng', _this.tolngfare);
                _this.model.tolat = JSON.parse(_this.tolatfare),
                    _this.model.tolng = JSON.parse(_this.tolngfare),
                    _this.model.fromlng = JSON.parse(_this.fromlngfare),
                    _this.model.fromlat = JSON.parse(_this.fromlatfare),
                    //  "shippingVehicle": this.model.vehicleType,
                    //  "paymentMode": this.model.Paymentmode,
                    //  "payingAt": this.model.PaymentAt,
                    //  "discount": 0,
                    //  "subTotal": this.model.total,
                    //  "total": this.model.total
                    _this.dir = {
                        origin: {
                            lat: JSON.parse(_this.fromlatfare),
                            lng: JSON.parse(_this.fromlngfare)
                        },
                        destination: {
                            lat: JSON.parse(_this.tolatfare),
                            lng: JSON.parse(_this.tolngfare)
                        }
                    };
            }
            else {
                _this.fareEstimationFlags = false;
            }
        });
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6)]]
        });
        //this.list();
    };
    // onSelectFile(event) {
    //   if (event.target.files && event.target.files[0]) {
    //       var filesAmount = event.target.files.length;
    //       for (let i = 0; i < filesAmount; i++) {
    //               var reader = new FileReader();
    //               reader.onload = (event) => {
    //               
    //                  this.urls.push(event.target.result); 
    //               }
    //               reader.readAsDataURL(event.target.files[i]);
    //       }
    //   }
    // } 
    ShippingComponent.prototype.calladdImages = function () {
        $("#openWindow").click();
    };
    ShippingComponent.prototype.refresh = function () {
        localStorage.removeItem('tofarelocation');
        localStorage.removeItem('fromfarelocation');
        window.location.reload();
    };
    ShippingComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = function (event) {
                _this.url = reader.result;
                // console.log(this.url);
            };
        }
    };
    ShippingComponent.prototype.calladdImages1 = function () {
        $("#openWindow1").click();
    };
    ShippingComponent.prototype.onSelectFile1 = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = function (event) {
                _this.url1 = reader.result;
            };
        }
    };
    ShippingComponent.prototype.calladdImages2 = function () {
        $("#openWindow2").click();
    };
    ShippingComponent.prototype.onSelectFile2 = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = function (event) {
                _this.url2 = reader.result;
            };
        }
    };
    ShippingComponent.prototype.calladdImages3 = function () {
        $("#openWindow3").click();
    };
    ShippingComponent.prototype.onSelectFile3 = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = function (event) {
                _this.url3 = reader.result;
            };
        }
    };
    ShippingComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
    };
    // 	onSelectFile(event) {
    //     if (event.target.files && event.target.files[0]) {
    //         var filesAmount = event.target.files.length;
    //         for (let i = 0; i < filesAmount; i++) {
    //                 var reader = new FileReader();
    //                 reader.onload = (event) => {
    //                    this.urls.push(event.target.result); 
    // 				   alert( this.urls);
    //                 }
    //                 reader.readAsDataURL(event.target.files[i]);
    //         }
    //     }
    //   }
    // 	preview(e: any,k:any):void{
    // 	let canvas = this.mycanvas.nativeElement;
    // 	let context = canvas.getContext('2d');
    // 	context.clearRect(0, 0, 300, 300);
    // 	var render = new FileReader();
    // 	render.onload=function(event){
    // 		var img =new Image();
    // 		img.onload=function(){
    // 			canvas.width=200;
    // 			canvas.height=200;
    // 			context.drawImage(img, 0, 0);
    // 		};
    // 		img.src=event.target.result;
    // 		localStorage.setItem('bb', img.src); 
    // 	};
    // 	render.readAsDataURL(e.target.files[0]);
    // } 
    ShippingComponent.prototype.addItems = function () {
        $('#recentjobs').modal('show');
        this.url = 'http://placehold.it/180';
        this.url1 = 'http://placehold.it/180';
        this.url2 = 'http://placehold.it/180';
        this.url3 = 'http://placehold.it/180';
    };
    ShippingComponent.prototype.edit = function (p) {
        $('#recentjobs').modal('show');
        this.kkkkkk = p;
        this.mode = this.kkkkkk;
        console.log(this.mode);
    };
    ShippingComponent.prototype.delete = function (p) {
        var _this = this;
        for (var i = 0; i < this.cccc.length; i++) {
            if (p.length == this.cccc[i].length) {
                this.cccc.splice(i, 1);
                this.ourWeight = [];
                for (i = 0; i < this.cccc.length; i++) {
                    this.ourWeight.push(this.cccc[i].weight * this.cccc[i].qty);
                }
                var s = 0;
                for (var j in this.ourWeight) {
                    s += this.ourWeight[j];
                }
                if (s > 100) {
                    alert("Max 100 kgs only accepted");
                }
                else {
                    this.authservice.vehiclelist(s).subscribe(function (data) {
                        _this.vehicleList = data.response;
                        console.log(_this.vehicleList);
                        if (_this.fareEstimationFlags) {
                            for (var i_1 = 0; i_1 < _this.vehicleList.length; i_1++) {
                                if (_this.vehicleList[i_1].title == _this.kl) {
                                    _this.selectVehicle(_this.vehicleList[i_1]);
                                }
                            }
                        }
                        else {
                            _this.selectVehicle(_this.vehicleList[0]);
                        }
                    }, function (err) {
                        _this.isLoginError = true;
                    });
                }
            }
        }
    };
    ShippingComponent.prototype.addimages = function () {
        this.kkkk.push(this.ll);
    };
    ShippingComponent.prototype.onSubmit2nd = function (k) {
        var _this = this;
        this.reset2ndform = k;
        if (this.mode.length >= 0) {
            this.lll = this.mode;
            this.mnmnm = this.lll.length;
            this.cccc[this.mnmnm] = this.lll;
            this.model.items = this.cccc;
            console.log('if this model');
            console.log(this.model);
            console.log(this.model.items);
            this.ourWeight = [];
            for (var i_2 = 0; i_2 < this.model.items.length; i_2++) {
                this.ourWeight.push(this.model.items[i_2].weight * this.model.items[i_2].qty);
            }
            var s = 0;
            for (var i in this.ourWeight) {
                s += this.ourWeight[i];
            }
            if (s > 100) {
                alert("Max 100 kgs only accepted");
            }
            else {
                this.authservice.vehiclelist(s).subscribe(function (data) {
                    _this.vehicleList = data.response;
                    console.log(_this.vehicleList);
                    if (_this.fareEstimationFlags) {
                        for (var i_3 = 0; i_3 < _this.vehicleList.length; i_3++) {
                            if (_this.vehicleList[i_3].title == _this.kl) {
                                _this.selectVehicle(_this.vehicleList[i_3]);
                            }
                        }
                    }
                    else {
                        _this.selectVehicle(_this.vehicleList[0]);
                    }
                }, function (err) {
                    _this.isLoginError = true;
                });
                this.mode = {};
                $('#recentjobs').modal('hide');
                //this.mode = {}
            }
        }
        else {
            this.mode.length = this.cccc.length;
            this.lll = this.mode;
            this.lll.files = [];
            //for(let i=0;i<4;i++){}
            if (this.url != "http://placehold.it/180")
                this.lll.files.push(this.url);
            if (this.url1 != "http://placehold.it/180")
                this.lll.files.push(this.url1);
            if (this.url2 != "http://placehold.it/180")
                this.lll.files.push(this.url2);
            if (this.url3 != "http://placehold.it/180")
                this.lll.files.push(this.url3);
            this.cccc.push(this.lll);
            this.model.items = this.cccc;
            console.log(this.cccc);
            this.ourWeight = [];
            for (var i_4 = 0; i_4 < this.model.items.length; i_4++) {
                this.ourWeight.push(this.model.items[i_4].weight * this.model.items[i_4].qty);
            }
            var s = 0;
            for (var i in this.ourWeight) {
                s += this.ourWeight[i];
            }
            if (s > 100) {
                alert("Max 100 kgs only accepted");
            }
            else {
                this.authservice.vehiclelist(s).subscribe(function (data) {
                    _this.vehicleList = data.response;
                    console.log(_this.vehicleList);
                    if (_this.fareEstimationFlags) {
                        for (var i_5 = 0; i_5 < _this.vehicleList.length; i_5++) {
                            if (_this.vehicleList[i_5].title == _this.kl) {
                                _this.selectVehicle(_this.vehicleList[i_5]);
                            }
                        }
                    }
                    else {
                        _this.selectVehicle(_this.vehicleList[0]);
                    }
                }, function (err) {
                    _this.isLoginError = true;
                });
                console.log('else this model');
                console.log(this.model);
                this.mode = {};
                this.reset2ndform.resetForm();
                $('#recentjobs').modal('hide');
            }
        }
    };
    ShippingComponent.prototype.add = function () {
        var chy = this.ppp.length;
        this.ppp.push(this.chy);
        this.chy = this.chy + 1;
    };
    ShippingComponent.prototype.kms = function () {
        this.dista = localStorage.getItem('distanceee');
        this.dista = this.dista / 1000;
        this.durat = localStorage.getItem('durationeee');
        this.kl = this.model.vehicleType.title;
        this.rate = this.model.vehicleType.ratePerKm;
        this.timelinebased.amount = this.model.Timeline.amount;
        this.subtotal = (this.dista * (this.rate));
        this.timelinebased = JSON.parse(this.timelinebased);
        this.total = this.subtotal + this.timelinebased.amount;
        this.model.total = this.total;
        this.jjjj = true;
        this.eeeee = true;
        ;
    };
    ShippingComponent.prototype.kms2 = function (distance, duration) {
        // this.spinnerService.show();
        // setTimeout(()=>this.spinnerService.hide(),3000)
        this.dista = distance;
        this.dista = this.dista / 1000;
        this.durat = duration;
        this.kl = this.model.vehicleType.vehicle.title;
        console.log(this.model.vehicleType.ratePerKm);
        this.rate = this.model.vehicleType.vehicle.ratePerKm;
        this.timelinebased.amount = this.model.Timeline.amount;
        console.log(this.dista);
        console.log(this.rate);
        this.subtotal = (this.dista * (this.rate));
        //	this.timelinebased = JSON.parse(this.timelinebased);
        console.log(this.timelinebased.amount);
        console.log(this.subtotal);
        this.total = this.subtotal + this.timelinebased.amount + this.model.vehicleType.amount;
        console.log(this.total);
        this.model.total = this.total;
        this.jjjj = true;
        this.eeeee = true;
    };
    ShippingComponent.prototype.calculateAndDisplayRoute = function () {
        var _this = this;
        var b = localStorage.getItem('fromlat');
        var c = localStorage.getItem('fromlng');
        var d = localStorage.getItem('tolat');
        var e = localStorage.getItem('tolng');
        this.dir = {
            origin: {
                lat: JSON.parse(b),
                lng: JSON.parse(c)
            },
            destination: {
                lat: JSON.parse(d),
                lng: JSON.parse(e)
            }
        };
        this.dataOfDest = this.dir.destination;
        // alert(this.dataOfDest.lat);
        // alert(this.dataOfDest.lng);
        if (this.dataOfDest.lat == 17 && this.dataOfDest.lng == 81) {
            // alert('making of dir is empty');
            this.dir = false;
        }
        else {
            this.mapsFlag = true;
            this.directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer;
            this.directionsService.route({
                origin: this.dir.origin,
                destination: this.dir.destination,
                travelMode: 'DRIVING'
            }, function (response, status) {
                if (status === 'OK') {
                    var distanceee = void 0;
                    var durationeee = void 0;
                    distanceee = localStorage.getItem('distanceee');
                    durationeee = localStorage.getItem('durationeee');
                    directionsDisplay.setDirections(response);
                    distanceee = response.routes["0"].legs["0"].distance.value;
                    durationeee = response.routes["0"].legs["0"].duration.text;
                    localStorage.setItem('distanceee', distanceee);
                    if (durationeee == '1 min') {
                        localStorage.setItem('durationeee', '0 Minutes');
                    }
                    else {
                        localStorage.setItem('durationeee', durationeee);
                    }
                    _this.sendDistance = distanceee;
                    _this.sendDurationeee = durationeee;
                    // this.spinnerService.show();
                    _this.kms2(_this.sendDistance, _this.sendDurationeee);
                    // setTimeout(() => this.spinnerService.hide(), 1000)
                }
                else {
                    // alert('Directions request failed due to ' + status);
                }
            });
        }
    };
    ShippingComponent.prototype.onChanged = function () {
        console.log(this.model.Timeline);
        this.timelinebased.amount = this.model.Timeline.amount;
        //this.model.Timeline.amount = tt.amount;
        /* this.vehiclecost=vehicle.ratePerKm; */
        this.calculateAndDisplayRoute();
    };
    ShippingComponent.prototype.ToLocationBasedCall = function () {
        this.timelinebased = this.timelinebased;
        this.model.Timeline = this.timelinebased;
        this.calculateAndDisplayRoute();
    };
    ShippingComponent.prototype.selectVehicle = function (vehicle) {
        console.log(vehicle);
        if (vehicle.vehicleType == 'Two_Wheeler') {
            this.twoweel = true;
            this.threeweel = false;
            this.fourweel = false;
            this.model.vehicleType = vehicle;
            // alert ("its a two wheeler its cost is 10rs per km")
        }
        else if (vehicle.vehicleType == 'Three_Wheeler') {
            // alert ("its a three wheeler its cost is 10rs per km")
            this.twoweel = false;
            this.threeweel = true;
            this.fourweel = false;
            this.model.vehicleType = vehicle;
        }
        else {
            // ("its a four wheeler its cost is 10rs per km")
            this.twoweel = false;
            this.threeweel = false;
            this.fourweel = true;
            this.model.vehicleType = vehicle;
        }
        /* this.selectedVehicle = vehicle; */
        /* $scope.calculateTotal(); */
        this.vehiclecost = vehicle.ratePerKm;
        this.kl = vehicle.vehicleType;
        this.calculateAndDisplayRoute();
    };
    ShippingComponent.prototype.uom = function () {
        var _this = this;
        this.authservice.uom()
            .subscribe(function (data) {
            // (data.response);
            _this.sizes = data.response;
        }, function (err) {
            _this.isLoginError = true;
        });
    };
    ShippingComponent.prototype.myFunction = function () {
        alert('notok');
        this.checkBox = document.getElementById("myCheck");
        if (this.checkBox.checked == true) {
            this.model.fromHouseNo = "4-154";
            alert('ok');
        }
        else {
            alert('notok');
            console.log('noyhing');
        }
    };
    ShippingComponent.prototype.paymentmodeyssstt = function () {
        var _this = this;
        this.authservice.paymentmode()
            .subscribe(function (data) {
            _this.paymentmode = data.response;
            console.log(_this.paymentmode);
            _this.sending(_this.paymentmode[0]);
            console.time();
            if (_this.fareEstimationFlags) {
                console.timeEnd();
                _this.sending(_this.timelinebasedfare);
            }
            //console.log(JSON.parse(this.timelinebasedfare));
            // this.costOfFare=JSON.parse(this.timelinebasedfare)
            //this.model.Timeline.amount = this.timelinebasedfare.amount;
            //this.timelinebased =JSON.parse(this.timelinebasedfare);
            console.log(_this.paymentmode[0].amount);
        }, function (err) {
            _this.isLoginError = true;
        });
    };
    ShippingComponent.prototype.sending = function (paymentmode) {
        this.model.Timeline = paymentmode;
        this.model.Timeline.amount = paymentmode.amount;
        this.timelinebased.amount = paymentmode.amount;
    };
    ShippingComponent.prototype.click = function (data) {
        // alert(0);
    };
    ShippingComponent.prototype.onSubmit4th = function () {
        if (this.fareEstimationFlags) {
            this.model.tolat = JSON.parse(this.tolatfare),
                this.model.tolng = JSON.parse(this.tolngfare);
            this.callService();
        }
        else {
            this.callService();
        }
        ;
    };
    ShippingComponent.prototype.callService = function () {
        var _this = this;
        var userid = JSON.parse(localStorage.getItem('userid'));
        if (!this.fareEstimationFlags) {
            var ch6 = JSON.parse(localStorage.getItem('fromlat'));
            this.model.fromlat = ch6;
            var ch2 = JSON.parse(localStorage.getItem('fromlng'));
            this.model.fromlng = ch2;
            var ch3 = JSON.parse(localStorage.getItem('tolat'));
            this.model.tolat = ch3;
            var ch4 = JSON.parse(localStorage.getItem('tolng'));
            this.model.tolng = ch4;
            var d = JSON.parse(localStorage.getItem('tolat'));
            var e = JSON.parse(localStorage.getItem('tolng'));
        }
        else {
            var d = this.model.tolat;
            var e = this.model.tolng;
            this.toloadloc = localStorage.getItem('tofarelocation');
            this.toloadlocs = localStorage.getItem('fromfarelocation');
            localStorage.setItem('fromlocation', this.toloadlocs);
            localStorage.setItem('tolocation', this.toloadloc);
        }
        if (this.model.tolat == 17 && this.model.tolng == 81) {
            this.dir = false;
        }
        else {
            var ch = {
                "customer": {
                    "id": userid
                },
                "fromLocation": localStorage.getItem('fromlocation'),
                "fromLat": this.model.fromlat,
                "fromLng": this.model.fromlng,
                "fromNearBy": "",
                "fromHouseNo": this.model.fromHouseNo,
                "fromContactName": this.model.fromContactName,
                "fromContactNumber": this.model.fromContactNumber,
                "items": this.model.items,
                "file": "Not yet",
                "toLocation": localStorage.getItem('tolocation'),
                "toLat": d,
                "toLng": e,
                "toNearBy": "",
                "toHouseNo": this.model.toHouseNo,
                "toContactName": this.model.toContactName,
                "toContactNumber": this.model.toContactNumber,
                "shippingMode": this.model.Timeline,
                "shippingVehicle": this.model.vehicleType,
                "paymentMode": this.model.Paymentmode,
                "payingAt": this.model.PaymentAt,
                "discount": 0,
                "subTotal": this.model.total,
                "total": this.model.total
            };
            localStorage.setItem('ch', JSON.stringify(ch));
            // 	this.fourth=false;
            // 	this.authservice.createshipping(ch)
            // 	 .subscribe((data : any)=>{
            // if(data.status="success"){
            // 	alert('created successfully')
            // }
            // 		},
            // 		(err : HttpErrorResponse)=>{
            // 			this.isLoginError = true;
            // 		});
            var am = 1;
            if (ch.paymentMode == "PayTM") {
                this.ch = localStorage.getItem('ch');
                console.log(this.ch);
                this.authservice.createshipping(this.ch)
                    .subscribe(function (data) {
                    console.log(JSON.stringify(data));
                    if (data.status == "success") {
                        var kls = data.response;
                        _this.SHIPPINGSSid = data.response;
                        console.log('createdSuccesfully with out items');
                        _this.toaccstr.success('createdSuccesfully with out items', 'Success!');
                        if (_this.model.items) {
                            var _loop_1 = function (i) {
                                // this.ksb={
                                // 	"description":this.model.items[i].description
                                // }  
                                console.log(i);
                                _this.authservice.addItemdetails(kls, JSON.stringify(_this.model.items[i]))
                                    .subscribe(function (data) {
                                    _this.data = data;
                                    if (data.status = "success") {
                                        _this.bb = localStorage.getItem('bb');
                                        console.log(i);
                                        console.log('createdSuccesfully with  items but not docs');
                                        _this.toaccstr.success('createdSuccesfully with  items but not docs', 'Success!');
                                        // 			this.authservice.uploadItemsDocumentsUrl(this.data.response,this.bb)
                                        // .subscribe(
                                        //     data => {
                                        //     this.data = data;
                                        // 	// console.log(data); 
                                        // 		 // console.log('created successfully  through  cash with adding item details and upload docd ')
                                        // 		 this.toaccstr.success('SHIPPING created successfully but upload docs failed', 'Success!');
                                        // 		 this.router.navigate(["home"]);
                                        // 	},
                                        // 	err =>{
                                        // 		// console.log(err)
                                        // 		// console.log('not added images');
                                        // 		// console.log('SHIPPING created successfully but upload docs failed')
                                        // 		this.toaccstr.success('SHIPPING created successfully but upload docs failed', 'Success!');
                                        // 		this.router.navigate(["home"]);
                                        // 	}
                                        // ); 
                                    }
                                    else {
                                        console.log('not added itemsserver failed');
                                    }
                                }, function (err) {
                                    // console.log(err)
                                });
                            };
                            for (var i = 0; i < _this.model.items.length; i++) {
                                _loop_1(i);
                            }
                        }
                        _this.toaccstr.success('createdSuccesfullys', 'Success!');
                        localStorage.removeItem('fromfarelocation');
                        localStorage.removeItem('tofarelocation');
                        _this.dista = 0;
                        _this.durat = 0;
                        _this.total = 0;
                        _this.model.total = 0;
                        localStorage.removeItem('distanceee');
                        localStorage.removeItem('distafare');
                        localStorage.removeItem('durationeee');
                        _this.fareEstimationPagedata = {};
                        _this.fareEstimationFlags = false;
                        var total = 1;
                        // alert(this.SHIPPINGSSid);
                        var url = 'http://test.mactecit.com/eazyshipp/app/customer/' + userid + '/shipp/payumoney/' + total + '/shipp/' + _this.SHIPPINGSSid + '/getPayuMoneyWeb';
                        console.log(url);
                        var target = '_self';
                        var options = "location=no,hidenavigationbuttons=yes,hideurlbar=yes,hardwareback=no,clearcache=yes";
                        var ref = null;
                        ref = window.open(url, target, options);
                        ref.addEventListener('loadstart', function (event) {
                            console.log('hi');
                            if (event.url) {
                                console.log('Loading started: ' + event.url);
                            }
                        });
                        ref.addEventListener('loadstop', function (event) {
                            if (event.url.indexOf("successful") > -1) {
                                //alert('payment successful');
                                //alert('Loading finished: ' + event.url);
                            }
                            else if (event.url.indexOf("cancelled") > -1) {
                                //alert("Payment is cancelled");
                                setTimeout(function () {
                                    ref.close();
                                }, 200);
                            }
                            else {
                                //alert("Payment is failed!");
                            }
                        });
                        ref.addEventListener('loaderror', function (error) {
                            if (error.message) {
                                console.log('Loading started: ' + error.message);
                            }
                        });
                        ref.addEventListener('exit', function () {
                            console.log('Browser is closed...');
                        });
                        //this.router.navigate(["home"]);
                    }
                }, function (err) {
                    _this.isLoginError = true;
                });
            }
            else if (ch.paymentMode == "Cash") {
                this.ch = localStorage.getItem('ch');
                console.log(this.ch);
                this.authservice.createshipping(this.ch)
                    .subscribe(function (data) {
                    if (data.status = "success") {
                        var kls = data.response;
                        console.log('createdSuccesfully with out items');
                        _this.toaccstr.success('createdSuccesfully with out items', 'Success!');
                        if (_this.model.items) {
                            var _loop_2 = function (i) {
                                // this.ksb={
                                // 	"description":this.model.items[i].description
                                // }  
                                console.log(i);
                                _this.authservice.addItemdetails(kls, JSON.stringify(_this.model.items[i]))
                                    .subscribe(function (data) {
                                    _this.data = data;
                                    if (data.status = "success") {
                                        _this.bb = localStorage.getItem('bb');
                                        console.log(i);
                                        console.log('createdSuccesfully with  items but not docs');
                                        _this.toaccstr.success('createdSuccesfully with  items but not docs', 'Success!');
                                        // 			this.authservice.uploadItemsDocumentsUrl(this.data.response,this.bb)
                                        // .subscribe(
                                        //     data => {
                                        //     this.data = data;
                                        // 	// console.log(data); 
                                        // 		 // console.log('created successfully  through  cash with adding item details and upload docd ')
                                        // 		 this.toaccstr.success('SHIPPING created successfully but upload docs failed', 'Success!');
                                        // 		 this.router.navigate(["home"]);
                                        // 	},
                                        // 	err =>{
                                        // 		// console.log(err)
                                        // 		// console.log('not added images');
                                        // 		// console.log('SHIPPING created successfully but upload docs failed')
                                        // 		this.toaccstr.success('SHIPPING created successfully but upload docs failed', 'Success!');
                                        // 		this.router.navigate(["home"]);
                                        // 	}
                                        // ); 
                                    }
                                    else {
                                        console.log('not added itemsserver failed');
                                    }
                                }, function (err) {
                                    // console.log(err)
                                });
                            };
                            for (var i = 0; i < _this.model.items.length; i++) {
                                _loop_2(i);
                            }
                        }
                        _this.toaccstr.success('createdSuccesfullys', 'Success!');
                        localStorage.removeItem('fromfarelocation');
                        localStorage.removeItem('tofarelocation');
                        _this.dista = 0;
                        _this.durat = 0;
                        _this.total = 0;
                        _this.model.total = 0;
                        localStorage.removeItem('distanceee');
                        localStorage.removeItem('distafare');
                        localStorage.removeItem('durationeee');
                        _this.fareEstimationPagedata = {};
                        _this.fareEstimationFlags = false;
                        _this.shipData.callShippListTab();
                        //this.router.navigate(["home"]);
                    }
                }, function (err) {
                    _this.isLoginError = true;
                });
            }
            else {
                // console.log('vvvvv');
            }
        }
    };
    ShippingComponent.prototype.detectFiles = function (event) {
        var _this = this;
        this.urls = [];
        var files = event.target.files;
        if (files) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.urls.push(e.target.result);
                    // console.log(this.urls);
                };
                reader.readAsDataURL(file);
            }
        }
    };
    ShippingComponent.prototype.clearShipping = function () {
        localStorage.removeItem('fromfarelocation');
        localStorage.removeItem('tofarelocation');
        this.fareEstimationPagedata = {};
        this.dista = 0;
        this.durat = 0;
        this.model.total = 0;
        this.total = 0;
        window.location.reload();
    };
    ShippingComponent.prototype.adding = function () {
        var term = 1;
        this.router.navigate(['Shipping_Payment_Success', term]);
    };
    ShippingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipping',
            template: __webpack_require__(/*! ./shipping.component.html */ "./src/app/shipping/shipping.component.html"),
            styles: [__webpack_require__(/*! ./shipping.component.css */ "./src/app/shipping/shipping.component.css")]
        }),
        __metadata("design:paramtypes", [ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
            _modulewise_shippingdata_shippingdata_component__WEBPACK_IMPORTED_MODULE_1__["ShippingdataComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4__["Toaster"]])
    ], ShippingComponent);
    return ShippingComponent;
}());



/***/ }),

/***/ "./src/app/shipslist/shipslist.component.css":
/*!***************************************************!*\
  !*** ./src/app/shipslist/shipslist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 400px;\r\n}\r\n    #product-list{\r\n        display:none;\r\n    }\r\n    #products:hover  #product-list{\r\n        display:block;\r\n    }\r\n    #product-list:hover{\r\n        display:block;\r\n    }\r\n    .zoom:hover {\r\n        -webkit-transform: scale(1.5);\r\n                transform: scale(1.5); \r\n    }\r\n    .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\r\n            color: #495057;\r\n            border: none;\r\n            background-color: #fff;\r\n            border-color: #dee2e6 #dee2e6 #fff;\r\n            border-bottom: 3px solid #d30f6c;\r\n        }\r\n    .prograss_bar {\r\n            width: 100%;\r\n            background: #d30f6c;\r\n        }\r\n    ul\r\n        {\r\n          display:flex;  \r\n          list-style:none;\r\n        }\r\n    li{\r\n            width:33.3333%;\r\n        }\r\n    .css_fontt {\r\n           \r\n            color: #d30f6c;\r\n          \r\n            font-size: 31px;\r\n            padding: 2px 8px;\r\n            border-radius: 2px;\r\n        }\r\n    .mar_t22 {\r\n            margin-top: 60px;\r\n        }    "

/***/ }),

/***/ "./src/app/shipslist/shipslist.component.html":
/*!****************************************************!*\
  !*** ./src/app/shipslist/shipslist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n\r\n\t<div class=\"row mt-3\">\r\n\r\n\r\n\r\n\t\t<div class=\"col-lg-12\">\r\n\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\"><b> Shipping list </b></div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t       <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit(registerForm.value)\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-3\">\r\n                    <div class=\"form-group\">\r\n                        <label>From Date</label>\r\n                        <input type=\"date\" formControlName=\"formDate\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && f.formDate.errors }\" />\r\n\t\t\t\t\t\t\r\n                        <div *ngIf=\"submitted && f.formDate.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.formDate.errors.required\">From date is required</div>\r\n                        </div>\r\n                    </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"col-lg-3\">\r\n                    <div class=\"form-group\">\r\n                        <label>To Date</label>\r\n                        <input type=\"date\" formControlName=\"toDate\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && f.toDate.errors }\" />\r\n                        <div *ngIf=\"submitted && f.toDate.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.toDate.errors.required\">To date is required</div>\r\n                        </div>\r\n                    </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n                  \r\n\t\t\t\t\t<div class=\"col-lg-3\">\r\n                    <div class=\"form-group\">\r\n                       \r\n\t\t\t\t\t\t<button class=\"btn button-color\" [disabled]=\"loading\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"background-color:rgb(211,15,108);color:white;margin-top: 29px;\">Get</button>\r\n                    </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n                </form>  \r\n\t\t\t\t \r\n\t\t\t\t  \r\n\t\t\t\t<!-- <form name=\"form\" (ngSubmit)=\"get(ngForm.value)\" #f=\"ngForm\" novalidate style=\"color:black\">\r\n\t\t\t\t <div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t\t<div _ngcontent-c10=\"\" class=\"form-group\">\r\n\t\t\t\t\t\t <label _ngcontent-c10=\"\" for=\"FromDate\">From Date</label>\r\n\t\t\t\t\t\t   <input type=\"date\"class=\"form-control\" ng-model=\"model.FromDate\" #FromDate=\"ngModel\" name=\"FromDate\" > \r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-3\"> \r\n\t\t\t\t\t\t<div _ngcontent-c10=\"\" class=\"form-group\">\r\n\t\t\t\t\t\t<label _ngcontent-c10=\"\" for=\"ToDate\">To Date</label>\r\n\t\t\t\t\t\t  <input type=\"date\"class=\"form-control\"  ng-model=\"model.ToDate\" #ToDate=\"ngModel\" name=\"ToDate\" id=\"to\">\r\n\t\t\t\t\t\t</div> \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-3\"> \r\n\t\t\t\t\t\t<div _ngcontent-c3=\"\" class=\"form-group\">\r\n\t\t\t\t\t\t   <button class=\"btn button-color\" style=\"background-color:rgb(211,15,108);color:white;margin-top: 29px;\" >Create</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t</div> \r\n\t\t\t\t</form> -->\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"tab-content\">\r\n\t\t\t\t\t\t<div class=\"tab-pane  active\" id=\"saved\">\r\n\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\r\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered \">\r\n\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">ID</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Shipp Id</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Payment Mode</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Paying At</th>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">action</th>\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\" style=\"min-width: 88px;\">Details</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let job of savedjobs;let i=index\">\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{job.shippId}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"widths\">{{job.paymentMode}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"widths\">{{job.payingAt}}</td>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\" *ngIf=\"job.status=='Delayed'\" (click)=\"retry(job.id)\">\r\n\t\t\t\t\t\t\t\t\t\t\tretry</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\" *ngIf=\"job.status!='Delayed'\">completed</td>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\" (click)=\"modals(job)\" data-toggle=\"modal\"\r\n\t\t\t\t\t\t\t\t\t\t\tdata-target=\"#shippdetails\"><button class=\"btn button-color\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"background-color:rgb(211,15,108);color:white;\">Details</button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t\t<div class=\"modal fade\" id=\"shippdetails\" role=\"dialog\">\r\n\t\t\t\t<div class=\"modal-dialog  modal-lg\">\r\n\t\t\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t\t<h5 class=\"modal-title  col-md-12 col-sm-12 col-lg-12 col-xs-12\">Shipping Details</h5>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\"\r\n\t\t\t\t\t\t\t\tstyle=\"color:white;margin-left:calc(5% - 56px)\" aria-label=\"Close\">\r\n\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t<div id=\"map\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"shipping.status=='Closed'\" style=\"margin-top: 20px;\">\r\n\r\n\r\n\t\t\t\t\t\t\t\t<div style=\"color:green;font-size: 12px;\">Your Shipping Successfully Completed !</div>\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"shipping.status=='Delayed'\" style=\"\">\r\n\r\n\t\t\t\t\t\t\t\t<div style=\"color:red;font-size: 12px;text-align:center\">Your order not accepted any\r\n\t\t\t\t\t\t\t\t\tservice provider !</div>\r\n\t\t\t\t\t\t\t\t<div style=\"color:#350e3f;text-align:center;cursor:pointer\" (click)=\"retry(mo.id)\"><b>\r\n\t\t\t\t\t\t\t\t\t\tRetry </b></div>\r\n\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"item item-divider\" *ngIf=\"shipping.status!='Delayed'\"\r\n\t\t\t\t\t\t\t\tstyle=\"text-align:center;color:green\">\r\n\t\t\t\t\t\t\t\t<b>Service Provider</b>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"progress\">\r\n\t\t\t\t\t\t\t\t<div class=\"progress-bar prograss_bar\" *ngIf=\"shipping.status!='Delayed'\"\r\n\t\t\t\t\t\t\t\t\trole=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n\t\t\t\t\t\t\t\t\tstyle=\"width:100%\">\r\n\t\t\t\t\t\t\t\t\tService Provider [100%]\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col col-md-4 col-sm-12 col-lg-4\">Ship Id</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col col-md-4 col-sm-12 col-lg-4\">Amount</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col col-md-4 col-sm-12 col-lg-4\">{{mo.shippId}}</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col col-md-4 col-sm-12 col-lg-4\">Rs.{{mo.subTotal}}/-</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t<table class=\"table table-bordered\">\r\n\t\t\t\t\t\t\t\t<thead>\r\n\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card\" style=\"    width: 100%;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-tabs\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link active\" data-toggle=\"tab\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\thref=\"#pending\">From Location</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" data-toggle=\"tab\" href=\"#selected\">To\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLocation</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" data-toggle=\"tab\" href=\"#approved\">Vehicle\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tType</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ul><br>\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane container active\" id=\"pending\">\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\">{{mo.fromLocation}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Name</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{mo.fromContactName}}</td>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Mobile</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{mo.fromContactNumber}}</td>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane container fade\" id=\"selected\">\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\">{{mo.toLocation}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Name</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{mo.toContactName}}</td>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Mobile</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{mo.toContactNumber}}</td>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane container fade\" id=\"approved\">\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Vehicle</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{mo.vehicleType}}</td>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Shipping Mode</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{mo.title}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Pay Mode</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{mo.paymentMode}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Pay At</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{mo.payingAt}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\r\n\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t<div *ngFor=\"let items of shippingsItems\">\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"!itemDocs[items.id] || itemDocs[items.id].length==0\"\r\n\t\t\t\t\t\t\t\t\tstyle=\"text-align:center\">Image Not Avaliable\r\n\t\t\t\t\t\t\t\t\t!</div> <br>\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"itemDocs[items.id].length>0\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"scrollmenu\">\r\n\t\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t <div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row justify-content-around mar_t2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>{{items.description}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>{{items.height}}{{items.widthUom}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>{{items.width}}{{items.widthUom}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row justify-content-around  mar_t22\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a  *ngFor=\"let doc of itemDocs[items.id]\" ><img src=\"{{url}}app/customer/{{doc.id}}/itemImage\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\theight=\"100px\" width=\"100%\" style=\"margin-top: calc(5% - 26px);\tmax-width:150px;max-height: 150px;\" /></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class=\"modal fade\" id=\"tackshipp\" role=\"dialog\">\r\n\t\t\t<div class=\"modal-dialog\">\r\n\r\n\t\t\t\t<!-- Modal content-->\r\n\t\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t\t<div class=\"modal-header\" style=\"background: #350d3f;    text-align: center;    color: white;\">\r\n\t\t\t\t\t\t<h5 class=\"modal-title  col-md-12 col-sm-12 col-lg-12 col-xs-12\">Tracking</h5>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\"\r\n\t\t\t\t\t\t\tstyle=\"color:#d30f6c;margin-left:calc(5% - 56px)\" aria-label=\"Close\">\r\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">X</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n\t\t\t\t\t<agm-direction *ngIf=\"dir\" [origin]=\"dir.origin\" [destination]=\"dir.destination\">\r\n\t\t\t\t\t</agm-direction>\r\n\t\t\t\t</agm-map>\r\n\r\n\r\n\t\t\t</div>\r\n\t\t</div>"

/***/ }),

/***/ "./src/app/shipslist/shipslist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shipslist/shipslist.component.ts ***!
  \**************************************************/
/*! exports provided: ShipslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipslistComponent", function() { return ShipslistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShipslistComponent = /** @class */ (function () {
    function ShipslistComponent(authservice, formBuilder, datePipe) {
        this.authservice = authservice;
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.shippingsItems = [];
        this.mo = {};
        this.shippslist = {};
        this.dir = {};
        this.servicy = {};
        this.applications = {};
        this.apply = false;
        this.shipping = {};
        this.jobs = [];
        this.jobmodal = [];
        this.modaljobs = [];
        this.savedjobs = [];
        this.Approved = [];
        this.Closed = [];
        this.Cancelled = [];
        this.Selected = [];
        this.Pending = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"];
        this.submitted = false;
        this.url = this.authservice.Customer;
        console.log(this.url);
    }
    ShipslistComponent.prototype.ngOnInit = function () {
        this.jobslist();
        this.dtOptions = {
            pagingType: 'full_numbers', pageLength: 10
        };
        this.registerForm = this.formBuilder.group({
            formDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            toDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    ShipslistComponent.prototype.CustomerShippingslist = function () {
        var _this = this;
        this.Selected = [];
        this.authservice.CustomerShippingslist()
            .subscribe(function (data) {
            console.log(data);
            _this.shippslist = data.response;
            for (var i = 0; i < _this.shippslist.length; i++) {
                _this.itemm = _this.shippslist[i];
                _this.authservice.itemslist(_this.itemm.id)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.Selected.push(data.response);
                }, function (err) {
                    console.log(err);
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    ShipslistComponent.prototype.retry = function (mo) {
        var _this = this;
        this.authservice.retry(mo)
            .subscribe(function (data) {
            if (data.status == "success") {
                console.log(data);
                _this.itemslist(mo);
                _this.CustomerShippingslist();
            }
        }, function (err) {
            console.log(err);
        });
    };
    ShipslistComponent.prototype.modals = function (ll) {
        this.mo = ll;
        console.log(this.mo.id);
        console.log(this.mo.id);
        this.itemslist(this.mo.id);
    };
    ShipslistComponent.prototype.itemslist = function (ll) {
        var _this = this;
        console.log(ll);
        this.authservice.itemslist(ll)
            .subscribe(function (data) {
            console.log(data);
            _this.itemsslist = data.response;
            console.log(_this.itemsslist);
            _this.shipping = data.response.shipping;
            _this.ispaying = _this.shipping.payingAt;
            _this.driversShipps = data.response.driversShipps;
            _this.shippId = _this.shipping.shippId;
            _this.itemDocs = data.response.itemDocs;
            _this.shippingsItems = data.response.shippingsItems;
        }, function (err) {
            console.log(err);
        });
    };
    ShipslistComponent.prototype.jobslisty = function () {
        this.savedjobs = [];
        this.Approved = [];
        this.Closed = [];
        this.Cancelled = [];
        this.jobslist();
    };
    ShipslistComponent.prototype.savedclose = function (ch) {
        var _this = this;
        this.servicy = ch;
        this.servicy.serv = "Closed";
        this.authservice.jobcloscancel(this.servicy)
            .subscribe(function (data) {
            _this.jobslisty();
        }, function (err) {
            console.log(err);
        });
    };
    ShipslistComponent.prototype.savedcancel = function (ch) {
        var _this = this;
        this.servicy = ch;
        this.servicy.serv = "Cancelled";
        this.authservice.jobcloscancel(this.servicy)
            .subscribe(function (data) {
            _this.jobslisty();
        }, function (err) {
            console.log(err);
        });
    };
    ShipslistComponent.prototype.approvedselectlist = function (ch) {
        var _this = this;
        this.Pending = [];
        this.Selected = [];
        this.servicy = ch;
        this.authservice.approvedselectlist(this.servicy)
            .subscribe(function (data) {
            _this.apply = true;
            _this.applications = data.response;
            for (var i = 0; i < _this.applications.length; i++) {
                if (_this.applications[i].status == "Selected_By_Customer") {
                    _this.Selected.push(_this.applications[i]);
                }
                else if (_this.applications[i].status == "Applied") {
                    _this.Pending.push(_this.applications[i]);
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    ShipslistComponent.prototype.selectapprovedapplicant = function (p) {
        this.servicy = p;
        this.servicy.serv = "Selected_By_Customer";
        this.authservice.selectapplicantsforapproved(this.servicy)
            .subscribe(function (data) {
        }, function (err) {
            console.log(err);
        });
    };
    ShipslistComponent.prototype.track = function (llk) {
        this.tracklist = llk;
        this.dir = {
            origin: { lat: 17.3850, lng: 78.4867 },
            destination: { lat: 16.5062, lng: 80.6480 }
        };
        console.log(this.dir);
    };
    ShipslistComponent.prototype.jobslist = function () {
        var _this = this;
        this.authservice.CustomerShippingslist()
            .subscribe(function (data) {
            console.log(data);
            _this.savedjobs = data.response;
            _this.dtTrigger.next();
        }, function (err) {
            console.log(err);
        });
    };
    ShipslistComponent.prototype.modal = function (id) {
        this.Pending = [];
        this.Selected = [];
        this.modaljobs = id;
        this.apply = false;
    };
    Object.defineProperty(ShipslistComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    ShipslistComponent.prototype.onSubmit = function (date) {
        var _this = this;
        console.log(date);
        this.date = date;
        var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]("en-US");
        this.value1 = datePipe.transform(date.formDate, 'dd-MM-yyyy');
        console.log(this.value1);
        var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]("en-US");
        this.value2 = datePipe.transform(date.toDate, 'dd-MM-yyyy');
        console.log(this.value2);
        this.dates = {
            "formDate": this.value1,
            "toDate": this.value2
        };
        console.log(this.dates);
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.authservice.dateWiseShippingList(this.dates)
            .subscribe(function (data) {
            console.log(data);
            _this.date = {};
            _this.savedjobs = data.response;
            _this.dtTrigger.next();
        }, function (err) {
            console.log(err);
        });
    };
    ShipslistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipslist',
            template: __webpack_require__(/*! ./shipslist.component.html */ "./src/app/shipslist/shipslist.component.html"),
            styles: [__webpack_require__(/*! ./shipslist.component.css */ "./src/app/shipslist/shipslist.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], ShipslistComponent);
    return ShipslistComponent;
}());



/***/ }),

/***/ "./src/app/storecreate/storecreate.component.css":
/*!*******************************************************!*\
  !*** ./src/app/storecreate/storecreate.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "..router-link-active {\r\n\tcolor: #000;\r\n\tfont-weight: bold;\r\n}\r\n.project-tab {\r\n   position: relative;\r\n    margin-top: 62px;\r\n   \r\n}\r\n.project-tab #tabs{\r\n    background: #007b5e;\r\n    color: #eee;\r\n}\r\n.project-tab #tabs h6.section-title{\r\n    color: #eee;\r\n}\r\n.project-tab #tabs .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\r\n   \r\n\tcolor: #cc0079;\r\n    background-color: transparent;\r\n    border-color: transparent transparent #f3f3f3;\r\n    border-bottom: 3px solid !important;\r\n    font-size: 16px;\r\n    font-weight: bold; \r\n\t\r\n}\r\n.project-tab .nav-link {\r\n    border: 1px solid transparent;\r\n    border-top-left-radius: .25rem;\r\n    border-top-right-radius: .25rem;\r\n    color: #0062cc;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n}\r\n.project-tab .nav-link:hover {\r\n    border: none;\r\n}\r\n.project-tab thead{\r\n    background: #f3f3f3;\r\n    color: #333;\r\n}\r\n.project-tab a{\r\n    text-decoration: none;\r\n    color: #333;\r\n    font-weight: 600;\r\n}\r\nnav{\r\n\tposition: -webkit-sticky;\r\n\tposition: sticky;\r\n    top: 4rem;\r\n    z-index: 999999;\r\n    background: #fff;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/storecreate/storecreate.component.html":
/*!********************************************************!*\
  !*** ./src/app/storecreate/storecreate.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-homenavbar></app-homenavbar><br><br><br>\r\n\r\n\t\t\r\n\r\n<div class=\"container\">\r\n \r\n  <br>\r\n  <!-- Nav tabs -->\r\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\">Create Store</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu1\">Store list</a>\r\n    </li>\r\n   \r\n  </ul>\r\n\r\n  <!-- Tab panes -->\r\n  <div class=\"tab-content\">\r\n    <div id=\"home\" class=\"container tab-pane active\"><br>\r\n    <app-stotecreate></app-stotecreate>  </div>\r\n    <div id=\"menu1\" class=\"container tab-pane fade\"><br>\r\n    <app-storelist></app-storelist> </div>\r\n   \r\n  </div>\r\n</div>\t\t\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t."

/***/ }),

/***/ "./src/app/storecreate/storecreate.component.ts":
/*!******************************************************!*\
  !*** ./src/app/storecreate/storecreate.component.ts ***!
  \******************************************************/
/*! exports provided: StorecreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorecreateComponent", function() { return StorecreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorecreateComponent = /** @class */ (function () {
    function StorecreateComponent() {
    }
    StorecreateComponent.prototype.ngOnInit = function () {
    };
    StorecreateComponent.prototype.storeCreate = function (storeData) {
        console.log(storeData);
    };
    StorecreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-storecreate',
            template: __webpack_require__(/*! ./storecreate.component.html */ "./src/app/storecreate/storecreate.component.html"),
            styles: [__webpack_require__(/*! ./storecreate.component.css */ "./src/app/storecreate/storecreate.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StorecreateComponent);
    return StorecreateComponent;
}());



/***/ }),

/***/ "./src/app/storelist/storelist.component.css":
/*!***************************************************!*\
  !*** ./src/app/storelist/storelist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ntable.dataTable tbody td {\r\n  padding: 8px 10px;\r\n\r\n}\r\n.top_margin_storelist{\r\n  margin-top: 102px;\r\n margin-bottom: 34px;\r\n\r\n}\r\nagm-map {\r\nheight: 300px;\r\n}\r\n.bor_btm{\r\n  border-bottom: 1px dotted #151314;\r\n  min-height: 25px;\r\n}\r\n.cc-margin-bottom{\r\nmargin-bottom: 14px;\r\n}\r\ntable.dataTable tbody th,\r\ntable.dataTable tbody td {\r\n  white-space: nowrap;\r\n}"

/***/ }),

/***/ "./src/app/storelist/storelist.component.html":
/*!****************************************************!*\
  !*** ./src/app/storelist/storelist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header\">Store List</div>\r\n\t\t\t<div class=\"card-body\">\r\n\t<div class=\"table-responsive\">\r\n\t\r\n\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" \r\n\t\t\t\tclass=\"table table-striped table-bordered table-hover\">\r\n\t\t\t\t\t<thead class=\"text-center\">\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>S.No</th>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<th>Store Name</th>\r\n\t\t\t\t\t\t\t<th>Store Address</th>\r\n\t\t\t\t\t\t\t<th>Full Details</th>\r\n\t\t\t\t\t\t\t<th>Delete</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr *ngFor=\"let job of jobs;let myindex=index\">\r\n\t\t\t\t\t\t\t<td class=\"text-center\">{{myindex+1}}</td>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<td>{{job.name}}</td>\r\n\t\t\t\t\t\t\t<td class=\"widths\">{{job.address}}</td>\r\n\t\t\t\t\t\t\t<td class=\"text-center\" (click)=\"modal(job)\" data-toggle=\"modal\" data-target=\"#jobdetails\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn button-color\" style=\"background-color:rgb(211,15,108);color:white;\"> Details</button>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td class=\"text-center\" (click)=\"delete(job)\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn \" style=\"background-color:red;color:white\">Delete</button>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"modal fade\" id=\"jobdetails\" role=\"dialog\">\r\n\t\t<div class=\"modal-dialog modal-lg\">\r\n\t\r\n\t\t\t<!-- Modal content-->\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t<h5 class=\"modal-title  col-md-12 col-sm-12 col-lg-12 col-xs-12\">Store Details\r\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t</div>\r\n\t\r\n\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t<table class=\"table table-bordered\">\r\n\t\t\t\t\t\t<thead>\r\n\t\r\n\t\r\n\t\t\t\t\t\t\t<div class=\"\" style=\"    width: 100%;\">\r\n\t\r\n\t\r\n\t\t\t\t\t\t\t\t<div class=\"tab-content\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"tab-pane container active\">\r\n\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tStore Id\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"bor_btm\">{{modaljobs.id}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t\t\tStore Name\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"bor_btm\"> {{modaljobs.name}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tStore Address\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"bor_btm\"> {{modaljobs.address}}</div>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 mar_t2 cc-margin-bottom\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn button-color\" style=\"background-color:rgb(211,15,108);color:white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tAdd to ship </button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<agm-map [latitude]=\"Lat\" [longitude]=\"Lng\">\r\n\t\t\t\t\t\t\t\t\t\t\t<agm-marker [latitude]=\"Lat\" [longitude]=\"Lng\"></agm-marker>\r\n\t\t\t\t\t\t\t\t\t\t</agm-map>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t<!-- <div class=\"row \" style=\"padding: 40px;\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card col col-lg-4 col-md-4 col-sm-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label style=\"color:blue;text-align:center;\">Id</label><label style=\"float:right;text-align:center\">{{modaljobs.id}}</label>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card col\">\r\n\t\t\t\t\t\t\t\t\t\t<label style=\"color:blue;text-align:center\">Title</label><label style=\"float:right;text-align:center\">{{modaljobs.title}}</label>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\" >\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card col text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<label style=\"color:blue;text-align:center\">Description</label>   {{modaljobs.description}}\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div><br>\r\n\t\t\t\t\t\t\t\t\t <div class=\"card\" style=\"border: 1px solid white\">\r\n\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"modaljobs.status==='Saved'||modaljobs.status==='Approved'\" (click)=\"savedclose(modaljobs)\"> CLOSE</button><br>\r\n\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"modaljobs.status==='Saved'||modaljobs.status==='Approved'\" (click)=\"savedcancel(modaljobs)\" >CANCEL</button></div><br>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\" text-center\"><button *ngIf=\"modaljobs.status==='Approved'||modaljobs.status==='Cancelled'||modaljobs.status==='Closed'\" (click)=\"approvedselectlist(modaljobs)\">\r\n\t\t\t\t\t\t\t\t\t\tApplications </button>\r\n\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t<!-- <div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label style=\"color:Blue;text-align:center;margin-left: 20%;\">Id</label>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t{{modaljobs.id}}<br>\r\n\t\t\t\t\t\t\t\t\t\t<label style=\"color:blue;text-align:center;margin-left: 20%;\">Title</label>\r\n\t\t\t\t\t\t\t\t\t{{modaljobs.title}}<br>\r\n\t\t\t\t\t\t\t\t\t\t<label style=\"color:blue;text-align:center;margin-left: 20%;\">Description</label>\r\n\t\t\t\t\t\t\t\t\t{{modaljobs.description}}<br>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div> -->\r\n\t\r\n\t\r\n\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>"

/***/ }),

/***/ "./src/app/storelist/storelist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/storelist/storelist.component.ts ***!
  \**************************************************/
/*! exports provided: StorelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorelistComponent", function() { return StorelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StorelistComponent = /** @class */ (function () {
    function StorelistComponent(authservice) {
        this.authservice = authservice;
        this.jobs = [];
        this.jobmodal = [];
        this.modaljobs = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"];
    }
    StorelistComponent.prototype.ngOnInit = function () {
        this.jobslist();
        this.dtOptions = {
            pagingType: 'full_numbers', pageLength: 10, paging: false,
        };
    };
    StorelistComponent.prototype.jobslist = function () {
        var _this = this;
        this.authservice.storeslist()
            .subscribe(function (data) {
            console.log(data);
            _this.jobs = data.response;
            console.log(_this.jobs);
            _this.dtTrigger.next();
        }, function (err) {
            console.log(err);
        });
    };
    StorelistComponent.prototype.jobslistTT = function () {
        var _this = this;
        this.authservice.storeslist()
            .subscribe(function (data) {
            console.log(data);
            _this.jobs = data.response;
            console.log(_this.jobs);
        }, function (err) {
            console.log(err);
        });
    };
    StorelistComponent.prototype.modal = function (id) {
        console.log(id);
        this.modaljobs = id;
        this.Lat = parseInt(this.modaljobs.Lat);
        this.Lng = parseInt(this.modaljobs.Lng);
        /* console.log(this.Lng);
            console.log(this.Lat); */
    };
    StorelistComponent.prototype.delete = function (id) {
        var _this = this;
        console.log(id);
        this.authservice.deletestore(id)
            .subscribe(function (data) {
            console.log(data);
            _this.jobslistTT();
        }, function (err) {
            console.log(err);
        });
    };
    StorelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-storelist',
            template: __webpack_require__(/*! ./storelist.component.html */ "./src/app/storelist/storelist.component.html"),
            styles: [__webpack_require__(/*! ./storelist.component.css */ "./src/app/storelist/storelist.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], StorelistComponent);
    return StorelistComponent;
}());

$('.table').wrap('<div class="dataTables_scroll"/>');


/***/ }),

/***/ "./src/app/stotecreate/stotecreate.component.css":
/*!*******************************************************!*\
  !*** ./src/app/stotecreate/stotecreate.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ntable.dataTable tbody td {\r\n    padding: 8px 10px;\r\n  \r\n}\r\n.top_margin_storelist{\r\n    margin-top: 102px;\r\n\t margin-bottom: 34px;\r\n\r\n}\r\nagm-map {\r\n  height: 300px;\r\n}\r\n.modal-header{\r\nbackground-color:rgb(53,14,63) !important;\r\ncolor:white;\r\ntext-align:center}"

/***/ }),

/***/ "./src/app/stotecreate/stotecreate.component.html":
/*!********************************************************!*\
  !*** ./src/app/stotecreate/stotecreate.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n       \r\n    <div class=\"col-md-12\" style=\"padding-left: 25px;\">\r\n        <div class=\"card\">\r\n    <div class=\"card-header\">Create Store</div>\r\n      <div class=\"card-body\">\r\n             <form #storeForm=\"ngForm\" (ngSubmit)=\"Store(storeForm.value)\" class=\"form-horizontal\" role=\"form\">\r\n      <div class=\"row\">\r\n     \r\n                    <div class=\"col-md-3\">\r\n        <label> Store Name</label>\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"></span>\r\n                        <input type=\"text\" class=\"form-control\" #title=\"ngModel\" ngModel name=\"title\" required  placeholder=\"Store Name\" style=\"background-color: #ffffffd1;\"/>\r\n                      </div>\r\n                    </div>\r\n           <div class=\"col-md-6\">\r\n            \r\n     <app-tolocstore>  </app-tolocstore>\r\n </div>\r\n                    <!-- <div class=\"cols-sm-10\"> -->\r\n                      <!-- <div class=\"input-group\"> -->\r\n                        <!-- <span class=\"input-group-addon\"></span> -->\r\n                        <!-- <input type=\"text\" class=\"form-control\" #title=\"ngModel\" ngModel name=\"title\" required  placeholder=\"Store Address\" style=\"background-color: #ffffffd1;\"/> -->\r\n                      <!-- </div> -->\r\n                    <!-- </div> -->\r\n        \r\n            <div class=\"col-md-3\">\r\n            \r\n                    <button class=\"btn button-color btn-eazyship btn-sm mar_t2\" style=\"margin-top: 30px;    background-color: #f50995;\r\n    margin-top: 30px;\r\n    color: white;\" type=\"submit\">Create</button>\r\n               </div></div>\r\n       \r\n       \r\n       \r\n       \r\n             </form>\r\n    </div>\r\n    </div>\r\n       \r\n    </div>\r\n   \r\n </div>\r\n "

/***/ }),

/***/ "./src/app/stotecreate/stotecreate.component.ts":
/*!******************************************************!*\
  !*** ./src/app/stotecreate/stotecreate.component.ts ***!
  \******************************************************/
/*! exports provided: StotecreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StotecreateComponent", function() { return StotecreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StotecreateComponent = /** @class */ (function () {
    function StotecreateComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    StotecreateComponent.prototype.ngOnInit = function () {
    };
    StotecreateComponent.prototype.Store = function (StoreData) {
        var _this = this;
        // /  this.address=	StoreData.address ; /
        console.log(StoreData);
        this.authservice.StoreCreate(StoreData)
            .subscribe(function (data) {
            _this.data = data;
            console.log(data);
            if (data.status == "success") {
                // / console.log('lllll'); /
                alert('created successfully');
                $('#Store').modal('hide');
                _this.router.navigate(["home"]);
            }
        }, function (err) {
            console.log(err);
        });
    };
    StotecreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stotecreate',
            template: __webpack_require__(/*! ./stotecreate.component.html */ "./src/app/stotecreate/stotecreate.component.html"),
            styles: [__webpack_require__(/*! ./stotecreate.component.css */ "./src/app/stotecreate/stotecreate.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], StotecreateComponent);
    return StotecreateComponent;
}());



/***/ }),

/***/ "./src/app/success/success.component.css":
/*!***********************************************!*\
  !*** ./src/app/success/success.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/success/success.component.html":
/*!************************************************!*\
  !*** ./src/app/success/success.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-homenavbar></app-homenavbar>\n<div >\n<div class=\"row\">\n    <div class=\"col-col-md-4 col-sm-4 col-lg-4\">\n\n    </div>\n    <div class=\"col-col-md-4 col-sm-4 col-lg-4\" style=\"font-size:25px\">\n            Your Transcation Id:  <div style=\"font-size:20px\">\n                   {{id}}\n                </div><br>\n                   <div style=\"font-size:20px\">shippId:{{savedjobs.shippId}}</div><br>\n                  <div style=\"font-size:20px\"> paymentMode:{{savedjobs.paymentMode}}</div><br>\n                   \n                  <div style=\"font-size:20px\">  payingAt :{{savedjobs.payingAt}}</div><br>\n                  <div style=\"font-size:20px\">  From Location :{{savedjobs.fromLocation}}</div><br>\n                  <div style=\"font-size:20px\">  To location :{{savedjobs.toLocation}}</div><br>\n                  <div style=\"font-size:20px\">  Total:{{savedjobs.total}}</div><br>\n\n    </div>\n    <div class=\"col-col-md-4 col-sm-4 col-lg-4\">\n\n    </div>\n</div>\n      \n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/success/success.component.ts":
/*!**********************************************!*\
  !*** ./src/app/success/success.component.ts ***!
  \**********************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuccessComponent = /** @class */ (function () {
    function SuccessComponent(route, authservice) {
        var _this = this;
        this.route = route;
        this.authservice = authservice;
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.id = params.term;
        });
    }
    SuccessComponent.prototype.ngOnInit = function () {
        this.shipplist();
    };
    SuccessComponent.prototype.shipplist = function () {
        var _this = this;
        this.authservice.CustomerShippingslist()
            .subscribe(function (data) {
            console.log(data);
            _this.savedjobs = data.response[0];
            console.log(_this.savedjobs);
            // this.savedjobs.map((k)=>{
            //   console.log(this.id);
            // if(this.id==k.id){
            //  this.ShipDetails=k;
            //  console.log(this.ShipDetails)
            // }
            // }
            // )
        }, function (err) {
            console.log(err);
        });
    };
    SuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-success',
            template: __webpack_require__(/*! ./success.component.html */ "./src/app/success/success.component.html"),
            styles: [__webpack_require__(/*! ./success.component.css */ "./src/app/success/success.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./src/app/support/support.component.css":
/*!***********************************************!*\
  !*** ./src/app/support/support.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon_css{\r\n\r\n    height: 123px;\r\n    border: 2px solid #bdb3bf;\r\n    padding: 19px;\r\n    border-radius: 2%;\r\n    margin-top: 31px;\r\n    background: #ede7ef;\r\n\r\n}\r\n.cc_fontc_css{\r\nfont-size: 12px;\r\nbackground: #350e3f;\r\npadding: 5px;\r\ncolor: white;\r\nmargin-right: 10px;\r\nborder-radius: 3px;\r\n}\r\n.css_text {\r\n    font-size: 17px;\r\n    line-height: 1;\r\n\r\n}\r\n.h2_after::after { \r\n    content: \"\";\r\n    display: block;\r\n    margin: 7px 32px 32px;\r\n    width: 9rem;\r\n    height: .25rem;\r\n    background: #350e3f;\r\n  }\r\n.h2_after{\r\n  width: 315px;\r\n    font-weight: bold;\r\n    margin: auto;\r\n}\r\n.office_css {\r\n    border-bottom: 1px solid #bdb3bf;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n}"

/***/ }),

/***/ "./src/app/support/support.component.html":
/*!************************************************!*\
  !*** ./src/app/support/support.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-homenavbar></app-homenavbar>\r\n<div class=\"container\">\r\n    <div class=\"col-md-12 text-center\"    style=\"margin-top: 132px;\"><h3 class=\"h2_after\">How Can We Support</h3></div>\r\n<div class=\"row\">\r\n    \r\n  <div class=\"col-md-4\" style=\"text-align: right;\">\r\n    <img   src=\"assets/support_png.png\" class=\"icon_css\">\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"comment\"><strong>Feedback:</strong></label>\r\n        <textarea class=\"form-control\" rows=\"5\" id=\"comment\" name=\"text\"></textarea>\r\n      </div>\r\n      <button _ngcontent-c3=\"\" class=\"btn button-color btn-sm\" data-target=\"#recentjobs\" data-toggle=\"modal\" style=\"background-color:rgb(211,15,108);color:white;float: right;margin-bottom: 12px;\" type=\"button\">Submit</button>\r\n    </div>\r\n   \r\n</div>\r\n\r\n<div class=\"row office_css\">\r\n<span>Our Office</span>\r\n</div>\r\n\r\n\r\n<div class=\"row mar_t2\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"row\"><span><i class=\"fa fa-home cc_fontc_css\" aria-hidden=\"true\"></i><label class=\"css_text\">2nd Floor and 5t</label></span></div>\r\n      <div class=\"row\"><label class=\"css_text\">1-98/K/15, Krithika Layout</label></div>\r\n      <div class=\"row\"><label class=\"css_text\">Madhapur, Hyderabad, </label></div>\r\n      <div class=\"row\"><label class=\"css_text\">Telangana 500081</label></div>\r\n      <div class=\"row\"><span><i class=\"fa  fa-phone-square cc_fontc_css\" aria-hidden=\"true\"></i>\r\n        <label class=\"css_text\">  +91 40 6514 2434</label></span></div>\r\n      <div class=\"row\"><span><i class=\"fa fa-envelope fa- cc_fontc_css\" aria-hidden=\"true\"></i>info@mactecit.com</span></div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n      <div class=\"row\"><span><i class=\"fa fa-home cc_fontc_css\" aria-hidden=\"true\"></i><label class=\"css_text\">1st Floor, No. 110 Luxury Village</label></span></div>\r\n      <div class=\"row\">Mangalagiri Road, Vijayawada, AP </div>\r\n      <div class=\"row\"><span>\r\n        <i class=\"fa  fa-phone-square cc_fontc_css\" aria-hidden=\"true\"></i>  <label class=\"css_text\">+ 91 798-942-3589</label></span>  </div>\r\n      <div class=\"row\"><span><i class=\"fa fa-envelope fa- cc_fontc_css\" aria-hidden=\"true\"></i>info@mactecit.com</span></div>\r\n     \r\n\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"row\"><span><i class=\"fa fa-home cc_fontc_css\" aria-hidden=\"true\"></i> 74 Dublin Road. Skillman</span></div>\r\n      <div class=\"row\">New Jersey – 08558 USA </div>\r\n      <div class=\"row\"><span>\r\n        <i class=\"fa  fa-phone-square cc_fontc_css\" aria-hidden=\"true\"></i> +1 703-665-4255 </span></div>\r\n      <div class=\"row\"><span><i class=\"fa fa-envelope fa- cc_fontc_css\" aria-hidden=\"true\"></i>info@mactecit.com</span></div>\r\n      \r\n    </div>\r\n</div> \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/support/support.component.ts":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SupportComponent = /** @class */ (function () {
    function SupportComponent() {
    }
    SupportComponent.prototype.ngOnInit = function () {
    };
    SupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.component.html */ "./src/app/support/support.component.html"),
            styles: [__webpack_require__(/*! ./support.component.css */ "./src/app/support/support.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "./src/app/toasterservice.service.ts":
/*!*******************************************!*\
  !*** ./src/app/toasterservice.service.ts ***!
  \*******************************************/
/*! exports provided: ToasterserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterserviceService", function() { return ToasterserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToasterserviceService = /** @class */ (function () {
    function ToasterserviceService() {
    }
    ToasterserviceService.prototype.Success = function (title, message) {
        toastr.success(title, message);
    };
    ToasterserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ToasterserviceService);
    return ToasterserviceService;
}());



/***/ }),

/***/ "./src/app/tofare/tofare.component.css":
/*!*********************************************!*\
  !*** ./src/app/tofare/tofare.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tofare/tofare.component.html":
/*!**********************************************!*\
  !*** ./src/app/tofare/tofare.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n <!-- <div class=\"container-fluid\">\r\n    \r\n      <div class=\"form-group\">\r\n        <input placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\r\n      </div>\r\n      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\r\n        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n      </agm-map>\r\n    </div>  -->\r\n\t\r\n\t\r\n\t\r\n<!-- <button routerLink='shipcreay' routerLinkActive='active'> Next</button>\r\n<router-outlet><router-outlet> -->\r\n<!-- <agm-map [latitude]=\"lat\" [longitude]=\"lng\"> \r\n       <agm-marker [latitude]=\"lat\"\r\n          [longitude]=\"lng\"></agm-marker>\r\n </agm-map> -->\r\n <!-- <button type=\"button\" (click)=\"getDirection()\">Get</button>\r\n\r\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n  <agm-direction *ngIf=\"dir\" \r\n    [origin]=\"dir.origin\" [destination]=\"dir.destination\">\r\n  </agm-direction>\r\n</agm-map> -->\r\n\r\n\r\n\r\n     \r\n   \t\r\n\t  <div class=\" form-group \">\r\n\t  <label style=\"\">To location </label>\r\n        <input placeholder=\"search for To location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\r\n      </div>\r\n\r\n\t \r\n\t \r\n\t  \r\n\t  \r\n\r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t \r\n\t "

/***/ }),

/***/ "./src/app/tofare/tofare.component.ts":
/*!********************************************!*\
  !*** ./src/app/tofare/tofare.component.ts ***!
  \********************************************/
/*! exports provided: TofareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TofareComponent", function() { return TofareComponent; });
/* harmony import */ var _fareestimate_fareestimate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fareestimate/fareestimate.component */ "./src/app/fareestimate/fareestimate.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/*
@Component({
  selector: 'app-tofare',
  templateUrl: './tofare.component.html',
  styleUrls: ['./tofare.component.scss']
})
export class TofareComponent implements OnInit {

 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TofareComponent = /** @class */ (function () {
    function TofareComponent(mapsAPILoader, ngZone, FareestimateComponent) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.FareestimateComponent = FareestimateComponent;
        /* public zoom: Number = 14; */
        this.dir = undefined;
    }
    TofareComponent.prototype.ngOnInit = function () {
        /*   this.zoom = 4; */
        /*   this.latitude = number;
          this.longitude = number;  */
        var _this = this;
        //create search FormControl
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        //this.searcControl = new FormControl();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    /* console.log(place) */
                    //verify result
                    localStorage.setItem('tofarelocation', place.formatted_address);
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    /* 	  console.log(this.latitude);  */
                    localStorage.setItem('tofarelat', _this.latitude);
                    /*   this.fromlat=this.latitude; */
                    _this.longitude = place.geometry.location.lng();
                    /* 	 console.log( this.longitude); */
                    localStorage.setItem('tofarelng', _this.longitude);
                    /*  this.fromlong=this.longiitude; */
                    _this.zoom = 12;
                    _this.FareestimateComponent.tosubmit();
                });
            });
        });
        /*    console.log( this.longitude); */
    };
    TofareComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("search"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TofareComponent.prototype, "searchElementRef", void 0);
    TofareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tofare',
            template: __webpack_require__(/*! ./tofare.component.html */ "./src/app/tofare/tofare.component.html"),
            styles: [__webpack_require__(/*! ./tofare.component.css */ "./src/app/tofare/tofare.component.css")]
        }),
        __metadata("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _fareestimate_fareestimate_component__WEBPACK_IMPORTED_MODULE_0__["FareestimateComponent"]])
    ], TofareComponent);
    return TofareComponent;
}());



/***/ }),

/***/ "./src/app/tolocstore/tolocstore.component.css":
/*!*****************************************************!*\
  !*** ./src/app/tolocstore/tolocstore.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tolocstore/tolocstore.component.html":
/*!******************************************************!*\
  !*** ./src/app/tolocstore/tolocstore.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" form-group\" >\r\n\t\t\t<label>Store Location </label>\r\n\t\t\t<input placeholder=\"search for Store location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\r\n\t\t</div>"

/***/ }),

/***/ "./src/app/tolocstore/tolocstore.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tolocstore/tolocstore.component.ts ***!
  \****************************************************/
/*! exports provided: TolocstoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TolocstoreComponent", function() { return TolocstoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TolocstoreComponent = /** @class */ (function () {
    function TolocstoreComponent(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        // public zoom: Number = 14; 
        this.dir = undefined;
    }
    TolocstoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.setItem('fromlat', '17.00');
        localStorage.setItem('fromlng', '81.00');
        this.getDirection();
        //   this.zoom = 4; /
        /*   this.latitude = 39.8282;
          this.longitude = -98.5795; */
        //create search FormControl
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        //this.searcControl = new FormControl();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    console.log(place);
                    localStorage.setItem('formatted_address', place.formatted_address);
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    console.log(_this.latitude);
                    localStorage.setItem('fromlat', _this.latitude);
                    //  this.fromlat=this.latitude; /
                    _this.longitude = place.geometry.location.lng();
                    console.log(_this.longitude);
                    localStorage.setItem('fromlng', _this.longitude);
                    // this.fromlong=this.longiitude; /
                    _this.zoom = 12;
                    _this.dir = {
                        origin: { lat: _this.latitude, lng: _this.longitude },
                        destination: { lat: _this.latitude + 5, lng: _this.longitude + 6 }
                    };
                    console.log(_this.dir);
                });
            });
        });
        console.log(this.longitude);
    };
    TolocstoreComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                //this.zoom = 12;
            });
        }
    };
    TolocstoreComponent.prototype.getDirection = function () {
        this.dir = {
            origin: { lat: 18.888, lng: 78.979021 },
            destination: { lat: 16.799524, lng: 80.975017 }
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("search"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TolocstoreComponent.prototype, "searchElementRef", void 0);
    TolocstoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tolocstore',
            template: __webpack_require__(/*! ./tolocstore.component.html */ "./src/app/tolocstore/tolocstore.component.html"),
            styles: [__webpack_require__(/*! ./tolocstore.component.css */ "./src/app/tolocstore/tolocstore.component.css")]
        }),
        __metadata("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], TolocstoreComponent);
    return TolocstoreComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\mactec\EazyshippCustWeb09\EazyshippUpdatedFeb09\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map