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

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__questions_questions_service__ = __webpack_require__("../../../../../src/app/questions/questions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__md_components_module__ = __webpack_require__("../../../../../src/md-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__result_resultholder_service__ = __webpack_require__("../../../../../src/app/result/resultholder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_backend_backend_service__ = __webpack_require__("../../../../../src/app/general/backend/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__timer_timer_component__ = __webpack_require__("../../../../../src/app/timer/timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__timer_timer_service__ = __webpack_require__("../../../../../src/app/timer/timer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__question_question_component__ = __webpack_require__("../../../../../src/app/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__questions_questions_component__ = __webpack_require__("../../../../../src/app/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__result_result_component__ = __webpack_require__("../../../../../src/app/result/result.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__question_question_component__["a" /* QuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_16__questions_questions_component__["a" /* QuestionsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__result_result_component__["a" /* ResultComponent */],
                __WEBPACK_IMPORTED_MODULE_5__timer_timer_component__["a" /* TimerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__md_components_module__["a" /* MdComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["c" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */] },
                    {
                        path: 'question', component: __WEBPACK_IMPORTED_MODULE_16__questions_questions_component__["a" /* QuestionsComponent */], children: [
                            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_15__question_question_component__["a" /* QuestionComponent */] }
                        ]
                    },
                    { path: 'result', component: __WEBPACK_IMPORTED_MODULE_18__result_result_component__["a" /* ResultComponent */] },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_0__questions_questions_service__["a" /* QuestionsService */],
                __WEBPACK_IMPORTED_MODULE_6__timer_timer_service__["a" /* TimerService */],
                __WEBPACK_IMPORTED_MODULE_4__general_backend_backend_service__["a" /* BackendService */],
                __WEBPACK_IMPORTED_MODULE_5__timer_timer_component__["a" /* TimerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__result_resultholder_service__["a" /* ResultholderService */],
                __WEBPACK_IMPORTED_MODULE_1__home_home_service__["a" /* HomeService */],
                { provide: __WEBPACK_IMPORTED_MODULE_12__angular_material__["a" /* MATERIAL_COMPATIBILITY_MODE */], useValue: true }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/general/backend/backend.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_Consts__ = __webpack_require__("../../../../../src/app/general/utils/Consts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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



var BackendService = /** @class */ (function () {
    function BackendService(http) {
        this.http = http;
    }
    BackendService.prototype.get = function (uri, params) {
        return this.http
            .get(this.getUri(uri), this.createParamsObject(params))
            .map(function (resp) { return resp.json(); });
    };
    BackendService.prototype.post = function (uri, body, params) {
        return this.http
            .post(this.getUri(uri), body, this.createParamsObject(params))
            .map(function (resp) { return resp.json(); });
    };
    BackendService.prototype.createParamsObject = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        // headers.append(Consts.Headers.Key.ACCEPT, Consts.Header.Value.APPLICATION_JSON);
        // headers.append(Consts.Header.Key.CONTENT_TYPE, Consts.Header.Value.APPLICATION_JSON);
        // headers.append(Consts.Header.Key.TOKEN, this.storageService.getItem(Consts.Storage.Key.TOKEN));
        return { params: params, headers: headers };
    };
    BackendService.prototype.getUri = function (uri) {
        return __WEBPACK_IMPORTED_MODULE_0__utils_Consts__["a" /* Consts */].BackendMapping.INDEX + uri;
    };
    BackendService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], BackendService);
    return BackendService;
    var _a;
}());

//# sourceMappingURL=backend.service.js.map

/***/ }),

/***/ "../../../../../src/app/general/utils/Consts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Consts; });
var Consts = /** @class */ (function () {
    function Consts() {
    }
    Consts.Headers = (_a = /** @class */ (function () {
            function class_1() {
            }
            return class_1;
        }()),
        _a.Key = (_b = /** @class */ (function () {
                function class_2() {
                }
                return class_2;
            }()),
            _b.ACCEPT = 'Accept',
            _b.CONTENT_TYPE = 'Content-Type',
            _b),
        _a.Value = (_c = /** @class */ (function () {
                function class_3() {
                }
                return class_3;
            }()),
            _c.APPLICATION_JSON = 'application/json',
            _c),
        _a);
    Consts.BackendMapping = (_d = /** @class */ (function () {
            function class_4() {
            }
            return class_4;
        }()),
        _d.INDEX = '/api',
        _d.Timer = (_e = /** @class */ (function () {
                function class_5() {
                }
                return class_5;
            }()),
            _e.START = '/startTimer',
            _e.STOP = '/stopTimer',
            _e.TIME_ELAPSED = '/timeElapsed',
            _e.GET_TIME = '/getTime',
            _e.GET_STATUS = '/timerStatus',
            _e),
        _d.Answers = (_f = /** @class */ (function () {
                function class_6() {
                }
                return class_6;
            }()),
            _f.GET_ANSWERS = "/answers",
            _f.CHECK_ANSWERS = "/validateAnswers",
            _f),
        _d.Checkers = (_g = /** @class */ (function () {
                function class_7() {
                }
                return class_7;
            }()),
            _g.GET_WAS_STARTED = "/getTimerStarted",
            _g),
        _d);
    return Consts;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=Consts.js.map

/***/ }),

