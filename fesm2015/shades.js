import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShadesService {
    constructor() { }
}
ShadesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ShadesService.ctorParameters = () => [];
/** @nocollapse */ ShadesService.ngInjectableDef = defineInjectable({ factory: function ShadesService_Factory() { return new ShadesService(); }, token: ShadesService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShadesComponent {
    constructor() {
        this.title = "Welcome to Angular Custom Library ";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ShadesComponent.decorators = [
    { type: Component, args: [{
                selector: 'hex-shades',
                template: `
    <p>{{title}}</p>
  `
            }] }
];
/** @nocollapse */
ShadesComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShadesModule {
}
ShadesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ShadesComponent],
                imports: [],
                exports: [ShadesComponent]
            },] }
];

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