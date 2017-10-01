import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CustomModule } from './custom/custom.module';
import { CustomComponent } from './custom/custom.component';
import { AppRoutingModule } from './app-routing.module';
import { SecondComponent } from './second/second.component';
import { DisplayComponent } from './custom/display/display.component';
import { NewCardComponent } from './custom/newcard/newcard.component';
import { Transaction } from './custom/transaction/transaction.component';
import { VideoComponent } from './video/video.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { OopsComponent } from './oops/oops.component';
import { AngularjsComponent } from './angularjs/angularjs.component';



@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule, HttpModule],
    declarations: [AppComponent, CustomComponent, SecondComponent, DisplayComponent, NewCardComponent, Transaction, VideoComponent, JavascriptComponent, OopsComponent, AngularjsComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }