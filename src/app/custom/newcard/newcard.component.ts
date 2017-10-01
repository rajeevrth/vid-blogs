import { Component, Input } from '@angular/core';
import { CardService } from '../card.service';
import { RouterModule, Routes, Router } from '@angular/router';
export class Card {
    CardName: string;
    CardNumber: number;
    CardLimit:number;
}
export class Display {
    name: string;
}

// export class DisplayConfirmation {
//     name: "Rajeev";
// }

@Component({
    selector: 'newcard-app',
    templateUrl: './newcard.component.html',
    styleUrls: ['./newcard.component.css'],
    providers: [CardService]
})

export class NewCardComponent {
    constructor(private carddetails: CardService, private router: Router) { }
    Cards: Card[];
    cardToSave: Card = {
        CardName: "ICICI",
        CardNumber: 7700000,
        CardLimit:0
    }
    cardNameHolder = this.cardToSave.CardName;
    cardLimitHolder = this.cardToSave.CardNumber;
    newcardName = "";
    newcardLimit = 0;

    add(card: Card): void {
        this.carddetails.create(card)
            .then(card => 
             this.router.navigate(['second']))
    }
    newMinor() {
        this.newcardName = this.cardNameHolder;
        this.newcardLimit = this.cardLimitHolder;

        debugger;
        this.add(this.cardToSave);
    }
}