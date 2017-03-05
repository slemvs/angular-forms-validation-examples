import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ComplexFormComponent } from './complex-form/complex-form.component';
import { FormValidationsComponent } from './form-validations/form-validations.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    ComplexFormComponent,
    FormValidationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
