webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">NG5 Angular Project</a>    \n  <a class=\"navbar-brand\" routerLink=\"/tech\" routerLinkActive=\"active\">Tech</a>\n    \n  \n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n          data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item active mx-4\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\" routerLinkActive=\"active\">Ninja List <span class=\"sr-only\"></span></a>\n      </li>\n      <li *ngIf=\"!loginService.loggedIn()\" class=\"nav-item mx-4\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\" routerLinkActive=\"active\">Login</a>\n      </li>\n      <li *ngIf=\"loginService.loggedIn()\" (click)=\"loginService.logoutUser()\" class=\"nav-item mx-4\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\" routerLinkActive=\"active\">Logout</a>\n      </li>\n    <li class=\"nav-item mx-4\">\n      <a class=\"nav-link\" [routerLink]=\"['/register']\" routerLinkActive=\"active\">Register</a>\n    </li>\n    <li class=\"nav-item mx-4\">\n      <a class=\"nav-link\" [routerLink]=\"['/users']\" routerLinkActive=\"active\">Users</a>\n    </li>\n  </ul>\n    \n    <!--<form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-default my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>-->\n  \n  </div>\n</nav>\n\n  <router-outlet></router-outlet>\n  \n\n  <!--<app-selected></app-selected>-->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    // loginservice.loggedIn() used in template to show 'Login' or 'Logout' button.
    function AppComponent(loginService) {
        this.loginService = loginService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_login_service__["a" /* LoginService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tokenGetter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__userlist_service__ = __webpack_require__("../../../../../src/app/userlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ninjas_service__ = __webpack_require__("../../../../../src/app/services/ninjas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_single_service__ = __webpack_require__("../../../../../src/app/services/single.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_service__ = __webpack_require__("../../../../../src/app/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ninja_ninja_component__ = __webpack_require__("../../../../../src/app/ninja/ninja.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__single_single_component__ = __webpack_require__("../../../../../src/app/single/single.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ninjandetails_ninjandetails_component__ = __webpack_require__("../../../../../src/app/ninjandetails/ninjandetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__selected_selected_component__ = __webpack_require__("../../../../../src/app/selected/selected.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pagenotfound_pagenotfound_component__ = __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__userlist_userlist_component__ = __webpack_require__("../../../../../src/app/userlist/userlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__interceptor__ = __webpack_require__("../../../../../src/app/interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__techscroll_techscroll_component__ = __webpack_require__("../../../../../src/app/techscroll/techscroll.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























// from JWTModule https://github.com/auth0/angular2-jwt
function tokenGetter() {
    return localStorage.getItem('token');
}
var routes = [
    { path: 'ninjas', component: __WEBPACK_IMPORTED_MODULE_12__ninja_ninja_component__["a" /* NinjaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__auth_guard__["a" /* AuthGuard */]] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_19__userlist_userlist_component__["a" /* UserlistComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__auth_guard__["a" /* AuthGuard */]] },
    { path: 'ninja-detail/:name', component: __WEBPACK_IMPORTED_MODULE_14__ninjandetails_ninjandetails_component__["a" /* NinjandetailsComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_20__login_login_component__["a" /* LoginComponent */] },
    { path: 'tech', component: __WEBPACK_IMPORTED_MODULE_24__techscroll_techscroll_component__["a" /* TechscrollComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_18__register_register_component__["a" /* RegisterComponent */] },
    { path: '', redirectTo: '/ninjas', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_17__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__ninja_ninja_component__["a" /* NinjaComponent */],
                __WEBPACK_IMPORTED_MODULE_13__single_single_component__["a" /* SingleComponent */],
                __WEBPACK_IMPORTED_MODULE_14__ninjandetails_ninjandetails_component__["a" /* NinjandetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__selected_selected_component__["a" /* SelectedComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */],
                __WEBPACK_IMPORTED_MODULE_18__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_19__userlist_userlist_component__["a" /* UserlistComponent */],
                __WEBPACK_IMPORTED_MODULE_20__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_22__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_24__techscroll_techscroll_component__["a" /* TechscrollComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_23__auth0_angular_jwt__["b" /* JwtModule */].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(routes, { enableTracing: true })
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_21__interceptor__["a" /* Interceptor */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_4__services_ninjas_service__["a" /* NinjasService */],
                __WEBPACK_IMPORTED_MODULE_5__services_single_service__["a" /* SingleService */],
                __WEBPACK_IMPORTED_MODULE_15__data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_6__register_service__["a" /* RegisterService */],
                __WEBPACK_IMPORTED_MODULE_7__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_0__userlist_service__["a" /* UserlistService */],
                __WEBPACK_IMPORTED_MODULE_8__auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_loginservice, _router) {
        this._loginservice = _loginservice;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this._loginservice.loggedIn()) {
            return true;
        }
        else {
            // add queryParams, passed to LoginComponent user navigated back to original url.
            this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.default = {
            name: 'Chris',
            rank: 'Black Belt',
            available: 'available',
            date: new Date
        };
        this.ninjaSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.default); // takes default val.
        this.currentNinja = this.ninjaSource.asObservable(); //subscribe to this in component.
    }
    DataService.prototype.changeNinja = function (ninja) {
        this.ninjaSource.next(ninja);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Interceptor = /** @class */ (function () {
    function Interceptor(loginservice) {
        this.loginservice = loginservice;
    }
    Interceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.loginservice.getToken()
            }
        });
        return next.handle(request);
    };
    Interceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]])
    ], Interceptor);
    return Interceptor;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"py-5\">\n  <div class=\"row\">\n    <div class=\"col-md-6 mx-auto\">\n      <span class=\"anchor\" id=\"formLogin\"></span>\n\n      <!-- form card login -->\n      <div class=\"card rounded-0\">\n        <div class=\"card-header d-flex justify-content-center\">\n          <h3 class=\"mb-0\">Login</h3>\n        </div>\n        <div class=\"card-body\">\n          <form class=\"form\">\n            <div class=\"form-group\">\n              <label for=\"uname1\">Username</label>\n              <input type=\"text\" class=\"form-control rounded-0\" [(ngModel)]=\"user.email\" name=\"email\" required>\n            </div>\n            <div class=\"form-group\">\n              <label>Password</label>\n              <input type=\"password\" class=\"form-control rounded-0\" [(ngModel)]=\"user.password\" name=\"password\" required>\n            </div>\n            <button type=\"button\" (click)=\"loginUser()\" class=\"btn btn-primary btn-block\">Login</button>\n          </form>\n        </div>\n        <!--/card-block-->\n      </div>\n      <!-- /form card login -->\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { tokenGetter } from './../app.module';
//const helper = new JwtHelperService();
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_login, _router, _route) {
        this._login = _login;
        this._router = _router;
        this._route = _route;
        this.user = {
            email: undefined,
            password: undefined,
            token: undefined
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        //queryParams from auth.guard, url before user logs in.
        //this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/'; // or subscribe to queryParams.
        this._route.queryParams.subscribe(function (params) {
            _this.returnUrl = params['returnUrl'];
        });
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this._login.loginUser(this.user)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            // from loginservice, return user to original url.
            _this._router.navigateByUrl(_this.returnUrl);
        }, function (err) { return console.log(err); });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/logout/logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ninja/ninja.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\r\n    list-style-type: none;\r\n  }\r\n  \r\n  ul>li {\r\n      margin-bottom: 5px;\r\n      color: #003366;\r\n  }\r\n  \r\n  .zoom {\r\n    background-color: #BEBEBE;\r\n    -webkit-transition: -webkit-transform .2s;\r\n    transition: -webkit-transform .2s;\r\n    transition: transform .2s;\r\n    transition: transform .2s, -webkit-transform .2s; /* Animation */    \r\n    /*margin: 0 auto;*/\r\n}\r\n  \r\n  .zoom:hover {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n}\r\n  \r\n  .row {\r\n    margin-bottom:75px;\r\n}\r\n  \r\n  #head {\r\n    margin-top: 50px;\r\n}\r\n  \r\n  hr {\r\n    margin-bottom: 75px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ninja/ninja.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">  \n\n  <div class=\"d-flex justify-content-center\">\n    <h1 id=\"head\" class=\"display-4\">Ninja List</h1>\n    <!--<button class=\"btn btn-primary mx-1\" (click)=\"showNinjas()\">Get Ninjas</button>-->\n    <!--no need for button, function in onInIt method-->\n  </div>\n  <hr>\n\n  <div class=\"row justify-content-md-center\">\n    <ul class=\"list-group\">\n      <!--this is a problem-->          \n      <li *ngFor=\"let ninja of ninjas\" class=\"list-group-item zoom\" (click)=\"onSelect(ninja)\">\n          {{ ninja.name }} - {{ ninja.rank }}              \n      </li>\n    </ul>\n  </div>\n  \n  \n      <!-- <div class=\"row justify-content-md-center\">\n        <ul class=\"list-group\">                    \n          <li *ngFor=\"let ninja of ninjas\" class=\"list-group-item\" (click)=\"onSelect(ninja)\">\n            <a routerLink=\"/ninja/{{ ninja.name }}\">{{ ninja.name }} - {{ ninja.rank }}</a>              \n          </li>\n        </ul>\n      </div> -->\n      \n</div>\n      \n\n"

/***/ }),

