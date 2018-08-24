import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoComponenteComponent } from './novo-componente/novo-componente.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NovoComponenteComponent
  ],
  exports: [
    NovoComponenteComponent
  ],
})
export class NovoModuloModule { }
