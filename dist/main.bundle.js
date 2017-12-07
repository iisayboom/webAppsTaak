webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/MenuBalk/menu-balk/menu-balk.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\n    display: inline-block;\n    color: #3f3e3e;\n    text-transform: uppercase;\n    padding-top: 1em;\n}\n\nnav {\n    text-align: right;\n    padding-top: 1em;\n}\n\na{\n    display: inline-block;\n    padding: 0 1em 1em 1em;\n}\n\na:hover{\n    color: #A2ED00; \n    border-bottom: 2px solid #A2ED00;\n}\n\n.inloggen {\n    border-left: 1px solid #3f3e3e;\n    text-transform: none;\n}\n\n.active{\n    color: #A2ED00; \n    border-bottom: 2px solid #A2ED00;\n}\n\nul{\n    border-bottom: 3px solid #F5F5F5;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/MenuBalk/menu-balk/menu-balk.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul>\n    <li><a routerLink=\"./AllThreads\" routerLinkActive=\"active\">Overview</a></li>\n    <li><a routerLink=\"./AddThread\" routerLinkActive=\"active\">New Thread</a></li>\n    <li *ngIf='(currentUser | async) else ingelogd'><a routerLink=\"./LogOut\" routerLinkActive=\"active\">Log Out</a></li>\n    <li *ngIf='(currentUser | async)'><a routerLink=\"./Profile\" routerLinkActive=\"active\">{{currentUser|async}}</a></li>\n  </ul>\n</nav>\n\n<ng-template #ingelogd>\n    <li><a routerLink=\"./Login\" routerLinkActive=\"active\">Login</a></li>\n    <li><a routerLink=\"./Register\" routerLinkActive=\"active\">Register</a></li>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/MenuBalk/menu-balk/menu-balk.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuBalkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuBalkComponent = (function () {
    function MenuBalkComponent(auth) {
        this.auth = auth;
    }
    MenuBalkComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(MenuBalkComponent.prototype, "currentUser", {
        get: function () {
            return this.auth.user$;
        },
        enumerable: true,
        configurable: true
    });
    return MenuBalkComponent;
}());
MenuBalkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-menu-balk',
        template: __webpack_require__("../../../../../src/app/MenuBalk/menu-balk/menu-balk.component.html"),
        styles: [__webpack_require__("../../../../../src/app/MenuBalk/menu-balk/menu-balk.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__user_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], MenuBalkComponent);

var _a;
//# sourceMappingURL=menu-balk.component.js.map

/***/ }),

/***/ "../../../../../src/app/Thread/Thread.Resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thread_data_service__ = __webpack_require__("../../../../../src/app/Thread/thread-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThreadResolver = (function () {
    function ThreadResolver(threadService) {
        this.threadService = threadService;
    }
    ThreadResolver.prototype.resolve = function (route, state) {
        return this.threadService.getThread(route.params['id']);
    };
    return ThreadResolver;
}());
ThreadResolver = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__thread_data_service__["a" /* ThreadDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__thread_data_service__["a" /* ThreadDataService */]) === "function" && _a || Object])
], ThreadResolver);

var _a;
//# sourceMappingURL=Thread.Resolver.js.map

/***/ }),

/***/ "../../../../../src/app/Thread/ThreadReply.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadReply; });
var ThreadReply = (function () {
    function ThreadReply(afzender, inhoud, id) {
        this._afzender = afzender;
        this._id = id || "0";
        this._inhoud = inhoud;
    }
    Object.defineProperty(ThreadReply.prototype, "afzender", {
        get: function () {
            return this._afzender;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreadReply.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreadReply.prototype, "inhoud", {
        get: function () {
            return this._inhoud;
        },
        enumerable: true,
        configurable: true
    });
    ThreadReply.prototype.toJSON = function () {
        return {
            id: this._id,
            afzender: this._afzender,
            inhoud: this._inhoud
        };
    };
    return ThreadReply;
}());

//# sourceMappingURL=ThreadReply.model.js.map

/***/ }),

