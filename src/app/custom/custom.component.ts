import { Component, Input, OnInit } from '@angular/core';
import { CardService } from './card.service';
import { RouterModule, Routes, Router } from '@angular/router';

export class Card {
    CardNumber: number;
    CardName: string;
}
//We can have this class in  a service and we can import it from there.
export class RajeevClass {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    selectedValue: string;
    constructor() {
        this.firstName = "Rajeev";
        this.lastName = "Kumar";
        this.email = "rkumar278@dxc.com";
        this.message = "Hello World,";
        this.selectedValue = "Partnership";
    }
}

export const Display = [{
    name: "Kumar"
}]

//Component Decalartion
@Component({
    selector: 'custom-app',
    styleUrls: ['./customStyle.css'],
    templateUrl: './custom.html',
    providers: [CardService]
})

export class CustomComponent{
    // constructor(private emplList: EmployeeService, private router: Router) { };

    // goToSecondPage = function () {
    //     this.router.navigate(['second']);
    // }
    // Cards: Card[];
    // constructor(private carddetails: CardService) { }
    // cardinfo(): void {
    //     this.carddetails.getCardDetails().then(Card => this.Cards = Card);
    // };

    // ngOnInit(): void {
    //     debugger;
    //     this.cardinfo();
    // }
}