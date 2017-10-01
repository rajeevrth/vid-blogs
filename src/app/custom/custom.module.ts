import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomComponent } from './custom.component';
import { DisplayComponent } from './display/display.component';
import { NewCardComponent } from './newcard/newcard.component';

@NgModule({
    imports: [BrowserModule, FormsModule,],
    declarations: [CustomComponent, DisplayComponent, NewCardComponent],
    bootstrap: [CustomComponent, DisplayComponent]
})
export class CustomModule { }