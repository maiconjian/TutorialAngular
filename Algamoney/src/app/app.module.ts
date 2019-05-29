import { CategoriaService } from './categorias/categoria.service';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { CurrencyMaskModule} from 'ng2-currency-mask';



import {AccordionModule} from 'primeng/accordion';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import { SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PesquisaPessoaComponent } from './pessoas/pesquisa-pessoa/pesquisa-pessoa.component';
import { PessoaCadastroComponent } from './pessoas/pessoa-cadastro/pessoa-cadastro.component';
import { LancamentoModule } from './lancamento/lancamento.module';
import { PessoasService } from './pessoas/pessoas.service';





@NgModule({
  declarations: [
    AppComponent,
    PesquisaPessoaComponent,
    PessoaCadastroComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    InputTextModule,
    AppRoutingModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    InputMaskModule,
    FormsModule,
    LancamentoModule,
    CoreModule,
    HttpModule,

  ],
  providers: [
    CategoriaService,
    PessoasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
