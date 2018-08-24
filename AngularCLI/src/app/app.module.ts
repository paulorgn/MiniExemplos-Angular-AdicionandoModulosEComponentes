import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NovoModuloModule } from '../novo-modulo/novo-modulo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NovoModuloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
