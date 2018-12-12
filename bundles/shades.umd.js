(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('shades', ['exports', '@angular/core'], factory) :
    (factory((global.shades = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ShadesService = /** @class */ (function () {
        function ShadesService() {
        }
        ShadesService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ShadesService.ctorParameters = function () { return []; };
        /** @nocollapse */ ShadesService.ngInjectableDef = i0.defineInjectable({ factory: function ShadesService_Factory() { return new ShadesService(); }, token: ShadesService, providedIn: "root" });
        return ShadesService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ShadesComponent = /** @class */ (function () {
        function ShadesComponent() {
            this.title = "Welcome to Angular Custom Library ";
        }
        /**
         * @return {?}
         */
        ShadesComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ShadesComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'hex-shades',
                        template: "\n    <p>{{title}}</p>\n  "
                    }] }
        ];
        /** @nocollapse */
        ShadesComponent.ctorParameters = function () { return []; };
        return ShadesComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ShadesModule = /** @class */ (function () {
        function ShadesModule() {
        }
        ShadesModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ShadesComponent],
                        imports: [],
                        exports: [ShadesComponent]
                    },] }
        ];
        return ShadesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ShadesService = ShadesService;
    exports.ShadesComponent = ShadesComponent;
    exports.ShadesModule = ShadesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=shades.umd.js.map