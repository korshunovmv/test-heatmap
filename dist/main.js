(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/module/login/login.module.ngfactory": [
		"./src/app/module/login/login.module.ngfactory.js",
		"default~app-module-login-login-module-ngfactory~app-module-personal-personal-module-ngfactory",
		"app-module-login-login-module-ngfactory"
	],
	"app/module/personal/personal.module.ngfactory": [
		"./src/app/module/personal/personal.module.ngfactory.js",
		"default~app-module-login-login-module-ngfactory~app-module-personal-personal-module-ngfactory",
		"app-module-personal-personal-module-ngfactory"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: errorHandler, AppRoutingModule, ɵ0, ɵ1, ɵ2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorHandler", function() { return errorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guard_anonymous_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guard/anonymous.guard */ "./src/app/guard/anonymous.guard.ts");
/* harmony import */ var _layouts_layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/layouts */ "./src/app/layouts/layouts/index.ts");
/* harmony import */ var _guard_personal_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard/personal.guard */ "./src/app/guard/personal.guard.ts");




var ɵ0 = {
    session: 'anonymous',
}, ɵ1 = {
    session: 'personal',
}, ɵ2 = {
    session: 'personal',
};
var routes = [
    {
        path: '',
        component: _layouts_layouts__WEBPACK_IMPORTED_MODULE_2__["LoginLayoutComponent"],
        canActivateChild: [_guard_anonymous_guard__WEBPACK_IMPORTED_MODULE_1__["AnonymousGuard"]],
        canActivate: [_guard_anonymous_guard__WEBPACK_IMPORTED_MODULE_1__["AnonymousGuard"]],
        data: ɵ0,
        loadChildren: 'app/module/login/login.module#LoginModule',
    },
    {
        path: '',
        component: _layouts_layouts__WEBPACK_IMPORTED_MODULE_2__["PersonalLayoutComponent"],
        canActivateChild: [_guard_personal_guard__WEBPACK_IMPORTED_MODULE_3__["PersonalGuard"]],
        canActivate: [_guard_personal_guard__WEBPACK_IMPORTED_MODULE_3__["PersonalGuard"]],
        data: ɵ1,
        loadChildren: 'app/module/personal/personal.module#PersonalModule',
    },
    {
        path: '',
        component: _layouts_layouts__WEBPACK_IMPORTED_MODULE_2__["PersonalLayoutComponent"],
        canActivateChild: [_guard_personal_guard__WEBPACK_IMPORTED_MODULE_3__["PersonalGuard"]],
        canActivate: [_guard_personal_guard__WEBPACK_IMPORTED_MODULE_3__["PersonalGuard"]],
        data: ɵ2,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/cards',
            },
            {
                path: 'login',
                redirectTo: '/cards',
            },
            {
                path: 'sms',
                redirectTo: '/cards',
            },
        ]
    },
];
// let tracingEnabled: boolean = false;  // set true to start spamming
// if (environment.production) {
//     tracingEnabled = false;
// }
function errorHandler(error) {
    // console.log(error);
}
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());




/***/ }),

/***/ "./src/app/app.component.css.shim.ngstyle.js":
/*!***************************************************!*\
  !*** ./src/app/app.component.css.shim.ngstyle.js ***!
  \***************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["h1[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 0;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:link {\n  color: #334953;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #039be5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDO0FBQ3RDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXBwQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5oMSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5oMiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbm5hdiBhIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5uYXYgYTp2aXNpdGVkLCBhOmxpbmsge1xuICBjb2xvcjogIzMzNDk1Mztcbn1cbm5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMzliZTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XG59XG5uYXYgYS5hY3RpdmUge1xuICBjb2xvcjogIzAzOWJlNTtcbn1cbiJdfQ== */"];



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.css.shim.ngstyle */ "./src/app/app.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/app.service */ "./src/app/service/app.service.ts");
/* harmony import */ var _routing_module_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routing/module-loading.service */ "./src/app/routing/module-loading.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_AppComponent = [_app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], [_service_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _routing_module_loading_service__WEBPACK_IMPORTED_MODULE_5__["ModuleLoadingService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



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
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/app.service */ "./src/app/service/app.service.ts");
/* harmony import */ var _routing_module_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routing/module-loading.service */ "./src/app/routing/module-loading.service.ts");

// import { TitleService } from './title.service';


var AppComponent = /** @class */ (function () {
    function AppComponent(
    // private titleService: TitleService,
    appService, 
    // private scrollToTop: ScrollToTopService,
    // private navigationLogger: NavigationLoggerService,
    loadingLogger) {
        this.appService = appService;
        this.loadingLogger = loadingLogger;
        setTimeout(function () {
            appService.init();
        }, 100);
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.scrollToTop.enable();
        // this.navigationLogger.enable();
        this.loadingLogger.enable();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // this.scrollToTop.disable();
        // this.navigationLogger.disable();
        this.loadingLogger.disable();
    };
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _layouts_layouts_login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/layouts/login/login.component.ngfactory */ "./src/app/layouts/layouts/login/login.component.ngfactory.js");
/* harmony import */ var _layouts_layouts_personal_personal_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/layouts/personal/personal.component.ngfactory */ "./src/app/layouts/layouts/personal/personal.component.ngfactory.js");
/* harmony import */ var _ui_dropdown_menu_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/dropdown/menu/menu.component.ngfactory */ "./src/app/ui/dropdown/menu/menu.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm5/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _guard_anonymous_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guard/anonymous.guard */ "./src/app/guard/anonymous.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/app.service */ "./src/app/service/app.service.ts");
/* harmony import */ var _guard_personal_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guard/personal.guard */ "./src/app/guard/personal.guard.ts");
/* harmony import */ var _routing_module_preloading_handler__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./routing/module-preloading.handler */ "./src/app/routing/module-preloading.handler.ts");
/* harmony import */ var _routing_module_loading_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./routing/module-loading.service */ "./src/app/routing/module-loading.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_products_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/products.service */ "./src/app/service/products.service.ts");
/* harmony import */ var _layouts_services_modal_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./layouts/services/modal.service */ "./src/app/layouts/services/modal.service.ts");
/* harmony import */ var _layouts_services_partner_info_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./layouts/services/partner-info.service */ "./src/app/layouts/services/partner-info.service.ts");
/* harmony import */ var _layouts_services_widget_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./layouts/services/widget.service */ "./src/app/layouts/services/widget.service.ts");
/* harmony import */ var _layouts_services_menu_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./layouts/services/menu.service */ "./src/app/layouts/services/menu.service.ts");
/* harmony import */ var ngx_responsive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-responsive */ "./node_modules/ngx-responsive/fesm5/ngx-responsive.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _layouts_layouts_login_login_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./layouts/layouts/login/login.component */ "./src/app/layouts/layouts/login/login.component.ts");
/* harmony import */ var _layouts_layouts_personal_personal_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./layouts/layouts/personal/personal.component */ "./src/app/layouts/layouts/personal/personal.component.ts");
/* harmony import */ var _guard_guard_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./guard/guard.module */ "./src/app/guard/guard.module.ts");
/* harmony import */ var _matomo_matomo_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./matomo/matomo.module */ "./src/app/matomo/matomo.module.ts");
/* harmony import */ var _directive_directive_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./directive/directive.module */ "./src/app/directive/directive.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./common/common.module */ "./src/app/common/common.module.ts");
/* harmony import */ var _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");
/* harmony import */ var _service_service_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./service/service.module */ "./src/app/service/service.module.ts");
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./layouts/layouts.module */ "./src/app/layouts/layouts.module.ts");
/* harmony import */ var _matomo_matomo_injector_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./matomo/matomo-injector.service */ "./src/app/matomo/matomo-injector.service.ts");
/* harmony import */ var _matomo_matomo_tracker_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./matomo/matomo-tracker.service */ "./src/app/matomo/matomo-tracker.service.ts");
/* harmony import */ var _routing_routes_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./routing/routes.service */ "./src/app/routing/routes.service.ts");
/* harmony import */ var _routing_routing_handler__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./routing/routing.handler */ "./src/app/routing/routing.handler.ts");
/* harmony import */ var _service_title_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./service/title.service */ "./src/app/service/title.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵEmptyOutletComponentNgFactory"], _layouts_layouts_login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["LoginLayoutComponentNgFactory"], _layouts_layouts_personal_personal_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["PersonalLayoutComponentNgFactory"], _ui_dropdown_menu_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DropdownMenuComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_s"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_h"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_12__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _guard_anonymous_guard__WEBPACK_IMPORTED_MODULE_14__["AnonymousGuard"], _guard_anonymous_guard__WEBPACK_IMPORTED_MODULE_14__["AnonymousGuard"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _service_app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _guard_personal_guard__WEBPACK_IMPORTED_MODULE_17__["PersonalGuard"], _guard_personal_guard__WEBPACK_IMPORTED_MODULE_17__["PersonalGuard"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _service_app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _routing_module_preloading_handler__WEBPACK_IMPORTED_MODULE_18__["ModulePreloadingHandler"], _routing_module_preloading_handler__WEBPACK_IMPORTED_MODULE_18__["ModulePreloadingHandler"], [_routing_module_loading_service__WEBPACK_IMPORTED_MODULE_19__["ModuleLoadingService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadingStrategy"], null, [_routing_module_preloading_handler__WEBPACK_IMPORTED_MODULE_18__["ModulePreloadingHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_n"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _service_products_service__WEBPACK_IMPORTED_MODULE_21__["ProductsService"], _service_products_service__WEBPACK_IMPORTED_MODULE_21__["ProductsService"], [_service_app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _layouts_services_modal_service__WEBPACK_IMPORTED_MODULE_22__["LayoutModalService"], _layouts_services_modal_service__WEBPACK_IMPORTED_MODULE_22__["LayoutModalService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _layouts_services_partner_info_service__WEBPACK_IMPORTED_MODULE_23__["PartnerInfoService"], _layouts_services_partner_info_service__WEBPACK_IMPORTED_MODULE_23__["PartnerInfoService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _layouts_services_widget_service__WEBPACK_IMPORTED_MODULE_24__["WidgetService"], _layouts_services_widget_service__WEBPACK_IMPORTED_MODULE_24__["WidgetService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _layouts_services_menu_service__WEBPACK_IMPORTED_MODULE_25__["MenuService"], _layouts_services_menu_service__WEBPACK_IMPORTED_MODULE_25__["MenuService"], [_service_app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["ResponsiveConfig"], ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["responsiveConfiguration"], [ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["RESPONSIVE_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["ResponsiveState"], ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["ResponsiveState"], [ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["ResponsiveConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["ResponsiveSizeInfoRx"], ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["ResponsiveSizeInfoRx"], [ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["ResponsiveState"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["UserAgentInfoRx"], ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["UserAgentInfoRx"], [ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["ResponsiveState"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["BrowserInfoRx"], ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["BrowserInfoRx"], [ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["ResponsiveState"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["IeInfoRx"], ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["IeInfoRx"], [ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["ResponsiveState"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["DeviceInfoRx"], ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["DeviceInfoRx"], [ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["ResponsiveState"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["DeviceStandardInfoRx"], ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["DeviceStandardInfoRx"], [ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["ResponsiveState"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["OrientationInfoRx"], ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["OrientationInfoRx"], [ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["ResponsiveState"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_i"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"], { useHash: false, enableTracing: false, preloadingStrategy: _routing_module_preloading_handler__WEBPACK_IMPORTED_MODULE_18__["ModulePreloadingHandler"], errorHandler: _app_routing_module__WEBPACK_IMPORTED_MODULE_27__["errorHandler"] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], function () { return [[{ path: "", component: _layouts_layouts_login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginLayoutComponent"], canActivateChild: [_guard_anonymous_guard__WEBPACK_IMPORTED_MODULE_14__["AnonymousGuard"]], canActivate: [_guard_anonymous_guard__WEBPACK_IMPORTED_MODULE_14__["AnonymousGuard"]], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_27__["ɵ0"], loadChildren: "app/module/login/login.module#LoginModule" }, { path: "", component: _layouts_layouts_personal_personal_component__WEBPACK_IMPORTED_MODULE_29__["PersonalLayoutComponent"], canActivateChild: [_guard_personal_guard__WEBPACK_IMPORTED_MODULE_17__["PersonalGuard"]], canActivate: [_guard_personal_guard__WEBPACK_IMPORTED_MODULE_17__["PersonalGuard"]], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_27__["ɵ1"], loadChildren: "app/module/personal/personal.module#PersonalModule" }, { path: "", component: _layouts_layouts_personal_personal_component__WEBPACK_IMPORTED_MODULE_29__["PersonalLayoutComponent"], canActivateChild: [_guard_personal_guard__WEBPACK_IMPORTED_MODULE_17__["PersonalGuard"]], canActivate: [_guard_personal_guard__WEBPACK_IMPORTED_MODULE_17__["PersonalGuard"]], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_27__["ɵ2"], children: [{ path: "", pathMatch: "full", redirectTo: "/cards" }, { path: "login", redirectTo: "/cards" }, { path: "sms", redirectTo: "/cards" }] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _guard_guard_module__WEBPACK_IMPORTED_MODULE_30__["GuardModule"], _guard_guard_module__WEBPACK_IMPORTED_MODULE_30__["GuardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_27__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_27__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _matomo_matomo_module__WEBPACK_IMPORTED_MODULE_31__["MatomoModule"], _matomo_matomo_module__WEBPACK_IMPORTED_MODULE_31__["MatomoModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _directive_directive_module__WEBPACK_IMPORTED_MODULE_32__["DirectiveModule"], _directive_directive_module__WEBPACK_IMPORTED_MODULE_32__["DirectiveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_33__["PerfectScrollbarModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_33__["PerfectScrollbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["ResponsiveModule"], ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["ResponsiveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ui_ui_module__WEBPACK_IMPORTED_MODULE_34__["UiModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_34__["UiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_common_module__WEBPACK_IMPORTED_MODULE_35__["AppCommonModule"], _common_common_module__WEBPACK_IMPORTED_MODULE_35__["AppCommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_36__["PipeModule"], _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_36__["PipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _service_service_module__WEBPACK_IMPORTED_MODULE_37__["ServiceModule"], _service_service_module__WEBPACK_IMPORTED_MODULE_37__["ServiceModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_38__["LayoutsModule"], _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_38__["LayoutsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _matomo_matomo_injector_service__WEBPACK_IMPORTED_MODULE_39__["MatomoInjectorService"], _matomo_matomo_injector_service__WEBPACK_IMPORTED_MODULE_39__["MatomoInjectorService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _matomo_matomo_tracker_service__WEBPACK_IMPORTED_MODULE_40__["MatomoTrackerService"], _matomo_matomo_tracker_service__WEBPACK_IMPORTED_MODULE_40__["MatomoTrackerService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _service_app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"], _service_app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _routing_module_loading_service__WEBPACK_IMPORTED_MODULE_19__["ModuleLoadingService"], _routing_module_loading_service__WEBPACK_IMPORTED_MODULE_19__["ModuleLoadingService"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _routing_routes_service__WEBPACK_IMPORTED_MODULE_41__["RoutesService"], _routing_routes_service__WEBPACK_IMPORTED_MODULE_41__["RoutesService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _routing_routing_handler__WEBPACK_IMPORTED_MODULE_42__["RoutingHandler"], _routing_routing_handler__WEBPACK_IMPORTED_MODULE_42__["RoutingHandler"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _service_app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"], _routing_module_loading_service__WEBPACK_IMPORTED_MODULE_19__["ModuleLoadingService"], _routing_routes_service__WEBPACK_IMPORTED_MODULE_41__["RoutesService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _service_title_service__WEBPACK_IMPORTED_MODULE_43__["TitleService"], _service_title_service__WEBPACK_IMPORTED_MODULE_43__["TitleService"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], _matomo_matomo_tracker_service__WEBPACK_IMPORTED_MODULE_40__["MatomoTrackerService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_matomo_matomo_injector_service__WEBPACK_IMPORTED_MODULE_39__["MatomoInjectorService"], _matomo_matomo_tracker_service__WEBPACK_IMPORTED_MODULE_40__["MatomoTrackerService"], _routing_routing_handler__WEBPACK_IMPORTED_MODULE_42__["RoutingHandler"], _service_title_service__WEBPACK_IMPORTED_MODULE_43__["TitleService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_responsive__WEBPACK_IMPORTED_MODULE_26__["RESPONSIVE_CONFIGURATION"], { breakPoints: { xs: { max: 767 }, sm: { min: 768, max: 991 }, md: { min: 992, max: 1199 }, lg: { min: 1200, max: 1599 }, xl: { min: 1600 } }, debounceTime: 100 }, [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: ResponsiveDefinition, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveDefinition", function() { return ResponsiveDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var ngx_responsive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-responsive */ "./node_modules/ngx-responsive/fesm5/ngx-responsive.js");
/* harmony import */ var _matomo_matomo_injector_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matomo/matomo-injector.service */ "./src/app/matomo/matomo-injector.service.ts");
/* harmony import */ var _matomo_matomo_tracker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matomo/matomo-tracker.service */ "./src/app/matomo/matomo-tracker.service.ts");
/* harmony import */ var _routing_routing_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing/routing.handler */ "./src/app/routing/routing.handler.ts");
/* harmony import */ var _service_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/title.service */ "./src/app/service/title.service.ts");





var config = {
    breakPoints: {
        xs: { max: 600 },
        sm: { min: 601, max: 959 },
        md: { min: 960, max: 1279 },
        lg: { min: 1280, max: 1919 },
        xl: { min: 1920 }
    },
    debounceTime: 100 // allow to debounce checking timer
};
function ResponsiveDefinition() {
    return new ngx_responsive__WEBPACK_IMPORTED_MODULE_0__["ResponsiveConfig"](config);
}
var AppModule = /** @class */ (function () {
    function AppModule(matomoInjectorService, matomoTrackerService, routingHandler, titleService) {
        this.routingHandler = routingHandler;
        this.titleService = titleService;
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/common.module.ts":
/*!*****************************************!*\
  !*** ./src/app/common/common.module.ts ***!
  \*****************************************/
/*! exports provided: AppCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCommonModule", function() { return AppCommonModule; });
var AppCommonModule = /** @class */ (function () {
    function AppCommonModule() {
    }
    return AppCommonModule;
}());



/***/ }),

/***/ "./src/app/directive/app-prod.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/directive/app-prod.directive.ts ***!
  \*************************************************/
/*! exports provided: AppProdDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppProdDirective", function() { return AppProdDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/app.service */ "./src/app/service/app.service.ts");





var AppProdDirective = /** @class */ (function () {
    function AppProdDirective(appService, templateRef, viewContainer, cd) {
        this.appService = appService;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.unsubscriber$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    AppProdDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.appService
            .isDemoBuild$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscriber$))
            .subscribe(function (isDemoBuild) {
            _this.prod = !isDemoBuild;
            _this.showHide();
        });
    };
    AppProdDirective.prototype.ngOnDestroy = function () {
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    };
    AppProdDirective.prototype.showHide = function () {
        if (this.prod) {
            if (this.noRepeat === 0 || Object(util__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(this.noRepeat)) {
                this.noRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.cd.markForCheck();
            }
        }
        else {
            this.noRepeat = 0;
            this.viewContainer.clear();
            this.cd.markForCheck();
        }
    };
    return AppProdDirective;
}());



/***/ }),

/***/ "./src/app/directive/app-standalone.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directive/app-standalone.directive.ts ***!
  \*******************************************************/
/*! exports provided: AppStandaloneDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStandaloneDirective", function() { return AppStandaloneDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/app.service */ "./src/app/service/app.service.ts");





var AppStandaloneDirective = /** @class */ (function () {
    function AppStandaloneDirective(appService, templateRef, viewContainer, cd) {
        this.appService = appService;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.unsubscriber$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    AppStandaloneDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.appService
            .isEmbedBuild$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscriber$))
            .subscribe(function (isEmbedBuild) {
            _this.standalone = !isEmbedBuild;
            _this.showHide();
        });
    };
    AppStandaloneDirective.prototype.ngOnDestroy = function () {
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    };
    AppStandaloneDirective.prototype.showHide = function () {
        if (this.standalone) {
            if (this.noRepeat === 0 || Object(util__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(this.noRepeat)) {
                this.noRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.cd.markForCheck();
            }
        }
        else {
            this.noRepeat = 0;
            this.viewContainer.clear();
            this.cd.markForCheck();
        }
    };
    return AppStandaloneDirective;
}());



/***/ }),

/***/ "./src/app/directive/directive.module.ts":
/*!***********************************************!*\
  !*** ./src/app/directive/directive.module.ts ***!
  \***********************************************/
/*! exports provided: DirectiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveModule", function() { return DirectiveModule; });
var DirectiveModule = /** @class */ (function () {
    function DirectiveModule() {
    }
    return DirectiveModule;
}());



/***/ }),

/***/ "./src/app/guard/anonymous.guard.ts":
/*!******************************************!*\
  !*** ./src/app/guard/anonymous.guard.ts ***!
  \******************************************/
/*! exports provided: AnonymousGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymousGuard", function() { return AnonymousGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/app.service */ "./src/app/service/app.service.ts");


var AnonymousGuard = /** @class */ (function () {
    function AnonymousGuard(router, appService) {
        this.router = router;
        this.appService = appService;
    }
    AnonymousGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AnonymousGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AnonymousGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.checkLogin(url);
    };
    AnonymousGuard.prototype.checkLogin = function (url) {
        var resultCheck = this.appService.isAnonymous;
        return resultCheck;
    };
    return AnonymousGuard;
}());



/***/ }),

/***/ "./src/app/guard/guard.module.ts":
/*!***************************************!*\
  !*** ./src/app/guard/guard.module.ts ***!
  \***************************************/
/*! exports provided: GuardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardModule", function() { return GuardModule; });
var GuardModule = /** @class */ (function () {
    function GuardModule() {
    }
    return GuardModule;
}());



/***/ }),

/***/ "./src/app/guard/personal.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guard/personal.guard.ts ***!
  \*****************************************/
/*! exports provided: PersonalGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalGuard", function() { return PersonalGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/app.service */ "./src/app/service/app.service.ts");


var PersonalGuard = /** @class */ (function () {
    function PersonalGuard(router, appService) {
        this.router = router;
        this.appService = appService;
    }
    PersonalGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    PersonalGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    PersonalGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.checkLogin(url);
    };
    PersonalGuard.prototype.checkLogin = function (url) {
        var resultCheck = this.appService.isAuthenticated /*&& this.appService.customers$.value.isPersonal*/;
        // this.authService.setGlobalMessage('');
        // if (['/sms_otp', '/otp_code', '/iscc', '/password-recovery', '/password-change'].indexOf(url) > -1) {
        //     resultCheck = this.authService.isCheckedLogin;
        // } else {
        //     resultCheck = this.authService.isLoggedIn;
        //     if (!resultCheck && url && url !== '/') {
        //         this.authService.loginUrl = url;
        //     }
        // }
        return resultCheck;
    };
    return PersonalGuard;
}());



/***/ }),

/***/ "./src/app/layouts/layouts.module.ts":
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/*! exports provided: LayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsModule", function() { return LayoutsModule; });
var LayoutsModule = /** @class */ (function () {
    function LayoutsModule() {
    }
    return LayoutsModule;
}());



/***/ }),

/***/ "./src/app/layouts/layouts/anonymous/anonymous.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layouts/layouts/anonymous/anonymous.component.ts ***!
  \******************************************************************/
/*! exports provided: AnonymousLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymousLayoutComponent", function() { return AnonymousLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var AnonymousLayoutComponent = /** @class */ (function () {
    function AnonymousLayoutComponent() {
    }
    AnonymousLayoutComponent.prototype.ngOnInit = function () {
    };
    return AnonymousLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/layouts/index.ts":
/*!******************************************!*\
  !*** ./src/app/layouts/layouts/index.ts ***!
  \******************************************/
/*! exports provided: LoginLayoutComponent, PersonalLayoutComponent, layoutComponents, AnonymousLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutComponents", function() { return layoutComponents; });
/* harmony import */ var _anonymous_anonymous_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anonymous/anonymous.component */ "./src/app/layouts/layouts/anonymous/anonymous.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnonymousLayoutComponent", function() { return _anonymous_anonymous_component__WEBPACK_IMPORTED_MODULE_0__["AnonymousLayoutComponent"]; });

/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/layouts/layouts/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginLayoutComponent"]; });

/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal/personal.component */ "./src/app/layouts/layouts/personal/personal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonalLayoutComponent", function() { return _personal_personal_component__WEBPACK_IMPORTED_MODULE_2__["PersonalLayoutComponent"]; });







