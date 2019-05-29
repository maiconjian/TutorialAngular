import { CategoriaService } from './../../categorias/categoria.service';
import { ConfirmationService } from 'primeng/components/common/api';
import { PessoasService } from './../pessoas.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-pesquisa-pessoa',
  templateUrl: './pesquisa-pessoa.component.html',
  styleUrls: ['./pesquisa-pessoa.component.css']
})



export class PesquisaPessoaComponent implements OnInit {

  pessoas = [];

  constructor(private pessoasService: PessoasService,
              private confirmacao: ConfirmationService,
              private toasty: ToastyService,
              private error: ErrorHandlerService
        ) {}

  parametroPesquisa = '';

  ngOnInit() {
    this.pesquisar();
  }
/*
  pesquisar() {
     this.pessoasService.pesquisar(this.parametroPesquisa)
     .then(lista => this.pessoas = lista);
  }
*/

pesquisar() {
  this.pessoasService.pesquisar(this.parametroPesquisa)
  .then(responseGet => this.pessoas = responseGet)
  .catch(erro => this.error.handle(erro));
}

confirmarExclusao(pessoa: any) {
  this.confirmacao.confirm({
    message: 'Tem certeza que deseja excluir?',
    accept: () => {
      this.excluir(pessoa);
    }
  });
}


excluir(id: number) {
  //console.log(id);
  this.pessoasService.excluir(id)
  .then(resposta => {
    this.pesquisar();
    this.toasty.success('Excluido com Sucesso!');
  })
  .catch(erro => this.error.handle(erro));
}

mudarStatus(pessoa: any){
  const novoStatus = !pessoa.ativo;


  this.pessoasService.alterarStatus(pessoa.id,novoStatus)
  .then(()=>{
    const acao = novoStatus ? 'ativada' : 'desativada';

    pessoa.ativo = novoStatus;
    this.toasty.success(`Pessoa ${acao} com sucesso!`);
    this.pesquisar();
  })
  .catch(erro => this.error.handle(erro));
}

}
