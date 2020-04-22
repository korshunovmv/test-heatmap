(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-module-login-login-module-ngfactory"],{

/***/ "./node_modules/text-mask-core/dist/textMaskCore.js":
/*!**********************************************************!*\
  !*** ./node_modules/text-mask-core/dist/textMaskCore.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():undefined}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var o=t(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(o).default}});var i=t(2);Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return n(i).default}});var a=t(5);Object.defineProperty(r,"createTextMaskInputElement",{enumerable:!0,get:function(){return n(a).default}})},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_",r.strFunction="function"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,f=e.rawValue,d=e.placeholderChar,c=e.placeholder,p=e.indexesOfPipedChars,v=void 0===p?n:p,h=e.caretTrapIndexes,m=void 0===h?n:h;if(0===l||!f.length)return 0;var y=f.length,g=t.length,b=c.length,C=s.length,P=y-g,k=P>0,x=0===g,O=P>1&&!k&&!x;if(O)return l;var T=k&&(t===s||s===c),w=0,M=void 0,S=void 0;if(T)w=l-P;else{var j=s.toLowerCase(),_=f.toLowerCase(),V=_.substr(0,l).split(o),A=V.filter(function(e){return j.indexOf(e)!==-1});S=A[A.length-1];var N=a.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,E=c.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,F=E!==N,R=void 0!==a[A.length-1]&&void 0!==c[A.length-2]&&a[A.length-1]!==d&&a[A.length-1]!==c[A.length-1]&&a[A.length-1]===c[A.length-2];!k&&(F||R)&&N>0&&c.indexOf(S)>-1&&void 0!==f[l]&&(M=!0,S=f[l]);for(var I=v.map(function(e){return j[e]}),J=I.filter(function(e){return e===S}).length,W=A.filter(function(e){return e===S}).length,q=c.substr(0,c.indexOf(d)).split(o).filter(function(e,r){return e===S&&f[r]!==e}).length,L=q+W+J+(M?1:0),z=0,B=0;B<C;B++){var D=j[B];if(w=B+1,D===S&&z++,z>=L)break}}if(k){for(var G=w,H=w;H<=b;H++)if(c[H]===d&&(G=H),c[H]===d||m.indexOf(H)!==-1||H===b)return G}else if(M){for(var K=w-1;K>=0;K--)if(s[K]===S||m.indexOf(K)!==-1||0===K)return K}else for(var Q=w;Q>=0;Q--)if(c[Q-1]===d||m.indexOf(Q)!==-1||0===Q)return Q}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,i.isArray)(r)){if(("undefined"==typeof r?"undefined":o(r))!==a.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");r=r(e,t),r=(0,i.processCaretTraps)(r).maskWithoutCaretTraps}var n=t.guide,s=void 0===n||n,f=t.previousConformedValue,d=void 0===f?l:f,c=t.placeholderChar,p=void 0===c?a.placeholderChar:c,v=t.placeholder,h=void 0===v?(0,i.convertMaskToPlaceholder)(r,p):v,m=t.currentCaretPosition,y=t.keepCharPositions,g=s===!1&&void 0!==d,b=e.length,C=d.length,P=h.length,k=r.length,x=b-C,O=x>0,T=m+(O?-x:0),w=T+Math.abs(x);if(y===!0&&!O){for(var M=l,S=T;S<w;S++)h[S]===p&&(M+=p);e=e.slice(0,T)+M+e.slice(T,b)}for(var j=e.split(l).map(function(e,r){return{char:e,isNew:r>=T&&r<w}}),_=b-1;_>=0;_--){var V=j[_].char;if(V!==p){var A=_>=T&&C===k;V===h[A?_-x:_]&&j.splice(_,1)}}var N=l,E=!1;e:for(var F=0;F<P;F++){var R=h[F];if(R===p){if(j.length>0)for(;j.length>0;){var I=j.shift(),J=I.char,W=I.isNew;if(J===p&&g!==!0){N+=p;continue e}if(r[F].test(J)){if(y===!0&&W!==!1&&d!==l&&s!==!1&&O){for(var q=j.length,L=null,z=0;z<q;z++){var B=j[z];if(B.char!==p&&B.isNew===!1)break;if(B.char===p){L=z;break}}null!==L?(N+=J,j.splice(L,1)):F--}else N+=J;continue e}E=!0}g===!1&&(N+=h.substr(F,P));break}N+=R}if(g&&O===!1){for(var D=null,G=0;G<N.length;G++)h[G]===p&&(D=G);N=null!==D?N.substr(0,D+1):l}return{conformedValue:N,meta:{someCharsRejected:E}}}Object.defineProperty(r,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=n;var i=t(4),a=t(1),u=[],l=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.placeholderChar;if(!o(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function i(e){return"string"==typeof e||e instanceof String}function a(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function u(e){return"undefined"==typeof e||null===e}function l(e){for(var r=[],t=void 0;t=e.indexOf(d),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isArray=o,r.isString=i,r.isNumber=a,r.isNil=u,r.processCaretTraps=l;var s=t(1),f=[],d="[]"},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:r,update:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,d=n.guide,m=n.pipe,g=n.placeholderChar,b=void 0===g?v.placeholderChar:g,C=n.keepCharPositions,P=void 0!==C&&C,k=n.showMask,x=void 0!==k&&k;if("undefined"==typeof t&&(t=o.value),t!==r.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===y&&void 0!==s.pipe&&void 0!==s.mask&&(m=s.pipe,s=s.mask);var O=void 0,T=void 0;if(s instanceof Array&&(O=(0,p.convertMaskToPlaceholder)(s,b)),s!==!1){var w=a(t),M=o.selectionEnd,S=r.previousConformedValue,j=r.previousPlaceholder,_=void 0;if(("undefined"==typeof s?"undefined":l(s))===v.strFunction){if(T=s(w,{currentCaretPosition:M,previousConformedValue:S,placeholderChar:b}),T===!1)return;var V=(0,p.processCaretTraps)(T),A=V.maskWithoutCaretTraps,N=V.indexes;T=A,_=N,O=(0,p.convertMaskToPlaceholder)(T,b)}else T=s;var E={previousConformedValue:S,guide:d,placeholderChar:b,pipe:m,placeholder:O,currentCaretPosition:M,keepCharPositions:P},F=(0,c.default)(w,T,E),R=F.conformedValue,I=("undefined"==typeof m?"undefined":l(m))===v.strFunction,J={};I&&(J=m(R,u({rawValue:w},E)),J===!1?J={value:S,rejected:!0}:(0,p.isString)(J)&&(J={value:J}));var W=I?J.value:R,q=(0,f.default)({previousConformedValue:S,previousPlaceholder:j,conformedValue:W,placeholder:O,rawValue:w,currentCaretPosition:M,placeholderChar:b,indexesOfPipedChars:J.indexesOfPipedChars,caretTrapIndexes:_}),L=W===O&&0===q,z=x?O:h,B=L?z:W;r.previousConformedValue=B,r.previousPlaceholder=O,o.value!==B&&(o.value=B,i(o,q))}}}}}function i(e,r){document.activeElement===e&&(g?b(function(){return e.setSelectionRange(r,r,m)},0):e.setSelectionRange(r,r,m))}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return h;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var s=t(2),f=n(s),d=t(3),c=n(d),p=t(4),v=t(1),h="",m="none",y="object",g="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),b="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])});

/***/ }),

/***/ "./src/app/directive/input-text-mask.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/directive/input-text-mask.directive.ts ***!
  \********************************************************/
/*! exports provided: InputTextMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextMaskDirective", function() { return InputTextMaskDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var text_mask_core_dist_textMaskCore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! text-mask-core/dist/textMaskCore */ "./node_modules/text-mask-core/dist/textMaskCore.js");
/* harmony import */ var text_mask_core_dist_textMaskCore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(text_mask_core_dist_textMaskCore__WEBPACK_IMPORTED_MODULE_2__);
// tslint:disable



var InputTextMaskDirective = /** @class */ (function () {
    function InputTextMaskDirective(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.uiTextMask = {
            mask: '',
            guide: true,
            placeholderChar: '_',
            pipe: undefined,
            keepCharPositions: false,
        };
        this._onTouched = function () { };
        this._onChange = function (_) { };
    }
    InputTextMaskDirective.prototype.ngOnChanges = function (changes) {
        if (changes && changes.uiTextMask && !changes.uiTextMask.firstChange && changes.uiTextMask.currentValue) {
            this.fillTextMaskInputElement();
        }
    };
    InputTextMaskDirective.prototype.setupMask = function () {
        if (this.element.nativeElement.tagName === 'INPUT' || this.element.nativeElement.tagName === 'TEXTAREA') {
            // `textMask` directive is used directly on an input element
            this.inputElement = this.element.nativeElement;
        }
        else {
            // `textMask` directive is used on an abstracted input element, `ion-input`, `md-input`, etc
            this.inputElement = this.element.nativeElement.getElementsByTagName('INPUT')[0];
            if (this.inputElement) {
                this.inputElement = this.element.nativeElement.getElementsByTagName('TEXTAREA')[0];
            }
        }
        this.fillTextMaskInputElement();
    };
    InputTextMaskDirective.prototype.fillTextMaskInputElement = function () {
        if (this.inputElement && this.uiTextMask) {
            this.textMaskInputElement = Object(text_mask_core_dist_textMaskCore__WEBPACK_IMPORTED_MODULE_2__["createTextMaskInputElement"])(Object.assign({ inputElement: this.inputElement }, this.uiTextMask));
        }
    };
    InputTextMaskDirective.prototype.writeValue = function (value) {
        if (!this.inputElement) {
            this.setupMask();
        }
        this.lastValue = value;
        if (this.textMaskInputElement !== undefined && !Number.isNaN(value)) {
            this.textMaskInputElement.update(value);
        }
    };
    InputTextMaskDirective.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    InputTextMaskDirective.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    InputTextMaskDirective.prototype.onInput = function (value) {
        if (!this.inputElement) {
            this.setupMask();
        }
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(value);
            // get the updated value
            value = this.inputElement.value;
            // check against the last value to prevent firing ngModelChange despite no changes
            if (this.lastValue !== value) {
                this.lastValue = value;
                this._onChange(value);
            }
        }
    };
    InputTextMaskDirective.prototype.setDisabledState = function (isDisabled) {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
    };
    return InputTextMaskDirective;
}());



