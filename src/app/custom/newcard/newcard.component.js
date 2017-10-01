"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var card_service_1 = require("../card.service");
var router_1 = require("@angular/router");
var Card = (function () {
    function Card() {
    }
    return Card;
}());
exports.Card = Card;
var Display = (function () {
    function Display() {
    }
    return Display;
}());
exports.Display = Display;
// export class DisplayConfirmation {
//     name: "Rajeev";
// }
var NewCardComponent = (function () {
    function NewCardComponent(carddetails, router) {
        this.carddetails = carddetails;
        this.router = router;
        this.cardToSave = {
            CardName: "ICICI",
            CardNumber: 7700000,
            CardLimit: 0
        };
        this.cardNameHolder = this.cardToSave.CardName;
        this.cardLimitHolder = this.cardToSave.CardNumber;
        this.newcardName = "";
        this.newcardLimit = 0;
    }
    NewCardComponent.prototype.add = function (card) {
        var _this = this;
        this.carddetails.create(card)
            .then(function (card) {
            return _this.router.navigate(['second']);
        });
    };
    NewCardComponent.prototype.newMinor = function () {
        this.newcardName = this.cardNameHolder;
        this.newcardLimit = this.cardLimitHolder;
        debugger;
        this.add(this.cardToSave);
    };
    return NewCardComponent;
}());
NewCardComponent = __decorate([
    core_1.Component({
        selector: 'newcard-app',
        templateUrl: './newcard.component.html',
        styleUrls: ['./newcard.component.css'],
        providers: [card_service_1.CardService]
    }),
    __metadata("design:paramtypes", [card_service_1.CardService, router_1.Router])
], NewCardComponent);
exports.NewCardComponent = NewCardComponent;
//# sourceMappingURL=newcard.component.js.map