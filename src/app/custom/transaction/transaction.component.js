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
var router_1 = require("@angular/router");
var card_service_1 = require("../card.service");
var TransactionObject = (function () {
    function TransactionObject() {
    }
    return TransactionObject;
}());
exports.TransactionObject = TransactionObject;
var MonthlyDetail = (function () {
    function MonthlyDetail() {
        this.CardName = "";
        this.CardNumber = 0;
        this.AvailableBalance = 99999999;
        this.CardLimit = 0;
        this.TotalBalance = 0;
        this.InterestRate = 13;
        this.TotalCredit = 0;
        this.TotalDebit = 0;
        this.RemainingBalance = 9999999;
    }
    return MonthlyDetail;
}());
exports.MonthlyDetail = MonthlyDetail;
var Transaction = (function () {
    function Transaction(carddetails, router) {
        this.carddetails = carddetails;
        this.router = router;
        this.transDate = new Date().toISOString().slice(0, 16);
        this.transAmt = 1000;
        this.comment = "Grocery Store";
        this.viewMonthRecord = true;
        this.transType = "Credit";
        this.monthlyDetails = new MonthlyDetail();
    }
    Transaction.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        // this.router.navigate(['second',changes])
    };
    Transaction.prototype.saveTransaction = function (TransactionObject) {
        var _this = this;
        debugger;
        TransactionObject = {
            CardId: this.cardId,
            Date: this.transDate,
            Amount: this.transAmt,
            Comment: this.comment,
            TransType: this.transType
        };
        this.carddetails.saveTransaction(TransactionObject)
            .then(function (card) {
            return _this.fetchTransaction(_this.cardId);
        });
    };
    Transaction.prototype.fetchTransaction = function (cardId) {
        var _this = this;
        this.carddetails.getTransactionDetails(this.cardId).then(function (Card) {
            return _this.fetchedTransaction = Card;
        });
        this.viewMonthRecord = false;
    };
    Transaction.prototype.expenses = function (TransactionObject) {
        var totalExpense = 0;
        for (var i = 0; i < this.fetchedTransaction.length; i++) {
            totalExpense = totalExpense + this.fetchedTransaction[i].Amount;
        }
        this.monthlyDetails.CardLimit = this.cardLimit;
        this.monthlyDetails.AvailableBalance = this.cardLimit - totalExpense;
    };
    Transaction.prototype.monthlyDetail = function (mondet) {
        this.fetchTransaction(this.cardId);
        this.expenses(this.fetchedTransaction);
        console.log(this.fetchedTransaction);
        // this.fetchedTransaction
    };
    return Transaction;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], Transaction.prototype, "cardNumber", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Transaction.prototype, "cardName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], Transaction.prototype, "cardId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], Transaction.prototype, "cardLimit", void 0);
Transaction = __decorate([
    core_1.Component({
        selector: 'transaction-app',
        templateUrl: './transaction.component.html',
        styleUrls: ['./transaction.component.css'],
        providers: [card_service_1.CardService]
    }),
    __metadata("design:paramtypes", [card_service_1.CardService, router_1.Router])
], Transaction);
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.component.js.map