/***/ }),

/***/ "./src/app/module/login/login-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/module/login/login-routing.module.ts ***!
  \******************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _matomo_matomo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matomo/matomo.component */ "./src/app/module/login/matomo/matomo.component.ts");


var loginRoutes = [
    {
        path: '',
        redirectTo: '/matomo-init'
    },
    {
        path: 'matomo-init',
        component: _matomo_matomo_component__WEBPACK_IMPORTED_MODULE_1__["MatomoComponent"],
    },
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/module/login/login.module.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/module/login/login.module.ngfactory.js ***!
  \********************************************************/
/*! exports provided: LoginModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModuleNgFactory", function() { return LoginModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.module */ "./src/app/module/login/login.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _matomo_matomo_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matomo/matomo.component.ngfactory */ "./src/app/module/login/matomo/matomo.component.ngfactory.js");
/* harmony import */ var _ui_dropdown_menu_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/dropdown/menu/menu.component.ngfactory */ "./src/app/ui/dropdown/menu/menu.component.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/module/login/login-routing.module.ts");
/* harmony import */ var _directive_directive_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directive/directive.module */ "./src/app/directive/directive.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ngx_responsive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-responsive */ "./node_modules/ngx-responsive/fesm5/ngx-responsive.js");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/common.module */ "./src/app/common/common.module.ts");
/* harmony import */ var _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");
/* harmony import */ var _matomo_matomo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./matomo/matomo.component */ "./src/app/module/login/matomo/matomo.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var LoginModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_login_module__WEBPACK_IMPORTED_MODULE_1__["LoginModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _matomo_matomo_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatomoComponentNgFactory"], _ui_dropdown_menu_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["DropdownMenuComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _login_routing_module__WEBPACK_IMPORTED_MODULE_9__["LoginRoutingModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_9__["LoginRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _directive_directive_module__WEBPACK_IMPORTED_MODULE_10__["DirectiveModule"], _directive_directive_module__WEBPACK_IMPORTED_MODULE_10__["DirectiveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_responsive__WEBPACK_IMPORTED_MODULE_12__["ResponsiveModule"], ngx_responsive__WEBPACK_IMPORTED_MODULE_12__["ResponsiveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ui_ui_module__WEBPACK_IMPORTED_MODULE_13__["UiModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_13__["UiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_common_module__WEBPACK_IMPORTED_MODULE_14__["AppCommonModule"], _common_common_module__WEBPACK_IMPORTED_MODULE_14__["AppCommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_15__["PipeModule"], _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_15__["PipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _login_module__WEBPACK_IMPORTED_MODULE_1__["LoginModule"], _login_module__WEBPACK_IMPORTED_MODULE_1__["LoginModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_8__["ROUTES"], function () { return [[{ path: "", redirectTo: "/matomo-init" }, { path: "matomo-init", component: _matomo_matomo_component__WEBPACK_IMPORTED_MODULE_16__["MatomoComponent"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/module/login/login.module.ts":
/*!**********************************************!*\
  !*** ./src/app/module/login/login.module.ts ***!
  \**********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/module/login/matomo/matomo.component.less.shim.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/module/login/matomo/matomo.component.less.shim.ngstyle.js ***!
  \***************************************************************************/
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
var styles = ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pa2hhaWwvd29yay90ZXN0LWhlYXRtYXAvc3JjL2FwcC9tb2R1bGUvbG9naW4vbWF0b21vL21hdG9tby5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlL2xvZ2luL21hdG9tby9tYXRvbW8uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS9sb2dpbi9tYXRvbW8vbWF0b21vLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuIl19 */"];



/***/ }),

/***/ "./src/app/module/login/matomo/matomo.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/module/login/matomo/matomo.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_MatomoComponent, View_MatomoComponent_0, View_MatomoComponent_Host_0, MatomoComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MatomoComponent", function() { return RenderType_MatomoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MatomoComponent_0", function() { return View_MatomoComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MatomoComponent_Host_0", function() { return View_MatomoComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatomoComponentNgFactory", function() { return MatomoComponentNgFactory; });
/* harmony import */ var _matomo_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matomo.component.less.shim.ngstyle */ "./src/app/module/login/matomo/matomo.component.less.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ui_input_input_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/input/input.component.ngfactory */ "./src/app/ui/input/input.component.ngfactory.js");
/* harmony import */ var _ui_custom_form_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/custom-form-control */ "./src/app/ui/custom-form-control.ts");
/* harmony import */ var _ui_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/input/input.component */ "./src/app/ui/input/input.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _matomo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./matomo.component */ "./src/app/module/login/matomo/matomo.component.ts");
/* harmony import */ var _matomo_matomo_injector_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../matomo/matomo-injector.service */ "./src/app/matomo/matomo-injector.service.ts");
/* harmony import */ var _service_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/title.service */ "./src/app/service/title.service.ts");
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/app.service */ "./src/app/service/app.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_MatomoComponent = [_matomo_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MatomoComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MatomoComponent, data: {} });

function View_MatomoComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["MatomoURL(*): "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "ui-input", [["placeholder", "MatomoURL"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"], ["document", "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("document:click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onDocumentClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.matomoURL = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _ui_input_input_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_InputComponent_0"], _ui_input_input_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_InputComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _ui_custom_form_control__WEBPACK_IMPORTED_MODULE_3__["CustomFormControl"], null, [_ui_input_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4964352, null, 0, _ui_input_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { disabled: [0, "disabled"], placeholder: [1, "placeholder"], type: [2, "type"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ui_input_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], { isDisabled: [0, "isDisabled"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["fileName: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 6, "ui-input", [["placeholder", "fileName"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"], ["document", "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("document:click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onDocumentClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.fileName = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _ui_input_input_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_InputComponent_0"], _ui_input_input_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_InputComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _ui_custom_form_control__WEBPACK_IMPORTED_MODULE_3__["CustomFormControl"], null, [_ui_input_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 4964352, null, 0, _ui_input_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { disabled: [0, "disabled"], placeholder: [1, "placeholder"], type: [2, "type"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ui_input_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], { isDisabled: [0, "isDisabled"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["SiteId(our internal variable): "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 6, "ui-input", [["placeholder", "SiteId"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"], ["document", "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("document:click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).onDocumentClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.setSiteId = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _ui_input_input_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_InputComponent_0"], _ui_input_input_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_InputComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _ui_custom_form_control__WEBPACK_IMPORTED_MODULE_3__["CustomFormControl"], null, [_ui_input_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 4964352, null, 0, _ui_input_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { disabled: [0, "disabled"], placeholder: [1, "placeholder"], type: [2, "type"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ui_input_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], { isDisabled: [0, "isDisabled"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "button", [], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.initMatomoService() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Init matomo"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.inited; var currVal_8 = "MatomoURL"; var currVal_9 = "text"; _ck(_v, 4, 0, currVal_7, currVal_8, currVal_9); var currVal_10 = _co.inited; var currVal_11 = _co.matomoURL; _ck(_v, 6, 0, currVal_10, currVal_11); var currVal_19 = _co.inited; var currVal_20 = "fileName"; var currVal_21 = "text"; _ck(_v, 13, 0, currVal_19, currVal_20, currVal_21); var currVal_22 = _co.inited; var currVal_23 = _co.fileName; _ck(_v, 15, 0, currVal_22, currVal_23); var currVal_31 = _co.inited; var currVal_32 = "SiteId"; var currVal_33 = "text"; _ck(_v, 22, 0, currVal_31, currVal_32, currVal_33); var currVal_34 = _co.inited; var currVal_35 = _co.setSiteId; _ck(_v, 24, 0, currVal_34, currVal_35); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassPending; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassUntouched; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassTouched; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPristine; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassDirty; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassValid; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassInvalid; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPending; _ck(_v, 11, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassUntouched; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassTouched; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassPristine; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassDirty; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassValid; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassInvalid; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassPending; _ck(_v, 20, 0, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30); var currVal_36 = _co.inited; _ck(_v, 27, 0, currVal_36); }); }
function View_MatomoComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "widget-matomo", [], null, null, null, View_MatomoComponent_0, RenderType_MatomoComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _matomo_component__WEBPACK_IMPORTED_MODULE_6__["MatomoComponent"], [_matomo_matomo_injector_service__WEBPACK_IMPORTED_MODULE_7__["MatomoInjectorService"], _service_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"], _service_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MatomoComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("widget-matomo", _matomo_component__WEBPACK_IMPORTED_MODULE_6__["MatomoComponent"], View_MatomoComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/module/login/matomo/matomo.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/module/login/matomo/matomo.component.ts ***!
  \*********************************************************/
/*! exports provided: MatomoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatomoComponent", function() { return MatomoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_matomo_matomo_injector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/matomo/matomo-injector.service */ "./src/app/matomo/matomo-injector.service.ts");
/* harmony import */ var app_service_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/title.service */ "./src/app/service/title.service.ts");
/* harmony import */ var app_service_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/app.service */ "./src/app/service/app.service.ts");





var MatomoComponent = /** @class */ (function () {
    function MatomoComponent(matomoInjectorService, titleService, appService) {
        this.matomoInjectorService = matomoInjectorService;
        this.titleService = titleService;
        this.appService = appService;
        this.matomoURL = 'https://isf-regress.skblab.ru/';
        this.setSiteId = '2';
        this.fileName = 'stat';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    Object.defineProperty(MatomoComponent.prototype, "inited", {
        get: function () {
            return this.matomoInjectorService.inited;
        },
        enumerable: true,
        configurable: true
    });
    MatomoComponent.prototype.ngOnInit = function () {
        // this.appService
        //     .environment$
        //     .pipe(takeUntil(this.unsubscriber$))
        //     .subscribe((env: EnvironmentState) => {
        //         this.isDemoBuild = env.isDemoBuild;
        //         this.demoLink = env.params.demoLink;
        //         this.instructionLink = env.params.instructionLink;
        //         this.demoVideoLink = env.params.demoVideoLink;
        //     });
    };
    MatomoComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
    };
    MatomoComponent.prototype.initMatomoService = function () {
        var _this = this;
        this.matomoInjectorService.init(this.matomoURL, this.fileName, this.setSiteId);
        this.titleService.updateTitle();
        setTimeout(function () {
            _this.appService.logged();
        }, 100);
    };
    return MatomoComponent;
}());



/***/ }),

/***/ "./src/app/ui/custom-form-control.ts":
/*!*******************************************!*\
  !*** ./src/app/ui/custom-form-control.ts ***!
  \*******************************************/
/*! exports provided: CustomFormControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFormControl", function() { return CustomFormControl; });
var CustomFormControl = /** @class */ (function () {
    function CustomFormControl() {
    }
    return CustomFormControl;
}());



/***/ }),

/***/ "./src/app/ui/input/input.component.less.shim.ngstyle.js":
/*!***************************************************************!*\
  !*** ./src/app/ui/input/input.component.less.shim.ngstyle.js ***!
  \***************************************************************/
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
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2lucHV0L2lucHV0LmNvbXBvbmVudC5sZXNzIn0= */"];



/***/ }),

