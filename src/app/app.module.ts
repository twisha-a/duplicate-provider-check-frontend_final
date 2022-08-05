import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './component/input/input.component';
import { OutputComponent } from './component/output/output.component';
import { DisplayInputComponent } from './component/display-input/display-input.component';
import { NgxSpinnerModule } from "ngx-spinner";
//import { SpinnerComponent } from 'src/app/component/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    DisplayInputComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
