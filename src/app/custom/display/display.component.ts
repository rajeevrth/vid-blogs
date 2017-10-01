import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

// export class Display {
//     name: "Rajeev";
// }

@Component({
  selector: 'display-app',
  styleUrls: ['./display.component.css'],
  templateUrl: './display.component.html'
})

export class DisplayComponent implements OnChanges {
  @Input() cardName: string;
  @Input() cardLimit: number;
  @Input() newcardName: string;
  @Input() newcardLimit: number;
  changeLog: string[] = [];

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    console.log(changes);
    // let log: string[] = [];
    // for (let propName in changes) {
    //   let changedProp = changes[propName];
    //   let to = JSON.stringify(changedProp.currentValue);
    //   if (changedProp.isFirstChange()) {
    //     log.push(`Initial value of ${propName} set to ${to}`);
    //   } else {
    //     let from = JSON.stringify(changedProp.previousValue);
    //     log.push(`${propName} changed from ${from} to ${to}`);
    //   }
    // }
    // this.changeLog.push(log.join(', '));
  }
}