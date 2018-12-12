import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShadesService = /** @class */ (function () {
    function ShadesService() {
    }
    ShadesService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ShadesService.ctorParameters = function () { return []; };
    /** @nocollapse */ ShadesService.ngInjectableDef = defineInjectable({ factory: function ShadesService_Factory() { return new ShadesService(); }, token: ShadesService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { ShadesService, ShadesComponent, ShadesModule };

//# sourceMappingURL=shades.js.map