/***/ "./src/app/ui/input/input.component.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/ui/input/input.component.ngfactory.js ***!
  \*******************************************************/
/*! exports provided: RenderType_InputComponent, View_InputComponent_0, View_InputComponent_Host_0, InputComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_InputComponent", function() { return RenderType_InputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_InputComponent_0", function() { return View_InputComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_InputComponent_Host_0", function() { return View_InputComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponentNgFactory", function() { return InputComponentNgFactory; });
/* harmony import */ var _input_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.component.less.shim.ngstyle */ "./src/app/ui/input/input.component.less.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tooltip_tooltip_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tooltip/tooltip.component.ngfactory */ "./src/app/ui/tooltip/tooltip.component.ngfactory.js");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tooltip/tooltip.component */ "./src/app/ui/tooltip/tooltip.component.ts");
/* harmony import */ var _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon/icon.component.ngfactory */ "./src/app/ui/icon/icon.component.ngfactory.js");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon/icon.component */ "./src/app/ui/icon/icon.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _directive_input_text_mask_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../directive/input-text-mask.directive */ "./src/app/directive/input-text-mask.directive.ts");
/* harmony import */ var _errors_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../errors/errors.component.ngfactory */ "./src/app/ui/errors/errors.component.ngfactory.js");
/* harmony import */ var _errors_errors_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../errors/errors.component */ "./src/app/ui/errors/errors.component.ts");
/* harmony import */ var _show_more_text_show_more_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../show-more-text/show-more-text.component.ngfactory */ "./src/app/ui/show-more-text/show-more-text.component.ngfactory.js");
/* harmony import */ var _show_more_text_show_more_text_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../show-more-text/show-more-text.component */ "./src/app/ui/show-more-text/show-more-text.component.ts");
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./input.component */ "./src/app/ui/input/input.component.ts");
/* harmony import */ var _custom_form_control__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../custom-form-control */ "./src/app/ui/custom-form-control.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















var styles_InputComponent = [_input_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_InputComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_InputComponent, data: {} });