/***/ "../../../../../src/app/Thread/new-thread/new-thread.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".eenPaarProps {\n    width: 25%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Thread/new-thread/new-thread.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"_form\" (ngSubmit)=\"onSubmit()\" class=\"ui form\">\n    <div class=\"field eenPaarProps\" id=\"titel\">\n      <label>Titel</label>\n      <textarea formControlName=\"txtTitel\"></textarea>\n    </div>\n\n    <div class=\"field eenPaarProps\" id=\"inhoud\">\n        <label>Inhoud</label>\n        <textarea formControlName=\"txtInhoud\"></textarea>\n        <div class='' *ngIf=' _form.get(\"txtInhoud\").errors?.required && _form.get(\"txtInhoud\").touched'>\n            a description is required\n          </div>\n      </div>\n\n          <button class=\"ui button\" type=\"submit\" [disabled]=\"!_form.valid\">\n              Save\n            </button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/Thread/new-thread/new-thread.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewThreadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thread_data_service__ = __webpack_require__("../../../../../src/app/Thread/thread-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__thread_model__ = __webpack_require__("../../../../../src/app/Thread/thread.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewThreadComponent = (function () {
    function NewThreadComponent(formBuilder, threadDataService, router, auth) {
        this.formBuilder = formBuilder;
        this.threadDataService = threadDataService;
        this.router = router;
        this.auth = auth;
    }
    NewThreadComponent.prototype.ngOnInit = function () {
        this._form = this.formBuilder.group({
            txtTitel: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            txtInhoud: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    };
    NewThreadComponent.prototype.onSubmit = function () {
        var _this = this;
        var thread = new __WEBPACK_IMPORTED_MODULE_4__thread_model__["a" /* Thread */](this._form.value.txtTitel, this.auth.user$.getValue(), this._form.value.txtInhoud);
        this.threadDataService.newThread(thread).subscribe(function (response) {
            _this.router.navigate(["/AllThreads/"]);
        }, function (err) { return console.log(err); });
    };
    return NewThreadComponent;
}());
NewThreadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-new-thread',
        template: __webpack_require__("../../../../../src/app/Thread/new-thread/new-thread.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Thread/new-thread/new-thread.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__thread_data_service__["a" /* ThreadDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__thread_data_service__["a" /* ThreadDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__user_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object])
], NewThreadComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=new-thread.component.js.map

/***/ }),

