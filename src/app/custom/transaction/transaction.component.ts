import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { CardService } from '../card.service';
export class TransactionObject {
    CardId: number;
    Date: string;
    Amount: number;
    Comment: string;
    TransType:string;
}

export class MonthlyDetail {
    CardName: string;
    CardNumber: number;
    AvailableBalance: number;
    CardLimit: number;
    TotalBalance: number;
    InterestRate: number;
    TotalCredit: number;
    TotalDebit: number;
    RemainingBalance: number;
    constructor() {
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
}

@Component({
    selector: 'transaction-app',
    templateUrl: './transaction.component.html',
    styleUrls: ['./transaction.component.css'],
    providers: [CardService]

})

export class Transaction implements OnChanges {
    constructor(private carddetails: CardService, private router: Router) { }
    @Input() cardNumber: number;
    @Input() cardName: string;
    @Input() cardId: number;
    @Input() cardLimit: number;
    transDate = new Date().toISOString().slice(0, 16);
    transAmt = 1000;
    comment = "Grocery Store";
    viewMonthRecord=true;
    transType="Credit";
    monthlyDetails: MonthlyDetail = new MonthlyDetail();
    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        console.log(changes);
        // this.router.navigate(['second',changes])
    }
    fetchedTransaction: TransactionObject[];
    saveTransaction(TransactionObject: TransactionObject): void {
        debugger;
        TransactionObject = {
            CardId: this.cardId,
            Date: this.transDate,
            Amount: this.transAmt,
            Comment: this.comment,
            TransType:this.transType

        }
        this.carddetails.saveTransaction(TransactionObject)
            .then(card =>
                this.fetchTransaction(this.cardId))


    }
    fetchTransaction(cardId: number): void {
        this.carddetails.getTransactionDetails(this.cardId).then(Card =>
            this.fetchedTransaction = Card)
            this.viewMonthRecord=false;

    }

    expenses(TransactionObject: TransactionObject[]): void {
        let totalExpense = 0;
        for (let i = 0; i < this.fetchedTransaction.length; i++) {
            totalExpense = totalExpense + this.fetchedTransaction[i].Amount;
        }
         this.monthlyDetails.CardLimit=this.cardLimit;
        this.monthlyDetails.AvailableBalance = this.cardLimit - totalExpense;
    }

    monthlyDetail(mondet: MonthlyDetail): void {
        this.fetchTransaction(this.cardId);
        this.expenses(this.fetchedTransaction);
        console.log(this.fetchedTransaction);
        // this.fetchedTransaction
    }

    //Implement logic to get the whole transaction and minus to the total limit of the card


}