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
// export class Display {
//     name: "Rajeev";
// }
var DisplayComponent = (function () {
    function DisplayComponent() {
        this.changeLog = [];
    }
    DisplayComponent.prototype.ngOnChanges = function (changes) {
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
    };
    return DisplayComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DisplayComponent.prototype, "cardName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DisplayComponent.prototype, "cardLimit", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DisplayComponent.prototype, "newcardName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DisplayComponent.prototype, "newcardLimit", void 0);
DisplayComponent = __decorate([
    core_1.Component({
        selector: 'display-app',
        styleUrls: ['./display.component.css'],
        templateUrl: './display.component.html'
    })
], DisplayComponent);
exports.DisplayComponent = DisplayComponent;
//# sourceMappingURL=display.component.js.map