var layoutComponents = [
    _anonymous_anonymous_component__WEBPACK_IMPORTED_MODULE_0__["AnonymousLayoutComponent"],
    _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginLayoutComponent"],
    _personal_personal_component__WEBPACK_IMPORTED_MODULE_2__["PersonalLayoutComponent"],
];


/***/ }),

/***/ "./src/app/layouts/layouts/login/login.component.less.shim.ngstyle.js":
/*!****************************************************************************!*\
  !*** ./src/app/layouts/layouts/login/login.component.less.shim.ngstyle.js ***!
  \****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".content[_ngcontent-%COMP%] {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: 100%;\n  max-width: 100%;\n  padding: 0;\n  background-size: cover;\n}\n.sidebar[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  flex-shrink: 0;\n  flex-basis: auto;\n  -webkit-box-pack: center;\n          justify-content: center;\n  max-width: 666px;\n  height: auto;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pa2hhaWwvd29yay90ZXN0LWhlYXRtYXAvc3JjL2FwcC9sYXlvdXRzL2xheW91dHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2xheW91dHMvbGF5b3V0cy9sb2dpbi9sb2dpbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNDRjtBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2xheW91dHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1zaHJpbms6IDE7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnNpZGViYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWJhc2lzOiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA2NjZweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cbiIsIi5jb250ZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LXNocmluazogMTtcbiAgZmxleC1iYXNpczogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLnNpZGViYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWJhc2lzOiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA2NjZweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"];



/***/ }),

/***/ "./src/app/layouts/layouts/login/login.component.ngfactory.js":
/*!********************************************************************!*\
  !*** ./src/app/layouts/layouts/login/login.component.ngfactory.js ***!
  \********************************************************************/
/*! exports provided: RenderType_LoginLayoutComponent, View_LoginLayoutComponent_0, View_LoginLayoutComponent_Host_0, LoginLayoutComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LoginLayoutComponent", function() { return RenderType_LoginLayoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginLayoutComponent_0", function() { return View_LoginLayoutComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginLayoutComponent_Host_0", function() { return View_LoginLayoutComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutComponentNgFactory", function() { return LoginLayoutComponentNgFactory; });
/* harmony import */ var _login_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.less.shim.ngstyle */ "./src/app/layouts/layouts/login/login.component.less.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _directive_app_standalone_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../directive/app-standalone.directive */ "./src/app/directive/app-standalone.directive.ts");
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/app.service */ "./src/app/service/app.service.ts");
/* harmony import */ var _directive_app_prod_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../directive/app-prod.directive */ "./src/app/directive/app-prod.directive.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "./src/app/layouts/layouts/login/login.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_LoginLayoutComponent = [_login_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LoginLayoutComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LoginLayoutComponent, data: {} });

function View_LoginLayoutComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [["class", "content"]], [[2, "holiday", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "div", [["class", "login-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "login-container"]], [[2, "login-container--without-bg", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "div", [["class", "login-inner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "login-form"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 16777216, null, null, 1, "router-outlet", [["class", "main"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 7, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isHoliday; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.isWithoutBg; _ck(_v, 3, 0, currVal_1); }); }
function View_LoginLayoutComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginLayoutComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 212992, null, 0, _directive_app_standalone_directive__WEBPACK_IMPORTED_MODULE_3__["AppStandaloneDirective"], [_service_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
function View_LoginLayoutComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 16777216, null, null, 1, "router-outlet", [["class", "main"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
function View_LoginLayoutComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 16777216, null, null, 1, "router-outlet", [["class", "main"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
function View_LoginLayoutComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginLayoutComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _directive_app_prod_directive__WEBPACK_IMPORTED_MODULE_5__["AppProdDirective"], [_service_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0, null, View_LoginLayoutComponent_3)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0, null, View_LoginLayoutComponent_4))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_LoginLayoutComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "layout-login", [], null, [[null, "touchstart"]], function (_v, en, $event) { var ad = true; if (("touchstart" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onStart($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_LoginLayoutComponent_0, RenderType_LoginLayoutComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _login_component__WEBPACK_IMPORTED_MODULE_6__["LoginLayoutComponent"], [_service_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LoginLayoutComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("layout-login", _login_component__WEBPACK_IMPORTED_MODULE_6__["LoginLayoutComponent"], View_LoginLayoutComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/layouts/layouts/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layouts/layouts/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutComponent", function() { return LoginLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/app.service */ "./src/app/service/app.service.ts");





var LoginLayoutComponent = /** @class */ (function () {
    function LoginLayoutComponent(appService, renderer, router) {
        this.appService = appService;
        this.renderer = renderer;
        this.router = router;
        this.showPopup = false;
        this.activeSliderItem = 0;
        this.isHoliday = false;
        this.isWithoutBg = true;
        this.items = [];
        this.itemsDelo = [
            {
                icon: 'bookkeeping',
                title: 'title',
                text: ['text'],
            },
            {
                icon: 'deposit',
                title: 'title',
                text: ['text'],
            },
            {
                icon: 'salary_project',
                title: 'title',
                text: ['text'],
            },
        ];
        this.itemsGeb = [
            {
                icon: 'salary_project',
                title: 'title',
                text: ['text'],
            },
            {
                icon: 'salary_project',
                title: 'title',
                text: ['text'],
            },
        ];
        this.itemsSkb = [
            {
                icon: 'deposit',
                title: 'title',
                text: ['text'],
            },
            {
                icon: 'salary_project',
                title: 'title',
                text: ['text'],
            },
            {
                icon: 'salary_project',
                title: 'title',
                text: ['text'],
            },
        ];
        this.unsubscriber$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    LoginLayoutComponent.prototype.onStart = function (event) {
        if (event.touches) {
            this.renderer.addClass(event.target, 'touched');
        }
    };
    LoginLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isHoliday = this.checkHoliday();
        this.appService.build$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscriber$))
            .subscribe(function (build) {
            if (build === 'delo') {
                _this.items = _this.itemsDelo;
            }
            if (build === 'geb') {
                _this.items = _this.itemsGeb;
            }
            if (build === 'skb') {
                _this.items = _this.itemsSkb;
            }
        });
        this.checkBg();
        this.router
            .events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }))
            .subscribe(function () {
            _this.checkBg();
        });
        this.startTicker();
    };
    LoginLayoutComponent.prototype.ngOnDestroy = function () {
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    };
    LoginLayoutComponent.prototype.onClickSliderItem = function (num) {
        this.activeSliderItem = num;
        this.ticker.unsubscribe();
        this.startTicker();
    };
    LoginLayoutComponent.prototype.startTicker = function () {
        var _this = this;
        this.ticker = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(5000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscriber$))
            .subscribe(function () {
            _this.activeSliderItem = (_this.activeSliderItem + 1) % _this.items.length;
        });
    };
    LoginLayoutComponent.prototype.checkBg = function () {
        this.isWithoutBg = /\/restore$/.test(this.router.url);
    };
    LoginLayoutComponent.prototype.checkHoliday = function () {
        var time = (new Date()).getTime();
        return (new Date(2020, 2, 5, 0, 0, 0)).getTime() < time &&
            (new Date(2020, 2, 10, 0, 0, 0)).getTime() > time;
    };
    return LoginLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/layouts/personal/personal.component.less.shim.ngstyle.js":
/*!**********************************************************************************!*\
  !*** ./src/app/layouts/layouts/personal/personal.component.less.shim.ngstyle.js ***!
  \**********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  min-height: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.content[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  flex-basis: auto;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: 100%;\n  max-width: 100%;\n  padding: 0;\n  background-size: cover;\n}\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  flex-shrink: 0;\n  flex-basis: auto;\n  -webkit-box-pack: center;\n          justify-content: center;\n  max-width: 666px;\n  height: auto;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pa2hhaWwvd29yay90ZXN0LWhlYXRtYXAvc3JjL2FwcC9sYXlvdXRzL2xheW91dHMvcGVyc29uYWwvcGVyc29uYWwuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2xheW91dHMvbGF5b3V0cy9wZXJzb25hbC9wZXJzb25hbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0o7QURFQTtFQUVJLGNBQUE7RUFDQSxnQkFBQTtFQUVBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDRko7QURLQTtFQUNJLGFBQUE7QUNISjtBRE1BO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2xheW91dHMvcGVyc29uYWwvcGVyc29uYWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb250ZW50IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgZmxleC1iYXNpczogYXV0bztcblxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2lkZWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZsZXgtYmFzaXM6IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXgtd2lkdGg6IDY2NnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbnRlbnQge1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1zaHJpbms6IDE7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zaWRlYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1heC13aWR0aDogNjY2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"];



/***/ }),

/***/ "./src/app/layouts/layouts/personal/personal.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/layouts/personal/personal.component.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_PersonalLayoutComponent, View_PersonalLayoutComponent_0, View_PersonalLayoutComponent_Host_0, PersonalLayoutComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PersonalLayoutComponent", function() { return RenderType_PersonalLayoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PersonalLayoutComponent_0", function() { return View_PersonalLayoutComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PersonalLayoutComponent_Host_0", function() { return View_PersonalLayoutComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalLayoutComponentNgFactory", function() { return PersonalLayoutComponentNgFactory; });
/* harmony import */ var _personal_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal.component.less.shim.ngstyle */ "./src/app/layouts/layouts/personal/personal.component.less.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _widgets_global_message_global_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/global-message/global-message.component.ngfactory */ "./src/app/layouts/widgets/global-message/global-message.component.ngfactory.js");
/* harmony import */ var _widgets_global_message_global_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/global-message/global-message.component */ "./src/app/layouts/widgets/global-message/global-message.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _widgets_scroll_to_top_scroll_to_top_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/scroll-to-top/scroll-to-top.component.ngfactory */ "./src/app/layouts/widgets/scroll-to-top/scroll-to-top.component.ngfactory.js");
/* harmony import */ var _widgets_scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/scroll-to-top/scroll-to-top.component */ "./src/app/layouts/widgets/scroll-to-top/scroll-to-top.component.ts");
/* harmony import */ var _personal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./personal.component */ "./src/app/layouts/layouts/personal/personal.component.ts");
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/app.service */ "./src/app/service/app.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_PersonalLayoutComponent = [_personal_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PersonalLayoutComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_PersonalLayoutComponent, data: {} });

function View_PersonalLayoutComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { content: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 2, { sidebar: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, [[1, 0], ["content", 1]], null, 5, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "widget-global-message", [], null, null, null, _widgets_global_message_global_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_GlobalMessageComponent_0"], _widgets_global_message_global_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_GlobalMessageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 114688, null, 0, _widgets_global_message_global_message_component__WEBPACK_IMPORTED_MODULE_3__["GlobalMessageComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 16777216, null, null, 1, "router-outlet", [["class", "main"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "widget-scroll-to-top", [], [[8, "hidden", 0]], null, null, _widgets_scroll_to_top_scroll_to_top_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ScrollToTopComponent_0"], _widgets_scroll_to_top_scroll_to_top_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ScrollToTopComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 114688, null, 0, _widgets_scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_6__["ScrollToTopComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 5, 0); _ck(_v, 7, 0); _ck(_v, 9, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.isShowToTop; _ck(_v, 8, 0, currVal_0); }); }
function View_PersonalLayoutComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "layout-personal", [], null, [["window", "resize"], ["window", "load"], ["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onResize($event) !== false);
        ad = (pd_0 && ad);
    } if (("window:load" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onResize($event) !== false);
        ad = (pd_1 && ad);
    } if (("window:scroll" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onScroll($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, View_PersonalLayoutComponent_0, RenderType_PersonalLayoutComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 507904, null, 0, _personal_component__WEBPACK_IMPORTED_MODULE_7__["PersonalLayoutComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PersonalLayoutComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("layout-personal", _personal_component__WEBPACK_IMPORTED_MODULE_7__["PersonalLayoutComponent"], View_PersonalLayoutComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/layouts/layouts/personal/personal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/layouts/personal/personal.component.ts ***!
  \****************************************************************/
/*! exports provided: PersonalLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalLayoutComponent", function() { return PersonalLayoutComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/app.service */ "./src/app/service/app.service.ts");




var PersonalLayoutComponent = /** @class */ (function () {
    function PersonalLayoutComponent(renderer, router, appSerivce) {
        this.renderer = renderer;
        this.router = router;
        this.appSerivce = appSerivce;
        this.showSidebar = false;
        this.isShowToTop = false;
        this.canBeShow = true;
    }
    PersonalLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onResize();
        this.routerSubscriber = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]; }))
            .subscribe(function (event) {
            _this.canBeShow = event.url.indexOf('/payment') !== 0;
        });
    };
    PersonalLayoutComponent.prototype.ngDoCheck = function () {
        this.onResize();
    };
    PersonalLayoutComponent.prototype.ngOnDestroy = function () {
        this.unbindDocumentClickListener();
        this.isShowToTop = false;
        if (this.routerSubscriber) {
            this.routerSubscriber.unsubscribe();
        }
    };
    PersonalLayoutComponent.prototype.onResize = function (event) {
        if (this.sidebar) {
            this.sidebar.nativeElement.style.left = this.content.nativeElement.getBoundingClientRect().left + 'px';
        }
    };
    PersonalLayoutComponent.prototype.onScroll = function (event) {
        var limit = window.scrollY || window.pageYOffset;
        this.isShowToTop = this.canBeShow && limit >= 200;
    };
    PersonalLayoutComponent.prototype.bindDocumentClickListener = function () {
        var _this = this;
        if (!this.documentClickListener) {
            setTimeout(function () {
                _this.documentClickListener = _this.renderer.listen('document', 'click', function (mouseEvent) {
                    if (_this.hostEvent !== mouseEvent) {
                        _this.onShowSideBar();
                    }
                });
            });
        }
    };
    PersonalLayoutComponent.prototype.unbindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    };
    PersonalLayoutComponent.prototype.onClickSidebar = function (mouseEvent) {
        this.hostEvent = mouseEvent;
    };
    PersonalLayoutComponent.prototype.onShowSideBar = function () {
        this.showSidebar = !this.showSidebar;
        if (this.showSidebar) {
            this.bindDocumentClickListener();
        }
        else {
            this.unbindDocumentClickListener();
        }
    };
    return PersonalLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/services/menu.service.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/services/menu.service.ts ***!
  \**************************************************/
/*! exports provided: MenuService, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _widgets_sidebar_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/sidebar/models */ "./src/app/layouts/widgets/sidebar/models/index.ts");
/* harmony import */ var app_service_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/app.service */ "./src/app/service/app.service.ts");




var MenuService = /** @class */ (function () {
    function MenuService(appService) {
        var _this = this;
        this.appService = appService;
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({ status: {} });
        this.menuList$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.reportingState = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('none');
        this.data$$ = this.dataSource;
        this.reportingState$$ = this.reportingState.asObservable();
        this.menuListSource = this.menuList$.asObservable();
        this.appService.build$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (build) { return getCustomMenuList(build); }))
            .subscribe(function (menuList) {
            _this.updateMenuList(menuList);
        });
    }
    Object.defineProperty(MenuService.prototype, "menuList", {
        get: function () {
            return this.menuList$.getValue() || [];
        },
        enumerable: true,
        configurable: true
    });
    MenuService.prototype.removeMenuItemByCode = function (code) {
        var removeIndex = this.findIndex(code);
        if (removeIndex >= 0) {
            this.removeMenuItem(removeIndex);
        }
    };
    MenuService.prototype.insertOrUpdateMenuItem = function (menuItem, index) {
        if (menuItem && index >= 0) {
            var currentIndex = this.findIndex(menuItem.code);
            if (currentIndex >= 0) {
                this.updateMenuItem(menuItem, index);
            }
            else {
                this.insertMenuItem(menuItem, index);
            }
        }
    };
    MenuService.prototype.insertMenuItem = function (newItem, newItemIndex) {
        this.menuList.splice(newItemIndex, 0, newItem);
        this.updateMenuList(this.menuList);
    };
    MenuService.prototype.updateMenuItem = function (menuItem, index) {
        this.menuList[index] = menuItem;
    };
    MenuService.prototype.findIndex = function (code) {
        if (code) {
            return this.menuList.findIndex(function (el) { return el.code === code; });
        }
    };
    MenuService.prototype.removeMenuItem = function (removeIndex) {
        this.menuList.splice(removeIndex, 1);
        this.updateMenuList(this.menuList);
    };
    MenuService.prototype.updateMenuList = function (list) {
        this.menuList$.next(list);
    };
    /** @deprecated */
    MenuService.prototype.changeData = function (newData) {
        this.dataSource.next(newData);
    };
    /** @deprecated */
    MenuService.prototype.setReportingState = function (reportingState) {
        this.reportingState.next(reportingState);
    };
    return MenuService;
}());

/**
 * Сформировать элементы левого меню на основе CustomersState и EnvironmentState
 */
var getCustomMenuList = function (build) {
    var showMenuItem = function (i) {
        return (!i.onlyDelo || build === 'delo') &&
            (!i.notGeb || ['delo', 'skb'].includes(build));
    };
    var menuList = _widgets_sidebar_models__WEBPACK_IMPORTED_MODULE_2__["PERSONAL_MENU"].filter(showMenuItem);
    return menuList.map(function (el) { return new _widgets_sidebar_models__WEBPACK_IMPORTED_MODULE_2__["MenuItem"](el); });
};
var ɵ0 = getCustomMenuList;



/***/ }),

/***/ "./src/app/layouts/services/modal.service.ts":
/*!***************************************************!*\
  !*** ./src/app/layouts/services/modal.service.ts ***!
  \***************************************************/
/*! exports provided: LayoutModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModalService", function() { return LayoutModalService; });
var LayoutModalService = /** @class */ (function () {
    function LayoutModalService() {
        this.notcustomer = {
            showRequisitesModal: false
        };
    }
    return LayoutModalService;
}());



/***/ }),

/***/ "./src/app/layouts/services/partner-info.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/layouts/services/partner-info.service.ts ***!
  \**********************************************************/
/*! exports provided: PartnerInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerInfoService", function() { return PartnerInfoService; });
var PartnerInfoService = /** @class */ (function () {
    function PartnerInfoService(
    // private bankClient: HttpBankService,
    // private interceptor: HttpInterceptor
    ) {
        this.partnerInfo = null;
    }
    return PartnerInfoService;
}());



/***/ }),

/***/ "./src/app/layouts/services/widget.service.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/services/widget.service.ts ***!
  \****************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var WidgetService = /** @class */ (function () {
    function WidgetService() {
        this.widgets = [];
        this.widgets$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    WidgetService.prototype.registerWidget = function (name, componentRef, resolverRef) {
        this.deleteWidget(name);
        this.widgets.push({
            name: name,
            component: componentRef,
            resolver: resolverRef
        });
        this.widgets$.next(this.widgets);
    };
    WidgetService.prototype.deleteWidget = function (name) {
        this.widgets = this.widgets.filter(function (w) { return w.name !== name; });
    };
    return WidgetService;
}());



/***/ }),

/***/ "./src/app/layouts/widgets/global-message/global-message.component.less.shim.ngstyle.js":
/*!**********************************************************************************************!*\
  !*** ./src/app/layouts/widgets/global-message/global-message.component.less.shim.ngstyle.js ***!
  \**********************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  background-color: #ffffff;\n  color: #f05624;\n  display: table;\n  width: 100%;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n  min-height: 5.125em;\n}\n.message_content[_ngcontent-%COMP%] {\n  display: table;\n  margin: auto;\n  max-width: 1024px;\n  min-width: 320px;\n}\n.message_content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pa2hhaWwvd29yay90ZXN0LWhlYXRtYXAvc3JjL2FwcC9sYXlvdXRzL3dpZGdldHMvZ2xvYmFsLW1lc3NhZ2UvZ2xvYmFsLW1lc3NhZ2UuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2xheW91dHMvd2lkZ2V0cy9nbG9iYWwtbWVzc2FnZS9nbG9iYWwtbWVzc2FnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ0o7QURHQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDREo7QURJQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FER0k7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL3dpZGdldHMvZ2xvYmFsLW1lc3NhZ2UvZ2xvYmFsLW1lc3NhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGNvbG9yOiNmMDU2MjQ7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn07XG5cbjpob3N0ID4gZGl2e1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWluLWhlaWdodDogNS4xMjVlbTtcbn1cblxuLm1lc3NhZ2VfY29udGVudHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAmIGRpdntcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxufVxuIiwiOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogI2YwNTYyNDtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgPiBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1pbi1oZWlnaHQ6IDUuMTI1ZW07XG59XG4ubWVzc2FnZV9jb250ZW50IHtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gIG1pbi13aWR0aDogMzIwcHg7XG59XG4ubWVzc2FnZV9jb250ZW50IGRpdiB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuIl19 */"];



/***/ }),

/***/ "./src/app/layouts/widgets/global-message/global-message.component.ngfactory.js":
/*!**************************************************************************************!*\
  !*** ./src/app/layouts/widgets/global-message/global-message.component.ngfactory.js ***!
  \**************************************************************************************/
/*! exports provided: RenderType_GlobalMessageComponent, View_GlobalMessageComponent_0, View_GlobalMessageComponent_Host_0, GlobalMessageComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_GlobalMessageComponent", function() { return RenderType_GlobalMessageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GlobalMessageComponent_0", function() { return View_GlobalMessageComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GlobalMessageComponent_Host_0", function() { return View_GlobalMessageComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalMessageComponentNgFactory", function() { return GlobalMessageComponentNgFactory; });
/* harmony import */ var _global_message_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-message.component.less.shim.ngstyle */ "./src/app/layouts/widgets/global-message/global-message.component.less.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _global_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global-message.component */ "./src/app/layouts/widgets/global-message/global-message.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_GlobalMessageComponent = [_global_message_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_GlobalMessageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_GlobalMessageComponent, data: { "animation": [{ type: 7, name: "blindInOut", definitions: [{ type: 1, expr: "void => *", animation: [{ type: 6, styles: { height: 0, opacity: 0 }, offset: null }, { type: 4, styles: { type: 6, styles: { height: "*", opacity: 1 }, offset: null }, timings: 300 }], options: null }, { type: 1, expr: "* => void", animation: [{ type: 6, styles: { height: "*", opacity: 1 }, offset: null }, { type: 4, styles: { type: 6, styles: { height: 0, opacity: 0 }, offset: null }, timings: 300 }], options: null }], options: {} }] } });

function View_GlobalMessageComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "message_content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.message; _ck(_v, 2, 0, currVal_0); }); }
function View_GlobalMessageComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GlobalMessageComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !!_co.message; _ck(_v, 1, 0, currVal_0); }, null); }
function View_GlobalMessageComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "widget-global-message", [], null, null, null, View_GlobalMessageComponent_0, RenderType_GlobalMessageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _global_message_component__WEBPACK_IMPORTED_MODULE_3__["GlobalMessageComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var GlobalMessageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("widget-global-message", _global_message_component__WEBPACK_IMPORTED_MODULE_3__["GlobalMessageComponent"], View_GlobalMessageComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/layouts/widgets/global-message/global-message.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layouts/widgets/global-message/global-message.component.ts ***!
  \****************************************************************************/
/*! exports provided: GlobalMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalMessageComponent", function() { return GlobalMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// import { AuthService } from "app/core/service/auth.service";
var GlobalMessageComponent = /** @class */ (function () {
    function GlobalMessageComponent( /*private authService:AuthService*/) {
    }
    GlobalMessageComponent.prototype.ngOnInit = function () {
        // this.authService.globalMessage.subscribe(message => { this.message = message });
    };
    return GlobalMessageComponent;
}());



/***/ }),