/***/ "../../../../../src/app/general/utils/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return questionPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return resultPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return homePath; });
var questionPath = '/question';
var resultPath = '/result';
var homePath = '';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"1\" rowHeight=\"6:1\">\r\n    <mat-grid-tile><img src=\"http://localhost:4200/img/sollan.png\"></mat-grid-tile>\r\n    <mat-grid-tile>\r\n        <p>This test contains 40 questions. You have 40 minutes. Good luck!</p>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile><button (click)=\"start()\" color=\"accent\" mat-raised-button matDialogClose=\"yes\">Start</button></mat-grid-tile>\r\n</mat-grid-list>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer_timer_service__ = __webpack_require__("../../../../../src/app/timer/timer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__general_utils_constants__ = __webpack_require__("../../../../../src/app/general/utils/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, homeService, timerService) {
        this.router = router;
        this.homeService = homeService;
        this.timerService = timerService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        localStorage.clear();
    };
    HomeComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (sessionStorage.getItem('wasStarted')) {
            this.homeService.getWasStarted()
                .subscribe(function (started) {
                _this.checker = started;
                console.log(started);
            });
            if (!this.checker) {
                this.router.navigate([__WEBPACK_IMPORTED_MODULE_2__general_utils_constants__["b" /* questionPath */], 1]);
            }
            else {
                this.router.navigate([__WEBPACK_IMPORTED_MODULE_2__general_utils_constants__["a" /* homePath */]]);
                sessionStorage.clear();
            }
        }
    };
    HomeComponent.prototype.start = function () {
        this.timerService.startTimer();
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_2__general_utils_constants__["b" /* questionPath */], 1]);
        localStorage.setItem('currentQuestionId', '1');
        sessionStorage.setItem('wasStarted', 'yes');
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
            selector: 'home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__timer_timer_service__["a" /* TimerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__timer_timer_service__["a" /* TimerService */]) === "function" && _c || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__general_backend_backend_service__ = __webpack_require__("../../../../../src/app/general/backend/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_utils_Consts__ = __webpack_require__("../../../../../src/app/general/utils/Consts.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeService = /** @class */ (function () {
    function HomeService(backendService, router) {
        this.backendService = backendService;
        this.router = router;
    }
    HomeService.prototype.getWasStarted = function () {
        return this.backendService.get(__WEBPACK_IMPORTED_MODULE_3__general_utils_Consts__["a" /* Consts */].BackendMapping.Checkers.GET_WAS_STARTED)
            .map(function (response) {
            if (response.ok) {
                console.log(response.item);
                return response.item;
            }
            else {
                return 0;
            }
        });
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__general_backend_backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__general_backend_backend_service__["a" /* BackendService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], HomeService);
    return HomeService;
    var _a, _b;
}());

//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ "../../../../../src/app/question/question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-grid-tile{\r\n  color: white;\r\n}\r\n\r\n.example-radio-group {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    \r\n}\r\n  \r\n.example-radio-button {\r\n    margin: 5px;\r\n    border-color: white;\r\n}\r\n\r\n.answers-border {\r\n  background-color: #0d47a1;\r\n}\r\n\r\n.scrollable\r\n{\r\n  overflow: auto;\r\n  max-width: 1250px;  \r\n  max-height: 850px;\r\n}  \r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"8\" rowHeight=\"100px\">\r\n  <mat-grid-tile colspan=\"1\" rowspan=\"8\">\r\n    <button (click)=\"firstQuestion()\" color=\"accent\" mat-fab>\r\n      <mat-icon>first_page</mat-icon>\r\n    </button>\r\n    <button color=\"accent\" (click)=\"previousQuestion()\" mat-fab>\r\n      <mat-icon>chevron_left</mat-icon>\r\n    </button>\r\n  </mat-grid-tile>\r\n  <mat-grid-tile colspan=\"6\" rowspan=\"8\" *ngIf=\"answersLoaded\">\r\n    <div class=\"scrollable\">\r\n      <img src=\"{{images[questionId-1]}}\">\r\n    </div>\r\n  </mat-grid-tile>\r\n  <mat-grid-tile colspan=\"1\" rowspan=\"8\">\r\n    <button color=\"accent\" (click)=\"nextQuestion()\" mat-fab>\r\n      <mat-icon>chevron_right</mat-icon>\r\n    </button>\r\n    <button (click)=\"lastQuestion()\" color=\"accent\" mat-fab>\r\n      <mat-icon>last_page</mat-icon>\r\n    </button>\r\n  </mat-grid-tile>\r\n  \r\n    <mat-grid-tile colspan=\"8\" rowspan=\"2\" class=\"answers-border\">\r\n      <mat-radio-group [(ngModel)]=\"currentAnswerId\" *ngIf=\"answersLoaded\" name=\"group\" class=\"example-radio-group\">\r\n        <mat-radio-button class=\"example-radio-button\" *ngFor=\"let answer of answers\" [value]=\"answer.id\" #radio (change)=\"addAnswer(radio)\">\r\n          {{answer.content}}\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </mat-grid-tile>\r\n</mat-grid-list>"

/***/ }),