/***/ "../../../../../src/app/Thread/open-thread-component/open-thread-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".beetjePadding {\n    padding-left: 5%;\n    padding-right: 5%;\n}\n\n.beetjePadding2 {\n    padding-left: 14px;\n}\n\n.minHoogte {\n    min-height: 150px;\n}\n\n.minBreedte {\n    min-width: 90%;\n    margin: 0 auto;\n}\n\nul#menu li {\n    display:inline;\n}\n\n.fixPadding {\n    padding-left: 0px;\n}\n\n.marginRight {\n    margin-right: 15px;\n}\n\na{\n    display: inline-block;\n    padding: 0 1em 1em 1em;\n}\n\na:hover{\n    color: #A2ED00; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Thread/open-thread-component/open-thread-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segments beetjePadding\">\n  \n  <div class=\"ui segment\">\n    <h1>Title: {{thread?.titel}}</h1>\n    <p>Posted By: {{thread?.afzender}}</p>\n  </div>\n  <div class=\"ui segment minHoogte\">\n    <p>{{thread?.inhoud}}</p>\n  </div>\n  <div class=\"ui segment\">\n    <ul id=\"menu\" class=\"fixPadding\">\n      <li class=\"marginRight\">\n        <a class=\"active\" type=\"submit\">Reply</a>\n      </li>\n      <li class=\"marginRight\">\n        <a class=\"active\">Like</a>\n      </li>\n      <li class=\"marginRight\">\n        <a class=\"active\">Report</a>\n      </li>\n      <li>\n        <a *ngIf=\"kanVerwijderen\" (click)=\"verwijderThread()\">Delete</a>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"beetjePadding2\">\n    <h2 class=\"beetjePadding\">Reactions</h2>\n</div>\n\n\n  <app-thread-reply-component *ngFor=\"let myPost of posts\" [threadReply]=\"myPost\"></app-thread-reply-component>\n\n\n<form [formGroup]=\"_form\" (ngSubmit)=\"onSubmit()\" class=\"ui segments beetjePadding\">\n  <textarea class=\"minHoogte minBreedte\" formControlName=\"txtInhoud\">\n\n  </textarea>\n  <button class=\"ui button\" type=\"submit\" [disabled]=\"!_form.valid\">Reply</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/Thread/open-thread-component/open-thread-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenThreadComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ThreadReply_model__ = __webpack_require__("../../../../../src/app/Thread/ThreadReply.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__thread_data_service__ = __webpack_require__("../../../../../src/app/Thread/thread-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OpenThreadComponentComponent = (function () {
    function OpenThreadComponentComponent(auth, dataService, route, formBuilder, threadDataService, router) {
        this.auth = auth;
        this.dataService = dataService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.threadDataService = threadDataService;
        this.router = router;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Subject"]();
    }
    //methode met hulp van andreas
    OpenThreadComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._form = this.formBuilder.group({
            txtInhoud: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        this.route.data.takeUntil(this.unsubscribe).subscribe(function (item) { return _this._thread = item['thread']; });
        this.route.paramMap.takeUntil(this.unsubscribe).subscribe(function (pa) { return _this.dataService.getThread(pa.get('id')).subscribe(function (item) { return _this._thread = item; }); });
    };
    Object.defineProperty(OpenThreadComponentComponent.prototype, "thread", {
        get: function () {
            return this._thread;
        },
        enumerable: true,
        configurable: true
    });
    OpenThreadComponentComponent.prototype.onSubmit = function () {
        var _this = this;
        var post = new __WEBPACK_IMPORTED_MODULE_0__ThreadReply_model__["a" /* ThreadReply */](this.auth.user$.getValue(), this._form.value.txtInhoud);
        this.threadDataService.newThreadReply(post, this._thread.id).subscribe(function (response) {
            _this.router.navigate(["/AllThreads/"]);
        });
    };
    OpenThreadComponentComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next(true);
        this.unsubscribe.complete();
    };
    Object.defineProperty(OpenThreadComponentComponent.prototype, "posts", {
        get: function () {
            return this._thread.replies;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpenThreadComponentComponent.prototype, "kanVerwijderen", {
        get: function () {
            return this.auth.user$.getValue() === this.thread.afzender;
        },
        enumerable: true,
        configurable: true
    });
    OpenThreadComponentComponent.prototype.verwijderThread = function () {
        var _this = this;
        this.threadDataService.verwijderThread(this.thread.id).subscribe(function (response) {
            _this.router.navigate(["/AllThreads/"]);
        });
    };
    ;
    return OpenThreadComponentComponent;
}());
OpenThreadComponentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["o" /* Component */])({
        selector: 'app-open-thread-component',
        template: __webpack_require__("../../../../../src/app/Thread/open-thread-component/open-thread-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Thread/open-thread-component/open-thread-component.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__user_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__thread_data_service__["a" /* ThreadDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__thread_data_service__["a" /* ThreadDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__thread_data_service__["a" /* ThreadDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__thread_data_service__["a" /* ThreadDataService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _f || Object])
], OpenThreadComponentComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=open-thread-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/Thread/thread-container/thread-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".beetjePaddingOveral {\n    padding: 1%;\n}\n\n.beetjePaddingLinks {\n    padding-left: 3%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Thread/thread-container/thread-container.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"beetjePaddingLinks\">List of threads</h2>\n<div class=\"ui relaxed divided list segments beetjePaddingOveral\" *ngFor=\"let myThread of _threads\" [thread]=\"myThread\" app-thread>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Thread/thread-container/thread-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thread_data_service__ = __webpack_require__("../../../../../src/app/Thread/thread-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThreadContainerComponent = (function () {
    function ThreadContainerComponent(_threadDataService) {
        this._threadDataService = _threadDataService;
    }
    ThreadContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._threadDataService.threads.subscribe(function (threads) { return _this._threads = threads; });
    };
    Object.defineProperty(ThreadContainerComponent.prototype, "threads", {
        get: function () {
            return this._threads;
        },
        enumerable: true,
        configurable: true
    });
    return ThreadContainerComponent;
}());
ThreadContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-thread-container',
        template: __webpack_require__("../../../../../src/app/Thread/thread-container/thread-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Thread/thread-container/thread-container.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__thread_data_service__["a" /* ThreadDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__thread_data_service__["a" /* ThreadDataService */]) === "function" && _a || Object])
], ThreadContainerComponent);