/***/ "./src/app/layouts/widgets/scroll-to-top/scroll-to-top.component.less.shim.ngstyle.js":
/*!********************************************************************************************!*\
  !*** ./src/app/layouts/widgets/scroll-to-top/scroll-to-top.component.less.shim.ngstyle.js ***!
  \********************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%]     ui-button.scroll-button {\n  position: fixed;\n  right: 30px;\n  bottom: 116px;\n  z-index: 10;\n  height: 55px;\n  width: 55px;\n  text-transform: uppercase;\n}\n@media (min-width: 1600px) {\n  [_nghost-%COMP%]     ui-button.scroll-button {\n    left: calc(1300px + (100vw - 1295px) / 2);\n    right: auto;\n  }\n}\n@media all and (max-width: 675px) {\n  [_nghost-%COMP%]     ui-button.scroll-button {\n    bottom: 65px;\n  }\n}\n[_nghost-%COMP%]     ui-button.scroll-button .button {\n  height: 55px;\n  max-width: 55px;\n  min-width: auto;\n  border-radius: 50%;\n  padding: 0;\n}\n[_nghost-%COMP%]     ui-button.scroll-button .icon-im {\n  font-size: 22px;\n  line-height: 1;\n}\n[_nghost-%COMP%]     ui-button.scroll-button .icon-im::before {\n  content: \"\\E92B\";\n}\n.counter[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -8px;\n  top: -8px;\n  border-radius: 100%;\n  width: 20px;\n  height: 20px;\n  line-height: 21px;\n}\n.scroll-button_inner[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pa2hhaWwvd29yay90ZXN0LWhlYXRtYXAvc3JjL2FwcC9sYXlvdXRzL3dpZGdldHMvc2Nyb2xsLXRvLXRvcC9zY3JvbGwtdG8tdG9wLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXRzL3dpZGdldHMvc2Nyb2xsLXRvLXRvcC9zY3JvbGwtdG8tdG9wLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNDSjtBRENJO0VBQUE7SUFDSSx5Q0FBQTtJQUNBLFdBQUE7RUNFTjtBQUNGO0FEQ0k7RUFBQTtJQUNJLFlBQUE7RUNFTjtBQUNGO0FEbkJBO0VBb0JRLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0VSO0FEMUJBO0VBNkJRLGVBQUE7RUFDQSxjQUFBO0FDQVI7QURFUTtFQUNJLGdCQUFBO0FDQVo7QURLQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNISjtBRE1BO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvd2lkZ2V0cy9zY3JvbGwtdG8tdG9wL3Njcm9sbC10by10b3AuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgdWktYnV0dG9uLnNjcm9sbC1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMzBweDtcbiAgICBib3R0b206IDExNnB4O1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGhlaWdodDogNTVweDtcbiAgICB3aWR0aDogNTVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkge1xuICAgICAgICBsZWZ0OiB+XCJjYWxjKDEzMDBweCArICgxMDB2dyAtIDEyOTVweCkgLyAyKVwiO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICB9XG5cblxuICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDY3NXB4KSB7XG4gICAgICAgIGJvdHRvbTogNjVweDtcbiAgICB9XG5cbiAgICAuYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgICBtYXgtd2lkdGg6IDU1cHg7XG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgfVxuXG4gICAgLmljb24taW0ge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuXG4gICAgICAgICY6OmJlZm9yZXtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxFOTJCXCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNvdW50ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLThweDtcbiAgICB0b3A6IC04cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG5cbi5zY3JvbGwtYnV0dG9uX2lubmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCI6aG9zdCA6Om5nLWRlZXAgdWktYnV0dG9uLnNjcm9sbC1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAzMHB4O1xuICBib3R0b206IDExNnB4O1xuICB6LWluZGV4OiAxMDtcbiAgaGVpZ2h0OiA1NXB4O1xuICB3aWR0aDogNTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIHVpLWJ1dHRvbi5zY3JvbGwtYnV0dG9uIHtcbiAgICBsZWZ0OiBjYWxjKDEzMDBweCArICgxMDB2dyAtIDEyOTVweCkgLyAyKTtcbiAgICByaWdodDogYXV0bztcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjc1cHgpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIHVpLWJ1dHRvbi5zY3JvbGwtYnV0dG9uIHtcbiAgICBib3R0b206IDY1cHg7XG4gIH1cbn1cbjpob3N0IDo6bmctZGVlcCB1aS1idXR0b24uc2Nyb2xsLWJ1dHRvbiAuYnV0dG9uIHtcbiAgaGVpZ2h0OiA1NXB4O1xuICBtYXgtd2lkdGg6IDU1cHg7XG4gIG1pbi13aWR0aDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIHVpLWJ1dHRvbi5zY3JvbGwtYnV0dG9uIC5pY29uLWltIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMTtcbn1cbjpob3N0IDo6bmctZGVlcCB1aS1idXR0b24uc2Nyb2xsLWJ1dHRvbiAuaWNvbi1pbTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXEU5MkJcIjtcbn1cbi5jb3VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLThweDtcbiAgdG9wOiAtOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbn1cbi5zY3JvbGwtYnV0dG9uX2lubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */"];



/***/ }),

/***/ "./src/app/layouts/widgets/scroll-to-top/scroll-to-top.component.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./src/app/layouts/widgets/scroll-to-top/scroll-to-top.component.ngfactory.js ***!
  \************************************************************************************/
/*! exports provided: RenderType_ScrollToTopComponent, View_ScrollToTopComponent_0, View_ScrollToTopComponent_Host_0, ScrollToTopComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ScrollToTopComponent", function() { return RenderType_ScrollToTopComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ScrollToTopComponent_0", function() { return View_ScrollToTopComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ScrollToTopComponent_Host_0", function() { return View_ScrollToTopComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToTopComponentNgFactory", function() { return ScrollToTopComponentNgFactory; });
/* harmony import */ var _scroll_to_top_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-to-top.component.less.shim.ngstyle */ "./src/app/layouts/widgets/scroll-to-top/scroll-to-top.component.less.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ui_button_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/button/button.component.ngfactory */ "./src/app/ui/button/button.component.ngfactory.js");
/* harmony import */ var _ui_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/button/button.component */ "./src/app/ui/button/button.component.ts");
/* harmony import */ var _scroll_to_top_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scroll-to-top.component */ "./src/app/layouts/widgets/scroll-to-top/scroll-to-top.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_ScrollToTopComponent = [_scroll_to_top_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ScrollToTopComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ScrollToTopComponent, data: {} });

function View_ScrollToTopComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "ui-button", [["class", "brand scroll-button scroll-to-top"]], null, [[null, "buttonClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("buttonClick" === en)) {
        var pd_0 = (_co.goTop() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _ui_button_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ButtonComponent_0"], _ui_button_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ui_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], [], null, { buttonClick: "buttonClick" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 1, "div", [["class", "scroll-button_inner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "span", [["class", "icon-im"]], null, null, null, null, null))], null, null); }
function View_ScrollToTopComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "widget-scroll-to-top", [], null, null, null, View_ScrollToTopComponent_0, RenderType_ScrollToTopComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _scroll_to_top_component__WEBPACK_IMPORTED_MODULE_4__["ScrollToTopComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ScrollToTopComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("widget-scroll-to-top", _scroll_to_top_component__WEBPACK_IMPORTED_MODULE_4__["ScrollToTopComponent"], View_ScrollToTopComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/layouts/widgets/scroll-to-top/scroll-to-top.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/widgets/scroll-to-top/scroll-to-top.component.ts ***!
  \**************************************************************************/
/*! exports provided: ScrollToTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToTopComponent", function() { return ScrollToTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ScrollToTopComponent = /** @class */ (function () {
    function ScrollToTopComponent() {
    }
    ScrollToTopComponent.prototype.ngOnInit = function () {
    };
    ScrollToTopComponent.prototype.goTop = function () {
        window.scrollTo(0, 0);
    };
    return ScrollToTopComponent;
}());



/***/ }),

/***/ "./src/app/layouts/widgets/sidebar/models/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/layouts/widgets/sidebar/models/index.ts ***!
  \*********************************************************/
/*! exports provided: MenuItem, PERSONAL_MENU, MenuFactory, SHOP_MENU_POSITION, SHOP_MENU_ITEM, SHOP_MENU_ITEM_WITH_SUB_MENU, isShopMenuItem, ShopMenuItem, TradeShopMenuItem, ITradeShopMenuItem, InvoiceShopMenuItem, KassaShopMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-item */ "./src/app/layouts/widgets/sidebar/models/menu-item.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return _menu_item__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]; });

/* harmony import */ var _menu_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.config */ "./src/app/layouts/widgets/sidebar/models/menu.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PERSONAL_MENU", function() { return _menu_config__WEBPACK_IMPORTED_MODULE_1__["PERSONAL_MENU"]; });

/* harmony import */ var _menu_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.factory */ "./src/app/layouts/widgets/sidebar/models/menu.factory.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuFactory", function() { return _menu_factory__WEBPACK_IMPORTED_MODULE_2__["MenuFactory"]; });

/* harmony import */ var _shops_shops_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shops/shops.config */ "./src/app/layouts/widgets/sidebar/models/shops/shops.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHOP_MENU_POSITION", function() { return _shops_shops_config__WEBPACK_IMPORTED_MODULE_3__["SHOP_MENU_POSITION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHOP_MENU_ITEM", function() { return _shops_shops_config__WEBPACK_IMPORTED_MODULE_3__["SHOP_MENU_ITEM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHOP_MENU_ITEM_WITH_SUB_MENU", function() { return _shops_shops_config__WEBPACK_IMPORTED_MODULE_3__["SHOP_MENU_ITEM_WITH_SUB_MENU"]; });

/* harmony import */ var _shops_shops_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shops/shops.menu */ "./src/app/layouts/widgets/sidebar/models/shops/shops.menu.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isShopMenuItem", function() { return _shops_shops_menu__WEBPACK_IMPORTED_MODULE_4__["isShopMenuItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShopMenuItem", function() { return _shops_shops_menu__WEBPACK_IMPORTED_MODULE_4__["ShopMenuItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TradeShopMenuItem", function() { return _shops_shops_menu__WEBPACK_IMPORTED_MODULE_4__["TradeShopMenuItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ITradeShopMenuItem", function() { return _shops_shops_menu__WEBPACK_IMPORTED_MODULE_4__["ITradeShopMenuItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvoiceShopMenuItem", function() { return _shops_shops_menu__WEBPACK_IMPORTED_MODULE_4__["InvoiceShopMenuItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KassaShopMenuItem", function() { return _shops_shops_menu__WEBPACK_IMPORTED_MODULE_4__["KassaShopMenuItem"]; });








/***/ }),

/***/ "./src/app/layouts/widgets/sidebar/models/menu-item.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/widgets/sidebar/models/menu-item.ts ***!
  \*************************************************************/
/*! exports provided: MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
var MenuItem = /** @class */ (function () {
    function MenuItem(config) {
        Object.assign(this, config);
    }
    MenuItem.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
    };
    return MenuItem;
}());



/***/ }),

/***/ "./src/app/layouts/widgets/sidebar/models/menu.config.ts":
/*!***************************************************************!*\
  !*** ./src/app/layouts/widgets/sidebar/models/menu.config.ts ***!
  \***************************************************************/
/*! exports provided: PERSONAL_MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERSONAL_MENU", function() { return PERSONAL_MENU; });
var PERSONAL_MENU = [
    // {
    //     title: 'Главная',
    //     icon: 'home',
    //     path: '/',
    // },
    {
        title: 'Cards',
        icon: 'card',
        path: '/cards',
    },
];


/***/ }),

/***/ "./src/app/layouts/widgets/sidebar/models/menu.factory.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/widgets/sidebar/models/menu.factory.ts ***!
  \****************************************************************/
/*! exports provided: MenuFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuFactory", function() { return MenuFactory; });
/* harmony import */ var _shops_shops_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shops/shops.menu */ "./src/app/layouts/widgets/sidebar/models/shops/shops.menu.ts");

var MenuFactory = /** @class */ (function () {
    function MenuFactory() {
    }
    MenuFactory.prototype.createShopMenu = function (menuItemConfig) {
        var _this = this;
        switch (menuItemConfig.code) {
            case 'shops': {
                if (menuItemConfig.subMenuItems.length) {
                    var shopMenuItem = new _shops_shops_menu__WEBPACK_IMPORTED_MODULE_0__["ShopMenuItem"](menuItemConfig);
                    var subMenuItems = menuItemConfig.subMenuItems.map(function (el) { return _this.createShopMenu(el); });
                    shopMenuItem.subMenuItems = subMenuItems;
                    return shopMenuItem;
                }
                return new _shops_shops_menu__WEBPACK_IMPORTED_MODULE_0__["ShopMenuItem"](menuItemConfig);
            }
            case 'TRADE': {
                return new _shops_shops_menu__WEBPACK_IMPORTED_MODULE_0__["TradeShopMenuItem"](menuItemConfig);
            }
            case 'ITRADE': {
                return new _shops_shops_menu__WEBPACK_IMPORTED_MODULE_0__["ITradeShopMenuItem"](menuItemConfig);
            }
            case 'INVOICE': {
                return new _shops_shops_menu__WEBPACK_IMPORTED_MODULE_0__["InvoiceShopMenuItem"](menuItemConfig);
            }
            case 'KASSA': {
                return new _shops_shops_menu__WEBPACK_IMPORTED_MODULE_0__["KassaShopMenuItem"](menuItemConfig);
            }
        }
    };
    return MenuFactory;
}());



/***/ }),

/***/ "./src/app/layouts/widgets/sidebar/models/shops/shops.config.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layouts/widgets/sidebar/models/shops/shops.config.ts ***!
  \**********************************************************************/
/*! exports provided: SHOP_MENU_POSITION, SHOP_MENU_ITEM, SHOP_MENU_ITEM_WITH_SUB_MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP_MENU_POSITION", function() { return SHOP_MENU_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP_MENU_ITEM", function() { return SHOP_MENU_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP_MENU_ITEM_WITH_SUB_MENU", function() { return SHOP_MENU_ITEM_WITH_SUB_MENU; });
var SHOP_MENU_POSITION = 3;
var SHOP_MENU_ITEM = {
    code: 'shops',
    title: 'Магазины',
    icon: 'shop',
    path: '/shops-v2',
    build: 'delo',
    subMenuItems: [],
    matomo: {
        object: 'shops',
        label: 'Магазины_меню'
    }
};
var SHOP_MENU_ITEM_WITH_SUB_MENU = {
    code: 'shops',
    title: 'Магазины',
    icon: 'shop',
    subMenu: 'shops',
    build: 'delo',
    subMenuItems: [
        {
            code: 'TRADE',
            title: 'Торговый эквайринг',
            icon: '',
            path: '/acquiring/trade/landing',
            build: 'delo',
            gearIconPath: '/acquiring/trade/management',
            subMenuItems: [],
            matomo: {
                object: 'acquiring',
                label: 'Эквайринг_меню',
                click: 'sidebar'
            }
        },
        {
            code: 'ITRADE',
            title: 'Интернет-эквайринг',
            icon: '',
            path: '/acquiring/internet',
            build: 'delo',
            gearIconPath: '/acquiring/internet/management',
            subMenuItems: [],
            matomo: {
                object: 'acquiring',
                label: 'Эквайринг_меню',
                click: 'sidebar'
            }
        },
        {
            code: 'INVOICE',
            title: 'Выставление счетов',
            icon: '',
            path: '/shops',
            build: 'delo',
            subMenuItems: [],
            matomo: {
                object: 'shops',
                label: 'Магазины_меню',
                click: 'sidebar'
            }
        },
        {
            code: 'KASSA',
            title: 'Онлайн-касса',
            icon: '',
            path: '/retail',
            build: 'delo',
            gearIconPath: '/acquiring/kassa/management',
            subMenuItems: [],
            matomo: {
                object: 'kassa',
                label: 'Касса_меню',
                click: 'sidebar'
            }
        }
    ],
    matomo: {
        object: 'shops',
        label: 'Магазины_меню'
    }
};


/***/ }),

/***/ "./src/app/layouts/widgets/sidebar/models/shops/shops.menu.ts":
/*!********************************************************************!*\
  !*** ./src/app/layouts/widgets/sidebar/models/shops/shops.menu.ts ***!
  \********************************************************************/
/*! exports provided: isShopMenuItem, ShopMenuItem, TradeShopMenuItem, ITradeShopMenuItem, InvoiceShopMenuItem, KassaShopMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShopMenuItem", function() { return isShopMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopMenuItem", function() { return ShopMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeShopMenuItem", function() { return TradeShopMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITradeShopMenuItem", function() { return ITradeShopMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceShopMenuItem", function() { return InvoiceShopMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KassaShopMenuItem", function() { return KassaShopMenuItem; });
/* harmony import */ var _menu_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu-item */ "./src/app/layouts/widgets/sidebar/models/menu-item.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var isShopMenuItem = function (menuItem) {
    return ['shops', 'TRADE', 'ITRADE', 'INVOICE', 'KASSA'].includes(menuItem.code);
};
var ShopMenuItem = /** @class */ (function (_super) {
    __extends(ShopMenuItem, _super);
    function ShopMenuItem(config) {
        return _super.call(this, config) || this;
    }
    ShopMenuItem.prototype.showGearIconForSubmenu = function (code) {
        var subMenu = this.findMenuItem(code);
        if (subMenu) {
            subMenu.showGearIcon();
        }
    };
    ShopMenuItem.prototype.hideGearIconForSubmenu = function (code) {
        var subMenu = this.findMenuItem(code);
        if (subMenu) {
            subMenu.hideGearIcon();
        }
    };
    /**
     * Показать шестеренку
     */
    ShopMenuItem.prototype.showGearIcon = function () {
        if (this.isGearIconEnabled) {
            this.isShowGearIcon = true;
        }
    };
    /**
     * Скрыть шестеренку
     */
    ShopMenuItem.prototype.hideGearIcon = function () {
        if (this.isGearIconEnabled) {
            this.isShowGearIcon = false;
        }
    };
    ShopMenuItem.prototype.findMenuItem = function (code) {
        return this.subMenuItems.find(function (el) { return el.code === code; });
    };
    return ShopMenuItem;
}(_menu_item__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]));

var TradeShopMenuItem = /** @class */ (function (_super) {
    __extends(TradeShopMenuItem, _super);
    function TradeShopMenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TradeShopMenuItem.prototype, "isGearIconEnabled", {
        get: function () {
            return this.state === 'work';
        },
        enumerable: true,
        configurable: true
    });
    return TradeShopMenuItem;
}(ShopMenuItem));

var ITradeShopMenuItem = /** @class */ (function (_super) {
    __extends(ITradeShopMenuItem, _super);
    function ITradeShopMenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ITradeShopMenuItem.prototype, "isGearIconEnabled", {
        get: function () {
            return this.state === 'work';
        },
        enumerable: true,
        configurable: true
    });
    return ITradeShopMenuItem;
}(ShopMenuItem));

var InvoiceShopMenuItem = /** @class */ (function (_super) {
    __extends(InvoiceShopMenuItem, _super);
    function InvoiceShopMenuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isGearIconEnabled = false;
        return _this;
    }
    return InvoiceShopMenuItem;
}(ShopMenuItem));

var KassaShopMenuItem = /** @class */ (function (_super) {
    __extends(KassaShopMenuItem, _super);
    function KassaShopMenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(KassaShopMenuItem.prototype, "isGearIconEnabled", {
        get: function () {
            return this.state === 'work';
        },
        enumerable: true,
        configurable: true
    });
    return KassaShopMenuItem;
}(ShopMenuItem));



/***/ }),

/***/ "./src/app/matomo/matomo-injector.service.ts":
/*!***************************************************!*\
  !*** ./src/app/matomo/matomo-injector.service.ts ***!
  \***************************************************/
/*! exports provided: MatomoInjectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatomoInjectorService", function() { return MatomoInjectorService; });
/**
 * Service for injecting the Matomo tracker in the application.
 *
 * @export
 */
var MatomoInjectorService = /** @class */ (function () {
    /**
     * Creates an instance of MatomoInjector.
     *
     * @memberof MatomoInjector
     */
    function MatomoInjectorService() {
        window._paq = window._paq || [];
    }
    /**
     * Injects the Matomo tracker in the DOM.
     *
     * @param url: URL of the Matomo instance to connect to.
     * @param id: SiteId for this application/site.
     * @param usePiwikFileName
     * @memberof MatomoInjector
     */
    MatomoInjectorService.prototype.init = function (u, fileName, id) {
        var _this = this;
        // window._paq.push(['trackPageView']);
        window._paq.push(['enableLinkTracking']);
        (function () {
            // const u = url;
            // let fileName = 'stat';
            // if (usePiwikFileName) {
            //     fileName = 'piwik';
            // }
            window._paq.push(['setTrackerUrl', u + fileName + '.php']);
            if (id) {
                window._paq.push(['setSiteId', id]);
                _this.siteId = id;
            }
            // window._paq.push(['HeatmapSessionRecording::enableRecordMovements']);
            var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
            g.type = 'text/javascript';
            g.async = true;
            g.defer = true;
            g.src = u + fileName + '.js';
            s.parentNode.insertBefore(g, s);
            _this.inited = true;
        })();
    };
    return MatomoInjectorService;
}());



/***/ }),

/***/ "./src/app/matomo/matomo-tracker.service.ts":
/*!**************************************************!*\
  !*** ./src/app/matomo/matomo-tracker.service.ts ***!
  \**************************************************/
/*! exports provided: MatomoTrackerService, WithoutReferenceError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatomoTrackerService", function() { return MatomoTrackerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithoutReferenceError", function() { return WithoutReferenceError; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Wrapper for functions available for the Matomo Javascript tracker.
 *
 * @export
 */