/***/ "../../../../../src/app/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__questions_questions_service__ = __webpack_require__("../../../../../src/app/questions/questions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timer_timer_service__ = __webpack_require__("../../../../../src/app/timer/timer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_utils_constants__ = __webpack_require__("../../../../../src/app/general/utils/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(route, questionsService, router, timerService, homeService) {
        this.route = route;
        this.questionsService = questionsService;
        this.router = router;
        this.timerService = timerService;
        this.homeService = homeService;
        this.questions = [];
        this.answers = [];
        this.currentAnswers = [];
        this.images = [];
        this.questionsLoaded = false;
        this.answersLoaded = false;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.images = this.questionsService.getImages();
        this.route.params
            .subscribe(function (params) {
            _this.questionId = +params['id'];
        });
        this.currentAnswers = JSON.parse(localStorage.getItem('answers'));
        if (!this.currentAnswers)
            this.currentAnswers = [];
        this.currentAnswerId = this.findAnswerById();
        this.storeCurrentQuestionId();
    };
    QuestionComponent.prototype.ngDoCheck = function () {
        if (!this.answers.length)
            this.loadAnswers();
        if (!sessionStorage.getItem('wasStarted'))
            this.router.navigate([__WEBPACK_IMPORTED_MODULE_3__general_utils_constants__["a" /* homePath */]]);
    };
    QuestionComponent.prototype.nextQuestion = function () {
        if (this.questionId < 40) {
            this.questionId++;
            this.currentAnswerId = this.findAnswerById();
        }
        this.loadAnswers();
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_3__general_utils_constants__["b" /* questionPath */], this.questionId]);
        this.storeCurrentQuestionId();
    };
    QuestionComponent.prototype.previousQuestion = function () {
        if (this.questionId > 1) {
            this.questionId--;
            this.currentAnswerId = this.findAnswerById();
        }
        this.loadAnswers();
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_3__general_utils_constants__["b" /* questionPath */], this.questionId]);
        this.storeCurrentQuestionId();
    };
    QuestionComponent.prototype.firstQuestion = function () {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_3__general_utils_constants__["b" /* questionPath */], 1]);
        this.questionId = 1;
        this.storeCurrentQuestionId();
        this.loadAnswers();
    };
    QuestionComponent.prototype.lastQuestion = function () {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_3__general_utils_constants__["b" /* questionPath */], 40]);
        this.questionId = 40;
        this.storeCurrentQuestionId();
        this.loadAnswers();
    };
    QuestionComponent.prototype.addAnswer = function (radio) {
        var newAnswer = {
            id: this.questionId,
            value: radio.value
        };
        var found = this.currentAnswers.find(function (a) {
            return a.id === newAnswer.id;
        });
        if (found) {
            found.value = newAnswer.value;
        }
        else {
            this.currentAnswers.push(newAnswer);
        }
        localStorage.setItem('answers', JSON.stringify(this.currentAnswers));
    };
    QuestionComponent.prototype.findAnswerById = function () {
        var _this = this;
        var found = this.currentAnswers.find(function (ans) {
            return ans.id === _this.questionId;
        });
        return found ? found.value : null;
    };
    QuestionComponent.prototype.storeCurrentQuestionId = function () {
        localStorage.setItem('currentQuestionId', this.questionId);
    };
    QuestionComponent.prototype.loadAnswers = function () {
        var _this = this;
        this.questionsService.getAnswers({ "questionId": this.questionId })
            .subscribe(function (answers) {
            _this.answers = answers;
            _this.answersLoaded = true;
        });
    };
    QuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["o" /* Component */])({
            selector: 'question',
            template: __webpack_require__("../../../../../src/app/question/question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/question/question.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__questions_questions_service__["a" /* QuestionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__questions_questions_service__["a" /* QuestionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__timer_timer_service__["a" /* TimerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__timer_timer_service__["a" /* TimerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__home_home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_home_service__["a" /* HomeService */]) === "function" && _e || Object])
    ], QuestionComponent);
    return QuestionComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=question.component.js.map

/***/ }),