function View_InputComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.label || _co.placeholder); _ck(_v, 1, 0, currVal_0); }); }
function View_InputComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, [[2, 0], ["placeholderRef", 1]], null, 4, "div", [["class", "placeholder"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "error": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "placeholder"; var currVal_1 = _ck(_v, 2, 0, (_co.error || (_co.errors && (_co.errors.length > 0)))); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = ((((_co.value != null) && (_co.value !== "")) || _co.customPlaceholder) || _co.focus); _ck(_v, 4, 0, currVal_2); }, null); }
function View_InputComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, [[3, 0], ["icon", 1]], null, 4, "div", [["class", "icon right"]], [[2, "focus", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "ui-tooltip", [["posX", "right"]], null, null, null, _tooltip_tooltip_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_TooltipComponent_0"], _tooltip_tooltip_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_TooltipComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["TooltipComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { text: [0, "text"], posX: [1, "posX"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 1, "ui-icon", [["letter", "question"]], null, null, null, _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IconComponent_0"], _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 573440, null, 0, _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], [], { letter: [0, "letter"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.tooltip; var currVal_2 = "right"; _ck(_v, 2, 0, currVal_1, currVal_2); var currVal_3 = "question"; _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.focus; _ck(_v, 0, 0, currVal_0); }); }
function View_InputComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ui-icon", [["style", "cursor: pointer"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clearValue() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IconComponent_0"], _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 573440, null, 0, _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], [], { letter: [0, "letter"] }, null)], function (_ck, _v) { var currVal_0 = "search_cross"; _ck(_v, 1, 0, currVal_0); }, null); }
function View_InputComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ui-icon", [], null, null, null, _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IconComponent_0"], _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 573440, null, 0, _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], [], { letter: [0, "letter"] }, null)], function (_ck, _v) { var currVal_0 = "search"; _ck(_v, 1, 0, currVal_0); }, null); }
function View_InputComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, [[3, 0], ["icon", 1]], null, 4, "div", [["class", "icon right"]], [[2, "focus", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.value; _ck(_v, 2, 0, currVal_1); var currVal_2 = !_co.value; _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.focus; _ck(_v, 0, 0, currVal_0); }); }
function View_InputComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, [[3, 0], ["icon", 1]], null, 2, "div", [["class", "icon right"]], [[2, "focus", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clickForImg() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "ui-icon", [["letter", "search_cross"]], null, null, null, _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IconComponent_0"], _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 573440, null, 0, _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], [], { letter: [0, "letter"] }, null)], function (_ck, _v) { var currVal_1 = "search_cross"; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.focus; _ck(_v, 0, 0, currVal_0); }); }
function View_InputComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, [[3, 0], ["icon", 1]], null, 2, "div", [["class", "icon right"]], [[2, "focus", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "ui-icon", [["letter", "search"]], null, null, null, _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IconComponent_0"], _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 573440, null, 0, _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], [], { letter: [0, "letter"] }, null)], function (_ck, _v) { var currVal_1 = "search"; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.focus; _ck(_v, 0, 0, currVal_0); }); }
function View_InputComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, [[3, 0], ["icon", 1]], null, 2, "div", [["class", "icon icon--login left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "ui-icon", [["letter", "user"]], null, null, null, _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IconComponent_0"], _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 573440, null, 0, _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], [], { letter: [0, "letter"] }, null)], function (_ck, _v) { var currVal_0 = "user"; _ck(_v, 2, 0, currVal_0); }, null); }
function View_InputComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, [[3, 0], ["icon", 1]], null, 2, "div", [["class", "icon icon--password left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "ui-icon", [["letter", "password"]], null, null, null, _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IconComponent_0"], _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 573440, null, 0, _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], [], { letter: [0, "letter"] }, null)], function (_ck, _v) { var currVal_0 = "password"; _ck(_v, 2, 0, currVal_0); }, null); }
function View_InputComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, [[3, 0], ["icon", 1]], null, 4, "div", [["class", "icon icon--toggle-password right"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.togglePassword() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "ui-icon", [["letter", "invisible"]], [[2, "is-hidden", null]], null, null, _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IconComponent_0"], _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 573440, null, 0, _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], [], { letter: [0, "letter"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "ui-icon", [["letter", "visible"]], [[2, "is-hidden", null]], null, null, _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IconComponent_0"], _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 573440, null, 0, _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], [], { letter: [0, "letter"] }, null)], function (_ck, _v) { var currVal_1 = "invisible"; _ck(_v, 2, 0, currVal_1); var currVal_3 = "visible"; _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.visiblePassword; _ck(_v, 1, 0, currVal_0); var currVal_2 = !_co.visiblePassword; _ck(_v, 3, 0, currVal_2); }); }
function View_InputComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, [[3, 0], ["icon", 1]], null, 3, "div", [["class", "icon right"]], [[2, "hasFloatLabel", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 1)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.withPlaceholderLabel && _co.placeholder) && _co.withIcon); _ck(_v, 0, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "grey-icon icon-", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.currencyType)), ""); _ck(_v, 2, 0, currVal_1); }); }
function View_InputComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, [[3, 0], ["icon", 1]], null, 2, "div", [["class", "icon right icon-input"]], [[2, "hasFloatLabel", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "span", [["class", "icon-rub"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.withPlaceholderLabel && _co.placeholder) && _co.withIcon); _ck(_v, 0, 0, currVal_0); }); }
function View_InputComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, [[3, 0], ["icon", 1]], null, 2, "div", [["class", "icon right icon-input"]], [[2, "hasFloatLabel", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "span", [["class", "icon-usd"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.withPlaceholderLabel && _co.placeholder) && _co.withIcon); _ck(_v, 0, 0, currVal_0); }); }
function View_InputComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, [[3, 0], ["icon", 1]], null, 2, "div", [["class", "icon right icon-input"]], [[2, "hasFloatLabel", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "span", [["class", "icon-eur"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.withPlaceholderLabel && _co.placeholder) && _co.withIcon); _ck(_v, 0, 0, currVal_0); }); }
function View_InputComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "icon-delete"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clearValue() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_InputComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, [[3, 0], ["icon", 1]], null, 3, "div", [["class", "icon right hasFloatLabel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.value; _ck(_v, 3, 0, currVal_0); }, null); }
function View_InputComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "icon right hasFloatLabel"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onCustomIconClick.emit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "ui-icon", [], null, null, null, _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IconComponent_0"], _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 573440, null, 0, _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], [], { letter: [0, "letter"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.customIcon; _ck(_v, 2, 0, currVal_0); }, null); }
function View_InputComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, [[3, 0], ["icon", 1]], null, 1, "div", [["class", "icon percent right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "span", [["class", "icon-percent"]], null, null, null, null, null))], null, null); }
function View_InputComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, [[3, 0], ["icon", 1]], null, 1, "div", [["class", "image icon right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.imgUrl; _ck(_v, 1, 0, currVal_0); }); }
function View_InputComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, [[1, 0], ["localInput", 1]], null, 10, "input", [], [[8, "placeholder", 0], [8, "readOnly", 0], [8, "minLength", 0], [2, "with-icon", null], [2, "error", null], [8, "type", 0], [1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keyup.enter"], [null, "keydown"], [null, "ngModelChange"], [null, "blur"], [null, "paste"], [null, "drop"], [null, "mouseup"], [null, "focus"], [null, "focusout"], [null, "input"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("input" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onInput($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._onTouched() !== false);
        ad = (pd_5 && ad);
    } if (("keyup.enter" === en)) {
        var pd_6 = (_co.onEnter() !== false);
        ad = (pd_6 && ad);
    } if (("keydown" === en)) {
        var pd_7 = (_co.onLocalKeyDown($event) !== false);
        ad = (pd_7 && ad);
    } if (("ngModelChange" === en)) {
        var pd_8 = ((_co.value = $event) !== false);
        ad = (pd_8 && ad);
    } if (("blur" === en)) {
        var pd_9 = (_co.onBlurInput() !== false);
        ad = (pd_9 && ad);
    } if (("paste" === en)) {
        var pd_10 = (_co.onPasteEvent($event) !== false);
        ad = (pd_10 && ad);
    } if (("drop" === en)) {
        var pd_11 = (_co.onDropEvent($event) !== false);
        ad = (pd_11 && ad);
    } if (("mouseup" === en)) {
        var pd_12 = (_co.onMouseUp($event) !== false);
        ad = (pd_12 && ad);
    } if (("focus" === en)) {
        var pd_13 = (_co.onFocusInput($event) !== false);
        ad = (pd_13 && ad);
    } if (("focusout" === en)) {
        var pd_14 = (_co.onFocusOut($event) !== false);
        ad = (pd_14 && ad);
    } if (("ngModelChange" === en)) {
        var pd_15 = (_co.onChange($event) !== false);
        ad = (pd_15 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 540672, null, 0, _directive_input_text_mask_directive__WEBPACK_IMPORTED_MODULE_8__["InputTextMaskDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { uiTextMask: [0, "uiTextMask"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _directive_input_text_mask_directive__WEBPACK_IMPORTED_MODULE_8__["InputTextMaskDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], { isDisabled: [0, "isDisabled"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_15 = _co.type; _ck(_v, 1, 0, currVal_15); var currVal_16 = _co.required; _ck(_v, 3, 0, currVal_16); var currVal_17 = _co.maxlength; _ck(_v, 4, 0, currVal_17); var currVal_18 = _co.mask; _ck(_v, 6, 0, currVal_18); var currVal_19 = _co.disabled; var currVal_20 = _co.value; _ck(_v, 8, 0, currVal_19, currVal_20); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getPlaceholder(); var currVal_1 = _co.readonly; var currVal_2 = _co.minLength; var currVal_3 = _co.hasIconClass; var currVal_4 = (_co.error || (_co.errors && (_co.errors.length > 0))); var currVal_5 = _co._inputType; var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).required ? "" : null); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).maxlength : null); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14]); }); }
function View_InputComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, [[1, 0], ["localInput", 1]], null, 10, "input", [["formControlName", "field"]], [[8, "placeholder", 0], [8, "readOnly", 0], [8, "minLength", 0], [2, "error", null], [2, "with-icon", null], [8, "type", 0], [1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keyup.enter"], [null, "keydown"], [null, "keyup"], [null, "blur"], [null, "paste"], [null, "drop"], [null, "mouseup"], [null, "focus"], [null, "focusout"], [null, "input"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("input" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onInput($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._onTouched() !== false);
        ad = (pd_5 && ad);
    } if (("keyup.enter" === en)) {
        var pd_6 = (_co.onEnter() !== false);
        ad = (pd_6 && ad);
    } if (("keydown" === en)) {
        var pd_7 = (_co.onLocalKeyDown($event) !== false);
        ad = (pd_7 && ad);
    } if (("keyup" === en)) {
        var pd_8 = (_co.onLocalKeyUp($event) !== false);
        ad = (pd_8 && ad);
    } if (("blur" === en)) {
        var pd_9 = (_co.onBlurInput() !== false);
        ad = (pd_9 && ad);
    } if (("paste" === en)) {
        var pd_10 = (_co.onPasteEvent($event) !== false);
        ad = (pd_10 && ad);
    } if (("drop" === en)) {
        var pd_11 = (_co.onDropEvent($event) !== false);
        ad = (pd_11 && ad);
    } if (("mouseup" === en)) {
        var pd_12 = (_co.onMouseUp($event) !== false);
        ad = (pd_12 && ad);
    } if (("focus" === en)) {
        var pd_13 = (_co.onFocusInput($event) !== false);
        ad = (pd_13 && ad);
    } if (("focusout" === en)) {
        var pd_14 = (_co.onFocusOut($event) !== false);
        ad = (pd_14 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 540672, null, 0, _directive_input_text_mask_directive__WEBPACK_IMPORTED_MODULE_8__["InputTextMaskDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { uiTextMask: [0, "uiTextMask"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _directive_input_text_mask_directive__WEBPACK_IMPORTED_MODULE_8__["InputTextMaskDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_k"]]], { name: [0, "name"], isDisabled: [1, "isDisabled"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.formGroup; _ck(_v, 1, 0, currVal_7); var currVal_23 = _co.type; _ck(_v, 5, 0, currVal_23); var currVal_24 = _co.required; _ck(_v, 7, 0, currVal_24); var currVal_25 = _co.maxlength; _ck(_v, 8, 0, currVal_25); var currVal_26 = _co.mask; _ck(_v, 10, 0, currVal_26); var currVal_27 = "field"; var currVal_28 = _co.disabled; _ck(_v, 12, 0, currVal_27, currVal_28); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = _co.getPlaceholder(); var currVal_9 = _co.readonly; var currVal_10 = _co.minLength; var currVal_11 = (_co.error || (_co.errors && (_co.errors.length > 0))); var currVal_12 = _co.hasIconClass; var currVal_13 = _co._inputType; var currVal_14 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).required ? "" : null); var currVal_15 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).maxlength : null); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassUntouched; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassTouched; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassPristine; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassDirty; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassValid; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassInvalid; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassPending; _ck(_v, 4, 1, [currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22]); }); }
function View_InputComponent_24(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "counter__val"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.counterText; _ck(_v, 1, 0, currVal_0); }); }
function View_InputComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "counter"]], [[2, "warning", null], [2, "success", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "counter__val"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", "/", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.counterText; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.valueLength < _co.minLength); var currVal_1 = (_co.valueLength >= _co.minLength); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _co.valueLength; var currVal_4 = _co.maxlength; _ck(_v, 4, 0, currVal_3, currVal_4); }); }
function View_InputComponent_25(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ui-control-errors", [], null, null, null, _errors_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ControlErrorsComponent_0"], _errors_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ControlErrorsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _errors_errors_component__WEBPACK_IMPORTED_MODULE_10__["ControlErrorsComponent"], [], { errors: [0, "errors"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.errors; _ck(_v, 1, 0, currVal_0); }, null); }
function View_InputComponent_26(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "ui-show-more-text", [["class", "hint"]], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onResize($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _show_more_text_show_more_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_ShowMoreTextComponent_0"], _show_more_text_show_more_text_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_ShowMoreTextComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4833280, null, 0, _show_more_text_show_more_text_component__WEBPACK_IMPORTED_MODULE_12__["ShowMoreTextComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { lineCount: [0, "lineCount"], text: [1, "text"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.hintLineCount || 1); var currVal_1 = _co.hint; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_InputComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["LowerCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { loginInput: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, { placeholderRef: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 3, { icon: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 43, "div", [["class", "control"]], [[2, "disabled", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 34, "div", [["class", "input-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InputComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.withPlaceholderLabel && _co.placeholder); _ck(_v, 6, 0, currVal_1); var currVal_2 = _co.tooltip; _ck(_v, 9, 0, currVal_2); var currVal_3 = (_co.type == "find"); _ck(_v, 11, 0, currVal_3); var currVal_4 = (_co.value && (_co.type == "find-contragents")); _ck(_v, 13, 0, currVal_4); var currVal_5 = (!_co.value && (_co.type == "find-contragents")); _ck(_v, 15, 0, currVal_5); var currVal_6 = _co.loginIcon; _ck(_v, 17, 0, currVal_6); var currVal_7 = _co.passwordIcon; _ck(_v, 19, 0, currVal_7); var currVal_8 = _co.togglePasswordIcon; _ck(_v, 21, 0, currVal_8); var currVal_9 = (_co.type == "currency"); _ck(_v, 23, 0, currVal_9); var currVal_10 = (_co.type == "RUB"); _ck(_v, 25, 0, currVal_10); var currVal_11 = (_co.type == "USD"); _ck(_v, 27, 0, currVal_11); var currVal_12 = (_co.type == "EUR"); _ck(_v, 29, 0, currVal_12); var currVal_13 = _co.enabledDeletion; _ck(_v, 31, 0, currVal_13); var currVal_14 = _co.customIcon; _ck(_v, 33, 0, currVal_14); var currVal_15 = _co.percent; _ck(_v, 35, 0, currVal_15); var currVal_16 = _co.imgUrl; _ck(_v, 37, 0, currVal_16); var currVal_17 = !_co.reactiveForm; _ck(_v, 39, 0, currVal_17); var currVal_18 = _co.reactiveForm; _ck(_v, 41, 0, currVal_18); var currVal_19 = (_co.counter && _co.maxlength); _ck(_v, 43, 0, currVal_19); var currVal_20 = ((_co.errors == null) ? null : _co.errors.length); _ck(_v, 45, 0, currVal_20); var currVal_21 = _co.hint; _ck(_v, 47, 0, currVal_21); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.disabled; _ck(_v, 4, 0, currVal_0); }); }
function View_InputComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "ui-input", [], null, [[null, "click"], ["document", "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("document:click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onDocumentClick($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, View_InputComponent_0, RenderType_InputComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_input_component__WEBPACK_IMPORTED_MODULE_13__["InputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _custom_form_control__WEBPACK_IMPORTED_MODULE_14__["CustomFormControl"], null, [_input_component__WEBPACK_IMPORTED_MODULE_13__["InputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4964352, null, 0, _input_component__WEBPACK_IMPORTED_MODULE_13__["InputComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
var InputComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ui-input", _input_component__WEBPACK_IMPORTED_MODULE_13__["InputComponent"], View_InputComponent_Host_0, { withIcon: "withIcon", formGroup: "formGroup", enabledDeletion: "enabledDeletion", reactiveForm: "reactiveForm", disabled: "disabled", dictionary: "dictionary", loginIcon: "loginIcon", passwordIcon: "passwordIcon", togglePasswordIcon: "togglePasswordIcon", percent: "percent", hint: "hint", hintLineCount: "hintLineCount", label: "label", placeholder: "placeholder", error: "error", withPlaceholderLabel: "withPlaceholderLabel", readonly: "readonly", counter: "counter", preventPaste: "preventPaste", maxlength: "maxlength", minLength: "minLength", errors: "errors", customPlaceholder: "customPlaceholder", required: "required", currencyType: "currencyType", tooltip: "tooltip", customIcon: "customIcon", imgUrl: "imgUrl", counterText: "counterText", mask: "mask", type: "type" }, { submit: "submit", onBlur: "onBlur", onFocus: "onFocus", onKeyDown: "onKeyDown", onKeyUp: "onKeyUp", onPaste: "onPaste", onDrop: "onDrop", onClear: "onClear", onCustomIconClick: "onCustomIconClick" }, []);



/***/ }),

/***/ "./src/app/ui/input/input.component.ts":
/*!*********************************************!*\
  !*** ./src/app/ui/input/input.component.ts ***!
  \*********************************************/
/*! exports provided: CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, InputComponent, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_create_number_mask_ex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/create-number-mask-ex */ "./src/app/util/create-number-mask-ex.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util */ "./src/app/util/index.ts");





var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return InputComponent; }),
    multi: true
};
var noop = function () { };
var ɵ0 = noop;
var InputComponent = /** @class */ (function () {
    function InputComponent(elementRef, renderer, cdr) {
        var _this = this;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCustomIconClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.withIcon = false;
        this.enabledDeletion = false;
        this.reactiveForm = false;
        this.disabled = false;
        this.dictionary = false;
        this.loginIcon = false;
        this.passwordIcon = false;
        this.togglePasswordIcon = false;
        this.percent = false;
        this.placeholder = '';
        this.error = false;
        this.withPlaceholderLabel = false;
        this.readonly = false;
        this.counter = false;
        this.preventPaste = false;
        this.customPlaceholder = '';
        this.required = false;
        this.currencyType = 'RUB';
        this.mask = {
            mask: function (rawValue) {
                var rawValueLength = rawValue.length ? rawValue.length : 0;
                var mask = [];
                for (var i = 0; i < rawValueLength; i++) {
                    mask.push(/./);
                }
                return mask;
            }
        };
        this.innerValue = '';
        this.hostEvent = null;
        this.focus = false;
        this._inputType = 'text';
        this.visiblePassword = false;
        this.phoneMask = {
            mask: ['7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
            guide: true,
            modelClean: true,
            showMask: true
        };
        this.sumMask = {
            mask: function (val, config) {
                if ((config.previousConformedValue === '' || config.previousConformedValue === '0')
                    && /[\.|\,]\d/.test(val) && parseFloat(val.replace(',', '.'))) {
                    var point = val.indexOf(/\.|\,/);
                    _this._defaultMask = Object(_util_create_number_mask_ex__WEBPACK_IMPORTED_MODULE_3__["getAmountDefaultMask"])(val.slice(0, point)).map(function (x) { return x === ' ' ? ' ' : /\d/; });
                    _this._defaultMask = _this._defaultMask.concat([/[\.|\,]/, /\d/, /\d/]);
                    return _this._defaultMask;
                }
                var pos = --config.currentCaretPosition;
                if (/\./.test(val) || /\,/.test(val) || val[pos] === '.' || val[pos] === ',') {
                    _this._defaultMask = Object(_util_create_number_mask_ex__WEBPACK_IMPORTED_MODULE_3__["getAmountDefaultMask"])(val).map(function (x) { return x === ' ' ? ' ' : /\d/; });
                    _this._defaultMask = _this._defaultMask.concat([/[\.|\,]/, /\d/, /\d/]);
                    return _this._defaultMask;
                }
                return Object(_util_create_number_mask_ex__WEBPACK_IMPORTED_MODULE_3__["getAmountDefaultMask"])(val);
            },
            guide: false
        };
        this.integerMask = {
            mask: Object(_util_create_number_mask_ex__WEBPACK_IMPORTED_MODULE_3__["default"])({
                prefix: '',
                thousandsSeparatorSymbol: '',
                allowLeadingZeroes: true
            }),
            guide: false
        };
        this.limitMask = {
            mask: Object(_util_create_number_mask_ex__WEBPACK_IMPORTED_MODULE_3__["default"])({
                prefix: '',
                thousandsSeparatorSymbol: ' ',
                integerLimit: 6
            }),
            guide: false
        };
        this.smsotpMask = {
            mask: Object(_util_create_number_mask_ex__WEBPACK_IMPORTED_MODULE_3__["default"])({
                prefix: '',
                integerLimit: /* todo config.smsotpLength*/ 4,
                thousandsSeparatorSymbol: '',
                allowLeadingZeroes: true
            }),
            guide: false
        };
        this.customerAccountMask = {
            mask: Object(_util_create_number_mask_ex__WEBPACK_IMPORTED_MODULE_3__["default"])({
                prefix: '',
                integerLimit: 30,
                thousandsSeparatorSymbol: '',
                allowLeadingZeroes: true
            }),
            guide: false
        };
        this.timeMask = {
            mask: function (val, config) {
                // input starts with:       0 || 1
                // possible output:         01:__ || 02:__ || ... || 19:__
                var defaultTimeMask = [/[0-2]/, /[0-9]/, ':', /[0-5]/, /\d/];
                // input starts with:       2
                // possible output:         20:__ || 21:__ || 22:__ || 23:__
                if (config.previousConformedValue === '2' && config.currentCaretPosition === 2) {
                    return [/[0-2]/, /[0-3]/, ':', /[0-5]/, /\d/];
                }
                // input starts with:       3-9
                // possible output:         03:__ || 04:__ || 05:__ || 06:__ || 07:__ || 08:__ || 09:__
                if (config.currentCaretPosition === 1 && /[3-9]/.test(val)) {
                    return ['0', /\d/, ':', /[0-5]/, /\d/];
                }
                return defaultTimeMask;
            },
            guide: false
        };
        // Placeholders for the callbacks which are later providesd
        // by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(InputComponent.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (val) {
            if (val === 'amount' || val === 'currency' || val === 'RUB' || val === 'EUR' || val === 'USD') {
                this.mask = this.sumMask;
            }
            else if (val === 'integer' || val === 'number') {
                this.mask = this.integerMask;
            }
            else if (val === 'password') {
                this._inputType = 'password';
            }
            else if (val === 'limit') {
                this.mask = this.limitMask;
            }
            else if (val === 'phone') {
                this.mask = this.phoneMask;
            }
            else if (val === 'smsotp') {
                this.mask = this.smsotpMask;
            }
            else if (val === 'customerAccount') {
                this.mask = this.customerAccountMask;
            }
            else if (val === 'time') {
                this.mask = this.timeMask;
            }
            this._type = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "valueLength", {
        get: function () {
            return this.value ? this.value.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "hasIconClass", {
        get: function () {
            return Boolean(this.icon) || Boolean(this.tooltip);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "value", {
        // гетер на поле ngModel
        get: function () {
            return this.innerValue;
        },
        // сетер на поле ngModel
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                if (this.mask === this.sumMask) {
                    v = _util__WEBPACK_IMPORTED_MODULE_4__["Utils"].replaceWhiteSpaces(v);
                }
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    InputComponent.prototype.onClick = function (event) {
        this.hostEvent = event;
        if (this.type === 'phone' && !this.value) {
            this.writeValue('7');
        }
    };
    InputComponent.prototype.onDocumentClick = function (event) {
        if (this.focus && event !== this.hostEvent) {
            this.focus = false;
        }
    };
    InputComponent.prototype.onMouseUp = function (event) {
    };
    Object.defineProperty(InputComponent.prototype, "typeFindIcon", {
        get: function () {
            return this.value ? 'search_cross' : 'search';
        },
        enumerable: true,
        configurable: true
    });
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent.prototype.ngAfterViewInit = function () {
        this.cdr.detectChanges();
    };
    InputComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('maxlength') && typeof this.value === 'string') {
            this.value = this.value.substr(0, this.maxlength);
        }
    };
    InputComponent.prototype.ngOnDestroy = function () {
    };
    // Set touched on blur  потеря фокуса
    InputComponent.prototype.onBlurInput = function () {
        if (this.mask === this.sumMask && this.value !== null && this.value !== undefined && this.value !== '') {
            this.value = _util__WEBPACK_IMPORTED_MODULE_4__["Utils"].toAmount(this.value).replace('.', ',');
        }
        this.onBlur.emit(this.value);
        this.onTouchedCallback();
    };
    InputComponent.prototype.onFocusInput = function (event) {
        this.focus = true;
        this.onFocus.emit(event);
    };
    InputComponent.prototype.onFocusOut = function (event) {
        if (this.mask === this.integerMask) {
            var result = null;
            if (this.value || Object(util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(this.value)) {
                if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(this.value)) {
                    this.value = String(this.value);
                }
                this.value = this.value.replace(',', '.');
                result = this.value.replace(/\ /g, '');
            }
            this.writeValue(this.value === '' ? '' : result);
        }
        this.focus = false;
    };
    // From ControlValueAccessor interface
    InputComponent.prototype.writeValue = function (value) {
        this.innerValue = value;
        if (this.mask === this.sumMask && this.innerValue !== null && this.innerValue !== undefined && this.innerValue !== ''
            && (/[\.|\,]\d/.test(this.innerValue) || typeof this.innerValue === 'number')) {
            this.innerValue = _util__WEBPACK_IMPORTED_MODULE_4__["Utils"].toAmount(this.innerValue).replace('.', ',');
        }
    };
    // From ControlValueAccessor interface
    InputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    InputComponent.prototype.setFocus = function () {
        // this.renderer.invokeElementMethod(this.loginInput.nativeElement, 'focus');
        this.loginInput.nativeElement.focus();
    };
    InputComponent.prototype.setFocusAndSetSelectionRangeInEnd = function () {
        var valueLength = 0;
        if (this.value) {
            valueLength = this.value.length;
        }
        this.setSelectionRange(valueLength, valueLength);
        this.setFocus();
    };
    InputComponent.prototype.setSelectionRange = function (selectionStart, selectionEnd) {
        this.loginInput.nativeElement.setSelectionRange(selectionStart, selectionEnd);
    };
    InputComponent.prototype.clickForImg = function () {
        if (this.value && this.focus) {
            this.clearValue();
        }
        if (this.onClear) {
            this.onClear.emit();
        }
        this.setFocus();
    };
    InputComponent.prototype.togglePassword = function () {
        this.visiblePassword = !this.visiblePassword;
        this.setFocus();
        this._inputType = this.visiblePassword ? 'text' : 'password';
    };
    // From ControlValueAccessor interface
    InputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    // Обработка нажатия клавиши Enter
    InputComponent.prototype.onEnter = function () {
        if (this.submit) {
            this.submit.emit();
        }
    };
    InputComponent.prototype.onLocalKeyDown = function (event) {
        this.onKeyDown.emit(event);
    };
    InputComponent.prototype.onLocalKeyUp = function (event) {
        this.onKeyUp.emit(event);
    };
    InputComponent.prototype.onPasteEvent = function (event) {
        if (this.preventPaste) {
            event.preventDefault();
        }
        if (this.onPaste) {
            this.onPaste.emit(event);
        }
    };
    InputComponent.prototype.onDropEvent = function (event) {
        if (this.preventPaste) {
            event.preventDefault();
        }
        if (this.onDrop) {
            this.onDrop.emit(event);
        }
    };
    InputComponent.prototype.handleClickOutside = function () {
        this.focus = false;
    };
    InputComponent.prototype.onChange = function (event) {
        if (this.mask === this.sumMask) {
            this.value = this.value.replace('.', ',').replace(/^(0| )+(?!\.|\,|$)/, '');
        }
    };
    InputComponent.prototype.clearValue = function () {
        this.value = '';
        this.innerValue = '';
    };
    InputComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    InputComponent.prototype.getPlaceholder = function () {
        if (this.focus) {
            return '';
        }
        return this.customPlaceholder || this.placeholder;
    };
    InputComponent.prototype.markAsError = function () {
        this.renderer.addClass(this.placeholderRef.nativeElement, 'error');
        this.renderer.addClass(this.loginInput.nativeElement, 'error');
    };
    InputComponent.prototype.markAsHasNotError = function () {
        this.renderer.removeClass(this.placeholderRef.nativeElement, 'error');
        this.renderer.removeClass(this.loginInput.nativeElement, 'error');
    };
    return InputComponent;
}());




/***/ }),

/***/ "./src/app/ui/show-more-text/show-more-text.component.less.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/ui/show-more-text/show-more-text.component.less.shim.ngstyle.js ***!
  \*********************************************************************************/
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
var styles = ["[_nghost-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n.show-more-text__text-container[_ngcontent-%COMP%] {\n  width: 80%;\n  padding-left: 10px;\n  line-height: 20px;\n}\n.show-more-text__text-container.cover-open[_ngcontent-%COMP%]    + .show-more-text__btn[_ngcontent-%COMP%] {\n  top: initial;\n  bottom: -15px;\n}\n.show-more-text__text-container--cutted[_ngcontent-%COMP%] {\n  position: relative;\n  -webkit-transition-property: height;\n  transition-property: height;\n  -webkit-transition-duration: 0.5s;\n          transition-duration: 0.5s;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  overflow: hidden;\n}\n.show-more-text__cover[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 1px;\n}\n.show-more-text__cover--more[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: right;\n  background-image: linear-gradient(to right, transparent 0%, #fff calc(100% - 75px));\n}\n.show-more-text__controls[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.show-more-text__ellipsis[_ngcontent-%COMP%] {\n  padding-left: 3px;\n}\n.show-more-text__btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-bottom-style: dashed;\n  border-bottom-width: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pa2hhaWwvd29yay90ZXN0LWhlYXRtYXAvc3JjL2FwcC91aS9zaG93LW1vcmUtdGV4dC9zaG93LW1vcmUtdGV4dC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvdWkvc2hvdy1tb3JlLXRleHQvc2hvdy1tb3JlLXRleHQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDREo7QURLSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSFI7QURJUTtFQUVRLFlBQUE7RUFDQSxhQUFBO0FDSGhCO0FEaUJRO0VBQ0ksa0JBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxnQkFBQTtBQ2ZaO0FEa0JJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ2hCUjtBRHdCUTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1GQUFBO0FDdEJaO0FEeUJJO0VBQ0kscUJBQUE7QUN2QlI7QUR5Qkk7RUFDSSxpQkFBQTtBQ3ZCUjtBRHlCSTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0FDdkJSIiwiZmlsZSI6InNyYy9hcHAvdWkvc2hvdy1tb3JlLXRleHQvc2hvdy1tb3JlLXRleHQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWFpbi1zZWxlY3Rvcjogc2hvdy1tb3JlLXRleHQ7XG5cbjpob3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5Ae21haW4tc2VsZWN0b3J9IHtcbiAgICAmX190ZXh0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICYuY292ZXItb3BlbiB7IC8vINGC0LXQutGB0YIg0YDQsNC30LLRkdGA0L3Rg9GCXG4gICAgICAgICAgICArIC5zaG93LW1vcmUtdGV4dF9fYnRuIHtcbiAgICAgICAgICAgICAgICB0b3A6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEBtZWRpYSBAbW9iaWxlIHtcbiAgICAgICAgLy8gICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIC8vICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIC8vICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAvLyAgICAgJl9fY292ZXIge1xuICAgICAgICAvLyAgICAgICAgIGJvdHRvbTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgJi0tY3V0dGVkIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodDtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICB9XG4gICAgJl9fY292ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDFweDtcblxuICAgICAgICAvLyBAbWVkaWEgQG1vYmlsZSB7XG4gICAgICAgIC8vICAgICAmLW9wZW4ge1xuICAgICAgICAvLyAgICAgICAgIGJvdHRvbTogaW5pdGlhbDtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgICYtLW1vcmUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgMCUsICNmZmYgY2FsYyh+XCIxMDAlIC0gNzVweFwiKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJl9fY29udHJvbHMge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgICZfX2VsbGlwc2lzIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgfVxuICAgICZfX2J0biB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZGFzaGVkO1xuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gICAgfVxufVxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbi5zaG93LW1vcmUtdGV4dF9fdGV4dC1jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLnNob3ctbW9yZS10ZXh0X190ZXh0LWNvbnRhaW5lci5jb3Zlci1vcGVuICsgLnNob3ctbW9yZS10ZXh0X19idG4ge1xuICB0b3A6IGluaXRpYWw7XG4gIGJvdHRvbTogLTE1cHg7XG59XG4uc2hvdy1tb3JlLXRleHRfX3RleHQtY29udGFpbmVyLS1jdXR0ZWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2hvdy1tb3JlLXRleHRfX2NvdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAxcHg7XG59XG4uc2hvdy1tb3JlLXRleHRfX2NvdmVyLS1tb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50IDAlLCAjZmZmIGNhbGMoMTAwJSAtIDc1cHgpKTtcbn1cbi5zaG93LW1vcmUtdGV4dF9fY29udHJvbHMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uc2hvdy1tb3JlLXRleHRfX2VsbGlwc2lzIHtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG59XG4uc2hvdy1tb3JlLXRleHRfX2J0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZGFzaGVkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG59XG4iXX0= */"];



/***/ }),

/***/ "./src/app/ui/show-more-text/show-more-text.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/ui/show-more-text/show-more-text.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_ShowMoreTextComponent, View_ShowMoreTextComponent_0, View_ShowMoreTextComponent_Host_0, ShowMoreTextComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ShowMoreTextComponent", function() { return RenderType_ShowMoreTextComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShowMoreTextComponent_0", function() { return View_ShowMoreTextComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShowMoreTextComponent_Host_0", function() { return View_ShowMoreTextComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowMoreTextComponentNgFactory", function() { return ShowMoreTextComponentNgFactory; });
/* harmony import */ var _show_more_text_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-more-text.component.less.shim.ngstyle */ "./src/app/ui/show-more-text/show-more-text.component.less.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _show_more_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-more-text.component */ "./src/app/ui/show-more-text/show-more-text.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_ShowMoreTextComponent = [_show_more_text_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ShowMoreTextComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ShowMoreTextComponent, data: {} });

function View_ShowMoreTextComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.text; _ck(_v, 0, 0, currVal_0); }); }
function View_ShowMoreTextComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "show-more-text__ellipsis"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["..."]))], null, null); }
function View_ShowMoreTextComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "show-more-text__controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowMoreTextComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.isCollapsed; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ShowMoreTextComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "show-more-text__cover"]], [[2, "show-more-text__cover--more", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "show-more-text__cover-open": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowMoreTextComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = "show-more-text__cover"; var currVal_2 = _ck(_v, 2, 0, _co.isCollapsed); _ck(_v, 1, 0, currVal_1, currVal_2); var currVal_3 = _co.showCollapsed; _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.isCollapsed; _ck(_v, 0, 0, currVal_0); }); }
function View_ShowMoreTextComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, [[2, 0], ["toggleBtn", 1]], null, 1, "span", [["class", "show-more-text__btn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggle($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.btnText; _ck(_v, 1, 0, currVal_0); }); }
function View_ShowMoreTextComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { textBlock: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, { toggleBtn: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, [[1, 0], ["textBlock", 1]], null, 6, "div", [["class", "show-more-text__text-container"]], [[2, "show-more-text__text-container--cutted", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, { "cover-open": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowMoreTextComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowMoreTextComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowMoreTextComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = "show-more-text__text-container"; var currVal_2 = _ck(_v, 4, 0, _co.isCollapsed); _ck(_v, 3, 0, currVal_1, currVal_2); var currVal_3 = _co.text; _ck(_v, 6, 0, currVal_3); var currVal_4 = _co.isShowControls; _ck(_v, 8, 0, currVal_4); var currVal_5 = _co.isShowControls; _ck(_v, 10, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isShowControls; _ck(_v, 2, 0, currVal_0); }); }
function View_ShowMoreTextComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ui-show-more-text", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onResize($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_ShowMoreTextComponent_0, RenderType_ShowMoreTextComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4833280, null, 0, _show_more_text_component__WEBPACK_IMPORTED_MODULE_3__["ShowMoreTextComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ShowMoreTextComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ui-show-more-text", _show_more_text_component__WEBPACK_IMPORTED_MODULE_3__["ShowMoreTextComponent"], View_ShowMoreTextComponent_Host_0, { lineH: "lineH", lineCount: "lineCount", additionalH: "additionalH", text: "text", showCollapsed: "showCollapsed" }, {}, []);



/***/ }),

/***/ "./src/app/ui/show-more-text/show-more-text.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ui/show-more-text/show-more-text.component.ts ***!
  \***************************************************************/
/*! exports provided: ShowMoreTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowMoreTextComponent", function() { return ShowMoreTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ShowMoreTextComponent = /** @class */ (function () {
    function ShowMoreTextComponent(cd) {
        this.cd = cd;
        this.isShowControls = false;
        this.isCollapsed = false;
        this.textBlockCoverOpen = false;
        this.lineH = 20;
        this.lineCount = 3;
        this.text = '';
        this.showCollapsed = true;
    }
    Object.defineProperty(ShowMoreTextComponent.prototype, "btnText", {
        get: function () {
            return this.isCollapsed ? 'Cкрыть' : 'Показать';
        },
        enumerable: true,
        configurable: true
    });
    ShowMoreTextComponent.prototype.ngOnInit = function () {
    };
    ShowMoreTextComponent.prototype.onResize = function () {
        if (this.isCollapsed) {
            this.updateText();
            this.textBlock.nativeElement.style.height = this.initialH + "px";
        }
    };
    ShowMoreTextComponent.prototype.ngAfterViewInit = function () {
        this.updateText();
    };
    ShowMoreTextComponent.prototype.updateText = function (withCollapse) {
        this.cd.detectChanges();
        var el = this.textBlock.nativeElement;
        el.style.height = 'auto';
        var elH = el.clientHeight;
        this.initialH = elH;
        var currentLineCount = elH / this.lineH;
        if (currentLineCount > this.lineCount) {
            this.hideText();
            if (withCollapse) {
                this.isCollapsed = false;
            }
            this.isShowControls = true;
        }
        else {
            this.isShowControls = false;
        }
        this.cd.detectChanges();
    };
    ShowMoreTextComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('text') && this.textBlock) {
            this.isCollapsed = false;
            this.updateText();
        }
    };
    ShowMoreTextComponent.prototype.toggle = function (event) {
        event.stopPropagation();
        this.isCollapsed = !this.isCollapsed;
        if (this.isCollapsed) {
            this.textBlock.nativeElement.style.height = this.initialH + "px";
            this.toggleBtn.nativeElement.classList.remove('is-collapsed');
        }
        else {
            this.hideText();
            this.toggleBtn.nativeElement.classList.add('is-collapsed');
        }
    };
    ShowMoreTextComponent.prototype.hideText = function () {
        var height = this.lineCount * this.lineH;
        if (this.additionalH) {
            height += this.additionalH;
        }
        this.textBlock.nativeElement.style.height = height + "px";
    };
    return ShowMoreTextComponent;
}());



/***/ }),

