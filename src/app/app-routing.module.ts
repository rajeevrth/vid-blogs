import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomComponent } from './custom/custom.component';
import { SecondComponent } from './second/second.component';
import { NewCardComponent } from './custom/newcard/newcard.component';
import { DisplayComponent } from './custom/display/display.component';
import { Transaction } from './custom/transaction/transaction.component';
import { VideoComponent } from './video/video.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { OopsComponent } from './oops/oops.component';
import { AngularjsComponent } from './angularjs/angularjs.component';

const routes: Routes = [
    { path: '', redirectTo: '/video/javascript', pathMatch: 'full' },
    {
        path: 'home', component: CustomComponent,
        children: [
            {
                path: 'newcard', component: NewCardComponent,
                children: [{
                    path: 'display', component: DisplayComponent
                }]
            },
        ]
    },
    {
        path: 'cards', component: SecondComponent,

    },
    {
        path: 'transaction', component: Transaction,

    },
    {
        path: 'video', component: VideoComponent,
        children: [
            {
                path: 'javascript', component: JavascriptComponent
            },
            {
                path: 'oops', component: OopsComponent
            },
            {
                path: 'angularjs', component: AngularjsComponent
            }
        ]

    },

    // { path: 'display', component: ConfirmationComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
