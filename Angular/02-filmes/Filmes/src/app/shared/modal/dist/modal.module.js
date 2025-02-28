"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var modal_component_1 = require("./modal.component");
var shadow_modal_component_1 = require("./shadow-modal/shadow-modal.component");
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule = __decorate([
        core_1.NgModule({
            declarations: [
                modal_component_1.ModalComponent,
                shadow_modal_component_1.ShadowModalComponent,
            ],
            imports: [
                common_1.CommonModule,
            ],
            exports: [
                modal_component_1.ModalComponent,
                shadow_modal_component_1.ShadowModalComponent,
            ]
        })
    ], ModalModule);
    return ModalModule;
}());
exports.ModalModule = ModalModule;