/***/ "./src/app/ui/tooltip/tooltip.component.less.shim.ngstyle.js":
/*!*******************************************************************!*\
  !*** ./src/app/ui/tooltip/tooltip.component.less.shim.ngstyle.js ***!
  \*******************************************************************/
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
var styles = [".parent[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n}\n.tooltip[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: absolute;\n  cursor: default;\n}\n.tooltip-body[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1;\n  padding-top: 6px;\n  padding-right: 8px;\n  padding-bottom: 6px;\n  padding-left: 8px;\n  -webkit-transition-delay: 0.3s;\n          transition-delay: 0.3s;\n  border-radius: 5px;\n}\n.arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 5px;\n  width: 5px;\n  background-color: #8c8e86;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pa2hhaWwvd29yay90ZXN0LWhlYXRtYXAvc3JjL2FwcC91aS90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3VpL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDQ0o7QURDQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjtBRENBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLFVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3VpL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRvb2x0aXAge1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLnRvb2x0aXAtYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsOyAgICAvLyDQktGL0YHRgtCw0LLQu9GP0LXQvCDRgtC+0LvRidC40L3RgyDQvdC1INC30LDQstC40YHRj9GJ0YPRjiDQvtGCINCy0YvQt9GL0LLQsNGO0YnQtdCz0L4g0Y3Qu9C10LzQtdC90YLQsFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNXB4O1xuICAgIHdpZHRoOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhjOGU4NjtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgei1pbmRleDogMjtcbiAgICAvL3dpZHRoOiAwO1xuICAgIC8vaGVpZ2h0OiAwO1xuICAgIC8vYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAvL2JvcmRlci1yaWdodDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIC8vYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICM4YzhlODY7XG59XG5cbi5hcnJvdy50b3Age1xuICAgIC8vdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbiIsIi5wYXJlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRvb2x0aXAge1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLnRvb2x0aXAtYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMTtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDVweDtcbiAgd2lkdGg6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjOGU4NjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB6LWluZGV4OiAyO1xufVxuIl19 */"];



