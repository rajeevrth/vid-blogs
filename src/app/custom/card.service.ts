import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class Card {
    CardName: string;
    CardNumber: number;
    CardLimit:number;
}

export class Transaction {
    CardId: number
    Date: string
    Amount: number
    Comment:string
    TransType:string
}

@Injectable()

export class CardService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private cardurl = 'http://localhost:58202/api/';

    constructor(private http: Http) { }

    getCardDetails(): Promise<Card[]> {
        return this.http.get(this.cardurl + 'Credit/GetDetails')
            .toPromise()
            .then(response => {
                var det = response.json() as Card[]
                console.log(det);
                return det;
            })
            .catch(this.handleError);
    }

    create(creditDetails: Card): Promise<Card> {
        return this.http
            .post('http://localhost:58202/api/Credit/save/', creditDetails, { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Card)
            .catch(this.handleError);
    }

    saveTransaction(cardTransaction: Transaction): Promise<Transaction> {
        return this.http
            .post('http://localhost:58202/api/Credit/savetransaction/', cardTransaction, { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Transaction)
            .catch(this.handleError);
    }

    getTransactionDetails(cardid:number): Promise<Transaction[]> {
        return this.http.get(this.cardurl + 'Credit/GetCardDetails/'+ cardid)
            .toPromise()
            .then(response => {
                var det = response.json() as Transaction[]
                console.log(det);
                return det;
            })
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}