/***/ "../../../../../src/app/ninja/ninja.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NinjaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ninjas_service__ = __webpack_require__("../../../../../src/app/services/ninjas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NinjaComponent = /** @class */ (function () {
    function NinjaComponent(ninjasservice, dataService, router) {
        this.ninjasservice = ninjasservice;
        this.dataService = dataService;
        this.router = router;
    }
    NinjaComponent.prototype.ngOnInit = function () {
        this.showNinjas();
    };
    NinjaComponent.prototype.showNinjas = function () {
        var _this = this;
        this.ninjasservice.getNinjas().subscribe(function (data) { _this.ninjas = data; });
    };
    NinjaComponent.prototype.onSelect = function (ninja) {
        this.selectedNinja = ninja;
        this.dataService.changeNinja(this.selectedNinja);
        this.router.navigate(['/ninja-detail', this.selectedNinja.name]);
    };
    NinjaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-ninja',
            template: __webpack_require__("../../../../../src/app/ninja/ninja.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ninja/ninja.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_ninjas_service__["a" /* NinjasService */],
            __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], NinjaComponent);
    return NinjaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ninjandetails/ninjandetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#topPage {\r\n    margin: 75px 0;\r\n}\r\n\r\n#bottomPage {\r\n    margin: 75px 0;\r\n}\r\n\r\n.zoom {\r\n    padding: 10px;\r\n    background-color: #BEBEBE;\r\n    -webkit-transition: -webkit-transform .2s;\r\n    transition: -webkit-transform .2s;\r\n    transition: transform .2s;\r\n    transition: transform .2s, -webkit-transform .2s; /* Animation */ \r\n    margin: 0 auto;   \r\n}\r\n\r\n.zoom:hover {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n}\r\n\r\n#ninjaName {\r\n    margin-bottom: 45px;\r\n}\r\n\r\n#zoomDiv {\r\n    margin-top: 15px;\r\n}\r\n\r\n#zoomDiv a {\r\n    color: #003366;\r\n}\r\n\r\n.material-icons.md-40{\r\n    font-size: 40px;\r\n    display: inline-block;\r\n    position: relative;\r\n    top: 7px;\r\n    left: 6px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ninjandetails/ninjandetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"ninja\" class=\"d-flex justify-content-center\" id=\"topPage\">\n    <h1>Ninjadetails Component</h1>\n    <div>\n        <i class=\"material-icons md-40\">face</i>\n    </div>\n    \n</div>\n<div id=\"bottomPage\">\n    <div class=\"d-flex flex-column align-items-center\">\n        <h1 id=\"ninjaName\">My Name Is {{ ninjaName }}</h1>      \n        <h3>You selected Ninja with name {{ ninja.name }} </h3>      \n        <h3>{{ ninja.name }} is a {{ ninja.rank }}</h3>\n        \n        <div id=\"zoomDiv\" class=\"zoom\">\n            <a (click)=\"goToNinjas()\" >Back To Ninja List</a>\n        <!--<a [routerLink]=\"['/']\" class=\"zoom\">Back To Ninja List</a>-->\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ninjandetails/ninjandetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NinjandetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import 'rxjs/add/operator/switchMap';
var NinjandetailsComponent = /** @class */ (function () {
    function NinjandetailsComponent(route, dataService, router) {
        this.route = route;
        this.dataService = dataService;
        this.router = router;
    }
    NinjandetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentNinja.subscribe(function (data) { _this.ninja = data; });
        // let name = this.route.snapshot.paramMap.get('name');
        // this.ninjaName = name;
        this.route.paramMap.subscribe(function (params) {
            var name = params.get('name');
            console.log("I am the params " + name);
            _this.ninjaName = name;
        });
    };
    NinjandetailsComponent.prototype.goToNinjas = function () {
        this.router.navigate(['/ninjas']);
        // or 'this.location.back();'
    };
    NinjandetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ninjandetails',
            template: __webpack_require__("../../../../../src/app/ninjandetails/ninjandetails.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ninjandetails/ninjandetails.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NinjandetailsComponent);
    return NinjandetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\r\n    margin: 300px 0 0 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"d-flex justify-content-center\">\n  <h2 class= \"display-1\">Page Not Found!</h2>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagenotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pagenotfound',
            template: __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this._registerurl = 'http://localhost:4000/user/register';
        this._emailurl = 'http://localhost:4000/user/email-check';
    }
    RegisterService.prototype.registerUser = function (user) {
        return this.http.post(this._registerurl, user);
    };
    RegisterService.prototype.checkUserEmail = function (user) {
        return this.http.post(this._emailurl, user);
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span {\r\n    display:inline-block;\r\n    margin-top: 5px;\r\n    font-weight: 700;    \r\n}\r\n\r\n.selected {\r\n    font-style: italic;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"py-5\">\n  <div class=\"row\">\n    <div class=\"col-md-6 mx-auto\">\n      <span class=\"anchor\" id=\"formLogin\"></span>\n\n      <!-- form card login -->\n      <div class=\"card rounded-0\">\n        <div class=\"card-header d-flex justify-content-center\">\n          <h3 class=\"mx-auto text-warning\">Register</h3> <!-- or \"text-center\" instead of d-flex justify-content-center-->\n        </div>\n        <div class=\"card-body\">\n          <form #userForm=\"ngForm\" class=\"form\">              \n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n\n              <input type=\"text\"\n                     (keyup)=\"checkEmail($event)\"\n                     [(ngModel)]=\"user.email\"\n                     name=\"email\"\n                     id=\"email\"\n                     #email=\"ngModel\"\n                     class=\"form-control rounded-0\"\n                     required>\n\n              <div *ngIf=\"available\" [class.selected]=\"available === true\">\n                <span class=\"text-success\">{{ emailMessage }}</span>\n              </div>\n\n              <div *ngIf=\"!available\" [class.selected]=\"available === false\">\n                <span class=\"text-danger\">{{ emailMessage }}</span>\n              </div>\n\n            </div>\n            <div class=\"form-group\">\n              <label>Password</label>\n\n              <input type=\"password\"\n                     [(ngModel)]=\"user.password\"\n                     name=\"password\"\n                     id=\"password\"\n                     #password=\"ngModel\"\n                     class=\"form-control rounded-0\"\n                     required>\n\n            </div>\n            <button type=\"button\" (click)=\"signUpUser()\" class=\"btn btn-primary btn-block\">Register</button>            \n          </form>\n        </div>\n        <!--/card-block-->\n      </div>\n      <!-- /form card login -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_service__ = __webpack_require__("../../../../../src/app/register.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, registerService) {
        this.router = router;
        this.registerService = registerService;
        // user class (../user.ts)
        this.user = {
            email: undefined,
            password: undefined,
            token: undefined
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    // register user using service
    RegisterComponent.prototype.signUpUser = function () {
        var _this = this;
        this.registerService.registerUser(this.user)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            _this.router.navigate(['/ninjas']);
            console.log(data);
        }, function (err) { return console.log(err); });
    };
    // check if email is available during registration
    RegisterComponent.prototype.checkEmail = function (event) {
        var _this = this;
        console.log(event);
        this.registerService.checkUserEmail(this.user)
            .subscribe(function (data) {
            _this.emailMessage = data.message;
            _this.available = data.available;
        }, function (err) { return console.log(err); });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__register_service__["a" /* RegisterService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/selected/selected.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper{\r\n    margin: 100px 0 80px 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/selected/selected.component.html":
/***/ (function(module, exports) {

module.exports = " <div *ngIf=\"ninja\" class=\"wrapper\">\n    <div class=\"d-flex flex-column align-items-center\">\n      <h1 class=\"selected\">Selected Ninja</h1>\n      \n          <h3>{{ ninja.name }}</h3>      \n      \n          <h4>{{ ninja.date }}</h4>\n              \n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/selected/selected.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectedComponent = /** @class */ (function () {
    function SelectedComponent(dataService) {
        this.dataService = dataService;
    }
    SelectedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentNinja.subscribe(function (data) { return _this.ninja = data; });
        console.log("Subscribed Ninja " + this.ninja);
    };
    SelectedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-selected',
            template: __webpack_require__("../../../../../src/app/selected/selected.component.html"),
            styles: [__webpack_require__("../../../../../src/app/selected/selected.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], SelectedComponent);
    return SelectedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var helper = new __WEBPACK_IMPORTED_MODULE_3__auth0_angular_jwt__["a" /* JwtHelperService */]();
var LoginService = /** @class */ (function () {
    function LoginService(_http, _router) {
        this._http = _http;
        this._router = _router;
        this._loginurl = 'http://localhost:4000/user/login';
    }
    LoginService.prototype.loginUser = function (user) {
        return this._http.post(this._loginurl, user);
    };
    LoginService.prototype.logoutUser = function () {
        localStorage.removeItem('token');
        this._router.navigate(['/login']);
    };
    LoginService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    /* isAuthenticated(): boolean {
      const token = this.getToken();
      return !this.jwtHelper.isTokenExpired(token);
    } */
    LoginService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/services/ninjas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NinjasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NinjasService = /** @class */ (function () {
    function NinjasService(http) {
        this.http = http;
    }
    NinjasService.prototype.getNinjas = function () {
        return this.http.get("http://localhost:4000/api");
    };
    NinjasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], NinjasService);
    return NinjasService;
}());



/***/ }),

/***/ "../../../../../src/app/services/single.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingleService = /** @class */ (function () {
    function SingleService(httpClient) {
        this.httpClient = httpClient;
    }
    SingleService.prototype.getSingle = function (name) {
        this.ninja = name;
        return this.httpClient.get("http://localhost:4000/api/ninja/" + this.ninja);
    };
    SingleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], SingleService);
    return SingleService;
}());



/***/ }),