/***/ }),

/***/ "./src/app/ui/tooltip/tooltip.component.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/ui/tooltip/tooltip.component.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: RenderType_TooltipComponent, View_TooltipComponent_0, View_TooltipComponent_Host_0, TooltipComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TooltipComponent", function() { return RenderType_TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TooltipComponent_0", function() { return View_TooltipComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TooltipComponent_Host_0", function() { return View_TooltipComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponentNgFactory", function() { return TooltipComponentNgFactory; });
/* harmony import */ var _tooltip_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip.component.less.shim.ngstyle */ "./src/app/ui/tooltip/tooltip.component.less.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.component */ "./src/app/ui/tooltip/tooltip.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_TooltipComponent = [_tooltip_component_less_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TooltipComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TooltipComponent, data: {} });

function View_TooltipComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "tooltip-body"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.text; _ck(_v, 0, 0, currVal_0); }); }
function View_TooltipComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "tooltip-body"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 1)], null, null); }
function View_TooltipComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, [[2, 0], ["tooltip", 1]], null, 9, "div", [["class", "tooltip"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngStyle: [0, "ngStyle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, [[3, 0], ["arrow", 1]], null, 3, "div", [["class", "arrow"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](4, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngStyle: [0, "ngStyle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TooltipComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TooltipComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.tooltipStyles; _ck(_v, 1, 0, currVal_0); var currVal_1 = "arrow"; var currVal_2 = _ck(_v, 4, 0, _co.posY); _ck(_v, 3, 0, currVal_1, currVal_2); var currVal_3 = _co.arrowStyles; _ck(_v, 5, 0, currVal_3); var currVal_4 = _co.text; _ck(_v, 7, 0, currVal_4); var currVal_5 = _co.displayOtherContent; _ck(_v, 9, 0, currVal_5); }, null); }
function View_TooltipComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { parentView: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, { tooltipView: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 3, { arrow: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, [[1, 0], ["parentTooltip", 1]], null, 3, "div", [["class", "parent"]], [[2, "white-theme", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TooltipComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.isShow; _ck(_v, 6, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.whiteTheme; _ck(_v, 3, 0, currVal_0); }); }
function View_TooltipComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ui-tooltip", [], null, null, null, View_TooltipComponent_0, RenderType_TooltipComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _tooltip_component__WEBPACK_IMPORTED_MODULE_3__["TooltipComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TooltipComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ui-tooltip", _tooltip_component__WEBPACK_IMPORTED_MODULE_3__["TooltipComponent"], View_TooltipComponent_Host_0, { text: "text", topOffset: "topOffset", rightOffset: "rightOffset", bottomOffset: "bottomOffset", leftOffset: "leftOffset", inDelay: "inDelay", outDelay: "outDelay", displayOtherContent: "displayOtherContent", whiteTheme: "whiteTheme", width: "width", posX: "posX", posY: "posY", isAutoWidth: "isAutoWidth" }, { hidden: "hidden", displayed: "displayed" }, ["*", "content"]);



/***/ }),

/***/ "./src/app/ui/tooltip/tooltip.component.ts":
/*!*************************************************!*\
  !*** ./src/app/ui/tooltip/tooltip.component.ts ***!
  \*************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(el, cdr) {
        this.el = el;
        this.cdr = cdr;
        this.topOffset = 0;
        this.rightOffset = 0;
        this.bottomOffset = 0;
        this.leftOffset = 0;
        this.inDelay = 0;
        this.outDelay = 0;
        this.width = 220; // Ширина tooltip
        this.posX = 'left';
        this.posY = 'bottom';
        this.isAutoWidth = false;
        this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displayed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isShow = false;
        this.tooltipStyles = {};
        this.arrowStyles = {};
        this.unsubscribing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    TooltipComponent.prototype.ngOnInit = function () {
        this.listenOver();
        this.listenLeave();
    };
    TooltipComponent.prototype.listenOver = function () {
        var _this = this;
        var el = this.el.nativeElement;
        var delayVal = this.getDelay(this.outDelay);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(el, 'mouseover')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(delayVal), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribing))
            .subscribe(function () {
            _this.onMouseOver();
        });
    };
    TooltipComponent.prototype.onMouseOver = function () {
        if (this.text || this.displayOtherContent) {
            var parent_1 = this.parentView.nativeElement.getBoundingClientRect();
            var container = document.getElementsByClassName('container')[0].getBoundingClientRect();
            this.tooltipStyles.width = this.isAutoWidth ? 'auto' : this.width + 'px';
            switch (this.posX) {
                case 'right':
                    var rightOffset = parent_1.left - this.width;
                    this.setXPos(rightOffset, 'right');
                    break;
                case 'center':
                    this.setXCenterPos();
                    break;
                case 'left':
                default:
                    var leftOffset = container.right - parent_1.left - this.width;
                    this.setXPos(leftOffset, 'left');
                    break;
            }
            switch (this.posY) {
                case 'top':
                    this.setYPos(parent_1.height, 'bottom');
                    break;
                case 'bottom':
                default:
                    this.setYPos(parent_1.height, 'top');
                    break;
            }
            this.isShow = true;
            this.cdr.markForCheck();
            this.displayed.next();
        }
    };
    /**
     * @desc set tooltip body and tooltip arrow position by parent center by x axis
     */
    TooltipComponent.prototype.setXCenterPos = function () {
        this.tooltipStyles.left = '50%';
        this.tooltipStyles.transform = 'translateX(-50%)';
        this.arrowStyles.right = 0;
        this.arrowStyles.left = 0;
        this.arrowStyles['margin-right'] = 'auto';
        this.arrowStyles['margin-left'] = 'auto';
    };
    /**
     * @desc set tooltip body and tooltip arrow position by x axis
     * @param {number} offset offset by parent element
     * @param {('left' | 'right')} direction direction by x axis.
     */
    TooltipComponent.prototype.setXPos = function (offset, direction) {
        var customOffset = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["toInteger"])(this[direction + "Offset"]);
        this.tooltipStyles[direction] = (offset > 0 ? customOffset : offset) + "px";
        this.arrowStyles[direction] = (offset > 0 ? 6 : -offset + 6) + "px";
    };
    /**
     * @desc set tooltip body and tooltip arrow position by y axis
     * @param {number} parentH parent element height
     * @param {('top' | 'bottom')} direction direction by y axis.
     */
    TooltipComponent.prototype.setYPos = function (parentH, direction) {
        var customOffset = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["toInteger"])(this[direction + "Offset"]);
        var tooltipOffset = parentH + 5 + customOffset + "px";
        var arrowOffset = '-3px';
        this.tooltipStyles[direction] = tooltipOffset;
        this.arrowStyles[direction] = arrowOffset;
    };
    TooltipComponent.prototype.listenLeave = function () {
        var _this = this;
        var el = this.el.nativeElement;
        var delayVal = this.getDelay(this.outDelay);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(el, 'mouseover')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(el, 'mouseleave').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(delayVal)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribing))
            .subscribe(function () {
            _this.isShow = false;
            _this.cdr.markForCheck();
            _this.tooltipStyles = {};
            _this.arrowStyles = {};
            _this.hidden.next();
        });
    };
    TooltipComponent.prototype.getDelay = function (delayVal) {
        return Number.isFinite(delayVal) ? delayVal : 0;
    };
    return TooltipComponent;
}());