/***/ "../../../../../src/app/questions/questions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-icon {\r\n    padding: 0 14px;\r\n}\r\n  \r\n.example-spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}\r\n\r\n.example-input-field {\r\n    width: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questions/questions.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <span>Question {{questionId}}</span>\r\n    <span></span>\r\n    <span class=\"example-spacer\"></span>\r\n    <span></span>\r\n    <span>\r\n        <timer></timer>\r\n    </span>\r\n    <mat-icon class=\"example-icon\">schedule</mat-icon>\r\n    <button (click)=\"finish()\" color=\"accent\" mat-raised-button>Finish</button>\r\n</mat-toolbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/questions/questions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__questions_service__ = __webpack_require__("../../../../../src/app/questions/questions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timer_timer_service__ = __webpack_require__("../../../../../src/app/timer/timer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__general_utils_constants__ = __webpack_require__("../../../../../src/app/general/utils/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__result_resultholder_service__ = __webpack_require__("../../../../../src/app/result/resultholder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(route, router, timerService, questionsService, holder) {
        this.route = route;
        this.router = router;
        this.timerService = timerService;
        this.questionsService = questionsService;
        this.holder = holder;
        this.result = {};
    }
    QuestionsComponent.prototype.ngOnInit = function () { };
    QuestionsComponent.prototype.ngDoCheck = function () {
        this.questionId = localStorage.getItem('currentQuestionId');
    };
    QuestionsComponent.prototype.finish = function () {
        var _this = this;
        if (this.answers = JSON.parse(localStorage.getItem('answers')))
            this.questionsService.getResult(this.answers)
                .subscribe(function (result) {
                _this.result = result;
                _this.holder.holdResult(_this.result);
                _this.router.navigate([__WEBPACK_IMPORTED_MODULE_2__general_utils_constants__["c" /* resultPath */]]);
                _this.timerService.stopTimer();
                sessionStorage.setItem('wasStarted', 'no');
            });
        else
            alert('Nie zaznaczono żadnej odpowiedzi!');
    };
    QuestionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["o" /* Component */])({
            selector: 'questions',
            template: __webpack_require__("../../../../../src/app/questions/questions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/questions/questions.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__timer_timer_service__["a" /* TimerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__timer_timer_service__["a" /* TimerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__questions_service__["a" /* QuestionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__questions_service__["a" /* QuestionsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__result_resultholder_service__["a" /* ResultholderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__result_resultholder_service__["a" /* ResultholderService */]) === "function" && _e || Object])
    ], QuestionsComponent);
    return QuestionsComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=questions.component.js.map

/***/ }),

/***/ "../../../../../src/app/questions/questions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__general_utils_Consts__ = __webpack_require__("../../../../../src/app/general/utils/Consts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__general_backend_backend_service__ = __webpack_require__("../../../../../src/app/general/backend/backend.service.ts");
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




var QuestionsService = /** @class */ (function () {
    function QuestionsService(backendService) {
        this.backendService = backendService;
    }
    QuestionsService.prototype.getAnswers = function (questionId) {
        return this.backendService.get(__WEBPACK_IMPORTED_MODULE_0__general_utils_Consts__["a" /* Consts */].BackendMapping.Answers.GET_ANSWERS, questionId).map(function (response) {
            if (response.ok) {
                return response.items;
            }
            else {
                return 0;
            }
        });
    };
    QuestionsService.prototype.getResult = function (answers) {
        return this.backendService.post(__WEBPACK_IMPORTED_MODULE_0__general_utils_Consts__["a" /* Consts */].BackendMapping.Answers.CHECK_ANSWERS, answers).map(function (response) {
            if (response.ok) {
                return response.item;
            }
            else {
                return 0;
            }
        });
    };
    QuestionsService.prototype.getImages = function () {
        var images = [];
        for (var x = 1; x <= 40; x++) {
            images.push('img/q' + x + '.jpg');
        }
        return images;
    };
    QuestionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__general_backend_backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__general_backend_backend_service__["a" /* BackendService */]) === "function" && _a || Object])
    ], QuestionsService);
    return QuestionsService;
    var _a;
}());

