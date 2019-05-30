import { ToastyService } from 'ng2-toasty';
import { LancamentoService } from './../lancamento.service';
import { FormControl } from '@angular/forms';
import { CategoriaService } from './../../categorias/categoria.service';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { PessoasService } from 'src/app/pessoas/pessoas.service';
import { Lancamento } from 'src/app/core/model';



import * as moment from 'moment';


@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {


  valor: number;

  tipos = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesa', value: 'DESPESA'},
  ];

  categorias = [];

  pessoas = [];

  lancamento = new Lancamento();

  constructor(private categoriaServ: CategoriaService,
              private pessoaService: PessoasService,
              // tslint:disable-next-line:no-shadowed-variable
              private error: ErrorHandlerService,
              private lancamentoService: LancamentoService,
              private toasty: ToastyService,
              ) { }

  ngOnInit() {
    this.listarCategorias();
    this.listarPessoas();
  }

  salvar(form: FormControl) {

    this.lancamentoService.adicionarLancamento(this.lancamento)
    .then(() => {
      console.log(this.lancamento);

      this.toasty.success('Lancamento adicionado com sucesso!');
      form.reset();
      this.lancamento = new Lancamento();
    })
    .catch( erro => this.error.handle(erro));

  }



  listarCategorias() {
    this.categoriaServ.listarCategorias()
    .then(respostaGet => {
      this.categorias = respostaGet.map(c => {
        return {label: c.nome, value: c.id };
      });
    })
    .catch(erro => this.error.handle(erro));
  }

  listarPessoas() {
    this.pessoaService.pesquisar(' ')
    .then(respostaGet => {
      this.pessoas = respostaGet.map(p => ({label: p.nome, value: p.id}));
    })
    .catch(erro => this.error.handle(erro));
  }
}
