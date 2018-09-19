import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
  // para colocar la fecha en español
import { LOCALE_ID} from '@angular/core';
import {CapitalizadoPipe} from './pipes/capitalizado.pipe';
import {Contrasena} from './pipes/contrasena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    Contrasena
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // para colocar la fecha en español
     { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
