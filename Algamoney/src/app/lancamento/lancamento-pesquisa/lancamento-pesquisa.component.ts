import { ConfirmationService } from 'primeng/components/common/api';
import { LancamentoService, LancamentoFiltro } from './../lancamento.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class LancamentoPesquisaComponentr implements OnInit {

  totalRegistros = 0;

  filtro = new LancamentoFiltro();

  lancamentos = [];


  constructor(private lancamentoService: LancamentoService,
              private toastyService: ToastyService,
              private confirmation: ConfirmationService,
              private errorHandler: ErrorHandlerService
    ) {}

  ngOnInit() {
   this.pesquisar( );
  }

  pesquisar( ) {

    this.lancamentoService.pesquisar(this.filtro)
    .then( respostaGet => this.lancamentos = respostaGet)
    .catch(erro => this.errorHandler.handle(erro));
  }

  confirmarExclusao(lancamento: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir? ',
      accept: () => {
         this.excluir(lancamento);
      }
    });
  }


  excluir(linhaSelecionada: any) {
    this.lancamentoService.excluir(linhaSelecionada.id)
    .then( () => {
      this.pesquisar();
      this.toastyService.success('Lançamento excluido com sucesso!');
    })
    .catch(erro => this.errorHandler.handle(erro));

  }

}
