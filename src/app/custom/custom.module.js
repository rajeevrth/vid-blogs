"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var custom_component_1 = require("./custom.component");
var display_component_1 = require("./display/display.component");
var newcard_component_1 = require("./newcard/newcard.component");
var CustomModule = (function () {
    function CustomModule() {
    }
    return CustomModule;
}());
CustomModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule,],
        declarations: [custom_component_1.CustomComponent, display_component_1.DisplayComponent, newcard_component_1.NewCardComponent],
        bootstrap: [custom_component_1.CustomComponent, display_component_1.DisplayComponent]
    })
], CustomModule);
exports.CustomModule = CustomModule;
//# sourceMappingURL=custom.module.js.map