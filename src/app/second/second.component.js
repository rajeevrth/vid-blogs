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
var card_service_1 = require("../custom/card.service");
var Card = (function () {
    function Card() {
    }
    return Card;
}());
exports.Card = Card;
var SecondComponent = (function () {
    function SecondComponent(fetchCardDetails) {
        this.fetchCardDetails = fetchCardDetails;
        this.cardName = "";
        this.cardNumber = "";
        this.hideList = false;
        this.viewCardDetail = function (card) {
            debugger;
            console.log(card);
            this.cardNumber = card.CardNumber;
            this.cardName = card.CardName;
            this.cardId = card.Id;
            this.cardLimit = card.CardLimit;
            this.hideList = true;
        };
    }
    SecondComponent.prototype.cardinfo = function () {
        var _this = this;
        this.fetchCardDetails.getCardDetails().then(function (Card) { return _this.Cards = Card; });
    };
    ;
    SecondComponent.prototype.ngOnInit = function () {
        this.cardinfo();
    };
    return SecondComponent;
}());
SecondComponent = __decorate([
    core_1.Component({
        selector: 'second-app',
        templateUrl: './card.component.html',
        providers: [card_service_1.CardService],
        styleUrls: ["./card.component.css"]
    }),
    __metadata("design:paramtypes", [card_service_1.CardService])
], SecondComponent);
exports.SecondComponent = SecondComponent;
//# sourceMappingURL=second.component.js.map