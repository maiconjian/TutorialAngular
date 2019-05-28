import { FuncionarioService } from './funcionario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { PipesComponent } from './pipes/pipes.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';



@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCardComponent,
    CampoColoridoDirective,
    PipesComponent,
    FuncionarioFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FuncionarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
