"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var custom_component_1 = require("./custom/custom.component");
var second_component_1 = require("./second/second.component");
var newcard_component_1 = require("./custom/newcard/newcard.component");
var display_component_1 = require("./custom/display/display.component");
var transaction_component_1 = require("./custom/transaction/transaction.component");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home', component: custom_component_1.CustomComponent,
        children: [
            {
                path: 'newcard', component: newcard_component_1.NewCardComponent,
                children: [{
                        path: 'display', component: display_component_1.DisplayComponent
                    }]
            },
        ]
    },
    {
        path: 'cards', component: second_component_1.SecondComponent,
    },
    {
        path: 'transaction', component: transaction_component_1.Transaction,
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map