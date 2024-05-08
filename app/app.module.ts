import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SynComponent } from './syn/syn.component';
import { DzieckoComponent } from './dziecko/dziecko.component';

@NgModule({
  declarations: [
    AppComponent,
    SynComponent,
    DzieckoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
