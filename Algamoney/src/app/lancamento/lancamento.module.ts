import { LancamentoPesquisaComponentr } from './lancamento-pesquisa/lancamento-pesquisa.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';

import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { SharedModule } from '../shared/shared.module';
import { LancamentoService } from './lancamento.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LancamentoCadastroComponent,
    LancamentoPesquisaComponentr,
  ],
  exports: [
    LancamentoCadastroComponent,
    LancamentoPesquisaComponentr,
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    InputMaskModule,
    SharedModule,
    RouterModule
  ],
  providers: [LancamentoService],
})
export class LancamentoModule { }
