import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TDFComponent } from './tdf/tdf.component';
import { MDFComponent } from './mdf/mdf.component';

@NgModule({
  declarations: [
    AppComponent,
    TDFComponent,
    MDFComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