//# sourceMappingURL=questions.service.js.map

/***/ }),

/***/ "../../../../../src/app/result/result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    max-height: 500px;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}\r\n\r\n.goodanswer{\r\n  color: green;\r\n}\r\n\r\n.wronganswer{\r\n  color: red;\r\n}\r\n\r\nmat-grid-tile{\r\n  background-color: lightblue;\r\n}\r\n\r\nmat-list-item{\r\n  text-align: center;\r\n  padding-top: 1px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <span>Points: {{points}} / 40</span>\r\n    <span class=\"example-spacer\"></span>\r\n    <span>{{percent | percent}}</span>\r\n</mat-toolbar>\r\n<!-- <mat-grid-list cols=\"2\" rowHeight=\"4:1\">\r\n    <mat-grid-tile *ngFor=\"let answer of answers\">\r\n     <b>Question  {{answer.questionId}}</b>\r\n        <mat-icon class=\"goodanswer\" *ngIf=\"answer.correct\">check_box</mat-icon>\r\n        <mat-icon class=\"wronganswer\" *ngIf=\"!answer.correct\" >indeterminate_check_box</mat-icon>\r\n      </mat-grid-tile>\r\n  </mat-grid-list> -->\r\n\r\n<mat-list>\r\n    <mat-list-item *ngFor=\"let answer of answers\">\r\n        <mat-icon mat-list-icon class=\"goodanswer\" *ngIf=\"answer.correct\">check_box</mat-icon>\r\n        <mat-icon mat-list-icon class=\"wronganswer\" *ngIf=\"!answer.correct\" >indeterminate_check_box</mat-icon>\r\n        <p mat-line>Question {{answer.questionId}}</p>\r\n    </mat-list-item>\r\n</mat-list>\r\n"

/***/ }),

/***/ "../../../../../src/app/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__general_utils_constants__ = __webpack_require__("../../../../../src/app/general/utils/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timer_timer_service__ = __webpack_require__("../../../../../src/app/timer/timer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResultComponent = /** @class */ (function () {
    function ResultComponent(route, router, timerService) {
        this.route = route;
        this.router = router;
        this.timerService = timerService;
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.questionId = localStorage.getItem('currentQuestionId');
        if (sessionStorage.getItem('wasStarted') == 'yes') {
            this.router.navigate([__WEBPACK_IMPORTED_MODULE_0__general_utils_constants__["b" /* questionPath */], this.questionId]);
        }
        else if (!sessionStorage.getItem('wasStarted')) {
            this.router.navigate([__WEBPACK_IMPORTED_MODULE_0__general_utils_constants__["a" /* homePath */]]);
        }
        this.points = localStorage.getItem('points');
        this.answers = JSON.parse(localStorage.getItem('final'));
        this.percent = this.points / 40;
    };
    ResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
            selector: 'app-result',
            template: __webpack_require__("../../../../../src/app/result/result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/result/result.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__timer_timer_service__["a" /* TimerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__timer_timer_service__["a" /* TimerService */]) === "function" && _c || Object])
    ], ResultComponent);
    return ResultComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=result.component.js.map

/***/ }),

/***/ "../../../../../src/app/result/resultholder.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultholderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultholderService = /** @class */ (function () {
    function ResultholderService() {
    }
    ResultholderService.prototype.holdResult = function (result) {
        this._answers = result.results;
        this._points = result.points;
        localStorage.setItem('final', JSON.stringify(this._answers));
        localStorage.setItem('points', this._points);
    };
    Object.defineProperty(ResultholderService.prototype, "answers", {
        get: function () {
            return this._answers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResultholderService.prototype, "points", {
        get: function () {
            return this._points;
        },
        enumerable: true,
        configurable: true
    });
    ResultholderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ResultholderService);
    return ResultholderService;
}());

//# sourceMappingURL=resultholder.service.js.map

/***/ }),

/***/ "../../../../../src/app/timer/timer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timer/timer.component.html":
/***/ (function(module, exports) {

module.exports = "<span>{{time}}</span>"

/***/ }),

