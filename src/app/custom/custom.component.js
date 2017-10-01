"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var card_service_1 = require("./card.service");
var Card = (function () {
    function Card() {
    }
    return Card;
}());
exports.Card = Card;
//We can have this class in  a service and we can import it from there.
var RajeevClass = (function () {
    function RajeevClass() {
        this.firstName = "Rajeev";
        this.lastName = "Kumar";
        this.email = "rkumar278@dxc.com";
        this.message = "Hello World,";
        this.selectedValue = "Partnership";
    }
    return RajeevClass;
}());
exports.RajeevClass = RajeevClass;
exports.Display = [{
        name: "Kumar"
    }];
//Component Decalartion
var CustomComponent = (function () {
    function CustomComponent() {
    }
    return CustomComponent;
}());
CustomComponent = __decorate([
    core_1.Component({
        selector: 'custom-app',
        styleUrls: ['./customStyle.css'],
        templateUrl: './custom.html',
        providers: [card_service_1.CardService]
    })
], CustomComponent);
exports.CustomComponent = CustomComponent;
//# sourceMappingURL=custom.component.js.map