/***/ "../../../../../src/app/single/single.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/single/single.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">  \n\n  <h1 class=\"display-4\">Ninja</h1>\n  <!--<button class=\"btn btn-primary mx-1\" (click)=\"showNinjas()\">Get Ninjas</button>-->\n  <!--no need for button, function in onInIt method-->\n  \n  \n      <div class=\"row justify-content-md-center\">\n        <div *ngIf=\"ninja\">\n          <h2>{{ ninja.name }} (<em>{{ ninja.rank }}</em>)</h2>          \n        </div>\n      </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/single/single.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_single_service__ = __webpack_require__("../../../../../src/app/services/single.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingleComponent = /** @class */ (function () {
    function SingleComponent(singleService) {
        this.singleService = singleService;
        this.name = 'Robert';
    }
    SingleComponent.prototype.ngOnInit = function () {
        this.showSingle(this.name);
    };
    SingleComponent.prototype.showSingle = function (name) {
        var _this = this;
        this.singleService.getSingle(name).subscribe(function (data) { _this.ninja = data; });
    };
    SingleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-single',
            template: __webpack_require__("../../../../../src/app/single/single.component.html"),
            styles: [__webpack_require__("../../../../../src/app/single/single.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_single_service__["a" /* SingleService */]])
    ], SingleComponent);
    return SingleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/techscroll/techscroll.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    margin-top:70px;\r\n    font-size:16px;\r\n  }\r\n  \r\n  h1,h2,h3,h4,h5,h6{\r\n    font-family:Poppins;\r\n  }\r\n  \r\n  p{\r\n    font-family:Roboto;\r\n  }\r\n  \r\n  .navbar-default{\r\n    background:#fff;\r\n    border:0;\r\n    font-family:Poppins;\r\n  }\r\n  \r\n  .navbar-brand{\r\n    font-size:20px;\r\n    color:#000 !important;\r\n    font-weight:bold;\r\n  }\r\n  \r\n  #showcase h1{\r\n    font-size:50px;\r\n    margin-bottom:20px;\r\n  }\r\n  \r\n  #showcase img{\r\n    width:90%;\r\n    margin-left:60px;\r\n  }\r\n  \r\n  #showcase .showcase-right{\r\n    margin-top:90px;\r\n  }\r\n  \r\n  #testimonial{\r\n    background:#f1f1f1;\r\n    padding: 50px 0 30px 0;\r\n    text-align:center;\r\n    margin-top:40px;\r\n  }\r\n  \r\n  #testimonial p{\r\n    font-size:32px;\r\n    font-family: 'Josefin Sans';\r\n    color:#000;\r\n  }\r\n  \r\n  #testimonial p.customer{\r\n    font-size:20px;\r\n    color:#666;\r\n  }\r\n  \r\n  #info1 .info-right{\r\n    margin-top:90px;\r\n  }\r\n  \r\n  #info2{\r\n    margin:20px 0 60px 0;\r\n  }\r\n  \r\n  #contact{\r\n    background:url(/assets/img/image3.png);    \r\n    padding:40px;\r\n    color:#fff;\r\n    border-top:#333 7px solid;\r\n    border-bottom:#333 7px solid;\r\n  }\r\n  \r\n  footer{\r\n    padding:30px;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/techscroll/techscroll.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title>TechScroll</title>\n    <link href=\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700%7CRoboto%7CJosefin+Sans:100,300,400,500\" rel=\"stylesheet\" type=\"text/css\">\n    <script src=\"https://unpkg.com/scrollreveal/dist/scrollreveal.min.js\"></script>\n  </head>\n  <body>\n    \n\n    <section id=\"showcase\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6\">\n            <div class=\"showcase-left\">\n              <img src=\"/assets/img/image1.jpg\">\n            </div>\n          </div>\n          <div class=\"col-md-6 col-sm-6\">\n            <div class=\"showcase-right\">\n              <h1>Hands-free help from the Google Assistant</h1>\n              <p>Google Home voice-activated speaker.consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>\n            </div>\n            <br>\n            <a class=\"btn btn-default btn-lg showcase-btn\">Read More</a>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section id=\"testimonial\">\n      <div class=\"container\">\n        <p>\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\"</p>\n        <p class=\"customer\">- John Doe</p>\n      </div>\n    </section>\n\n    <section id=\"info1\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6\">\n            <div class=\"info-left\">\n              <img src=\"/assets/img/image2.png\">\n            </div>\n          </div>\n          <div class=\"col-md-6 col-sm-6\">\n            <div class=\"info-right\">\n              <h2>Get To Know Google Home</h2>\n              <p>Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>\n              <br>\n              <a class=\"btn btn-default btn-lg\">Read More</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <hr>\n    <section id=\"info2\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6\">\n            <div class=\"info-left\">\n              <h2>Info Block One</h2>\n              <p>Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-sm-6\">\n            <div class=\"info-right\">\n              <h2>Info Block Two</h2>\n              <p>Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section id=\"contact\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-5 col-sm-5\">\n            <form>\n              <div class=\"form-group\">\n                <label>Name: </label>\n                <input class=\"form-control\" type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Name\">\n              </div>\n              <div class=\"form-group\">\n                <label>Email: </label>\n                <input class=\"form-control\" type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Email\">\n              </div>\n              <div class=\"form-group\">\n                <label>Message: </label>\n                <textarea class=\"form-control\" name=\"\" value=\"\" placeholder=\"Enter Message\"></textarea>\n              </div>\n              <button class=\"btn btn-default\">Submit</button>\n            </form>\n          </div>\n          <div class=\"col-md-7 col-sm-7\">\n\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <footer>\n      <p class=\"text-center\">TechScroll Copyright &copy; 2017</p>\n    </footer>\n\n    <script\n  src=\"https://code.jquery.com/jquery-3.2.1.js\"\n  integrity=\"sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=\"\n  crossorigin=\"anonymous\"></script>\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n    <script>\n        window.sr = ScrollReveal();\n        sr.reveal('.navbar', {\n          duration: 2000,\n          origin:'bottom'\n        });\n        sr.reveal('.showcase-left', {\n          duration: 2000,\n          origin:'top',\n          distance:'300px'\n        });\n        sr.reveal('.showcase-right', {\n          duration: 2000,\n          origin:'right',\n          distance:'300px'\n        });\n        sr.reveal('.showcase-btn', {\n          duration: 2000,\n          delay: 2000,\n          origin:'bottom'\n        });\n        sr.reveal('#testimonial div', {\n          duration: 2000,\n          origin:'bottom'\n        });\n        sr.reveal('.info-left', {\n          duration: 2000,\n          origin:'left',\n          distance:'300px',\n          viewFactor: 0.2\n        });\n        sr.reveal('.info-right', {\n          duration: 2000,\n          origin:'right',\n          distance:'300px',\n          viewFactor: 0.2\n        });\n    </script>\n\n    <script>\n    $(function() {\n      // Smooth Scrolling\n      $('a[href*=\"#\"]:not([href=\"#\"])').click(function() {\n        if (location.pathname.replace(/^\\//,'') == this.pathname.replace(/^\\//,'') && location.hostname == this.hostname) {\n          var target = $(this.hash);\n          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');\n          if (target.length) {\n            $('html, body').animate({\n              scrollTop: target.offset().top\n            }, 1000);\n            return false;\n          }\n        }\n      });\n    });\n    </script>\n  </body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/techscroll/techscroll.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechscrollComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TechscrollComponent = /** @class */ (function () {
    function TechscrollComponent() {
    }
    TechscrollComponent.prototype.ngOnInit = function () {
    };
    TechscrollComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-techscroll',
            template: __webpack_require__("../../../../../src/app/techscroll/techscroll.component.html"),
            styles: [__webpack_require__("../../../../../src/app/techscroll/techscroll.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TechscrollComponent);
    return TechscrollComponent;
}());



/***/ }),