var _a;
//# sourceMappingURL=thread-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/Thread/thread-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thread_model__ = __webpack_require__("../../../../../src/app/Thread/thread.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ThreadDataService = (function () {
    //private auth:AuthenticationService nog toevoegen
    function ThreadDataService(http, auth) {
        this.http = http;
        this.auth = auth;
        this._appUrl = "/API/threads";
        this._appUrlProfile = "/API/Profile/";
    }
    Object.defineProperty(ThreadDataService.prototype, "threads", {
        get: function () {
            return this.http.get(this._appUrl + "/getAll").map(function (response) { return response.json().map(function (thread) { return new __WEBPACK_IMPORTED_MODULE_1__thread_model__["a" /* Thread */](thread.titel, thread.user.username, thread.inhoud, thread._id, thread.posts); }); });
        },
        enumerable: true,
        configurable: true
    });
    ThreadDataService.prototype.personalThreads = function (name) {
        return this.http.get("" + this._appUrlProfile + name + "/getAllThreadsForUser", {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token })
        }).map(function (response) { return response.json().map(function (thread) { return new __WEBPACK_IMPORTED_MODULE_1__thread_model__["a" /* Thread */](thread.titel, thread.user.username, thread.inhoud, thread._id, thread.posts); }); });
    };
    ThreadDataService.prototype.newThread = function (t) {
        return this.http.post(this._appUrl + "/" + this.auth.user$.getValue() + "/addThread", t, {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token })
        }).map(function (response) { return response.json(); }).map(function (thread) { return new __WEBPACK_IMPORTED_MODULE_1__thread_model__["a" /* Thread */](thread.titel, thread.user.username, thread.inhoud, thread._id, thread.posts); });
    };
    ThreadDataService.prototype.getThread = function (id) {
        return this.http.get(this._appUrl + "/getThread/" + id).map(function (response) { return response.json(); }).map(function (thread) { return new __WEBPACK_IMPORTED_MODULE_1__thread_model__["a" /* Thread */](thread.titel, thread.user.username, thread.inhoud, thread._id, thread.posts); });
    };
    ThreadDataService.prototype.newThreadReply = function (tr, id) {
        return this.http.post(this._appUrl + "/" + id + "/addThreadReply", tr, {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token })
        }).map(function (response) { return response.json(); }).map(function (thread) { return new __WEBPACK_IMPORTED_MODULE_1__thread_model__["a" /* Thread */](thread.titel, thread.user.username, thread.inhoud, thread._id, thread.posts); });
    };
    ThreadDataService.prototype.verwijderThread = function (id) {
        return this.http.delete(this._appUrl + "/delete/thread/" + id, {
            //headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }).map(response => {console.log(response); return response.json()});
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token })
        });
    };
    return ThreadDataService;
}());
ThreadDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__user_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], ThreadDataService);

