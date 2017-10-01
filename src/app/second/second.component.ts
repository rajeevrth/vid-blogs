import { Component, OnInit } from '@angular/core';
import { CardService } from '../custom/card.service';

export class Card {
    CardName: string;
    CardNumber: number;
    CardLimit: number;
}

@Component({
    selector: 'second-app',
    templateUrl: './card.component.html',
    providers: [CardService],
    styleUrls: ["./card.component.css"]
})

export class SecondComponent implements OnInit {
    constructor(private fetchCardDetails: CardService) { }
    Cards: Card[];
    cardinfo(): void {
        this.fetchCardDetails.getCardDetails().then(Card => this.Cards = Card);
    };
    cardName = "";
    cardNumber = "";
    cardId: '';
    cardLimit:0;
    ngOnInit(): void {
        this.cardinfo();
    }
    hideList = false;
    viewCardDetail = function (card: any) {
        debugger;
        console.log(card);
        this.cardNumber = card.CardNumber;
        this.cardName = card.CardName;
        this.cardId = card.Id;
        this.cardLimit=card.CardLimit;
        this.hideList = true;
    }
}