/***/ "../../../../../src/app/timer/timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__general_utils_constants__ = __webpack_require__("../../../../../src/app/general/utils/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timer_service__ = __webpack_require__("../../../../../src/app/timer/timer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimerComponent = /** @class */ (function () {
    function TimerComponent(timerService, router) {
        this.timerService = timerService;
        this.router = router;
    }
    TimerComponent.prototype.startTimer = function () {
        var _this = this;
        if (sessionStorage.getItem('wasStarted') == 'yes') {
            this.timerService.startTimer();
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].interval(1000).takeWhile(function () { return true; }).subscribe(function () { return _this.getTimer(); });
        }
        else {
            this.router.navigate([__WEBPACK_IMPORTED_MODULE_0__general_utils_constants__["a" /* homePath */]]);
            sessionStorage.clear();
        }
    };
    TimerComponent.prototype.getTimer = function () {
        var _this = this;
        this.timerService.getTimer()
            .subscribe(function (time) {
            _this.time = time;
        });
    };
    TimerComponent.prototype.ngOnInit = function () {
        this.startTimer();
    };
    TimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
            selector: 'timer',
            template: __webpack_require__("../../../../../src/app/timer/timer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timer/timer.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__timer_service__["a" /* TimerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__timer_service__["a" /* TimerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], TimerComponent);
    return TimerComponent;
    var _a, _b;
}());

//# sourceMappingURL=timer.component.js.map

/***/ }),

/***/ "../../../../../src/app/timer/timer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__questions_questions_service__ = __webpack_require__("../../../../../src/app/questions/questions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__result_resultholder_service__ = __webpack_require__("../../../../../src/app/result/resultholder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__general_utils_constants__ = __webpack_require__("../../../../../src/app/general/utils/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_utils_Consts__ = __webpack_require__("../../../../../src/app/general/utils/Consts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_backend_backend_service__ = __webpack_require__("../../../../../src/app/general/backend/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TimerService = /** @class */ (function () {
    function TimerService(backendService, router, holder, service) {
        this.backendService = backendService;
        this.router = router;
        this.holder = holder;
        this.service = service;
    }
    TimerService.prototype.startTimer = function () {
        return this.backendService.get(__WEBPACK_IMPORTED_MODULE_3__general_utils_Consts__["a" /* Consts */].BackendMapping.Timer.START).subscribe(function (response) {
            if (response.ok) {
                console.log(response.item);
                return response.item;
            }
            else {
                return null;
            }
        });
    };
    TimerService.prototype.stopTimer = function () {
        return this.backendService.get(__WEBPACK_IMPORTED_MODULE_3__general_utils_Consts__["a" /* Consts */].BackendMapping.Timer.STOP).subscribe(function (response) {
            if (response.ok) {
                console.log(response.item);
                return response.item;
            }
            else {
                return null;
            }
        });
    };
    TimerService.prototype.getTimer = function () {
        var _this = this;
        return this.backendService.get(__WEBPACK_IMPORTED_MODULE_3__general_utils_Consts__["a" /* Consts */].BackendMapping.Timer.GET_TIME).map(function (response) {
            if (response.ok) {
                if (response.item !== "0:00") {
                    return response.item;
                }
                else {
                    if (_this.answers = JSON.parse(localStorage.getItem('answers')))
                        _this.service.getResult(_this.answers)
                            .subscribe(function (result) {
                            _this.result = result;
                            _this.holder.holdResult(_this.result);
                            _this.router.navigate([__WEBPACK_IMPORTED_MODULE_2__general_utils_constants__["c" /* resultPath */]]);
                            _this.stopTimer();
                            sessionStorage.setItem('wasStarted', 'no');
                        });
                }
            }
            else {
            }
        });
    };
    TimerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__general_backend_backend_service__["a" /* BackendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__general_backend_backend_service__["a" /* BackendService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__result_resultholder_service__["a" /* ResultholderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__result_resultholder_service__["a" /* ResultholderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__questions_questions_service__["a" /* QuestionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__questions_questions_service__["a" /* QuestionsService */]) === "function" && _d || Object])
    ], TimerService);
    return TimerService;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=timer.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/md-components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MdComponentsModule = /** @class */ (function () {
    function MdComponentsModule() {
    }
    MdComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["d" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["h" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["g" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["f" /* MatListModule */]
            ]
        })
    ], MdComponentsModule);
    return MdComponentsModule;
}());

//# sourceMappingURL=md-components.module.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map