/***/ }),

/***/ "./src/app/util/create-number-mask-ex.ts":
/*!***********************************************!*\
  !*** ./src/app/util/create-number-mask-ex.ts ***!
  \***********************************************/
/*! exports provided: default, getAmountDefaultMask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createNumberMaskEx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAmountDefaultMask", function() { return getAmountDefaultMask; });
var dollarSign = '$';
var emptyString = '';
var comma = ',';
var period = '\.';
var minus = '-';
var minusRegExp = /-/;
var nonDigitsRegExp = /\D+/g;
var numberType = 'number';
var digitRegExp = /\d/;
var caretTrap = '[]';
function createNumberMaskEx(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.prefix, prefix = _c === void 0 ? dollarSign : _c, _d = _b.suffix, suffix = _d === void 0 ? emptyString : _d, _e = _b.includeThousandsSeparator, includeThousandsSeparator = _e === void 0 ? true : _e, _f = _b.thousandsSeparatorSymbol, thousandsSeparatorSymbol = _f === void 0 ? comma : _f, _g = _b.allowDecimal, allowDecimal = _g === void 0 ? false : _g, _h = _b.decimalSymbols, decimalSymbols = _h === void 0 ? [period] : _h, _j = _b.decimalLimit, decimalLimit = _j === void 0 ? 2 : _j, _k = _b.requireDecimal, requireDecimal = _k === void 0 ? false : _k, _l = _b.allowNegative, allowNegative = _l === void 0 ? false : _l, _m = _b.allowLeadingZeroes, allowLeadingZeroes = _m === void 0 ? false : _m, _o = _b.integerLimit, integerLimit = _o === void 0 ? null : _o;
    var prefixLength = prefix && prefix.length || 0;
    var suffixLength = suffix && suffix.length || 0;
    var thousandsSeparatorSymbolLength = thousandsSeparatorSymbol && thousandsSeparatorSymbol.length || 0;
    function numberMask(rawValue, config) {
        if (rawValue === void 0) { rawValue = emptyString; }
        var oldValue = config.previousConformedValue;
        var isDividerExist = checkDoubleDivider(rawValue, oldValue);
        if (isDividerExist) {
            rawValue = oldValue;
        }
        var rawValueLength = rawValue.length;
        if (rawValue === emptyString ||
            (rawValue[0] === prefix[0] && rawValueLength === 1)) {
            return prefix.split(emptyString).concat([digitRegExp]).concat(suffix.split(emptyString));
        }
        var indexOfLastDecimal = -1;
        for (var i = 0; i < decimalSymbols.length; i++) {
            var findIndex = rawValue.lastIndexOf(decimalSymbols[i]);
            if (findIndex === -1) {
                continue;
            }
            indexOfLastDecimal = findIndex;
        }
        var hasDecimal = indexOfLastDecimal !== -1;
        var isNegative = (rawValue[0] === minus) && allowNegative;
        var integer;
        var fraction;
        var mask;
        // remove the suffix
        if (rawValue.slice(suffixLength * -1) === suffix) {
            rawValue = rawValue.slice(0, suffixLength * -1);
        }
        if (hasDecimal && (allowDecimal || requireDecimal)) {
            integer = rawValue.slice(rawValue.slice(0, prefixLength) === prefix ? prefixLength : 0, indexOfLastDecimal);
            fraction = rawValue.slice(indexOfLastDecimal + 1, rawValueLength);
            fraction = convertToMask(fraction.replace(nonDigitsRegExp, emptyString));
        }
        else {
            if (rawValue.slice(0, prefixLength) === prefix) {
                integer = rawValue.slice(prefixLength);
            }
            else {
                integer = rawValue;
            }
        }
        integer = integer.replace(nonDigitsRegExp, emptyString);
        if (integerLimit && typeof integerLimit === numberType) {
            integer = integer.slice(0, integerLimit);
        }
        if (!allowLeadingZeroes) {
            integer = String(Number(integer));
        }
        integer = (includeThousandsSeparator) ? addThousandsSeparator(integer, thousandsSeparatorSymbol) : integer;
        mask = convertToMask(integer);
        if ((hasDecimal && allowDecimal) || requireDecimal === true) {
            if (decimalSymbols.indexOf(rawValue[indexOfLastDecimal - 1]) !== -1) {
                mask.push(caretTrap);
            }
            var regExp = new RegExp('[' + decimalSymbols.join('') + ']');
            mask.push(regExp, caretTrap);
            if (fraction) {
                if (typeof decimalLimit === numberType) {
                    fraction = fraction.slice(0, decimalLimit);
                }
                mask = mask.concat(fraction);
            }
            if (requireDecimal === true && decimalSymbols.indexOf(rawValue[indexOfLastDecimal - 1]) !== -1) {
                mask.push(digitRegExp);
            }
        }
        if (prefixLength > 0) {
            mask = prefix.split(emptyString).concat(mask);
        }
        if (isNegative) {
            // If user is entering a negative number, add a mask placeholder spot to attract the caret to it.
            if (mask.length === prefixLength) {
                mask.push(digitRegExp);
            }
            mask = [minusRegExp].concat(mask);
        }
        if (suffix.length > 0) {
            mask = mask.concat(suffix.split(emptyString));
        }
        return mask;
    }
    return numberMask;
}
function checkDoubleDivider(newValue, oldValue) {
    var isDoubleDivider = false;
    if (newValue && oldValue) {
        isDoubleDivider = newValue.replace(/\D/g, '') === oldValue.replace(/\D/g, '')
            && newValue.length === oldValue.length + 1
            && oldValue.match(/[\.,]/g)
            && oldValue.match(/[\.,]/g).length === 1
            && newValue.match(/[\.,]/g)
            && newValue.match(/[\.,]/g).length === 2;
    }
    return isDoubleDivider;
}
function convertToMask(strNumber) {
    return strNumber
        .split(emptyString)
        .map(function (char) { return digitRegExp.test(char) ? digitRegExp : char; });
}
// http://stackoverflow.com/a/10899795/604296
function addThousandsSeparator(n, thousandsSeparatorSymbol) {
    return n.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparatorSymbol);
}
function getAmountDefaultMask(val) {
    // let cVal = parseInt(val.replace(/ /g, ''), 10).toString().length;
    var valNumber = '';
    for (var i = 0; i < val.length; ++i) {
        if (/[0-9]/.test(val[i])) {
            valNumber += val[i];
            continue;
        }
        if (/\,|\./.test(val[i])) {
            break;
        }
    }
    var cVal = valNumber.length;
    // *************
    // amount limit
    // ************
    // X XXX - default
    // X XXX XXX
    if (cVal > 3) {
        cVal++;
    }
    // X XXX XXX XXX
    if (cVal > 7) {
        cVal++;
    }
    // X XXX XXX XXX XXX
    if (cVal > 11) {
        cVal++;
    }
    // X XXX XXX XXX XXX XXX
    // if (cVal > 15) {
    //     cVal++
    // }
    // ***********
    var s = /\d|\,|\./;
    var mask = [s, s, s, ' ', s, s, s, ' ', s, s, s, ' ', s, s, s, ' ', s, s, s, ' ', s, s, s];
    mask = mask.splice(mask.length - cVal);
    if (mask[0] === ' ') {
        mask.unshift(/\d/);
    }
    return mask;
}


/***/ })

}]);
//# sourceMappingURL=app-module-login-login-module-ngfactory.js.map