// @dynamic
var MatomoTrackerService = /** @class */ (function () {
    // mainCategory: string;
    // timerSubscription: Subscription;
    /**
     * Creates an instance of MatomoTracker.
     *
     * @memberof MatomoTracker
     */
    function MatomoTrackerService() {
        this.events = [];
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.nameActionClick = 'click';
        this.nameActionHover = 'hover';
        this.nameActionInput = 'input';
        this.nameActionBlur = 'onblur';
        this.idTypeCustomer = 1;
        this.dateTimeBuild = 2;
        // if (typeof window._paq === 'undefined') {
        //     console.warn('Matomo has not yet been initialized! (Did you forget to inject it?)');
        // }
        // Observable.interval(1000)
        //     .pipe(
        //         takeUntil(this.destroy)
        //     )
        //     .subscribe(() => {
        //         const events = JSON.parse(JSON.stringify(this.events));
        //         this.events = [];
        //         for (let i = 0; i < events.length; ++i) {
        //             this.trackEvent(events[i].category, events[i].action, events[i].name, events[i].value);
        //         }
        //     });
    }
    MatomoTrackerService.prototype.ngOnDestroy = function () {
        this.destroy.next(true);
    };
    MatomoTrackerService.prototype.setTypeCustomer = function (type) {
        this.setCustomDimension(this.idTypeCustomer, type);
    };
    MatomoTrackerService.prototype.setDateTimeBuild = function (date) {
        this.setCustomDimension(this.dateTimeBuild, date);
    };
    MatomoTrackerService.prototype.addTrackEventInQueue = function (category, action, name, value) {
        this.events.push({
            category: category,
            action: action,
            name: name,
            value: value,
        });
        // if (this.timerSubscription) {
        //     this.timerSubscription.unsubscribe();
        //     this.timerSubscription = null;
        // }
        // this.timerSubscription = Observable.timer(1000)
        //     .pipe(
        //         takeUntil(this.destroy)
        //     )
        //     .subscribe(() => {
        //         console.log('subscribe')
        //         const event = JSON.parse(JSON.stringify(this.events));
        //         this.events = [];
        //         for (let i = 0; i < event.length; ++i) {
        //             this.trackEvent(event[i].category, event[i].action, event[i].name, event[i].value);
        //         }
        //     });
    };
    MatomoTrackerService.prototype.trackEventClick = function (category, objectName, label, value) {
        if (objectName) {
            objectName += '-' + this.nameActionClick;
        }
        else {
            objectName = this.nameActionClick;
        }
        this.trackEvent(category, objectName, label, value);
    };
    MatomoTrackerService.prototype.trackEventHover = function (category, objectName, label, value) {
        if (objectName) {
            objectName += '-' + this.nameActionHover;
        }
        else {
            objectName = this.nameActionHover;
        }
        this.trackEvent(category, objectName, label, value);
    };
    MatomoTrackerService.prototype.trackEventBlur = function (category, objectName, label, value) {
        if (objectName) {
            objectName += '-' + this.nameActionBlur;
        }
        else {
            objectName = this.nameActionBlur;
        }
        this.trackEvent(category, objectName, label, value);
    };
    MatomoTrackerService.prototype.trackEventInput = function (category, objectName, label, value) {
        if (objectName) {
            objectName += '-' + this.nameActionInput;
        }
        else {
            objectName = this.nameActionInput;
        }
        this.trackEvent(category, objectName, label, value);
    };
    /**
     * Logs an event with an event category (Videos, Music, Games...), an event action (Play, Pause, Duration,
     * Add Playlist, Downloaded, Clicked...), and an optional event name and optional numeric value.
     *
     * @param category
     * @param action
     * @param [name]
     * @param [value]
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.trackEvent = function (category, action, name, value) {
        if (!category) {
            return;
        }
        var args = [category, action];
        if (!!name) {
            args.push(name);
        }
        if (!!value) {
            args.push(value);
        }
        window._paq.push(['trackEvent'].concat(args));
    };
    /**
     * Logs a visit to this page.
     *
     * @param [customTitle]
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.trackPageView = function (customTitle) {
        var args = [];
        if (!!customTitle) {
            args.push(customTitle);
        }
        window._paq.push(['trackPageView'].concat(args));
    };
    /**
     * Logs an internal site search for a specific keyword, in an optional category,
     * specifying the optional count of search results in the page.
     *
     * @param keyword
     * @param [category]
     * @param [resultsCount]
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.trackSiteSearch = function (keyword, category, resultsCount) {
        if (!keyword) {
            return;
        }
        if (this.timerSearchSubscription) {
            this.timerSearchSubscription.unsubscribe();
            this.timerSearchSubscription = null;
        }
        this.timerSearchSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(400)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy))
            .subscribe(function () {
            var args = [keyword];
            if (!!category) {
                args.push(category);
            }
            if (!!resultsCount) {
                args.push(resultsCount);
            }
            window._paq.push(['trackSiteSearch'].concat(args));
        });
    };
    /**
     * Manually logs a conversion for the numeric goal ID, with an optional numeric custom revenue customRevenue.
     *
     * @param idGoal
     * @param [customRevenue]
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.trackGoal = function (idGoal, customRevenue) {
        var args = [idGoal];
        if (!!customRevenue) {
            args.push(customRevenue);
        }
        window._paq.push(['trackGoal'].concat(args));
    };
    /**
     * Manually logs a click from your own code.
     *
     * @param url: is the full URL which is to be tracked as a click.
     * @param linkType: can either be 'link' for an outlink or 'download' for a download.
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.trackLink = function (url, linkType) {
        var args = [url, linkType];
        window._paq.push(['trackLink'].concat(args));
    };
    /**
     * Scans the entire DOM for all content blocks and tracks all impressions once the DOM ready event has been triggered.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.trackAllContentImpressions = function () {
        window._paq.push(['trackAllContentImpressions']);
    };
    /**
     * Scans the entire DOM for all content blocks as soon as the page is loaded.
     * It tracks an impression only if a content block is actually visible.
     *
     * @param checkOnScroll
     * @param timeIntervalInMs
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.trackVisibleContentImpressions = function (checkOnScroll, timeIntervalInMs) {
        var args = [checkOnScroll, timeIntervalInMs];
        window._paq.push(['trackVisibleContentImpressions'].concat(args));
    };
    /**
     * Scans the given DOM node and its children for content blocks and tracks an impression for them
     * if no impression was already tracked for it.
     *
     * @param domNode
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.trackContentImpressionsWithinNode = function (domNode) {
        var args = [domNode];
        window._paq.push(['trackContentImpressionsWithinNode'].concat(args));
    };
    /**
     * Tracks an interaction with the given DOM node / content block.
     *
     * @param domNode
     * @param contentInteraction
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.trackContentInteractionNode = function (domNode, contentInteraction) {
        var args = [domNode, contentInteraction];
        window._paq.push(['trackContentInteractionNode'].concat(args));
    };
    /**
     * Tracks a content impression using the specified values.
     *
     * @param contentName
     * @param contentPiece
     * @param contentTarget
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.trackContentImpression = function (contentName, contentPiece, contentTarget) {
        var args = [contentName, contentPiece, contentTarget];
        window._paq.push(['trackContentImpression'].concat(args));
    };
    /**
     * Tracks a content interaction using the specified values.
     *
     * @param contentInteraction
     * @param contentName
     * @param contentPiece
     * @param contentTarget
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.trackContentInteraction = function (contentInteraction, contentName, contentPiece, contentTarget) {
        var args = [contentInteraction, contentName, contentPiece, contentTarget];
        window._paq.push(['trackContentInteraction'].concat(args));
    };
    /**
     * Logs all found content blocks within a page to the console. This is useful to debug / test content tracking.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.logAllContentBlocksOnPage = function () {
        window._paq.push(['logAllContentBlocksOnPage']);
    };
    /**
     * Installs link tracking on all applicable link elements.
     * Set the enable parameter to true to use pseudo click-handler (treat middle click and open contextmenu as left click).
     * A right click (or any click that opens the context menu) on a link will be tracked as clicked even if "Open in new tab"
     * is not selected. If "false" (default), nothing will be tracked on open context menu or middle click.
     *
     * @param enable
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.enableLinkTracking = function (enable) {
        var args = [enable];
        window._paq.push(['enableLinkTracking'].concat(args));
    };
    /**
     * Install a Heart beat timer that will regularly send requests to Matomo in order to better measure the time spent on the page.
     * These requests will be sent only when the user is actively viewing the page( when the tab is active and in focus).
     * These requests will not track additional actions or pageviews.
     * By default, delayInSeconds is set to 15 seconds.
     *
     * @param delayInSeconds
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.enableHeartBeatTimer = function (delayInSeconds) {
        var args = [delayInSeconds];
        window._paq.push(['enableHeartBeatTimer'].concat(args));
    };
    /**
     * Enables cross domain linking. By default, the visitor ID that identifies a unique visitor is stored in the browser's
     * first party cookies. This means the cookie can only be accessed by pages on the same domain. If you own multiple domains and
     * would like to track all the actions and pageviews of a specific visitor into the same visit, you may enable cross domain
     * linking (learn more) . Whenever a user clicks on a link it will append a URL parameter pk_vid to the clicked URL which forwards
     * the current visitor ID value to the page of the different domain.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.enableCrossDomainLinking = function () {
        window._paq.push(['enableCrossDomainLinking']);
    };
    /**
     * By default, the two visits across domains will be linked together when the link is clicked and the page is loaded within
     * a 180 seconds timeout window.
     *
     * @param timeout
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setCrossDomainLinkingTimeout = function (timeout) {
        var args = [timeout];
        window._paq.push(['setCrossDomainLinkingTimeout'].concat(args));
    };
    /**
     * Overrides document.title
     *
     * @param title
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setDocumentTitle = function (title) {
        var args = [title];
        window._paq.push(['setDocumentTitle'].concat(args));
    };
    /**
     * Sets array of hostnames or domains to be treated as local.
     * For wildcard subdomains, you can use: setDomains('.example.com'); or setDomains('*.example.com');.
     * You can also specify a path along a domain: setDomains('*.example.com/subsite1');
     *
     * @param domains
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setDomains = function (domains) {
        var args = [domains];
        window._paq.push(['setDomains'].concat(args));
    };
    /**
     * Override the page's reported URL.
     *
     * @param url
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setCustomUrl = function (url) {
        var args = [url];
        window._paq.push(['setCustomUrl'].concat(args));
    };
    /**
     * Overrides the detected Http-Referer.
     *
     * @param url
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setReferrerUrl = function (url) {
        var args = [url];
        window._paq.push(['setReferrerUrl'].concat(args));
    };
    /**
     * Specifies the website ID.
     * Redundant: can be specified in getTracker() constructor.
     *
     * @param siteId
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setSiteId = function (siteId) {
        var args = [siteId];
        window._paq.push(['setSiteId'].concat(args));
    };
    /**
     * Specify the Matomo HTTP API URL endpoint. Points to the root directory of piwik,
     * e.g. http://piwik.example.org/ or https://example.org/piwik/.
     * This function is only useful when the 'Overlay' report is not working.
     * By default, you do not need to use this function.
     *
     * @param url
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setApiUrl = function (url) {
        var args = [url];
        window._paq.push(['setApiUrl'].concat(args));
    };
    /**
     * Specifies the Matomo server URL.
     * Redundant: can be specified in getTracker() constructor.
     *
     * @param url
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setTrackerUrl = function (url) {
        var args = [url];
        window._paq.push(['setTrackerUrl'].concat(args));
    };
    /**
     * Returns the Matomo server URL.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.getPiwikUrl = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            window._paq.push([function () { return observer.next(window.Piwik.getTracker().getPiwikUrl()); }]);
        });
    };
    /**
     * Returns the current url of the page that is currently being visited.
     * If a custom URL was set before calling this method, the custom URL will be returned.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.getCurrentUrl = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            window._paq.push([function () { return observer.next(window.Piwik.getTracker().getCurrentUrl()); }]);
        });
    };
    /**
     * Sets classes to be treated as downloads (in addition to piwik_download).
     *
     * @param classes
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setDownloadClasses = function (classes) {
        var args = [classes];
        window._paq.push(['setDownloadClasses'].concat(args));
    };
    /**
     * Sets list of file extensions to be recognized as downloads.
     * Example: 'doc' or['doc', 'xls'].
     *
     * @param extensions
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setDownloadExtensions = function (extensions) {
        var args = [extensions];
        window._paq.push(['setDownloadClasses'].concat(args));
    };
    /**
     * Sets additional file extensions to be recognized as downloads.
     * Example: 'doc' or['doc', 'xls'].
     *
     * @param extensions
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.addDownloadExtensions = function (extensions) {
        var args = [extensions];
        window._paq.push(['setDownloadClasses'].concat(args));
    };
    /**
     * Sets file extensions to be removed from the list of download file extensions.
     * Example: 'doc' or['doc', 'xls'].
     *
     * @param extensions
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.removeDownloadExtensions = function (extensions) {
        var args = [extensions];
        window._paq.push(['setDownloadClasses'].concat(args));
    };
    /**
     * Sets classes to be ignored if present in link (in addition to piwik_ignore).
     *
     * @param classes
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setIgnoreClasses = function (classes) {
        var args = [classes];
        window._paq.push(['setDownloadClasses'].concat(args));
    };
    /**
     * Set classes to be treated as outlinks (in addition to piwik_link).
     *
     * @param classes
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setLinkClasses = function (classes) {
        var args = [classes];
        window._paq.push(['setDownloadClasses'].concat(args));
    };
    /**
     * Set delay for link tracking (in milliseconds).
     *
     * @param delay
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setLinkTrackingTimer = function (delay) {
        var args = [delay];
        window._paq.push(['setLinkTrackingTimer'].concat(args));
    };
    /**
     * Returns delay for link tracking (in milliseconds).
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.getLinkTrackingTimer = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            window._paq.push([function () { return observer.next(window.Piwik.getTracker().getLinkTrackingTimer()); }]);
        });
    };
    /**
     * Set to true to not record the hash tag (anchor) portion of URLs
     *
     * @param value
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.discardHashTag = function (value) {
        var args = [value];
        window._paq.push(['discardHashTag'].concat(args));
    };
    /**
     * By default Matomo uses the browser DOM Timing API to accurately determine the time it takes to generate and download
     * the page. You may overwrite the value by specifying a milliseconds value here.
     *
     * @param generationTime
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setGenerationTimeMs = function (generationTime) {
        var args = [generationTime];
        window._paq.push(['setGenerationTimeMs'].concat(args));
    };
    /**
     * Appends a custom string to the end of the HTTP request to piwik.php?
     *
     * @param appendToUrl
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.appendToTrackingUrl = function (appendToUrl) {
        var args = [appendToUrl];
        window._paq.push(['appendToTrackingUrl'].concat(args));
    };
    /**
     * Set to true to not track users who opt out of tracking using Mozilla's (proposed) Do Not Track setting.
     *
     * @param doNotTrack
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setDoNotTrack = function (doNotTrack) {
        var args = [doNotTrack];
        window._paq.push(['setDoNotTrack'].concat(args));
    };
    /**
     * Enables a frame-buster to prevent the tracked web page from being framed/iframed.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.killFrame = function () {
        window._paq.push(['killFrame']);
    };
    /**
     * Forces the browser load the live URL if the tracked web page is loaded from a local file (e.g., saved to someone's desktop).
     *
     * @param url
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.redirectFile = function (url) {
        var args = [url];
        window._paq.push(['redirectFile'].concat(args));
    };
    /**
     * Records how long the page has been viewed if the minimumVisitLength (in seconds) is attained;
     * the heartBeatDelay determines how frequently to update the server
     *
     * @param minimumVisitLength
     * @param heartBeatDelay
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setHeartBeatTimer = function (minimumVisitLength, heartBeatDelay) {
        var args = [minimumVisitLength, heartBeatDelay];
        window._paq.push(['setHeartBeatTimer'].concat(args));
    };
    /**
     * Returns the 16 characters ID for the visitor
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.getVisitorId = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            window._paq.push([function () { return observer.next(window.Piwik.getTracker().getVisitorId()); }]);
        });
    };
    /**
     * Returns the visitor cookie contents in an array
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.getVisitorInfo = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            window._paq.push([function () { return observer.next(window.Piwik.getTracker().getVisitorInfo()); }]);
        });
    };
    /**
     * Returns the visitor attribution array (Referer information and / or Campaign name & keyword).
     * Attribution information is used by Matomo to credit the correct referrer (first or last referrer)
     * used when a user triggers a goal conversion.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.getAttributionInfo = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            window._paq.push([function () { return observer.next(window.Piwik.getTracker().getAttributionInfo()); }]);
        });
    };
    /**
     * Returns the attribution campaign name.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.getAttributionCampaignName = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            window._paq.push([
                function () { return observer.next(window.Piwik.getTracker().getAttributionCampaignName()); }
            ]);
        });
    };
    /**
     * Returns the attribution campaign keyword.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.getAttributionCampaignKeyword = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            window._paq.push([
                function () { return observer.next(window.Piwik.getTracker().getAttributionCampaignKeyword()); }
            ]);
        });
    };
    /**
     * Returns the attribution referrer timestamp.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.getAttributionReferrerTimestamp = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            window._paq.push([
                function () { return observer.next(window.Piwik.getTracker().getAttributionReferrerTimestamp()); }
            ]);
        });
    };
    /**
     * Returns the attribution referrer URL.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.getAttributionReferrerUrl = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            window._paq.push([
                function () { return observer.next(window.Piwik.getTracker().getAttributionReferrerUrl()); }
            ]);
        });
    };
    /**
     *  Returns the User ID string if it was set.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.getUserId = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            window._paq.push([function () { return observer.next(window.Piwik.getTracker().getUserId()); }]);
        });
    };
    /**
     * Sets a User ID to this user (such as an email address or a username).
     *
     * @param userId
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setUserId = function (userId) {
        var args = [userId];
        window._paq.push(['setUserId'].concat(args));
    };
    // resetUserId - не работает
    // /**
    //  * Resets the User ID which also generates a new Visitor ID.
    //  *
    //  * @memberof MatomoTracker
    //  */
    // @WithoutReferenceError()
    // resetUserId(): void {
    //       window._paq.push(['resetUserId']);
    // }
    /**
     * Sets a custom variable.
     *
     * @param index: Index, the number from 1 to 5 where this custom variable name is stored for the current page view
     * @param name: Name, the name of the variable, for example: Category, Sub-category, UserType
     * @param value: Value, for example: "Sports", "News", "World", "Business", etc.
     * @param scope: Scope of the custom variable, "page" means the custom variable applies to the current page view
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setCustomVariable = function (index, name, value, scope) {
        var args = [index, name, value, scope];
        window._paq.push(['setCustomVariable'].concat(args));
    };
    /**
     * Deletes a custom variable.
     *
     * @param index
     * @param scope
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.deleteCustomVariable = function (index, scope) {
        var args = [index, scope];
        window._paq.push(['deleteCustomVariable'].concat(args));
    };
    /**
     * Retrieves a custom variable.
     *
     * @param index
     * @param scope
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.getCustomVariable = function (index, scope) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            window._paq.push([
                function () { return observer.next(window.Piwik.getTracker().getCustomVariable(index, scope)); }
            ]);
        });
    };
    /**
     * When called then the Custom Variables of scope "visit" will be stored (persisted) in a first party cookie
     * for the duration of the visit. This is useful if you want to call getCustomVariable later in the visit.
     * (by default custom variables are not stored on the visitor's computer.)
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.storeCustomVariablesInCookie = function () {
        window._paq.push(['storeCustomVariablesInCookie']);
    };
    /**
     * Sets a custom dimension.
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * @param customDimensionId
     * @param customDimensionValue
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setCustomDimension = function (customDimensionId, customDimensionValue) {
        var args = [customDimensionId, customDimensionValue];
        window._paq.push(['setCustomDimension'].concat(args));
    };
    /**
     * Deletes a custom dimension.
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * @param customDimensionId
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.deleteCustomDimension = function (customDimensionId) {
        var args = [customDimensionId];
        window._paq.push(['deleteCustomDimension'].concat(args));
    };
    /**
     * Retrieve a custom dimension.
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * @param customDimensionId
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.getCustomDimension = function (customDimensionId) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            window._paq.push([
                function () { return observer.next(window.Piwik.getTracker().getCustomDimension(customDimensionId)); }
            ]);
        });
    };
    /**
     * Sets campaign name parameter(s).
     *
     * @param name
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setCampaignNameKey = function (name) {
        var args = [name];
        window._paq.push(['setCampaignNameKey'].concat(args));
    };
    /**
     * Sets campaign keyword parameter(s).
     *
     * @param keyword
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setCampaignKeywordKey = function (keyword) {
        var args = [keyword];
        window._paq.push(['setCampaignKeywordKey'].concat(args));
    };
    /**
     * Set to true to attribute a conversion to the first referrer.
     * By default, conversion is attributed to the most recent referrer.
     *
     * @param conversionToFirstReferrer
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setConversionAttributionFirstReferrer = function (conversionToFirstReferrer) {
        var args = [conversionToFirstReferrer];
        window._paq.push(['setConversionAttributionFirstReferrer'].concat(args));
    };
    /**
     * Sets the current page view as a product or category page view.
     * When you call setEcommerceView it must be followed by a call to trackPageView to record the product or category page view.
     *
     * @param productSKU
     * @param productName
     * @param categoryName
     * @param price
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setEcommerceView = function (productSKU, productName, categoryName, price) {
        var args = [productSKU, productName, categoryName, price];
        window._paq.push(['setEcommerceView'].concat(args));
    };
    /**
     * Adds a product into the ecommerce order.Must be called for each product in the order.
     *
     * @param productSKU
     * @param [productName]
     * @param [productCategory]
     * @param [price]
     * @param [quantity]
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.addEcommerceItem = function (productSKU, productName, productCategory, price, quantity) {
        var args = [productSKU];
        if (!!productName) {
            args.push(productName);
        }
        if (!!productCategory) {
            args.push(productCategory);
        }
        if (!!price) {
            args.push(price);
        }
        if (!!quantity) {
            args.push(quantity);
        }
        window._paq.push(['addEcommerceItem'].concat(args));
    };
    /**
     * Tracks a shopping cart.Call this javascript function every time a user is adding, updating or deleting a product from the cart.
     *
     * @param grandTotal
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.trackEcommerceCartUpdate = function (grandTotal) {
        var args = [grandTotal];
        window._paq.push(['trackEcommerceCartUpdate'].concat(args));
    };
    /**
     * Tracks an Ecommerce order, including any ecommerce item previously added to the order.
     * orderId and grandTotal (ie.revenue) are required parameters.
     *
     * @param orderId
     * @param grandTotal
     * @param [subTotal]
     * @param [tax]
     * @param [shipping]
     * @param [discount]
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.trackEcommerceOrder = function (orderId, grandTotal, subTotal, tax, shipping, discount) {
        var args = [orderId, grandTotal];
        if (!!subTotal) {
            args.push(subTotal);
        }
        if (!!tax) {
            args.push(tax);
        }
        if (!!shipping) {
            args.push(shipping);
        }
        if (!!discount) {
            args.push(discount);
        }
        window._paq.push(['trackEcommerceOrder'].concat(args));
    };
    /**
     * Disables all first party cookies. Existing Matomo cookies for this websites will be deleted on the next page view.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.disableCookies = function () {
        window._paq.push(['disableCookies']);
    };
    /**
     * Deletes the tracking cookies currently set (useful when creating new visits).
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.deleteCookies = function () {
        window._paq.push(['deleteCookies']);
    };
    /**
     * Returns whether cookies are enabled and supported by this browser.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.hasCookies = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            window._paq.push([function () { return observer.next(window.Piwik.getTracker().hasCookies()); }]);
        });
    };
    /**
     * Sets the tracking cookie name prefix.
     * Default prefix is 'pk'.
     *
     * @param prefix
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setCookieNamePrefix = function (prefix) {
        var args = [prefix];
        window._paq.push(['setCookieNamePrefix'].concat(args));
    };
    /**
     * Sets the domain of the tracking cookies.
     * Default is the document domain.
     * If your website can be visited at both www.example.com and example.com, you would use: '.example.com' or '*.example.com'.
     *
     * @param domain
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setCookieDomain = function (domain) {
        var args = [domain];
        window._paq.push(['setCookieDomain'].concat(args));
    };
    /**
     * Sets the path of the tracking cookies.
     * Default is '/'.
     *
     * @param path
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setCookiePath = function (path) {
        var args = [path];
        window._paq.push(['setCookiePath'].concat(args));
    };
    /**
     * Set to true to enable the Secure cookie flag on all first party cookies.This should be used when your website is only available
     * under HTTPS so that all tracking cookies are always sent over secure connection.
     *
     * @param secure
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setSecureCookie = function (secure) {
        var args = [secure];
        window._paq.push(['setSecureCookie'].concat(args));
    };
    /**
     * Sets the visitor cookie timeout.
     * Default is 13 months.
     *
     * @param seconds
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setVisitorCookieTimeout = function (seconds) {
        var args = [seconds];
        window._paq.push(['setVisitorCookieTimeout'].concat(args));
    };
    /**
     * Sets the referral cookie timeout.
     * Default is 6 months.
     *
     * @param seconds
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setReferralCookieTimeout = function (seconds) {
        var args = [seconds];
        window._paq.push(['setReferralCookieTimeout'].concat(args));
    };
    /**
     * Sets the session cookie timeout.
     * Default is 30 minutes.
     *
     * @param seconds
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setSessionCookieTimeout = function (seconds) {
        var args = [seconds];
        window._paq.push(['setSessionCookieTimeout'].concat(args));
    };
    /**
     *  Adds a click listener to a specific link element. When clicked, Matomo will log the click automatically.
     *
     * @param element
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.addListener = function (element) {
        var args = [element];
        window._paq.push(['addListener'].concat(args));
    };
    /**
     * Sets the request method to either "GET" or "POST". (The default is "GET".)
     * To use the POST request method, either:
     * 1) the Matomo host is the same as the tracked website host (Matomo installed in the same domain as your tracked website), or
     * 2) if Matomo is not installed on the same host as your website, you need to enable CORS (Cross domain requests).
     *
     * @param method
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setRequestMethod = function (method) {
        var args = [method];
        window._paq.push(['setRequestMethod'].concat(args));
    };
    /**
     * Sets a function that will process the request content.
     * The function will be called once the request (query parameters string) has been prepared, and before the request content is sent.
     *
     * @param callback
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setCustomRequestProcessing = function (callback) {
        var args = [callback];
        window._paq.push(['setCustomRequestProcessing'].concat(args));
    };
    /**
     * Sets request Content-Type header value.
     * Applicable when "POST" request method is used via setRequestMethod.
     *
     * @param contentType
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setRequestContentType = function (contentType) {
        var args = [contentType];
        window._paq.push(['setRequestContentType'].concat(args));
    };
    /**
     * Allows you to completely disable the tracking of any Heatmap or Session Recording data. This is useful if you for example manage
     * multiple websites in your Matomo and there are some websites where you do not want to track any such activities. It is recommended
     * to call this method as early in your tracking code as possible or during the piwikHeatmapSessionRecordingAsyncInit method.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.disableHeatmapSessionRecording = function () {
        window._paq.push(['HeatmapSessionRecording::disable']);
    };
    /**
     * If you have disabled the tracking of heatmap and session activities via disable(),
     * you can enable it at a later point via this method.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.enableHeatmapSessionRecording = function () {
        window._paq.push(['HeatmapSessionRecording::enable']);
    };
    /**
     * To support single-page websites and web applications out of the box, Heatmap & Session Recording will automatically
     * detect a new page view when you call the trackPageView method. This applies if you call trackPageView several times
     * without an actual page reload. Matomo will after each call of trackPageView stop the recording of any activities
     * and re-evaluate based on the new URL whether if it should record activities for the new page or not.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.disableAutoDetectNewPageView = function () {
        window._paq.push(['HeatmapSessionRecording::disableAutoDetectNewPageView']);
    };
    /**
     * The automatic detection of new page views is enabled by default. If you disable the auto detection,
     * you can enable it again at a later point using this method.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.enableAutoDetectNewPageView = function () {
        window._paq.push(['HeatmapSessionRecording::enableAutoDetectNewPageView']);
    };
    /**
     * By default, mouse and touch movements will be recorded as they are needed for the "Move Heatmap" and to show
     * mouse movements when replaying a recorded session. You can disable the recording of any movements by calling this method.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.disableRecordMovements = function () {
        window._paq.push(['HeatmapSessionRecording::disableRecordMovements']);
    };
    /**
     * The recording of mouse and touch movements is enabled by default, see above. If you disable mouse movements,
     * you can enable them again at a later point by using this method.
     *
     * * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.enableRecordMovements = function () {
        window._paq.push(['HeatmapSessionRecording::enableRecordMovements']);
    };
    /**
     * If you have disabled the automatic detection of new page views, this method lets you define manually when a visitor views a new page.
     * This means if a recording is currently active, it will be stopped and depending on the changed URL a new recording may be started.
     * If you want to prevent a new recording to be started, or if you want to configure manually whether a new recording should be started,
     * set fetchConfig = false.
     *
     * @param fetchConfig
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setNewPageView = function (fetchConfig) {
        window._paq.push(['HeatmapSessionRecording::setNewPageView', fetchConfig]);
    };
    /**
     * By default, the activities of a visitor is only recorded for up to 10 minutes in a single page view.
     * If you want to record activities for a longer or shorter period, you can change the limit using this method.
     *
     * @param seconds
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setMaxCaptureTime = function (seconds) {
        window._paq.push(['HeatmapSessionRecording::setMaxCaptureTime', seconds]);
    };
    /**
     * By default, when a user enters text into a form field, we truncate any entered text after 500 characters.
     * If you wanted to record more characters, you can define another limit using this method.
     *
     * @param maxLengthCharacters
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setMaxTextInputLength = function (maxLengthCharacters) {
        window._paq.push(['HeatmapSessionRecording::setMaxTextInputLength', maxLengthCharacters]);
    };
    /**
     * When you configure a new session recording in Matomo, you can choose whether keystrokes should be recorded or not. If enabled,
     * keystrokes that are entered by a user into text form elements will be recorded and replayed later in the recorded session.
     * If you want to make sure to never record any keystrokes entered by your users, call this method.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.disableCaptureKeystrokes = function () {
        window._paq.push(['HeatmapSessionRecording::disableCaptureKeystrokes']);
    };
    /**
     * Lets you enable the recording of keystrokes. When you call this method, the capturing of keystrokes will be enabled even
     * if you configured the session recording in Matomo to not capture keystrokes.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.enableCaptureKeystrokes = function () {
        window._paq.push(['HeatmapSessionRecording::enableCaptureKeystrokes']);
    };
    /**
     * Lets you customize whether a heatmap or session should be recorded. This lets you for example restrict the recording of activities
     * to certain target groups, to certain times, to certain locations, and more.
     *
     * @param triggerFunc
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.setTrigger = function (triggerFunc) {
        window._paq.push(['HeatmapSessionRecording::setTrigger', triggerFunc]);
    };
    /**
     * When you configure a Heatmap or a Session Recording in Matomo, you can define page rules based on URL, URL path and URL parameters to
     * limit the recording to certain pages. By default, these rules are matched against the current browser URL. If you track custom URLs
     * using the setCustomUrl() tracker method and want to apply the configured rules against a possibly set custom URL, call this method.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.matchTrackerUrl = function () {
        window._paq.push(['HeatmapSessionRecording::matchTrackerUrl']);
    };
    /**
     * Enables the debug mode that logs debug information to the developer console of your browser.
     * This should not be enabled in production.
     *
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.enableDebugMode = function () {
        window._paq.push(['HeatmapSessionRecording::enableDebugMode']);
    };
    /**
     * By default, Heatmap & Session Recording configures itself by issuing an HTTP request to your Matomo installation to detect
     * automatically whether any activities should be recorded on the current page. This way you don't need to change your website
     * when you configure new heatmaps or session recordings. This HTTP request is executed on each page view and may add some load
     * to your server. If you want to instead configure manually when to record a heatmap or a session, you can do this calling this
     * method. Please note that you will need to change the tracking code on your website manually if you want to stop or start
     * recording a session or a heatmap. You will also need to detect manually whether a page should be a recorded for example based
     * on its URL. As a benefit of this, it saves you an HTTP request on each page view.
     *
     * @param config
     * @memberof MatomoTracker
     */
    MatomoTrackerService.prototype.addHeatmapSessionRecordingConfig = function (config) {
        window._paq.push(['HeatmapSessionRecording.addConfig', config]);
    };
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, Number]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "trackEvent", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "trackPageView", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Number]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "trackSiteSearch", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "trackGoal", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "trackLink", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "trackAllContentImpressions", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean, Number]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "trackVisibleContentImpressions", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Node]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "trackContentImpressionsWithinNode", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Node, String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "trackContentInteractionNode", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "trackContentImpression", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "trackContentInteraction", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "logAllContentBlocksOnPage", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "enableLinkTracking", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "enableHeartBeatTimer", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "enableCrossDomainLinking", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setCrossDomainLinkingTimeout", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setDocumentTitle", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setDomains", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setCustomUrl", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setReferrerUrl", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setSiteId", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setApiUrl", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setTrackerUrl", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], MatomoTrackerService.prototype, "getPiwikUrl", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], MatomoTrackerService.prototype, "getCurrentUrl", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setDownloadClasses", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setDownloadExtensions", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "addDownloadExtensions", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "removeDownloadExtensions", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setIgnoreClasses", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setLinkClasses", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setLinkTrackingTimer", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], MatomoTrackerService.prototype, "getLinkTrackingTimer", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "discardHashTag", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setGenerationTimeMs", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "appendToTrackingUrl", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setDoNotTrack", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "killFrame", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "redirectFile", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setHeartBeatTimer", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], MatomoTrackerService.prototype, "getVisitorId", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], MatomoTrackerService.prototype, "getVisitorInfo", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], MatomoTrackerService.prototype, "getAttributionInfo", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], MatomoTrackerService.prototype, "getAttributionCampaignName", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], MatomoTrackerService.prototype, "getAttributionCampaignKeyword", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], MatomoTrackerService.prototype, "getAttributionReferrerTimestamp", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], MatomoTrackerService.prototype, "getAttributionReferrerUrl", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], MatomoTrackerService.prototype, "getUserId", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setUserId", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String, String, String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setCustomVariable", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "deleteCustomVariable", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], MatomoTrackerService.prototype, "getCustomVariable", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "storeCustomVariablesInCookie", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setCustomDimension", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "deleteCustomDimension", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], MatomoTrackerService.prototype, "getCustomDimension", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setCampaignNameKey", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setCampaignKeywordKey", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setConversionAttributionFirstReferrer", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, Number]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setEcommerceView", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, Number, Number]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "addEcommerceItem", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "trackEcommerceCartUpdate", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number, Number, Number, Number, Number]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "trackEcommerceOrder", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "disableCookies", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "deleteCookies", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], MatomoTrackerService.prototype, "hasCookies", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setCookieNamePrefix", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setCookieDomain", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setCookiePath", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setSecureCookie", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setVisitorCookieTimeout", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setReferralCookieTimeout", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setSessionCookieTimeout", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Element]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "addListener", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setRequestMethod", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setCustomRequestProcessing", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setRequestContentType", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "disableHeatmapSessionRecording", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "enableHeatmapSessionRecording", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "disableAutoDetectNewPageView", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "enableAutoDetectNewPageView", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "disableRecordMovements", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "enableRecordMovements", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setNewPageView", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setMaxCaptureTime", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setMaxTextInputLength", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "disableCaptureKeystrokes", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "enableCaptureKeystrokes", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "setTrigger", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "matchTrackerUrl", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "enableDebugMode", null);
    __decorate([
        WithoutReferenceError(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MatomoTrackerService.prototype, "addHeatmapSessionRecordingConfig", null);
    return MatomoTrackerService;
}());

