import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Sender1Component } from './sender1.component';
import { ReceiverComponent } from './receiver.component';
import { Sender2Component } from './sender2.component';

@NgModule({
  declarations: [
    AppComponent,
    Sender1Component,
    Sender2Component,
    ReceiverComponent,
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
