import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgBttvModule } from '@nggondolas/ng-bttv';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgBttvModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