function WithoutReferenceError() {
    return function (target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (window._paq) {
                try {
                    return originalMethod.apply(this, args);
                }
                catch (e) {
                    if (!(e instanceof ReferenceError)) {
                        throw e;
                    }
                }
            }
        };
        return descriptor;
    };
}


/***/ }),

/***/ "./src/app/matomo/matomo.module.ts":
/*!*****************************************!*\
  !*** ./src/app/matomo/matomo.module.ts ***!
  \*****************************************/
/*! exports provided: MatomoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatomoModule", function() { return MatomoModule; });
var MatomoModule = /** @class */ (function () {
    function MatomoModule() {
    }
    return MatomoModule;
}());



/***/ }),

/***/ "./src/app/pipe/pipe.module.ts":
/*!*************************************!*\
  !*** ./src/app/pipe/pipe.module.ts ***!
  \*************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    return PipeModule;
}());



/***/ }),

/***/ "./src/app/routing/module-loading.service.ts":
/*!***************************************************!*\
  !*** ./src/app/routing/module-loading.service.ts ***!
  \***************************************************/
/*! exports provided: ModuleLoadingService, ModuleLoadingState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleLoadingService", function() { return ModuleLoadingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleLoadingState", function() { return ModuleLoadingState; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var ModuleLoadingService = /** @class */ (function () {
    function ModuleLoadingService(router) {
        this.router = router;
        this.modules = [];
        this.modulesState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    Object.defineProperty(ModuleLoadingService.prototype, "isLoaded", {
        get: function () {
            return this.modules.reduce(function (state, module) {
                return module.loaded && state;
            }, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModuleLoadingService.prototype, "allModulesCount", {
        get: function () {
            return this.modules.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModuleLoadingService.prototype, "loadedModulesCount", {
        get: function () {
            return this.modules.filter(function (module) {
                return module.loaded;
            }).length;
        },
        enumerable: true,
        configurable: true
    });
    ModuleLoadingService.prototype.enable = function () {
        var _this = this;
        this.subscription = this.router.events.subscribe(function (e) { return _this.observer(e); });
    };
    ModuleLoadingService.prototype.disable = function () {
        this.subscription.unsubscribe();
    };
    ModuleLoadingService.prototype.reset = function () {
        this.modules = [];
    };
    ModuleLoadingService.prototype.load = function (key) {
        var moduleState = this.getModuleState(key);
        moduleState.attempts++;
        moduleState.state = 'loading';
        this.modulesState$.next(true);
    };
    ModuleLoadingService.prototype.done = function (key) {
        var moduleState = this.getModuleState(key);
        moduleState.loaded = true;
        moduleState.state = 'loaded';
        this.modulesState$.next(true);
    };
    ModuleLoadingService.prototype.fail = function (key) {
        var moduleState = this.getModuleState(key);
        moduleState.fails++;
        moduleState.state = 'failed';
        this.modulesState$.next(true);
    };
    ModuleLoadingService.prototype.observer = function (event) {
        var _this = this;
        // Когда загрузка модуля инициирована по переходу, нужно сохранить индекс перехода,
        // чтобы потом обработать ошибку, связанную с загрузкой
        if ((event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"])) {
            this.currentEventId = event.id;
            this.currentEventKey = null;
            // Загрузка модуля
        }
        else if ((event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouteConfigLoadStart"]) || (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouteConfigLoadEnd"])) {
            var key_1 = event.route.loadChildren;
            // Загрузка модуля инициирована по переходу, нужно сохранить ключ
            if (this.currentEventId && !this.currentEventKey) {
                this.currentEventKey = key_1;
                // Так не должно происходить
            }
            else if (this.currentEventId && this.currentEventKey && this.currentEventKey !== key_1) {
                // throw new Error('Нарушение последовательности событий при загрузке модулей!');
            }
            if ((event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouteConfigLoadStart"])) {
                this.load(key_1);
            }
            else if ((event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouteConfigLoadEnd"])) {
                // событие RouteConfigLoadEnd вызывается до того, как конфиг парсится
                setTimeout(function () {
                    var loadedConfig = event.route._loadedConfig;
                    for (var _i = 0, _a = loadedConfig.routes; _i < _a.length; _i++) {
                        var route = _a[_i];
                        if (route.hasOwnProperty('loadChildren')) {
                            _this.getModuleState(route.loadChildren);
                        }
                    }
                    _this.done(key_1);
                });
            }
            // Завершение перехода
        }
        else if ((event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) || (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationCancel"])) {
            this.currentEventId = null;
            this.currentEventKey = null;
            // Ошибка перехода
        }
        else if ((event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationError"])) {
            if (event.error && event.error.hasOwnProperty('message') && event.error.message) {
                // Проверка текста ошибки на ошибку загрузки
                var matches = event.error.message.match(/Loading chunk (\d+) failed/)
                    || event.error.message.match(/Cannot read property 'routes' of undefined/);
                // Когда произошла ошибка загрузки и ключ загружаемого модуля был сохранён
                if (matches) {
                    if (this.currentEventKey && this.currentEventId === event.id) {
                        this.fail(this.currentEventKey);
                    }
                }
                else {
                    console.group('Navigation Error');
                    console.error(event.error);
                    console.groupEnd();
                    // throw new Error(event.error);
                }
            }
            // В любом случае ошибка завершает переход
            this.currentEventId = null;
            this.currentEventKey = null;
        }
    };
    /**
     * Возвращает объект состояния по ключу
     * @param key
     * @returns {any}
     */
    ModuleLoadingService.prototype.getModuleState = function (key) {
        var moduleStates = this.modules.filter(function (state) {
            return state.module === key;
        });
        if (moduleStates.length) {
            return moduleStates[0];
        }
        var moduleState = new ModuleLoadingState();
        moduleState.module = key;
        this.modules.push(moduleState);
        return moduleState;
    };
    return ModuleLoadingService;
}());

var ModuleLoadingState = /** @class */ (function () {
    function ModuleLoadingState() {
        this.loaded = false;
        this.attempts = 0;
        this.fails = 0;
        this.state = 'init';
    }
    return ModuleLoadingState;
}());



/***/ }),

/***/ "./src/app/routing/module-preloading.handler.ts":
/*!******************************************************!*\
  !*** ./src/app/routing/module-preloading.handler.ts ***!
  \******************************************************/
/*! exports provided: ModulePreloadingHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulePreloadingHandler", function() { return ModulePreloadingHandler; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _module_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-loading.service */ "./src/app/routing/module-loading.service.ts");



var ModulePreloadingHandler = /** @class */ (function () {
    function ModulePreloadingHandler(loadingService) {
        this.loadingService = loadingService;
    }
    ModulePreloadingHandler.prototype.preload = function (route, fn) {
        var _this = this;
        /*
                if (Math.random() > 0.5) {
                    this.loadingService.load(route.loadChildren);
                    this.loadingService.fail(route.loadChildren);
                    return of (null);
                }
        */
        return fn().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            console.group('Loading Error');
            console.error(error);
            console.groupEnd();
            _this.loadingService.fail(route.loadChildren);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
        }));
    };
    return ModulePreloadingHandler;
}());



/***/ }),

/***/ "./src/app/routing/routes.service.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routes.service.ts ***!
  \*******************************************/
/*! exports provided: RoutesService, RouteState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesService", function() { return RoutesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteState", function() { return RouteState; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var RoutesService = /** @class */ (function () {
    function RoutesService() {
        this.routes = [];
        this.routesState$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    RoutesService.prototype.setConfig = function (routes) {
        this.routes = [];
        for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
            var route = routes_1[_i];
            if (route.path.indexOf('#') === -1 /* && route.outlet === PRIMARY_OUTLET*/) {
                var r = new RouteState();
                r.path = route.path;
                r.title = (route.hasOwnProperty('data') && route.data.hasOwnProperty('title')) ? route.data.title : '';
                r.components = route.hasOwnProperty('component') ? getClassName(route.component) : '';
                if (route.path.indexOf(':') !== -1) {
                    r.full = false;
                }
                if (route.hasOwnProperty('redirectTo')) {
                    r.redirect = route.redirectTo;
                }
                if (route.path === '**') {
                    r.any = true;
                }
                if (route.hasOwnProperty('loadChildren')) {
                    if (route._loadedConfig !== undefined) {
                        var loadedConfig = route._loadedConfig;
                        this.routes = this.routes.concat(this.processChildren(r, loadedConfig.routes));
                    }
                    else {
                        this.routes = this.routes.concat([r]);
                    }
                }
                else {
                    this.routes = this.routes.concat(this.processChildren(r, route.children));
                }
            }
        }
        this.routesState$.next();
    };
    RoutesService.prototype.processChildren = function (current, routes) {
        if (!routes) {
            return [current];
        }
        if (routes.length === 0) {
            return [current];
        }
        var rs = [];
        for (var _i = 0, routes_2 = routes; _i < routes_2.length; _i++) {
            var route = routes_2[_i];
            var r = new RouteState();
            r.path = joinParts(current.path, route.path);
            // tslint:disable-next-line:max-line-length
            r.title = joinParts(current.title, (route.hasOwnProperty('data') && route.data.hasOwnProperty('title')) ? route.data.title : '', ' - ');
            r.components = joinParts(current.components, route.hasOwnProperty('component') ? getClassName(route.component) : '', ':');
            if (route.path.indexOf(':') !== -1) {
                r.full = false;
            }
            if (route.hasOwnProperty('redirectTo')) {
                r.redirect = joinParts(current.path, route.redirectTo);
            }
            if (route.path === '**') {
                r.any = true;
            }
            if (route.hasOwnProperty('loadChildren')) {
                if (route._loadedConfig !== undefined) {
                    var loadedConfig = route._loadedConfig;
                    rs = rs.concat(this.processChildren(r, loadedConfig.routes));
                }
                else {
                    rs = rs.concat([r]);
                }
            }
            else {
                rs = rs.concat(this.processChildren(r, route.children));
            }
        }
        return rs;
    };
    return RoutesService;
}());

var RouteState = /** @class */ (function () {
    function RouteState() {
        this.full = true;
        this.any = false;
    }
    return RouteState;
}());

function getClassName(c) {
    var str = c.toString();
    var matches = str.match(/function\s+([^\s]+?)\(/i);
    return matches ? matches[1] : '';
}
function joinParts(path, part, separator) {
    if (separator === void 0) { separator = '/'; }
    if (!part) {
        return path;
    }
    if (!path) {
        return part;
    }
    if (part.substr(0, 1) === separator) {
        // return part.substr(1);
        return part;
    }
    return [path, part].join(separator);
}


/***/ }),

/***/ "./src/app/routing/routing.handler.ts":
/*!********************************************!*\
  !*** ./src/app/routing/routing.handler.ts ***!
  \********************************************/
/*! exports provided: RoutingHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingHandler", function() { return RoutingHandler; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _module_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module-loading.service */ "./src/app/routing/module-loading.service.ts");
/* harmony import */ var _routes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes.service */ "./src/app/routing/routes.service.ts");
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/app.service */ "./src/app/service/app.service.ts");






var RoutingHandler = /** @class */ (function () {
    function RoutingHandler(router, appService, loadingService, routesService) {
        var _this = this;
        this.router = router;
        this.appService = appService;
        this.loadingService = loadingService;
        this.routesService = routesService;
        this.first = true;
        var baseHref = document.getElementsByTagName('base')[0].href.replace(window.location.origin, '');
        var location = window.location.pathname.replace(baseHref, '/').replace('//', '/') + window.location.search;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.appService.sessionState$, this.loadingService.modulesState$)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var initialized = _this.loadingService.isLoaded;
            var sessionState;
            sessionState = data[0];
            if (!initialized) {
                return 'initialization';
            }
            else if (sessionState === 'not_authorized' || sessionState === 'add_authorized') {
                return 'anonymous';
            }
            else if (sessionState === 'logged') {
                return 'personal';
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe(function (routingSession) {
            // tslint:disable-next-line
            console.log('=== Routing Session: ', routingSession);
            _this.resetRouter(routingSession);
            if (_this.first &&
                routingSession !== 'initialization' &&
                (routingSession !== 'anonymous' || /client-profile/.test(location))) {
                _this.first = false;
                _this.router.navigateByUrl(location);
            }
            else {
                _this.router.navigateByUrl('/');
            }
        });
    }
    RoutingHandler.prototype.resetRouter = function (sessionMode) {
        sessionMode = sessionMode || 'initialization';
        var routes = this.router.config;
        routes.forEach(function (route) {
            if (!route.hasOwnProperty('data')) {
                route.data = {};
            }
            if (!route.data.hasOwnProperty('_path')) {
                route.data._path = route.path;
            }
        });
        routes.forEach(function (route) {
            if (route.hasOwnProperty('data') && route.data.hasOwnProperty('session')) {
                route.path = '#disabled#';
                if (route.data.session === sessionMode) {
                    if (route.data.hasOwnProperty('_path')) {
                        route.path = route.data._path;
                    }
                }
            }
        });
        this.router.resetConfig(routes);
        this.routesService.setConfig(routes);
    };
    return RoutingHandler;
}());



/***/ }),

/***/ "./src/app/service/app.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/app.service.ts ***!
  \****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var AppService = /** @class */ (function () {
    function AppService() {
        this.build$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.sessionState$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.isEmbedBuild$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.isDemoBuild$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.userRole$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
    Object.defineProperty(AppService.prototype, "isAnonymous", {
        get: function () {
            return this.sessionState$.value === 'not_authorized' || this.sessionState$.value === 'add_authorized';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "isAuthenticated", {
        get: function () {
            return this.sessionState$.value === 'logged';
        },
        enumerable: true,
        configurable: true
    });
    AppService.prototype.add_authorized = function () {
        this.sessionState$.next('add_authorized');
    };
    AppService.prototype.not_authorized = function () {
        this.sessionState$.next('not_authorized');
    };
    AppService.prototype.logged = function () {
        this.sessionState$.next('logged');
        this.userRole$.next('personal');
    };
    AppService.prototype.logout = function () {
        this.not_authorized();
        this.userRole$.next(null);
    };
    AppService.prototype.init = function () {
        this.build$.next('delo');
        this.sessionState$.next('not_authorized');
        this.isEmbedBuild$.next(false);
        this.isDemoBuild$.next(false);
    };
    return AppService;
}());



/***/ }),

/***/ "./src/app/service/products.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/products.service.ts ***!
  \*********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_service_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/service/app.service */ "./src/app/service/app.service.ts");