/***/ "../../../../../src/app/userlist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserlistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserlistService = /** @class */ (function () {
    function UserlistService(http) {
        this.http = http;
        this._url = 'http://localhost:4000/user';
    }
    UserlistService.prototype.showUsers = function () {
        return this.http.get(this._url);
    };
    UserlistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserlistService);
    return UserlistService;
}());



/***/ }),

/***/ "../../../../../src/app/userlist/userlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userlist/userlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">  \n\n  <div class=\"d-flex justify-content-center\">\n    <h1 id=\"head\" class=\"display-4\">User List</h1>\n    <!--<button class=\"btn btn-primary mx-1\" (click)=\"showNinjas()\">Get Ninjas</button>-->\n    <!--no need for button, function in onInIt method-->\n  </div>\n  <hr>\n\n  <div class=\"row justify-content-md-center\">\n    <ul class=\"list-group\">\n      <!--this is a problem-->          \n      <li *ngFor=\"let user of users\" class=\"list-group-item zoom\">\n          {{ user.email }}            \n      </li>\n    </ul>\n  </div>\n  \n  \n      <!-- <div class=\"row justify-content-md-center\">\n        <ul class=\"list-group\">                    \n          <li *ngFor=\"let ninja of ninjas\" class=\"list-group-item\" (click)=\"onSelect(ninja)\">\n            <a routerLink=\"/ninja/{{ ninja.name }}\">{{ ninja.name }} - {{ ninja.rank }}</a>              \n          </li>\n        </ul>\n      </div> -->\n      \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/userlist/userlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userlist_service__ = __webpack_require__("../../../../../src/app/userlist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserlistComponent = /** @class */ (function () {
    function UserlistComponent(userlistService) {
        this.userlistService = userlistService;
    }
    UserlistComponent.prototype.ngOnInit = function () {
        this.getUserList();
    };
    UserlistComponent.prototype.getUserList = function () {
        var _this = this;
        this.userlistService.showUsers().subscribe(function (data) { _this.users = data; });
    };
    UserlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-userlist',
            template: __webpack_require__("../../../../../src/app/userlist/userlist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/userlist/userlist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__userlist_service__["a" /* UserlistService */]])
    ], UserlistComponent);
    return UserlistComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map