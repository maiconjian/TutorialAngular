import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common'; // modo que eu encontrei
import localePt from '@angular/common/locales/pt'; // de resolver o problema
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import { ConfirmDialogModule} from 'primeng/components/confirmdialog/confirmdialog';
import { ToastyModule} from 'ng2-toasty';


import { ErrorHandlerService } from './error-handler.service';
import { PessoasService } from '../pessoas/pessoas.service';
import { ConfirmationService } from 'primeng/components/common/api';
import { RouterModule } from '@angular/router';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  imports: [
    CommonModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule,
    RouterModule
  ],
  providers: [
   ErrorHandlerService,
   PessoasService,
   ConfirmationService,
   { provide: LOCALE_ID , useValue: 'pt-BR' }
  ],
})
export class CoreModule { }