var ProductsService = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    // strJSON = '{'+
    //   '"accounts":'+
    //   '"cards":'+
    //   '"loans":'+
    //     '['+
    //       '{'+
    //         '"id":24183882,'+
    //         '"bank_system_id":"15175884",'+
    //         '"productName":"«Простой и удобный» (ГЭБ)",'+
    //         '"productCode":"2550",'+
    //         '"customName":false,'+
    //         '"name":"«Простой и удобный» (ГЭБ)",'+
    //         '"amount":376700.00,'+
    //         '"currency":"RUB",'+
    //         '"interestRate":17.50,'+
    //         '"psk":17.486,'+
    //         '"contractDate":"16.07.2019",'+
    //         '"contractNumber":"25501517588",'+
    //         '"openDate":"16.07.2019",'+
    //         '"endDate":"16.07.2024",'+
    //         '"allowPaymentAmount":345425.74,'+
    //         '"partialPaymentDate":null,'+
    //         '"planPaymentAmount":null,'+
    //         '"mainAccount":"10098810610200010263",'+
    //         '"repaymentAccount":"40817810300015676311",'+
    //         '"recommendedPaymentAmount":0.00,'+
    //         '"partialPaymentAmount":null,'+
    //         '"prepayment":true,'+
    //         '"overdueDebtAmount":0,'+
    //         '"overdraft":false,'+
    //         '"startPaymentPeriod":null,'+
    //         '"gracePeriodDate":null,'+
    //         '"creditLimit":null,'+
    //         '"availableLimit":null,'+
    //         '"prepaymentApplication":true,'+
    //         '"changeDate":true,'+
    //         '"ownFounds":null,'+
    //         '"changeRepaymentAccount":false,'+
    //         '"partialPaymentMarker":false,'+
    //         '"reduceLimit":false,'+
    //         '"closeLimit":false,'+
    //         '"prepaymentAmount":null,'+
    //         '"prepaymentId":null,'+
    //         '"prepaymentType":null,'+
    //         '"loanHolder":"\"АО",'+
    //         '"minLimit":null'+
    //       '}'+
    //     '],'+
    //   '"deposits":'+
    //   '}';
    function ProductsService(appService) {
        var _this = this;
        this.appService = appService;
        this.accounts = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.cards = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.externalCards = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.deposits = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.loans = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.updateAccounts$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.updateCards$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.updateExternalCards$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.updateDeposits$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.updateLoans$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.externalCardsStr = '[{"id":40507136,"pan":"548386******0559","name":"4444","expDate":"02/21","bindDate":"11.02.2020","storedId":40507136,"paymentSystem":"MC"}, {"id":40507134,"pan":"510070******0097","name":"33333","expDate":"11/23","bindDate":"11.02.2020","storedId":40507134,"paymentSystem":"MC"},{"id":40507061,"pan":"557057******9697","name":"22222","expDate":"12/20","bindDate":"11.02.2020","storedId":40507061,"paymentSystem":"MC"},{"id":40506988,"pan":"532130******0174","name":"111111","expDate":"02/20","bindDate":"11.02.2020","storedId":40506988,"paymentSystem":"MC"},{"id":40506985,"pan":"676454******0966","name":"нага","expDate":"11/22","bindDate":"11.02.2020","storedId":40506985,"paymentSystem":"MAESTRO"},{"id":40506912,"pan":"220096******2993","name":"на6а0822","expDate":"08/22","bindDate":"11.02.2020","storedId":40506912,"paymentSystem":"MIR"},{"id":39920857,"pan":"519261******3242","name":"Мандаринка","expDate":"05/24","bindDate":"29.01.2020","storedId":39920857,"paymentSystem":"MC"},{"id":39619671,"pan":"427939******6009","name":"Карта ноунейм банка","expDate":"01/22","bindDate":"21.01.2020","storedId":39619671,"paymentSystem":"VISA"},{"id":20413256,"pan":"448511******8381","name":"American Express g","expDate":"04/23","bindDate":"24.04.2019","storedId":20413256,"paymentSystem":"VISA"},{"id":13876285,"pan":"220048******0007","name":"p2p 702","expDate":"02/22","bindDate":"04.03.2020","storedId":13876285,"paymentSystem":"MIR"},{"id":13876284,"pan":"220140******2467","name":"p2p 952","expDate":"01/22","bindDate":"16.01.2020","storedId":13876284,"paymentSystem":"MIR"}]';
        this.cardsStr = '[' +
            '{"id":"4431197","state_description":"Действующая","blocked":false,"name":"MasterCard Unembossed","customName":false,"amount":2.00,"currency":"RUB","pan":"548386******7327","cardholderName":"IR479546 SI479546","category":"card","expDate":"2025-03-31","balance":2.00,"availableBalance":2.00,"holdAmount":0.00,"primaryAccount":"40817810100016265963","accountId":45483452,"tariffLink":"","order":"99","primary":true,"cardId":"4431197","brand":"MasterCard Unembossed","storedId":45484029,"limits":[],"status":"00","status_desc":"Карта не блокирована","state":"2","kind":"debit","loan_funds":0.00,"own_funds":2.00,"used_loan_funds":0.00,"most_active":false,"smsPhone":"79326005555","smsType":"SMS","packageCashBack":"forbidden","packageFreeCashOut":"off","packageServ":false,"paymentSystem":"MC","limit_set_available":false,"own_customer_card":false,"holder_name":"","design_id":"23801","design_front_url":"/export/card/design?code=23801&side=front","design_back_url":"/export/card/design?code=23801&side=back","textColor":null,"canUnlock":false,"canReissue":false,"canAddCard":false,"contactless":true,"smsNotify":60.00,"highCashBack":30.00,"freeWithdraw":30.00,"canViewCvv2":true},' +
            '{"id":"4429271","state_description":"Действующая","blocked":false,"name":"MasterCard Unembossed","customName":true,"amount":0.00,"currency":"RUB","pan":"549071******7165","cardholderName":"","category":"card","expDate":"2025-03-31","balance":0,"availableBalance":0,"holdAmount":0.00,"primaryAccount":"40817810300016255650","accountId":45132824,"tariffLink":"/export/attachment/everyday_card?plain=1","order":"99","primary":true,"cardId":"4429271","brand":"Mastercard Gold","storedId":45132897,"limits":[],"status":"00","status_desc":"Карта не блокирована","state":"2","kind":"debit","loan_funds":0.00,"own_funds":0.00,"used_loan_funds":0.00,"most_active":false,"smsPhone":"79995555555","smsType":null,"packageCashBack":"off","packageFreeCashOut":"off","packageServ":true,"paymentSystem":"MC","limit_set_available":false,"own_customer_card":false,"holder_name":"","design_id":"73001","design_front_url":"/export/card/design?code=73001&side=front","design_back_url":"/export/card/design?code=73001&side=back","textColor":"white","canUnlock":false,"canReissue":false,"canAddCard":false,"contactless":true,"smsNotify":30.00,"highCashBack":30.00,"freeWithdraw":30.00,"canViewCvv2":false},' +
            '{"id":"4429227","state_description":"Действующая","blocked":false,"name":"VISA VIRTUON","customName":false,"amount":0.00,"currency":"RUB","pan":"488951******5784","cardholderName":"IR479546 SI479546","category":"card","expDate":"2020-09-30","balance":0,"availableBalance":0,"holdAmount":0.00,"primaryAccount":"40817810010224076209","accountId":45360497,"tariffLink":"https://landings.skbbank.ru/tarifs/standard","order":"99","primary":true,"cardId":"4429227","brand":"VISA VIRTUON","storedId":45369025,"limits":[],"status":"00","status_desc":"Карта не блокирована","state":"2","kind":"debit","loan_funds":0.00,"own_funds":0.00,"used_loan_funds":0.00,"most_active":false,"smsPhone":"79326005555","smsType":"SMS","packageCashBack":"forbidden","packageFreeCashOut":"forbidden","packageServ":false,"paymentSystem":"VISA","limit_set_available":false,"own_customer_card":false,"holder_name":"","design_id":"10000","design_front_url":"/export/card/design?code=10000&side=front","design_back_url":"/export/card/design?code=10000&side=back","textColor":"black","canUnlock":false,"canReissue":false,"canAddCard":false,"contactless":false,"smsNotify":0,"highCashBack":30.00,"freeWithdraw":0,"canViewCvv2":true},' +
            '{"id":"4429225","state_description":"Действующая","blocked":false,"name":"Visa Virtuon","customName":false,"amount":0.00,"currency":"RUB","pan":"488951******1048","cardholderName":"IR479546 SI479546","category":"card","expDate":"2020-09-30","balance":0,"availableBalance":0,"holdAmount":0.00,"primaryAccount":"40817810110224076206","accountId":45160344,"tariffLink":"https://landings.skbbank.ru/tarifs/standard","order":"99","primary":true,"cardId":"4429225","brand":"Visa Virtuon","storedId":45160345,"limits":[],"status":"00","status_desc":"Карта не блокирована","state":"2","kind":"debit","loan_funds":0.00,"own_funds":0.00,"used_loan_funds":0.00,"most_active":false,"smsPhone":"79995555555","smsType":"SMS","packageCashBack":"forbidden","packageFreeCashOut":"forbidden","packageServ":false,"paymentSystem":"VISA","limit_set_available":false,"own_customer_card":false,"holder_name":"","design_id":"10000","design_front_url":"/export/card/design?code=10000&side=front","design_back_url":"/export/card/design?code=10000&side=back","textColor":"black","canUnlock":false,"canReissue":false,"canAddCard":false,"contactless":false,"smsNotify":0,"highCashBack":30.00,"freeWithdraw":0,"canViewCvv2":true},' +
            '{"id":"4429224","state_description":"Действующая","blocked":false,"name":"Visa Virtuon","customName":false,"amount":0.00,"currency":"RUB","pan":"488951******8070","cardholderName":"IR479546 SI479546", "category":"card","expDate":"2020-09-30","balance":0,"availableBalance":0,"holdAmount":0.00,"primaryAccount":"40817810810224076205","accountId":45119576,"tariffLink":"https://landings.skbbank.ru/tarifs/standard","order":"99","primary":true,"cardId":"4429224","brand":"Visa Virtuon","storedId":45119577,"limits":[],"status":"00","status_desc":"Карта не блокирована","state":"2","kind":"debit","loan_funds":0.00,"own_funds":0.00,"used_loan_funds":0.00,"most_active":false,"smsPhone":"79995555555","smsType":"SMS","packageCashBack":"forbidden","packageFreeCashOut":"forbidden","packageServ":false,"paymentSystem":"VISA","limit_set_available":false,"own_customer_card":false,"holder_name":"","design_id":"10000","design_front_url":"/export/card/design?code=10000&side=front","design_back_url":"/export/card/design?code=10000&side=back","textColor":"black","canUnlock":false,"canReissue":false,"canAddCard":false,"contactless":false,"smsNotify":0,"highCashBack":30.00,"freeWithdraw":0,"canViewCvv2":true},' +
            '{"id":"4429223","state_description":"Действующая","blocked":false,"name":"Visa Virtuon","customName":false,"amount":0.00,"currency":"RUB","pan":"488951******6793","cardholderName":"IR479546 SI479546","category":"card","expDate":"2020-09-30","balance":0,"availableBalance":0,"holdAmount":0.00,"primaryAccount":"40817810510224076204","accountId":45119573,"tariffLink":"https://landings.skbbank.ru/tarifs/standard","order":"99","primary":true,"cardId":"4429223","brand":"Visa Virtuon","storedId":45119574,"limits":[],"status":"00","status_desc":"Карта не блокирована","state":"2","kind":"debit","loan_funds":0.00,"own_funds":0.00,"used_loan_funds":0.00,"most_active":false,"smsPhone":"79995555555","smsType":"SMS","packageCashBack":"forbidden","packageFreeCashOut":"forbidden","packageServ":false,"paymentSystem":"VISA","limit_set_available":false,"own_customer_card":false,"holder_name":"","design_id":"10000","design_front_url":"/export/card/design?code=10000&side=front","design_back_url":"/export/card/design?code=10000&side=back","textColor":"black","canUnlock":false,"canReissue":false,"canAddCard":false,"contactless":false,"smsNotify":0,"highCashBack":30.00,"freeWithdraw":0,"canViewCvv2":true},' +
            '{"id":"4429220","state_description":"Действующая","blocked":false,"name":"Visa Virtuon","customName":false,"amount":5.00,"currency":"RUB","pan":"488951******7681","cardholderName":"IR479546 SI479546","category":"card","expDate":"2020-09-30","balance":5.00,"availableBalance":5.00,"holdAmount":0.00,"primaryAccount":"40817810610224076201","accountId":43919924,"tariffLink":"https://landings.skbbank.ru/tarifs/standard","order":"99","primary":true,"cardId":"4429220","brand":"Visa Virtuon","storedId":43919925,"limits":[],"status":"00","status_desc":"Карта не блокирована","state":"2","kind":"debit","loan_funds":0.00,"own_funds":5.00,"used_loan_funds":0.00,"most_active":false,"smsPhone":"79655474308","smsType":"SMS","packageCashBack":"forbidden","packageFreeCashOut":"forbidden","packageServ":false,"paymentSystem":"VISA","limit_set_available":false,"own_customer_card":false,"holder_name":"","design_id":"10000","design_front_url":"/export/card/design?code=10000&side=front","design_back_url":"/export/card/design?code=10000&side=back","textColor":"black","canUnlock":false,"canReissue":false,"canAddCard":false,"contactless":false,"smsNotify":0,"highCashBack":30.00,"freeWithdraw":0,"canViewCvv2":true},' +
            '{"id":"4429218","state_description":"Действующая","blocked":false,"name":"Visa Virtuon","customName":false,"amount":0.00,"currency":"RUB","pan":"488951******5233","cardholderName":"IR479546 SI479546","category":"card","expDate":"2020-09-30","balance":0,"availableBalance":0,"holdAmount":0.00,"primaryAccount":"40817810010224076199","accountId":43912673,"tariffLink":"https://landings.skbbank.ru/tarifs/standard","order":"99","primary":true,"cardId":"4429218","brand":"Visa Virtuon","storedId":43912719,"limits":[],"status":"00","status_desc":"Карта не блокирована","state":"2","kind":"debit","loan_funds":0.00,"own_funds":0.00,"used_loan_funds":0.00,"most_active":false,"smsPhone":"79655474308","smsType":"SMS","packageCashBack":"forbidden","packageFreeCashOut":"forbidden","packageServ":false,"paymentSystem":"VISA","limit_set_available":false,"own_customer_card":false,"holder_name":"","design_id":"10000","design_front_url":"/export/card/design?code=10000&side=front","design_back_url":"/export/card/design?code=10000&side=back","textColor":"black","canUnlock":false,"canReissue":false,"canAddCard":false,"contactless":false,"smsNotify":0,"highCashBack":30.00,"freeWithdraw":0,"canViewCvv2":false},' +
            '{"id":"4429217","state_description":"Действующая","blocked":false,"name":"Visa Virtuon","customName":false,"amount":0.00,"currency":"RUB","pan":"488951******9488","cardholderName":"IR479546 SI479546","category":"card","expDate":"2020-09-30","balance":0,"availableBalance":0,"holdAmount":0.00,"primaryAccount":"40817810710224076198","accountId":43911986,"tariffLink":"https://landings.skbbank.ru/tarifs/standard","order":"99","primary":true,"cardId":"4429217","brand":"Visa Virtuon","storedId":43912098,"limits":[],"status":"00","status_desc":"Карта не блокирована","state":"2","kind":"debit","loan_funds":0.00,"own_funds":0.00,"used_loan_funds":0.00,"most_active":false,"smsPhone":"79655474308","smsType":"SMS","packageCashBack":"forbidden","packageFreeCashOut":"forbidden","packageServ":false,"paymentSystem":"VISA","limit_set_available":false,"own_customer_card":false,"holder_name":"","design_id":"10000","design_front_url":"/export/card/design?code=10000&side=front","design_back_url":"/export/card/design?code=10000&side=back","textColor":"black","canUnlock":false,"canReissue":false,"canAddCard":false,"contactless":false,"smsNotify":0,"highCashBack":30.00,"freeWithdraw":0,"canViewCvv2":false},' +
            '{"id":"4429216","state_description":"Действующая","blocked":false,"name":"Visa Virtuon","customName":false,"amount":0.00,"currency":"RUB","pan":"488951******8886","cardholderName":"IR479546 SI479546","category":"card","expDate":"2020-09-30","balance":0,"availableBalance":0,"holdAmount":0.00,"primaryAccount":"40817810510224075865","accountId":43799860,"tariffLink":"https://landings.skbbank.ru/tarifs/standard","order":"99","primary":true,"cardId":"4429216","brand":"Visa Virtuon","storedId":43799861,"limits":[],"status":"00","status_desc":"Карта не блокирована","state":"2","kind":"debit","loan_funds":0.00,"own_funds":0.00,"used_loan_funds":0.00,"most_active":false,"smsPhone":"79655474308","smsType":"SMS","packageCashBack":"forbidden","packageFreeCashOut":"forbidden","packageServ":false,"paymentSystem":"VISA","limit_set_available":false,"own_customer_card":false,"holder_name":"","design_id":"10000","design_front_url":"/export/card/design?code=10000&side=front","design_back_url":"/export/card/design?code=10000&side=back","textColor":"black","canUnlock":false,"canReissue":false,"canAddCard":false,"contactless":false,"smsNotify":0,"highCashBack":30.00,"freeWithdraw":0,"canViewCvv2":false},' +
            '{"id":"4429182","state_description":"Действующая","blocked":false,"name":"MasterCard Gold","customName":true,"amount":0.00,"currency":"RUB","pan":"549071******7488","cardholderName":"","category":"card","expDate":"2025-03-31","balance":0,"availableBalance":0,"holdAmount":0.00,"primaryAccount":"40817810000016246820","accountId":42814336,"tariffLink":"/export/attachment/everyday_card?plain=1","order":"99","primary":true,"cardId":"4429182","brand":"Mastercard Gold","storedId":42814337,"limits":[],"status":"00","status_desc":"Карта не блокирована","state":"2","kind":"debit","loan_funds":0.00,"own_funds":0.00,"used_loan_funds":0.00,"most_active":false,"smsPhone":"79655474308","smsType":null,"packageCashBack":"off","packageFreeCashOut":"off","packageServ":true,"paymentSystem":"MC","limit_set_available":false,"own_customer_card":false,"holder_name":"","design_id":"73001","design_front_url":"/export/card/design?code=73001&side=front","design_back_url":"/export/card/design?code=73001&side=back","textColor":"white","canUnlock":false,"canReissue":false,"canAddCard":false,"contactless":true,"smsNotify":30.00,"highCashBack":30.00,"freeWithdraw":30.00,"canViewCvv2":false},' +
            '{"id":"4429181","state_description":"Действующая","blocked":false,"name":"Mastercard Gold","customName":false,"amount":268177.00,"currency":"RUB","pan":"549071******3640","cardholderName":"","category":"card","expDate":"2025-03-31","balance":268177.00,"availableBalance":268177.00,"holdAmount":0.00,"primaryAccount":"40817810600016246806","accountId":42785820,"tariffLink":"/export/attachment/everyday_card?plain=1","order":"99","primary":true,"cardId":"4429181","brand":"Mastercard Gold","storedId":42786733,"limits":[],"status":"00","status_desc":"Карта не блокирована","state":"2","kind":"debit","loan_funds":0.00,"own_funds":268177.00,"used_loan_funds":0.00,"most_active":false,"smsPhone":"79655474308","smsType":null,"packageCashBack":"off","packageFreeCashOut":"off","packageServ":true,"paymentSystem":"MC","limit_set_available":false,"own_customer_card":false,"holder_name":"","design_id":"73001","design_front_url":"/export/card/design?code=73001&side=front","design_back_url":"/export/card/design?code=73001&side=back","textColor":"white","canUnlock":false,"canReissue":false,"canAddCard":false,"contactless":true,"smsNotify":30.00,"highCashBack":30.00,"freeWithdraw":30.00,"canViewCvv2":false},' +
            '{"id":"4156677","state_description":"Действующая","blocked":false,"name":"MIR DEBIT 1","customName":true,"amount":2432.93,"currency":"RUB","pan":"220048******6777","cardholderName":"IR4156677","category":"card","expDate":"2023-11-30","balance":2449.43,"availableBalance":2432.93,"holdAmount":0.00,"primaryAccount":"40817810500202337629","accountId":13517852,"tariffLink":"","order":"99","primary":true,"cardId":"4156677","brand":"Mir Debit","storedId":24183877,"limits":[],"status":"00","status_desc":"Карта не блокирована","state":"2","kind":"debit","loan_funds":0.00,"own_funds":2432.93,"used_loan_funds":0.00,"most_active":false,"smsPhone":"79000000000","smsType":null,"packageCashBack":"forbidden","packageFreeCashOut":"forbidden","packageServ":false,"paymentSystem":"MIR","limit_set_available":false,"own_customer_card":false,"holder_name":"","design_id":"33002","design_front_url":"/export/card/design?code=33002&side=front","design_back_url":"/export/card/design?code=33002&side=back","textColor":"black","canUnlock":false,"canReissue":false,"canAddCard":false,"contactless":false,"smsNotify":0,"highCashBack":30.00,"freeWithdraw":0,"canViewCvv2":false}' +
            ']';
        // '{"id":45315888,"customName":true,"name":"Счет MasterCard - Бонусный","productName":"Счет MasterCard Unembossed","number":"40817810600016255664","state":"Открыт","stateCode":"open","amount":503.00,"type":"current","registryAmount":0,"registry2Amount":0,"balance":503.00,"currency":"RUB","availableBalance":503.00,"availBalanceRub":503.00,"startDate":"16.04.2020","order":99,"category":"account","requisites":{"bankName":"ПАО \"СКБ-БАНК\"","address":"Россия, 624000, Свердловская обл, Сысертский р-н, Арамиль г, 1 Мая ул, д.59а","bic":"046577756","inn":"6608003052","kpp":"668501001","corrAccount":"30101810800000000756"},"allowInPayments":true,"allowOutPayments":true,"allowLoanRepayment":true,"tariffPlanName":"Универсальный","tariffPlanCode":"","tariffPlanLinkToRules":"","specType":"EX","mostActive":true,"pdfLink":"/export/account/pdf?id=45315888","overdraft":false,"sbpDefault":false,"bonusProgramState":"forbidden","availableBonuses":0,"accruedBonuses":150.00,"nextAccrualDate":null,"lockedAmount":0,"canClose":true,"bonusProgramGroup":{"firstCategory":"0","secondCategory":"0","thirdCategory":"0","selectCategoryDate":null},"petitionId":45315846},'+
        // '{"id":45483452,"customName":false,"name":"Счет MasterCard Unembossed","productName":"Счет MasterCard Unembossed","number":"40817810100016265963","state":"Открыт","stateCode":"open","amount":2.00,"type":"card","registryAmount":0,"registry2Amount":0,"balance":2.00,"currency":"RUB","availableBalance":2.00,"availBalanceRub":2.00,"startDate":"17.04.2020","order":99,"category":"account","requisites":{"bankName":"ПАО \"СКБ-БАНК\"","address":"Россия, 624000, Свердловская обл, Сысертский р-н, Арамиль г, 1 Мая ул, д.59а","bic":"046577756","inn":"6608003052","kpp":"668501001","corrAccount":"30101810800000000756"},"allowInPayments":true,"allowOutPayments":true,"allowLoanRepayment":true,"tariffPlanName":"Универсальный","tariffPlanCode":"","tariffPlanLinkToRules":"","specType":"EX","mostActive":false,"pdfLink":"/export/account/pdf?id=45483452","overdraft":false,"sbpDefault":false,"bonusProgramState":"enabled","availableBonuses":0,"accruedBonuses":150.00,"nextAccrualDate":"2020-05-01","lockedAmount":0,"canClose":true,"bonusProgramGroup":{"firstCategory":"0","secondCategory":"0","thirdCategory":"0","selectCategoryDate":null},"petitionId":45483408,"cards":[45484029]},'+
        // '{"id":45480197,"customName":false,"name":"Счет MasterCard Unembossed","productName":"Счет MasterCard Unembossed","number":"40817810800016265962","state":"Открыт","stateCode":"open","amount":0.00,"type":"current","registryAmount":0,"registry2Amount":0,"balance":0,"currency":"RUB","availableBalance":0.00,"availBalanceRub":0.00,"startDate":"17.04.2020","order":99,"category":"account","requisites":{"bankName":"ПАО \"СКБ-БАНК\"","address":"Россия, 624000, Свердловская обл, Сысертский р-н, Арамиль г, 1 Мая ул, д.59а","bic":"046577756","inn":"6608003052","kpp":"668501001","corrAccount":"30101810800000000756"},"allowInPayments":true,"allowOutPayments":true,"allowLoanRepayment":true,"tariffPlanName":"Универсальный","tariffPlanCode":"","tariffPlanLinkToRules":"","specType":"EX","mostActive":false,"pdfLink":"/export/account/pdf?id=45480197","overdraft":false,"sbpDefault":false,"bonusProgramState":"forbidden","availableBonuses":0,"accruedBonuses":150.00,"nextAccrualDate":null,"lockedAmount":0,"canClose":true,"bonusProgramGroup":{"firstCategory":"0","secondCategory":"0","thirdCategory":"0","selectCategoryDate":null},"petitionId":45480192},'+
        // '{"id":45360497,"customName":true,"name":"Карта с cvv2","productName":"Счет VISA VIRTUON","number":"40817810010224076209","state":"Открыт","stateCode":"open","amount":0,"type":"card","registryAmount":0,"registry2Amount":0,"balance":0,"currency":"RUB","availableBalance":0,"availBalanceRub":0,"startDate":"16.04.2020","order":99,"category":"account","requisites":{"bankName":"ПАО \"СКБ-БАНК\"","address":"Россия, 624000, Свердловская обл, Сысертский р-н, Арамиль г, 1 Мая ул, д.59а","bic":"046577756","inn":"6608003052","kpp":"668501001","corrAccount":"30101810800000000756"},"allowInPayments":true,"allowOutPayments":true,"allowLoanRepayment":false,"tariffPlanName":"Стандартный","tariffPlanCode":"","tariffPlanLinkToRules":"","specType":"EV","mostActive":false,"pdfLink":"/export/account/pdf?id=45360497","overdraft":false,"sbpDefault":false,"bonusProgramState":"forbidden","availableBonuses":0,"accruedBonuses":0,"nextAccrualDate":null,"lockedAmount":0,"canClose":true,"bonusProgramGroup":{"firstCategory":"0","secondCategory":"0","thirdCategory":"0","selectCategoryDate":null},"petitionId":45360476,"cards":[45369025]},'+
        // '{"id":45309714,"customName":false,"name":"Счет MasterCard Unembossed","productName":"Счет MasterCard Unembossed","number":"40817810300016255663","state":"Открыт","stateCode":"open","amount":0.00,"type":"current","registryAmount":0,"registry2Amount":0,"balance":0,"currency":"RUB","availableBalance":0.00,"availBalanceRub":0.00,"startDate":"16.04.2020","order":99,"category":"account","requisites":{"bankName":"ПАО \"СКБ-БАНК\"","address":"Россия, 624000, Свердловская обл, Сысертский р-н, Арамиль г, 1 Мая ул, д.59а","bic":"046577756","inn":"6608003052","kpp":"668501001","corrAccount":"30101810800000000756"},"allowInPayments":true,"allowOutPayments":true,"allowLoanRepayment":true,"tariffPlanName":"Универсальный","tariffPlanCode":"","tariffPlanLinkToRules":"","specType":"EX","mostActive":false,"pdfLink":"/export/account/pdf?id=45309714","overdraft":false,"sbpDefault":false,"bonusProgramState":"forbidden","availableBonuses":0,"accruedBonuses":150.00,"nextAccrualDate":null,"lockedAmount":0,"canClose":true,"bonusProgramGroup":{"firstCategory":"0","secondCategory":"0","thirdCategory":"0","selectCategoryDate":null},"petitionId":45309645},'+
        // '{"id":45308652,"customName":false,"name":"Счет MasterCard Unembossed","productName":"Счет MasterCard Unembossed","number":"40817810000016255662","state":"Открыт","stateCode":"open","amount":0.00,"type":"current","registryAmount":0,"registry2Amount":0,"balance":0,"currency":"RUB","availableBalance":0.00,"availBalanceRub":0.00,"startDate":"16.04.2020","order":99,"category":"account","requisites":{"bankName":"ПАО \"СКБ-БАНК\"","address":"Россия, 624000, Свердловская обл, Сысертский р-н, Арамиль г, 1 Мая ул, д.59а","bic":"046577756","inn":"6608003052","kpp":"668501001","corrAccount":"30101810800000000756"},"allowInPayments":true,"allowOutPayments":true,"allowLoanRepayment":true,"tariffPlanName":"Универсальный","tariffPlanCode":"","tariffPlanLinkToRules":"","specType":"EX","mostActive":false,"pdfLink":"/export/account/pdf?id=45308652","overdraft":false,"sbpDefault":false,"bonusProgramState":"forbidden","availableBonuses":0,"accruedBonuses":150.00,"nextAccrualDate":null,"lockedAmount":0,"canClose":true,"bonusProgramGroup":{"firstCategory":"0","secondCategory":"0","thirdCategory":"0","selectCategoryDate":null},"petitionId":45308589},'+
        // '{"id":45160344,"customName":false,"name":"Счет VISA VIRTUON","productName":"Счет VISA VIRTUON","number":"40817810110224076206","state":"Открыт","stateCode":"open","amount":0,"type":"card","registryAmount":0,"registry2Amount":0,"balance":0,"currency":"RUB","availableBalance":0,"availBalanceRub":0,"startDate":"15.04.2020","order":99,"category":"account","requisites":{"bankName":"ПАО \"СКБ-БАНК\"","address":"Россия, 624000, Свердловская обл, Сысертский р-н, Арамиль г, 1 Мая ул, д.59а","bic":"046577756","inn":"6608003052","kpp":"668501001","corrAccount":"30101810800000000756"},"allowInPayments":true,"allowOutPayments":true,"allowLoanRepayment":false,"tariffPlanName":"Стандартный","tariffPlanCode":"","tariffPlanLinkToRules":"","specType":"EV","mostActive":false,"pdfLink":"/export/account/pdf?id=45160344","overdraft":false,"sbpDefault":false,"bonusProgramState":"forbidden","availableBonuses":0,"accruedBonuses":0,"nextAccrualDate":null,"lockedAmount":0,"canClose":true,"bonusProgramGroup":{"firstCategory":"0","secondCategory":"0","thirdCategory":"0","selectCategoryDate":null},"petitionId":45160339,"cards":[45160345]},'+
        // '{"id":45132824,"customName":false,"name":"Счет MasterCard Gold","productName":"Счет MasterCard Gold","number":"40817810300016255650","state":"Открыт","stateCode":"open","amount":0,"type":"card","registryAmount":0,"registry2Amount":0,"balance":0,"currency":"RUB","availableBalance":0,"availBalanceRub":0,"startDate":"15.04.2020","order":99,"category":"account","requisites":{"bankName":"ФИЛИАЛ \"ДЕЛО\" ПАО \"СКБ-БАНК\"","address":"Куйбышева, 58","bic":"046577743","inn":"6608003052","kpp":"668543001","corrAccount":"30101810965770000743"},"allowInPayments":true,"allowOutPayments":true,"allowLoanRepayment":true,"tariffPlanName":"Карта на каждый день","tariffPlanCode":"","tariffPlanLinkToRules":"","specType":"EX","mostActive":false,"pdfLink":"/export/account/pdf?id=45132824","overdraft":false,"sbpDefault":false,"bonusProgramState":"forbidden","availableBonuses":0,"accruedBonuses":0,"nextAccrualDate":null,"lockedAmount":0,"canClose":true,"bonusProgramGroup":{"firstCategory":"0","secondCategory":"0","thirdCategory":"0","selectCategoryDate":null},"petitionId":45132716,"cards":[45132897]},'+
        // '{"id":45119576,"customName":false,"name":"Счет VISA VIRTUON","productName":"Счет VISA VIRTUON","number":"40817810810224076205","state":"Открыт","stateCode":"open","amount":0,"type":"card","registryAmount":0,"registry2Amount":0,"balance":0,"currency":"RUB","availableBalance":0,"availBalanceRub":0,"startDate":"15.04.2020","order":99,"category":"account","requisites":{"bankName":"ПАО \"СКБ-БАНК\"","address":"Россия, 624000, Свердловская обл, Сысертский р-н, Арамиль г, 1 Мая ул, д.59а","bic":"046577756","inn":"6608003052","kpp":"668501001","corrAccount":"30101810800000000756"},"allowInPayments":true,"allowOutPayments":true,"allowLoanRepayment":false,"tariffPlanName":"Стандартный","tariffPlanCode":"","tariffPlanLinkToRules":"","specType":"EV","mostActive":false,"pdfLink":"/export/account/pdf?id=45119576","overdraft":false,"sbpDefault":false,"bonusProgramState":"forbidden","availableBonuses":0,"accruedBonuses":0,"nextAccrualDate":null,"lockedAmount":0,"canClose":true,"bonusProgramGroup":{"firstCategory":"0","secondCategory":"0","thirdCategory":"0","selectCategoryDate":null},"petitionId":45119569,"cards":[45119577]},'+
        // '{"id":45119573,"customName":false,"name":"Счет VISA VIRTUON","productName":"Счет VISA VIRTUON","number":"40817810510224076204","state":"Открыт","stateCode":"open","amount":0,"type":"card","registryAmount":0,"registry2Amount":0,"balance":0,"currency":"RUB","availableBalance":0,"availBalanceRub":0,"startDate":"15.04.2020","order":99,"category":"account","requisites":{"bankName":"ПАО \"СКБ-БАНК\"","address":"Россия, 624000, Свердловская обл, Сысертский р-н, Арамиль г, 1 Мая ул, д.59а","bic":"046577756","inn":"6608003052","kpp":"668501001","corrAccount":"30101810800000000756"},"allowInPayments":true,"allowOutPayments":true,"allowLoanRepayment":false,"tariffPlanName":"Стандартный","tariffPlanCode":"","tariffPlanLinkToRules":"","specType":"EV","mostActive":false,"pdfLink":"/export/account/pdf?id=45119573","overdraft":false,"sbpDefault":false,"bonusProgramState":"forbidden","availableBonuses":0,"accruedBonuses":0,"nextAccrualDate":null,"lockedAmount":0,"canClose":true,"bonusProgramGroup":{"firstCategory":"0","secondCategory":"0","thirdCategory":"0","selectCategoryDate":null},"petitionId":45119560,"cards":[45119574]},'+
        // '{"id":43919924,"customName":false,"name":"Счет VISA VIRTUON","productName":"Счет VISA VIRTUON","number":"40817810610224076201","state":"Открыт","stateCode":"open","amount":5.00,"type":"card","registryAmount":0,"registry2Amount":0,"balance":5.00,"currency":"RUB","availableBalance":5.00,"availBalanceRub":5.00,"startDate":"08.04.2020","order":99,"category":"account","requisites":{"bankName":"ПАО \"СКБ-БАНК\"","address":"Россия, 624000, Свердловская обл, Сысертский р-н, Арамиль г, 1 Мая ул, д.59а","bic":"046577756","inn":"6608003052","kpp":"668501001","corrAccount":"30101810800000000756"},"allowInPayments":true,"allowOutPayments":true,"allowLoanRepayment":false,"tariffPlanName":"Стандартный","tariffPlanCode":"","tariffPlanLinkToRules":"","specType":"EV","mostActive":false,"pdfLink":"/export/account/pdf?id=43919924","overdraft":false,"sbpDefault":false,"bonusProgramState":"forbidden","availableBonuses":0,"accruedBonuses":0,"nextAccrualDate":null,"lockedAmount":0,"canClose":true,"bonusProgramGroup":{"firstCategory":"0","secondCategory":"0","thirdCategory":"0","selectCategoryDate":null},"petitionId":43919864,"cards":[43919925]},'+
        // '{"id":43912673,"customName":false,"name":"Счет VISA VIRTUON","productName":"Счет VISA VIRTUON","number":"40817810010224076199","state":"Открыт","stateCode":"open","amount":0,"type":"card","registryAmount":0,"registry2Amount":0,"balance":0,"currency":"RUB","availableBalance":0,"availBalanceRub":0,"startDate":"08.04.2020","order":99,"category":"account","requisites":{"bankName":"ПАО \"СКБ-БАНК\"","address":"Россия, 624000, Свердловская обл, Сысертский р-н, Арамиль г, 1 Мая ул, д.59а","bic":"046577756","inn":"6608003052","kpp":"668501001","corrAccount":"30101810800000000756"},"allowInPayments":true,"allowOutPayments":true,"allowLoanRepayment":false,"tariffPlanName":"Стандартный","tariffPlanCode":"","tariffPlanLinkToRules":"","specType":"EV","mostActive":false,"pdfLink":"/export/account/pdf?id=43912673","overdraft":false,"sbpDefault":false,"bonusProgramState":"forbidden","availableBonuses":0,"accruedBonuses":0,"nextAccrualDate":null,"lockedAmount":0,"canClose":true,"bonusProgramGroup":{"firstCategory":"0","secondCategory":"0","thirdCategory":"0","selectCategoryDate":null},"petitionId":43912601,"cards":[43912719]},'+
        // '{"id":43911986,"customName":false,"name":"Счет VISA VIRTUON","productName":"Счет VISA VIRTUON","number":"40817810710224076198","state":"Открыт","stateCode":"open","amount":0,"type":"card","registryAmount":0,"registry2Amount":0,"balance":0,"currency":"RUB","availableBalance":0,"availBalanceRub":0,"startDate":"08.04.2020","order":99,"category":"account","requisites":{"bankName":"ПАО \"СКБ-БАНК\"","address":"Россия, 624000, Свердловская обл, Сысертский р-н, Арамиль г, 1 Мая ул, д.59а","bic":"046577756","inn":"6608003052","kpp":"668501001","corrAccount":"30101810800000000756"},"allowInPayments":true,"allowOutPayments":true,"allowLoanRepayment":false,"tariffPlanName":"Стандартный","tariffPlanCode":"","tariffPlanLinkToRules":"","specType":"EV","mostActive":false,"pdfLink":"/export/account/pdf?id=43911986","overdraft":false,"sbpDefault":false,"bonusProgramState":"forbidden","availableBonuses":0,"accruedBonuses":0,"nextAccrualDate":null,"lockedAmount":0,"canClose":true,"bonusProgramGroup":{"firstCategory":"0","secondCategory":"0","thirdCategory":"0","selectCategoryDate":null},"petitionId":43911981,"cards":[43912098]},'+
        // '{"id":43799860,"customName":false,"name":"Счет VISA VIRTUON","productName":"Счет VISA VIRTUON","number":"40817810510224075865","state":"Открыт","stateCode":"open","amount":0,"type":"card","registryAmount":0,"registry2Amount":0,"balance":0,"currency":"RUB","availableBalance":0,"availBalanceRub":0,"startDate":"07.04.2020","order":99,"category":"account","requisites":{"bankName":"ПАО \"СКБ-БАНК\"","address":"Россия, 624000, Свердловская обл, Сысертский р-н, Арамиль г, 1 Мая ул, д.59а","bic":"046577756","inn":"6608003052","kpp":"668501001","corrAccount":"30101810800000000756"},"allowInPayments":true,"allowOutPayments":true,"allowLoanRepayment":false,"tariffPlanName":"Стандартный","tariffPlanCode":"","tariffPlanLinkToRules":"","specType":"EV","mostActive":false,"pdfLink":"/export/account/pdf?id=43799860","overdraft":false,"sbpDefault":false,"bonusProgramState":"forbidden","availableBonuses":0,"accruedBonuses":0,"nextAccrualDate":null,"lockedAmount":0,"canClose":true,"bonusProgramGroup":{"firstCategory":"0","secondCategory":"0","thirdCategory":"0","selectCategoryDate":null},"petitionId":43799700,"cards":[43799861]},'+
        // '{"id":42814336,"customName":false,"name":"Счет MasterCard Gold","productName":"Счет MasterCard Gold","number":"40817810000016246820","state":"Открыт","stateCode":"open","amount":0,"type":"card","registryAmount":0,"registry2Amount":0,"balance":0,"currency":"RUB","availableBalance":0,"availBalanceRub":0,"startDate":"01.04.2020","order":99,"category":"account","requisites":{"bankName":"ФИЛИАЛ \"ДЕЛО\" ПАО \"СКБ-БАНК\"","address":"Куйбышева, 58","bic":"046577743","inn":"6608003052","kpp":"668543001","corrAccount":"30101810965770000743"},"allowInPayments":true,"allowOutPayments":true,"allowLoanRepayment":true,"tariffPlanName":"Карта на каждый день","tariffPlanCode":"","tariffPlanLinkToRules":"","specType":"EX","mostActive":false,"pdfLink":"/export/account/pdf?id=42814336","overdraft":false,"sbpDefault":false,"bonusProgramState":"forbidden","availableBonuses":0,"accruedBonuses":0,"nextAccrualDate":null,"lockedAmount":0,"canClose":true,"bonusProgramGroup":{"firstCategory":"0","secondCategory":"0","thirdCategory":"0","selectCategoryDate":null},"petitionId":42814331,"cards":[42814337]},'+
        // '{"id":42786730,"customName":false,"name":"Счет RUB","productName":"Счет RUB","number":"40817810900016246807","state":"Открыт","stateCode":"open","amount":29.04,"type":"current","registryAmount":0,"registry2Amount":0,"balance":29.04,"currency":"RUB","availableBalance":29.04,"availBalanceRub":29.04,"startDate":"01.04.2020","order":99,"category":"account","requisites":{"bankName":"ПАО \"СКБ-БАНК\"","address":"Россия, 624000, Свердловская обл, Сысертский р-н, Арамиль г, 1 Мая ул, д.59а","bic":"046577756","inn":"6608003052","kpp":"668501001","corrAccount":"30101810800000000756"},"allowInPayments":true,"allowOutPayments":true,"allowLoanRepayment":true,"tariffPlanName":"Универсальный","tariffPlanCode":"","tariffPlanLinkToRules":"","specType":"EX","mostActive":false,"pdfLink":"/export/account/pdf?id=42786730","overdraft":false,"sbpDefault":false,"bonusProgramState":"forbidden","availableBonuses":0,"accruedBonuses":0,"nextAccrualDate":null,"lockedAmount":0,"canClose":true,"bonusProgramGroup":{"firstCategory":"0","secondCategory":"0","thirdCategory":"0","selectCategoryDate":null},"petitionId":42786723},'+
        // '{"id":42785820,"customName":true,"name":"Счет MasterCard Gold","productName":"Счет MasterCard Gold","number":"40817810600016246806","state":"Открыт","stateCode":"open","amount":268177.00,"type":"card","registryAmount":0,"registry2Amount":0,"balance":268177.00,"currency":"RUB","availableBalance":268177.00,"availBalanceRub":268177.00,"startDate":"01.04.2020","order":99,"category":"account","requisites":{"bankName":"ФИЛИАЛ \"ДЕЛО\" ПАО \"СКБ-БАНК\"","address":"Куйбышева, 58","bic":"046577743","inn":"6608003052","kpp":"668543001","corrAccount":"30101810965770000743"},"allowInPayments":true,"allowOutPayments":true,"allowLoanRepayment":true,"tariffPlanName":"Карта на каждый день","tariffPlanCode":"","tariffPlanLinkToRules":"","specType":"EX","mostActive":false,"pdfLink":"/export/account/pdf?id=42785820","overdraft":false,"sbpDefault":false,"bonusProgramState":"forbidden","availableBonuses":0,"accruedBonuses":0,"nextAccrualDate":null,"lockedAmount":0,"canClose":true,"bonusProgramGroup":{"firstCategory":"0","secondCategory":"0","thirdCategory":"0","selectCategoryDate":null},"petitionId":42785812,"cards":[42786733]},'+
        // '{"id":24183879,"customName":true,"name":"Счет RUB gh","productName":"Счет RUB","number":"40817810300015676311","state":"Открыт","stateCode":"open","amount":168.11,"type":"current","registryAmount":0,"registry2Amount":0,"balance":168.11,"currency":"RUB","availableBalance":168.11,"availBalanceRub":168.11,"startDate":"16.07.2019","order":99,"category":"account","requisites":{"bankName":"ПАО \"СКБ-БАНК\"","address":"Россия, 624000, Свердловская обл, Сысертский р-н, Арамиль г, 1 Мая ул, д.59а","bic":"046577756","inn":"6608003052","kpp":"668501001","corrAccount":"30101810800000000756"},"allowInPayments":true,"allowOutPayments":true,"allowLoanRepayment":true,"tariffPlanName":"Универсальный","tariffPlanCode":"","tariffPlanLinkToRules":"","specType":"EX","mostActive":false,"pdfLink":"/export/account/pdf?id=24183879","overdraft":false,"sbpDefault":false,"bonusProgramState":"forbidden","availableBonuses":0,"accruedBonuses":0,"nextAccrualDate":null,"lockedAmount":0,"canClose":true,"bonusProgramGroup":{"firstCategory":"0","secondCategory":"0","thirdCategory":"0","selectCategoryDate":null},"petitionId":null},'+
        // '{"id":13517852,"customName":true,"name":"Счет VISA 2 ELECTRON3","productName":"Счет MIR DEBIT","number":"40817810500202337629","state":"Открыт","stateCode":"open","amount":2432.93,"type":"card","registryAmount":0,"registry2Amount":0,"balance":2449.43,"currency":"RUB","availableBalance":2432.93,"availBalanceRub":2432.93,"startDate":"10.01.2007","order":99,"category":"account","requisites":{"bankName":"ПАО \"СКБ-БАНК\"","address":"Россия, 624000, Свердловская обл, Сысертский р-н, Арамиль г, 1 Мая ул, д.59а","bic":"046577756","inn":"6608003052","kpp":"668501001","corrAccount":"30101810800000000756"},"allowInPayments":true,"allowOutPayments":true,"allowLoanRepayment":true,"tariffPlanName":"Специальный+. Паке","tariffPlanCode":"","tariffPlanLinkToRules":"","specType":"EV","mostActive":false,"pdfLink":"/export/account/pdf?id=13517852","overdraft":false,"sbpDefault":false,"bonusProgramState":"forbidden","availableBonuses":0,"accruedBonuses":0,"nextAccrualDate":null,"lockedAmount":0,"canClose":false,"bonusProgramGroup":{"firstCategory":"0","secondCategory":"0","thirdCategory":"0","selectCategoryDate":null},"petitionId":null,"cards":[24183877]}'+
        // '{"id":45315888,"customName":true,"name":"Счет MasterCard - Бонусный","productName":"Счет MasterCard Unembossed","number":"40817810600016255664","state":"Открыт","stateCode":"open","amount":503.00,"type":"current","registryAmount":0,"registry2Amount":0,"balance":503.00,"currency":"RUB","availableBalance":503.00,"availBalanceRub":503.00,"startDate":"16.04.2020","order":99,"category":"account","requisites":{"bankName":"ПАО \"СКБ-БАНК\"","address":"Россия, 624000, Свердловская обл, Сысертский р-н, Арамиль г, 1 Мая ул, д.59а","bic":"046577756","inn":"6608003052","kpp":"668501001","corrAccount":"30101810800000000756"},"allowInPayments":true,"allowOutPayments":true,"allowLoanRepayment":true,"tariffPlanName":"Универсальный","tariffPlanCode":"","tariffPlanLinkToRules":"","specType":"EX","mostActive":true,"pdfLink":"/export/account/pdf?id=45315888","overdraft":false,"sbpDefault":false,"bonusProgramState":"forbidden","availableBonuses":0,"accruedBonuses":150.00,"nextAccrualDate":null,"lockedAmount":0,"canClose":true,"bonusProgramGroup":{"firstCategory":"0","secondCategory":"0","thirdCategory":"0","selectCategoryDate":null},"petitionId":45315846},'+
        this.accountsStr = '[' +
            '{' +
            '"id":45315888,' +
            '"customName":true,"name":"Счет MasterCard - Бонусный",' +
            '"name":"1111",' +
            '"number":"40817810600016255664"' +
            '},' +
            '{' +
            '"id":45315887,' +
            '"customName":true,"name":"Счет MasterCard - Бонусный",' +
            '"name":"2222",' +
            '"number":"40817810600016255665"' +
            '}' +
            ']';
        this.depositsStr = '[' +
            '{"id":44109813,"bank_system_id":"16303548","contract_number":"10216642843","contract_date":"09.04.2020","close_account":"40817810500202337629","capitalization":false,"currency":"RUB","opening_balance":11111.00,"min_balance":10000.00,"balance":11111.00,"percentPaidPeriod":"В конце срока","duration":"277","open_date":"09.04.2020","end_date":"11.01.2021","early_close":false,"rate":5.8000,"ratePeriods":[],"balanceRub":11111.00,"account":"42305810310200268995","branch_id":56387,"allow_out_payments":false,"allow_in_payments":false,"percent_manageable":false,"capital_manageable":false,"percent_account":"42305810310200268995","auto_prolongation":false,"state":"open","state_description":"Действующий","customName":false,"name":"Исполнение желаний + (срочный вклад)","productName":"Исполнение желаний + (срочный вклад)","percent_paid":0.00,"percent_accrued":0.00,"petitionId":44109808},' +
            '{"id":43791355,"bank_system_id":"16293956","contract_number":"10216642829","contract_date":"07.04.2020","close_account":"40817810500202337629","capitalization":false,"currency":"RUB","opening_balance":10010.00,"min_balance":10000.00,"balance":10010.00,"percentPaidPeriod":"В конце срока","duration":"279","open_date":"07.04.2020","end_date":"11.01.2021","early_close":false,"rate":5.8000,"ratePeriods":[],"balanceRub":10010.00,"account":"42305810110200268234","branch_id":56387,"allow_out_payments":false,"allow_in_payments":false,"percent_manageable":false,"capital_manageable":false,"percent_account":"42305810110200268234","auto_prolongation":false,"state":"open","state_description":"Действующий","customName":true,"name":"Исполнение желаний + (срочный вклад)2","productName":"Исполнение желаний + (срочный вклад)","percent_paid":0.00,"percent_accrued":0.00,"petitionId":43791292},' +
            '{"id":43784243,"bank_system_id":"16293954","contract_number":"10216642827","contract_date":"07.04.2020","close_account":"40817810600016246806","capitalization":false,"currency":"RUB","opening_balance":10000.00,"min_balance":10000.00,"balance":10000.00,"percentPaidPeriod":"В конце срока","duration":"279","open_date":"07.04.2020","end_date":"11.01.2021","early_close":false,"rate":5.8000,"ratePeriods":[],"balanceRub":10000.00,"account":"42305810810200268233","branch_id":56387,"allow_out_payments":false,"allow_in_payments":false,"percent_manageable":false,"capital_manageable":false,"percent_account":"42305810810200268233","auto_prolongation":false,"state":"open","state_description":"Действующий","customName":false,"name":"Исполнение желаний + (срочный вклад)","productName":"Исполнение желаний + (срочный вклад)","percent_paid":0.00,"percent_accrued":0.00,"petitionId":43784237},' +
            '{"id":24511990,"bank_system_id":"14896294","contract_number":"21561489629","contract_date":"13.03.2019","close_account":"40817810500202337629","capitalization":false,"currency":"RUB","opening_balance":1184.50,"min_balance":1000.00,"balance":1184.50,"percentPaidPeriod":"Ежемесячно","duration":"1080","open_date":"13.03.2019","end_date":"25.02.2022","early_close":false,"rate":4.0000,"ratePeriods":[{"fromDay":1,"rate":6.7,"toDay":365},{"fromDay":366,"rate":4.0,"toDay":730},{"fromDay":731,"rate":2.0,"toDay":1080}],"balanceRub":1184.50,"account":"42306810110220325910","branch_id":56387,"allow_out_payments":true,"allow_in_payments":true,"percent_manageable":false,"capital_manageable":false,"percent_account":"40817810500202337629","auto_prolongation":false,"state":"open","state_description":"Действующий","customName":true,"name":"Вклад, с которого нужно переводить","productName":"Пенсионный (срочный вклад)","percent_paid":1639.45,"percent_accrued":0.00,"petitionId":null},' +
            '{"id":24511989,"bank_system_id":"3205631","contract_number":"13205631","contract_date":"25.11.2010","close_account":null,"capitalization":false,"currency":"RUB","opening_balance":0.06,"min_balance":0.00,"balance":0.06,"percentPaidPeriod":"Ежеквартально","duration":null,"open_date":"25.11.2010","end_date":null,"early_close":false,"rate":0.0100,"ratePeriods":[],"balanceRub":0.06,"account":"42301810110201323826","branch_id":56387,"allow_out_payments":true,"allow_in_payments":true,"percent_manageable":false,"capital_manageable":false,"percent_account":"42301810110201323826","auto_prolongation":false,"state":"open","state_description":"Действующий","customName":false,"name":"Вклад до востребования","productName":"Вклад до востребования","percent_paid":0.06,"percent_accrued":0.00,"petitionId":null}' +
            ']';
        appService.sessionState$.subscribe(function (sessionState) {
            if (sessionState === 'logged') {
                _this.updateProducts();
            }
            if (sessionState !== 'logged') {
                _this.clearProducts();
            }
        });
    }
    ProductsService.prototype.updateExternalCards = function () {
        // this.externalCards.next(null);
        // setTimeout(() => {
        this.updateExternalCards$.next(true);
        // this.externalCards.next(JSON.parse(this.externalCardsStr));
        // }, 0);
    };
    ProductsService.prototype.updateProducts = function () {
        var _this = this;
        this.clearProducts();
        setTimeout(function () {
            _this.externalCards.next(JSON.parse(_this.externalCardsStr));
            _this.accounts.next(JSON.parse(_this.accountsStr));
            _this.cards.next(JSON.parse(_this.cardsStr));
            _this.deposits.next(JSON.parse(_this.depositsStr));
            _this.updateCards$.next(true);
            _this.updateExternalCards$.next(true);
        }, 200);
    };
    ProductsService.prototype.productFromCategory = function (category) {
        switch (category) {
            case 'card':
                return this.getCards();
            case 'deposit':
                return this.deposits.getValue();
            case 'loan':
                return this.getLoans();
            case 'extCard':
                return this.getExternalCards();
            default:
                return this.getAccounts();
        }
    };
    ProductsService.prototype.getProducts = function (category, lambda) {
        if (lambda === void 0) { lambda = function (acc) { return true; }; }
        var products = this.productFromCategory(category);
        return products.filter(lambda);
    };
    ProductsService.prototype.getAccounts = function () {
        return this.accounts.getValue() || [];
    };
    ProductsService.prototype.getCards = function () {
        return this.cards.getValue() || [];
    };
    ProductsService.prototype.getExternalCards = function () {
        return this.externalCards.getValue() || [];
    };
    ProductsService.prototype.getLoans = function () {
        return this.loans.getValue() || [];
    };
    ProductsService.prototype.clearProducts = function () {
        this.accounts.next(null);
        this.cards.next(null);
        this.externalCards.next(null);
        this.deposits.next(null);
        this.loans.next(null);
    };
    ProductsService.prototype.getCardsByNumber = function (num) {
        var ret = this.getCards().filter(function (item) { return item.number === num; });
        if (ret) {
            return ret;
        }
        return null;
    };
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/service/service.module.ts":
/*!*******************************************!*\
  !*** ./src/app/service/service.module.ts ***!
  \*******************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
var ServiceModule = /** @class */ (function () {
    function ServiceModule() {
    }
    return ServiceModule;
}());