var _a, _b;
//# sourceMappingURL=thread-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/Thread/thread-reply-component/thread-reply-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".beetjePadding {\n    padding-left: 5%;\n    padding-right: 5%;\n}\n\n.minHoogte {\n    min-height: 150px;\n}\n\n.minBreedte {\n    min-width: 90%;\n    margin: 0 auto;\n}\n\nul#menu li {\n    display:inline;\n}\n\n.fixPadding {\n    padding-left: 0px;\n}\n\n.marginRight {\n    margin-right: 15px;\n}\n\na{\n    display: inline-block;\n    padding: 0 1em 1em 1em;\n}\n\na:hover{\n    color: #A2ED00; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Thread/thread-reply-component/thread-reply-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segments beetjePadding\">\n    \n    <div class=\"ui segment\">\n      <p>Posted By: {{threadReply?.afzender}}</p>\n    </div>\n    <div class=\"ui segment minHoogte\">\n      <p>{{threadReply?.inhoud}}</p>\n      \n    </div>\n    <div class=\"ui segment\">\n      <ul id=\"menu\" class=\"fixPadding\">\n        <li class=\"marginRight\">\n          <a class=\"active\" type=\"submit\">Reply</a>\n        </li>\n        <li class=\"marginRight\">\n          <a class=\"active\">Like</a>\n        </li>\n        <li class=\"marginRight\">\n          <a class=\"active\">Report</a>\n        </li>\n      </ul>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/Thread/thread-reply-component/thread-reply-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadReplyComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ThreadReply_model__ = __webpack_require__("../../../../../src/app/Thread/ThreadReply.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThreadReplyComponentComponent = (function () {
    function ThreadReplyComponentComponent() {
    }
    ThreadReplyComponentComponent.prototype.ngOnInit = function () {
    };
    return ThreadReplyComponentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ThreadReply_model__["a" /* ThreadReply */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ThreadReply_model__["a" /* ThreadReply */]) === "function" && _a || Object)
], ThreadReplyComponentComponent.prototype, "threadReply", void 0);
ThreadReplyComponentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-thread-reply-component',
        template: __webpack_require__("../../../../../src/app/Thread/thread-reply-component/thread-reply-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Thread/thread-reply-component/thread-reply-component.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ThreadReplyComponentComponent);

var _a;
//# sourceMappingURL=thread-reply-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/Thread/thread.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Thread; });
var Thread = (function () {
    function Thread(titel, afzender, inhoud, id, replies) {
        this._titel = titel;
        this._afzender = afzender;
        this._id = id || "0";
        this._inhoud = inhoud;
        this._replies = replies;
    }
    Object.defineProperty(Thread.prototype, "titel", {
        get: function () {
            return this._titel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Thread.prototype, "afzender", {
        get: function () {
            return this._afzender;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Thread.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Thread.prototype, "inhoud", {
        get: function () {
            return this._inhoud;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Thread.prototype, "replies", {
        get: function () {
            return this._replies;
        },
        enumerable: true,
        configurable: true
    });
    Thread.prototype.toJSON = function () {
        return {
            id: this._id,
            titel: this._titel,
            afzender: this._afzender,
            inhoud: this._inhoud,
            replies: this._replies
        };
    };
    return Thread;
}());

//# sourceMappingURL=thread.model.js.map

/***/ }),

/***/ "../../../../../src/app/Thread/thread/thread.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fototje {\n    background-image: url();\n}\n\n.paddingBeneden {\n    padding-top: 10px;\n    padding-bottom: 25px;\n}\n\n.lijntje {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: relative;\n    width: 100%;\n    margin: 1rem 0;\n    border-bottom: 1px solid rgba(34,36,38,.15);\n    box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);\n}\n\n.fixBreedte {\n    width: 100%;\n}\n\n.miniBeetjePaddingBottom {\n    padding-top: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Thread/thread/thread.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"item\">\n        <i class=\"large fototje middle aligned icon\"></i>\n        <div class=\"content fixBreedte\">\n          <a class=\"header\" [routerLink]=\"['/OpenThread', thread?.id]\">\n                Title: {{thread?.titel}} \n            <div class=\"header lijntje miniBeetjePaddingTop\">\n                ~Posted By: {{thread?.afzender}} ~\n            </div>\n            </a>\n          <div class=\"description paddingBeneden\">{{descriptionShort}}</div>\n          <div class=\"replies\">Replies: {{replies}}</div>\n        </div>\n      </div>"

/***/ }),

/***/ "../../../../../src/app/Thread/thread/thread.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__thread_data_service__ = __webpack_require__("../../../../../src/app/Thread/thread-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thread_model__ = __webpack_require__("../../../../../src/app/Thread/thread.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThreadComponent = (function () {
    function ThreadComponent(auth, threadDataService) {
        this.auth = auth;
        this.threadDataService = threadDataService;
    }
    ThreadComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ThreadComponent.prototype, "descriptionShort", {
        get: function () {
            var size = 20;
            var result = this.thread.inhoud.substring(0, 80);
            if (this.thread.inhoud.length >= size) {
                result = result + "...";
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThreadComponent.prototype, "replies", {
        get: function () {
            return this.thread.replies.length;
        },
        enumerable: true,
        configurable: true
    });
    return ThreadComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__thread_model__["a" /* Thread */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__thread_model__["a" /* Thread */]) === "function" && _a || Object)
], ThreadComponent.prototype, "thread", void 0);
ThreadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: '[app-thread]',
        template: __webpack_require__("../../../../../src/app/Thread/thread/thread.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Thread/thread/thread.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__thread_data_service__["a" /* ThreadDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__thread_data_service__["a" /* ThreadDataService */]) === "function" && _c || Object])
], ThreadComponent);

var _a, _b, _c;
//# sourceMappingURL=thread.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Thread_Thread_Resolver__ = __webpack_require__("../../../../../src/app/Thread/Thread.Resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Thread_open_thread_component_open_thread_component_component__ = __webpack_require__("../../../../../src/app/Thread/open-thread-component/open-thread-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_login_login_component__ = __webpack_require__("../../../../../src/app/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_auth_guard_service__ = __webpack_require__("../../../../../src/app/user/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Thread_thread_container_thread_container_component__ = __webpack_require__("../../../../../src/app/Thread/thread-container/thread-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Thread_new_thread_new_thread_component__ = __webpack_require__("../../../../../src/app/Thread/new-thread/new-thread.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_register_register_component__ = __webpack_require__("../../../../../src/app/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_logout_logout_component__ = __webpack_require__("../../../../../src/app/user/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Thread_thread_reply_component_thread_reply_component_component__ = __webpack_require__("../../../../../src/app/Thread/thread-reply-component/thread-reply-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_profile_profile_component__ = __webpack_require__("../../../../../src/app/user/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    {
        path: 'AllThreads',
        component: __WEBPACK_IMPORTED_MODULE_4__Thread_thread_container_thread_container_component__["a" /* ThreadContainerComponent */]
    },
    {
        path: 'AddThread',
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__user_auth_guard_service__["a" /* AuthGuardService */]],
        component: __WEBPACK_IMPORTED_MODULE_7__Thread_new_thread_new_thread_component__["a" /* NewThreadComponent */]
    },
    {
        path: 'Profile',
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__user_auth_guard_service__["a" /* AuthGuardService */]],
        component: __WEBPACK_IMPORTED_MODULE_11__user_profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: 'Register',
        component: __WEBPACK_IMPORTED_MODULE_8__user_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'LogOut',
        component: __WEBPACK_IMPORTED_MODULE_9__user_logout_logout_component__["a" /* LogoutComponent */]
    },
    {
        path: 'Login',
        component: __WEBPACK_IMPORTED_MODULE_2__user_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'Reply',
        component: __WEBPACK_IMPORTED_MODULE_10__Thread_thread_reply_component_thread_reply_component_component__["a" /* ThreadReplyComponentComponent */]
    },
    {
        path: 'OpenThread/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__Thread_open_thread_component_open_thread_component_component__["a" /* OpenThreadComponentComponent */],
        resolve: {
            thread: __WEBPACK_IMPORTED_MODULE_0__Thread_Thread_Resolver__["a" /* ThreadResolver */]
        }
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__Thread_thread_container_thread_container_component__["a" /* ThreadContainerComponent */],
        pathMatch: 'full'
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_4__Thread_thread_container_thread_container_component__["a" /* ThreadContainerComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(appRoutes
            /* { enableTracing: true} */
            )
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

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

module.exports = "<app-menu-balk></app-menu-balk>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Thread_thread_data_service__ = __webpack_require__("../../../../../src/app/Thread/thread-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__Thread_thread_data_service__["a" /* ThreadDataService */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Thread_thread_reply_component_thread_reply_component_component__ = __webpack_require__("../../../../../src/app/Thread/thread-reply-component/thread-reply-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_auth_guard_service__ = __webpack_require__("../../../../../src/app/user/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Thread_thread_thread_component__ = __webpack_require__("../../../../../src/app/Thread/thread/thread.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Thread_thread_container_thread_container_component__ = __webpack_require__("../../../../../src/app/Thread/thread-container/thread-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__MenuBalk_menu_balk_menu_balk_component__ = __webpack_require__("../../../../../src/app/MenuBalk/menu-balk/menu-balk.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Thread_new_thread_new_thread_component__ = __webpack_require__("../../../../../src/app/Thread/new-thread/new-thread.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_semantic_ui__ = __webpack_require__("../../../../ng2-semantic-ui/dist/public.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Thread_thread_data_service__ = __webpack_require__("../../../../../src/app/Thread/thread-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Thread_open_thread_component_open_thread_component_component__ = __webpack_require__("../../../../../src/app/Thread/open-thread-component/open-thread-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Thread_Thread_Resolver__ = __webpack_require__("../../../../../src/app/Thread/Thread.Resolver.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__Thread_thread_thread_component__["a" /* ThreadComponent */],
            __WEBPACK_IMPORTED_MODULE_9__Thread_thread_container_thread_container_component__["a" /* ThreadContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_10__MenuBalk_menu_balk_menu_balk_component__["a" /* MenuBalkComponent */],
            __WEBPACK_IMPORTED_MODULE_12__Thread_new_thread_new_thread_component__["a" /* NewThreadComponent */],
            __WEBPACK_IMPORTED_MODULE_16__Thread_open_thread_component_open_thread_component_component__["a" /* OpenThreadComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_1__Thread_thread_reply_component_thread_reply_component_component__["a" /* ThreadReplyComponentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_semantic_ui__["a" /* SuiModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__user_user_module__["a" /* UserModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__Thread_thread_data_service__["a" /* ThreadDataService */], __WEBPACK_IMPORTED_MODULE_15__user_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__user_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_17__Thread_Thread_Resolver__["a" /* ThreadResolver */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.authService.user$.getValue()) {
            return true;
        }
        // Retain the attempted URL for redirection
        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this._url = '/API/users';
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this._user$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"](currentUser && currentUser.username);
    }
    Object.defineProperty(AuthenticationService.prototype, "user$", {
        get: function () {
            return this._user$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "token", {
        get: function () {
            return JSON.parse(localStorage.getItem('currentUser')).token;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this._url + "/login", { username: username, password: password })
            .map(function (res) { return res.json(); }).map(function (res) {
            var token = res.token;
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                _this._user$.next(username);
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        if (this.user$.getValue()) {
            localStorage.removeItem('currentUser');
            setTimeout(function () { return _this._user$.next(null); });
        }
    };
    AuthenticationService.prototype.register = function (username, password) {
        var _this = this;
        return this.http.post(this._url + "/register", { username: username, password: password })
            .map(function (res) { return res.json(); }).map(function (res) {
            var token = res.token;
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: res.token }));
                _this._user$.next(username);
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthenticationService.prototype.checkUserNameAvailability = function (username) {
        return this.http.post(this._url + "/checkusername", { username: username }).map(function (res) { return res.json(); })
            .map(function (item) {
            if (item.username === 'alreadyexists') {
                return false;
            }
            else {
                return true;
            }
        });
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]='user' (ngSubmit)='onSubmit()' class=\"ui large form segment\">\n    <h3 class=\"ui header\">login</h3>\n    <div class=\"field\">\n      <label for=\"username\">username:</label>\n      <input type=\"text\" id=\"username\" formControlName='username'>\n    </div>\n    <div class=\"field\">\n      <label for=\"password\">password:</label>\n      <input type=\"password\" id=\"password\" formControlName='password'>\n    </div>\n    <button type='submit' [disabled]='!user.valid' class=\"ui positive right floated button\">log in</button>\n    <div *ngIf='errorMsg' class='ui red label'>{{errorMsg}}</div>\n  </form>\n  <a class='item' routerLink=\"/register\" >register</a>"

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function passwordValidator() {
    return function (control) {
        return control.value.length < 12 ? { 'passwordTooShort': { value: control.value.length } } : null;
    };
}
var LoginComponent = (function () {
    function LoginComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.user.value.username, this.user.value.password).subscribe(function (val) {
            if (val) {
                if (_this.authService.redirectUrl) {
                    _this.router.navigateByUrl(_this.authService.redirectUrl);
                    _this.authService.redirectUrl = undefined;
                }
                else {
                    _this.router.navigate(['/AllThreads/']);
                }
            }
        }, function (err) { return _this.errorMsg = err.json().message; });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "you are succesfully logged out"

/***/ }),

/***/ "../../../../../src/app/user/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.authService.logout();
        this.router.navigate(['/Login']);
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-logout',
        template: __webpack_require__("../../../../../src/app/user/logout/logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/logout/logout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LogoutComponent);

var _a, _b;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/profile-container/profile-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fototje {\n    background-image: url();\n}\n\n.paddingBeneden {\n    padding-top: 10px;\n    padding-bottom: 25px;\n}\n\n.lijntje {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: relative;\n    width: 100%;\n    margin: 1rem 0;\n    border-bottom: 1px solid rgba(34,36,38,.15);\n    box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);\n}\n\n.fixBreedte {\n    width: 100%;\n}\n\n.miniBeetjePaddingBottom {\n    padding-top: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/profile-container/profile-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"item\">\n  <i class=\"large fototje middle aligned icon\"></i>\n  <div class=\"content fixBreedte\">\n    <a class=\"header\" [routerLink]=\"['/OpenThread', thread?.id]\">\n          Title: {{thread?.titel}} \n      <div class=\"header lijntje miniBeetjePaddingTop\">\n          ~Posted By: {{thread?.afzender}} ~\n      </div>\n      </a>\n    <div class=\"description paddingBeneden\">{{descriptionShort}}</div>\n    <div class=\"replies\">Replies: {{replies}}</div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/profile-container/profile-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Thread_thread_model__ = __webpack_require__("../../../../../src/app/Thread/thread.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Thread_thread_data_service__ = __webpack_require__("../../../../../src/app/Thread/thread-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileContainerComponent = (function () {
    function ProfileContainerComponent(auth, threadDataService) {
        this.auth = auth;
        this.threadDataService = threadDataService;
    }
    ProfileContainerComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ProfileContainerComponent.prototype, "descriptionShort", {
        get: function () {
            var size = 20;
            var result = this.thread.inhoud.substring(0, 80);
            if (this.thread.inhoud.length >= size) {
                result = result + "...";
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileContainerComponent.prototype, "replies", {
        get: function () {
            return this.thread.replies.length;
        },
        enumerable: true,
        configurable: true
    });
    return ProfileContainerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Thread_thread_model__["a" /* Thread */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Thread_thread_model__["a" /* Thread */]) === "function" && _a || Object)
], ProfileContainerComponent.prototype, "thread", void 0);
ProfileContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: '[app-profile-container]',
        template: __webpack_require__("../../../../../src/app/user/profile-container/profile-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/profile-container/profile-container.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Thread_thread_data_service__["a" /* ThreadDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Thread_thread_data_service__["a" /* ThreadDataService */]) === "function" && _c || Object])
], ProfileContainerComponent);

var _a, _b, _c;
//# sourceMappingURL=profile-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fototje {\n    background-image: url();\n}\n\n.paddingBeneden {\n    padding-top: 10px;\n    padding-bottom: 25px;\n}\n\n.lijntje {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: relative;\n    width: 100%;\n    margin: 1rem 0;\n    border-bottom: 1px solid rgba(34,36,38,.15);\n    box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);\n}\n\n.fixBreedte {\n    width: 100%;\n}\n\n.miniBeetjePaddingBottom {\n    padding-top: 5px;\n}\n\n.beetjePaddingOveral {\n    padding: 1%;\n}\n\n.beetjePaddingLinks {\n    padding-left: 1.5%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"beetjePaddingLinks\">Hello {{showUser}} !!</h1>\n\n<ul>\n    <li>\n        Aantal persoonlijk gemaakte threads: {{threads?.length}}\n    </li>\n</ul>\n\n<h2 class=\"beetjePaddingLinks\">Personal Started Threads</h2>\n<div class=\"ui relaxed divided list segments beetjePaddingOveral\" *ngFor=\"let myThread of threads\" [thread]=\"myThread\" app-profile-container>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Thread_thread_data_service__ = __webpack_require__("../../../../../src/app/Thread/thread-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(_threadDataService, auth) {
        this._threadDataService = _threadDataService;
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._threadDataService.personalThreads(this.auth.user$.getValue()).subscribe(function (threads) { return _this._threads = threads; });
    };
    Object.defineProperty(ProfileComponent.prototype, "showUser", {
        get: function () {
            return this.auth.user$.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "threads", {
        get: function () {
            return this._threads;
        },
        enumerable: true,
        configurable: true
    });
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__Thread_thread_data_service__["a" /* ThreadDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Thread_thread_data_service__["a" /* ThreadDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]='user' (ngSubmit)='onSubmit()' class=\"ui large form segment\">\n        <h3 class=\"ui header\">register new user</h3>\n        <div class=\"field\">\n          <label for=\"username\">username:</label>\n          <input type=\"text\" id=\"username\" formControlName='username'>\n          <div class='ui pointing red basic label' *ngIf=' user.get(\"username\").errors?.required && user.get(\"username\").touched'>\n            a username is required\n          </div>\n          <div class='ui pointing red basic label' *ngIf='user.get(\"username\").errors?.minlength && user.get(\"username\").touched'>\n            the username should be at least {{user.get(\"username\").errors?.minlength.requiredLength }} letters\n          </div>\n          <div class='ui pointing red basic label' *ngIf='user.get(\"username\").errors?.userAlreadyExists && user.get(\"username\").touched'>\n            a user with that name already exists\n          </div>\n        </div>\n        <div formGroupName='passwordGroup'>\n          <div class=\"field\">\n            <label for=\"password\">password:</label>\n            <input type=\"password\" id=\"password\" formControlName='password'>\n            <div class='ui pointing red basic label' *ngIf=' passwordControl.errors?.passwordTooShort && passwordControl.touched'>\n              password too short, please use at least {{passwordControl.errors?.passwordTooShort.requiredLength}} letters (got {{passwordControl.errors?.passwordTooShort.actualLength}})\n            </div>\n          </div>\n          <div class=\"field\">\n            <label for=\"confirmpassword\">confirm password:</label>\n            <input type=\"password\" id=\"confirmpassword\" formControlName='confirmPassword'>\n          </div>\n          <div class='ui pointing red basic label' *ngIf=' user.get(\"passwordGroup\").errors?.passwordsDiffer && user.get(\"passwordGroup\").get(\"confirmPassword\").touched  && user.get(\"passwordGroup\").get(\"password\").touched'>\n           the two passwords should be the same\n          </div>\n        </div>\n        <button type='submit' [disabled]='!user.valid' class=\"ui positive right floated button\">register</button>\n      </form>"

/***/ }),

/***/ "../../../../../src/app/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function passwordValidator(length) {
    return function (control) {
        return control.value.length < length ? { 'passwordTooShort': { requiredLength: length, actualLength: control.value.length } } : null;
    };
}
function comparePasswords(control) {
    var password = control.get('password');
    var confirmPassword = control.get('confirmPassword');
    return password.value === confirmPassword.value ? null : { 'passwordsDiffer': true };
}
var RegisterComponent = (function () {
    function RegisterComponent(authenticationService, router, fb) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.fb = fb;
    }
    Object.defineProperty(RegisterComponent.prototype, "passwordControl", {
        get: function () {
            return this.user.get('passwordGroup').get('password');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(4)], this.serverSideValidateUsername()],
            passwordGroup: this.fb.group({
                password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, passwordValidator(12)]],
                confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
            }, { validator: comparePasswords })
        });
    };
    RegisterComponent.prototype.serverSideValidateUsername = function () {
        var _this = this;
        return function (control) {
            return _this.authenticationService.checkUserNameAvailability(control.value).map(function (available) {
                if (available) {
                    return null;
                }
                return { userAlreadyExists: true };
            });
        };
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authenticationService.register(this.user.value.username, this.passwordControl.value).subscribe(function (val) {
            if (val) {
                _this.router.navigate(['/AllThreads/']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__("../../../../../src/app/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logout_logout_component__ = __webpack_require__("../../../../../src/app/user/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__("../../../../../src/app/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_container_profile_container_component__ = __webpack_require__("../../../../../src/app/user/profile-container/profile-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_7__logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */] }
];
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_7__logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_9__profile_container_profile_container_component__["a" /* ProfileContainerComponent */]
        ],
        providers: [],
        exports: []
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map