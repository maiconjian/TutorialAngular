import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoGrandeComponent } from './botao-grande/botao-grande.component';

@NgModule({
  declarations: [
    BotaoGrandeComponent
  ],
  exports: [
    BotaoGrandeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BotoesModule { }