/***/ }),

/***/ "./src/app/service/title.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/title.service.ts ***!
  \******************************************/
/*! exports provided: TitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleService", function() { return TitleService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _matomo_matomo_tracker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../matomo/matomo-tracker.service */ "./src/app/matomo/matomo-tracker.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




// import { AppService, EnvironmentState } from 'app/core/app';
// declare var _paq: any;
var TitleService = /** @class */ (function () {
    function TitleService(document, 
    // private appService: AppService,
    router, route, matomoTrackerService, title) {
        var _this = this;
        this.document = document;
        this.router = router;
        this.route = route;
        this.matomoTrackerService = matomoTrackerService;
        this.title = title;
        // this.appService.environment$.subscribe((env: EnvironmentState) => {
        //     this.title = env.params.title;
        //     this.updateTitle();
        // });
        this.updateTitle();
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]; }))
            .subscribe(function (event) {
            _this.updateTitle();
        });
        // const title = route.data.map(d => d.title);
        //
        // title.subscribe((t) => { console.log(t); });
    }
    TitleService.prototype.updateTitle = function () {
        if (window.location.pathname === '/') {
            return;
        }
        // console.log(this.getRouteTitle(this.route.root.snapshot), this.title.getTitle())
        // this.document.title = this.title + this.getRouteTitle(this.route.root.snapshot);
        this.matomoTrackerService.setDocumentTitle(this.title.getTitle());
        this.matomoTrackerService.setCustomUrl(window.location.pathname);
        this.matomoTrackerService.trackPageView();
    };
    TitleService.prototype.getRouteTitle = function (route) {
        var children = route.children;
        var title = '';
        if (route.hasOwnProperty('data') && route.data.hasOwnProperty('title') && route.data.title) {
            title = ' - ' + route.data.title;
        }
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            if (child.outlet !== _angular_router__WEBPACK_IMPORTED_MODULE_0__["PRIMARY_OUTLET"]) {
                continue;
            }
            return title + this.getRouteTitle(child);
        }
        return title;
    };
    return TitleService;
}());



/***/ }),

/***/ "./src/app/ui/button/button.component.less.shim.ngstyle.js":
/*!*****************************************************************!*\
  !*** ./src/app/ui/button/button.component.less.shim.ngstyle.js ***!
  \*****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmxlc3MifQ== */"];



/***/ }),

/***/ "./src/app/ui/button/button.component.ngfactory.js":
/*!*********************************************************!*\
  !*** ./src/app/ui/button/button.component.ngfactory.js ***!
  \*********************************************************/
/*! exports provided: RenderType_ButtonComponent, View_ButtonComponent_0, View_ButtonComponent_Host_0, ButtonComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ButtonComponent", function() { return RenderType_ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ButtonComponent_0", function() { return View_ButtonComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ButtonComponent_Host_0", function() { return View_ButtonComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponentNgFactory", function() { return ButtonComponentNgFactory; });
/* harmony import */ var _button_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.component.less.shim.ngstyle */ "./src/app/ui/button/button.component.less.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _errors_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors/errors.component.ngfactory */ "./src/app/ui/errors/errors.component.ngfactory.js");
/* harmony import */ var _errors_errors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors/errors.component */ "./src/app/ui/errors/errors.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button.component */ "./src/app/ui/button/button.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_ButtonComponent = [_button_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ButtonComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ButtonComponent, data: {} });

function View_ButtonComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ui-control-errors", [], null, null, null, _errors_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ControlErrorsComponent_0"], _errors_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ControlErrorsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _errors_errors_component__WEBPACK_IMPORTED_MODULE_3__["ControlErrorsComponent"], [], { errors: [0, "errors"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.errors; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ButtonComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "button"]], [[8, "type", 0], [8, "tabIndex", 0], [8, "disabled", 0]], [[null, "click"], [null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("mousedown" === en)) {
        var pd_1 = (_co.onMouseDown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "button-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ButtonComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = ((_co.errors == null) ? null : _co.errors.length); _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.type; var currVal_1 = _co.tabindex; var currVal_2 = _co.disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_ButtonComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ui-button", [], null, null, null, View_ButtonComponent_0, RenderType_ButtonComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], [], null, null)], null, null); }
var ButtonComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ui-button", _button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], View_ButtonComponent_Host_0, { type: "type", tabindex: "tabindex", disabled: "disabled", errors: "errors" }, { buttonClick: "buttonClick", buttonMouseDown: "buttonMouseDown" }, ["*"]);



/***/ }),

/***/ "./src/app/ui/button/button.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/button/button.component.ts ***!
  \***********************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.type = 'button';
        this.tabindex = 0;
        this.disabled = false;
        this.errors = [];
        this.buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.buttonMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ButtonComponent.prototype.onClick = function (event) {
        if (!this.disabled) {
            this.buttonClick.emit(event);
        }
    };
    ButtonComponent.prototype.onMouseDown = function (event) {
        if (!this.disabled) {
            this.buttonMouseDown.emit(event);
        }
    };
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/ui/dropdown/menu/menu.component.less.shim.ngstyle.js":
/*!**********************************************************************!*\
  !*** ./src/app/ui/dropdown/menu/menu.component.less.shim.ngstyle.js ***!
  \**********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  position: absolute;\n  overflow-y: auto;\n  min-width: 180px;\n  margin-top: 2px;\n  line-height: 1;\n  z-index: 10;\n  background-color: white;\n  -webkit-transition-delay: 0.3s;\n          transition-delay: 0.3s;\n  border-radius: 2px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);\n  opacity: 0;\n}\n[_nghost-%COMP%]     ui-upload {\n  vertical-align: middle;\n  padding: 14px 16px 14px 16px;\n  width: 100%;\n  min-height: auto;\n  min-width: auto;\n  text-align: left;\n}\n[_nghost-%COMP%]     ui-upload .button {\n  height: auto;\n  padding: 0;\n  border: none;\n  outline: none;\n  border-radius: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  overflow: hidden;\n  color: #3c3c3c;\n  background-color: transparent;\n}\n[_nghost-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover     ui-upload .button {\n  color: #9ca093;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  cursor: pointer;\n  text-align: left;\n  color: #3c3c3c;\n}\n.dropdown-item[_ngcontent-%COMP%]:not(.upload) {\n  padding: 14px 16px 14px 16px;\n}\n.dropdown-item[_ngcontent-%COMP%]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 15px;\n  width: calc(100% - 32px);\n  height: 1px;\n  background-color: #e6e8e0;\n}\n.dropdown-item[_ngcontent-%COMP%]:first-child:before {\n  display: none;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover:before {\n  background-color: transparent;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover    + .dropdown-item[_ngcontent-%COMP%]:before {\n  display: none;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover:not(.item-null) {\n  color: #9ca093;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.dropdown-item[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pa2hhaWwvd29yay90ZXN0LWhlYXRtYXAvc3JjL2FwcC91aS9kcm9wZG93bi9tZW51L21lbnUuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3VpL2Ryb3Bkb3duL21lbnUvbWVudS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxVQUFBO0FDQ0o7QURaQTtFQWFRLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBRHBCQTtFQW9CWSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQ0daO0FEQ1E7RUFHWSxjQUFBO0FDRHBCO0FEUUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDTko7QURPSTtFQUNJLDRCQUFBO0FDTFI7QURPSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDTFI7QURRSTtFQUNJLGFBQUE7QUNOUjtBRFNJO0VBQ0ksNkJBQUE7QUNQUjtBRFVJO0VBQ0ksYUFBQTtBQ1JSO0FEV0k7RUFFSSxjQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtBQ1ZSO0FEYUk7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7QUNYUiIsImZpbGUiOiJzcmMvYXBwL3VpL2Ryb3Bkb3duL21lbnUvbWVudS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgOjpuZy1kZWVwIHVpLXVwbG9hZCB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIHBhZGRpbmc6IDE0cHggMTZweCAxNHB4IDE2cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgY29sb3I6ICMzYzNjM2M7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZHJvcGRvd24taXRlbSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgOjpuZy1kZWVwIHVpLXVwbG9hZCB7XG4gICAgICAgICAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOWNhMDkzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICMzYzNjM2M7XG4gICAgJjpub3QoLnVwbG9hZCkge1xuICAgICAgICBwYWRkaW5nOiAxNHB4IDE2cHggMTRweCAxNnB4O1xuICAgIH1cbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICAgIHdpZHRoOiB+XCJjYWxjKDEwMCUgLSAzMnB4KVwiO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZThlMDtcbiAgICB9XG5cbiAgICAmOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJjpob3ZlcjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOmhvdmVyICsgLmRyb3Bkb3duLWl0ZW06YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAmOmhvdmVyOm5vdCguaXRlbS1udWxsKSB7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2ZmZjdmNztcbiAgICAgICAgY29sb3I6ICM5Y2EwOTM7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0OztcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxufVxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1pbi13aWR0aDogMTgwcHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBvcGFjaXR5OiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIHVpLXVwbG9hZCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDE0cHggMTZweCAxNHB4IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xuICBtaW4td2lkdGg6IGF1dG87XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgdWktdXBsb2FkIC5idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6ICMzYzNjM2M7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgLmRyb3Bkb3duLWl0ZW06aG92ZXIgOjpuZy1kZWVwIHVpLXVwbG9hZCAuYnV0dG9uIHtcbiAgY29sb3I6ICM5Y2EwOTM7XG59XG4uZHJvcGRvd24taXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjM2MzYzNjO1xufVxuLmRyb3Bkb3duLWl0ZW06bm90KC51cGxvYWQpIHtcbiAgcGFkZGluZzogMTRweCAxNnB4IDE0cHggMTZweDtcbn1cbi5kcm9wZG93bi1pdGVtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDE1cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU4ZTA7XG59XG4uZHJvcGRvd24taXRlbTpmaXJzdC1jaGlsZDpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmRyb3Bkb3duLWl0ZW06aG92ZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZHJvcGRvd24taXRlbTpob3ZlciArIC5kcm9wZG93bi1pdGVtOmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZHJvcGRvd24taXRlbTpob3Zlcjpub3QoLml0ZW0tbnVsbCkge1xuICBjb2xvcjogIzljYTA5MztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uZHJvcGRvd24taXRlbVtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuIl19 */"];



/***/ }),

/***/ "./src/app/ui/dropdown/menu/menu.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/ui/dropdown/menu/menu.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_DropdownMenuComponent, View_DropdownMenuComponent_0, View_DropdownMenuComponent_Host_0, DropdownMenuComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DropdownMenuComponent", function() { return RenderType_DropdownMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DropdownMenuComponent_0", function() { return View_DropdownMenuComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DropdownMenuComponent_Host_0", function() { return View_DropdownMenuComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMenuComponentNgFactory", function() { return DropdownMenuComponentNgFactory; });
/* harmony import */ var _menu_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.component.less.shim.ngstyle */ "./src/app/ui/dropdown/menu/menu.component.less.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.component */ "./src/app/ui/dropdown/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_DropdownMenuComponent = [_menu_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_DropdownMenuComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_DropdownMenuComponent, data: { "animation": [{ type: 7, name: "state", definitions: [{ type: 0, name: "show", styles: { type: 6, styles: { opacity: 1 }, offset: null }, options: undefined }, { type: 0, name: "hide", styles: { type: 6, styles: { opacity: 0 }, offset: null }, options: undefined }], options: {} }] } });

function View_DropdownMenuComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_DropdownMenuComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.label; _ck(_v, 1, 0, currVal_0); }); }
function View_DropdownMenuComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DropdownMenuComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_0 = !_v.parent.context.$implicit.uploadFile; _ck(_v, 2, 0, currVal_0); }, null); }
function View_DropdownMenuComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "dropdown-item"]], [[2, "upload", null], [1, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.action(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DropdownMenuComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DropdownMenuComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.template; _ck(_v, 2, 0, currVal_2); var currVal_3 = !_co.template; _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.uploadFile; var currVal_1 = (_v.context.$implicit.disabled ? "disabled" : null); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_DropdownMenuComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DropdownMenuComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.menu; _ck(_v, 1, 0, currVal_0); }, null); }
function View_DropdownMenuComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ui-dropdown-menu", [], [[4, "top", "px"], [4, "left", "px"], [4, "right", "px"], [4, "bottom", "px"], [4, "min-width", "px"], [4, "max-width", null], [4, "height", "px"], [40, "@state", 0]], null, null, View_DropdownMenuComponent_0, RenderType_DropdownMenuComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _menu_component__WEBPACK_IMPORTED_MODULE_3__["DropdownMenuComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).top; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).left; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).right; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).bottom; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).width; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).maxWidth; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).height; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).state; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
var DropdownMenuComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ui-dropdown-menu", _menu_component__WEBPACK_IMPORTED_MODULE_3__["DropdownMenuComponent"], View_DropdownMenuComponent_Host_0, {}, { onClose: "onClose", onItemClick: "onItemClick" }, []);



/***/ }),

/***/ "./src/app/ui/dropdown/menu/menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ui/dropdown/menu/menu.component.ts ***!
  \****************************************************/
/*! exports provided: DropdownMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMenuComponent", function() { return DropdownMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DropdownMenuComponent = /** @class */ (function () {
    // private currentSessionState: SessionStateType;
    function DropdownMenuComponent(el, router) {
        this.el = el;
        this.router = router;
        this.state = 'hide';
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unsubscribing$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.menuState$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    DropdownMenuComponent.prototype.ngOnInit = function () {
        // this.currentSessionState = _get(this.appService, ['session$', 'value', 'state']);
        var _this = this;
        setTimeout(function () {
            if (_this.bottom) {
                // this.top = this.bottom - this.el.nativeElement.getBoundingClientRect().height;
                _this.top = _this.bottom;
                _this.bottom = undefined;
            }
            if (_this.right) {
                _this.left = _this.right - _this.el.nativeElement.getBoundingClientRect().width;
                _this.right = undefined;
            }
            var childHeight;
            if (_this.el.nativeElement.children[0] && _this.el.nativeElement.children[0]) {
                childHeight = _this.el.nativeElement.children[0].getBoundingClientRect().height;
            }
            if (childHeight && _this.maxDisplayItems) {
                _this.height = childHeight * Math.min(_this.maxDisplayItems, _this.menu.length);
            }
            _this.display();
        });
    };
    DropdownMenuComponent.prototype.ngOnDestroy = function () {
        this.unsubscribing$.next();
        this.unsubscribing$.complete();
    };
    DropdownMenuComponent.prototype.getNativeElement = function () {
        return this.el && this.el.nativeElement;
    };
    DropdownMenuComponent.prototype.close = function () {
        this.hide();
        this.onClose.next();
    };
    DropdownMenuComponent.prototype.action = function (item) {
        if (item.disabled || item.uploadFile) {
            return;
        }
        this.onItemClick.emit(item);
        this.close();
        if (typeof item.pathOrFunction === 'function') {
            item.pathOrFunction();
        }
        else {
            this.router.navigate([item.pathOrFunction], item.queryParams ? { queryParams: item.queryParams } : {});
        }
    };
    DropdownMenuComponent.prototype.onUpload = function (event, item) {
        // this.hideDropdown();
        this.close();
        item.pathOrFunction(event);
    };
    DropdownMenuComponent.prototype.display = function () {
        this.menuState$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.state = 'show';
        // this.listenSessionChanges();
        // this.cd.markForCheck();
    };
    DropdownMenuComponent.prototype.hide = function () {
        this.menuState$.next();
        this.menuState$.complete();
        this.state = 'hide';
    };
    return DropdownMenuComponent;
}());



/***/ }),

/***/ "./src/app/ui/errors/errors.component.less.shim.ngstyle.js":
/*!*****************************************************************!*\
  !*** ./src/app/ui/errors/errors.component.less.shim.ngstyle.js ***!
  \*****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2Vycm9ycy9lcnJvcnMuY29tcG9uZW50Lmxlc3MifQ== */"];



/***/ }),

/***/ "./src/app/ui/errors/errors.component.ngfactory.js":
/*!*********************************************************!*\
  !*** ./src/app/ui/errors/errors.component.ngfactory.js ***!
  \*********************************************************/
/*! exports provided: RenderType_ControlErrorsComponent, View_ControlErrorsComponent_0, View_ControlErrorsComponent_Host_0, ControlErrorsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ControlErrorsComponent", function() { return RenderType_ControlErrorsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ControlErrorsComponent_0", function() { return View_ControlErrorsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ControlErrorsComponent_Host_0", function() { return View_ControlErrorsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlErrorsComponentNgFactory", function() { return ControlErrorsComponentNgFactory; });
/* harmony import */ var _errors_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.component.less.shim.ngstyle */ "./src/app/ui/errors/errors.component.less.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _errors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors.component */ "./src/app/ui/errors/errors.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_ControlErrorsComponent = [_errors_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ControlErrorsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ControlErrorsComponent, data: {} });

function View_ControlErrorsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_ControlErrorsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "errors"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ControlErrorsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.errors; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ControlErrorsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ControlErrorsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.errors && (_co.errors.length > 0)); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ControlErrorsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ui-control-errors", [], null, null, null, View_ControlErrorsComponent_0, RenderType_ControlErrorsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _errors_component__WEBPACK_IMPORTED_MODULE_3__["ControlErrorsComponent"], [], null, null)], null, null); }
var ControlErrorsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ui-control-errors", _errors_component__WEBPACK_IMPORTED_MODULE_3__["ControlErrorsComponent"], View_ControlErrorsComponent_Host_0, { errors: "errors" }, {}, []);



/***/ }),

/***/ "./src/app/ui/errors/errors.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/errors/errors.component.ts ***!
  \***********************************************/
/*! exports provided: ControlErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlErrorsComponent", function() { return ControlErrorsComponent; });
var ControlErrorsComponent = /** @class */ (function () {
    function ControlErrorsComponent() {
        this.errors = [];
    }
    return ControlErrorsComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    return UiModule;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mikhail/work/test-heatmap/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map