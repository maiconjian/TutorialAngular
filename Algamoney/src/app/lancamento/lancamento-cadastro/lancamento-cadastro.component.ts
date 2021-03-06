import { ToastyService } from 'ng2-toasty';
import { LancamentoService } from './../lancamento.service';
import { FormControl } from '@angular/forms';
import { CategoriaService } from './../../categorias/categoria.service';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { PessoasService } from 'src/app/pessoas/pessoas.service';
import { Lancamento } from 'src/app/core/model';



import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';


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
              private route: ActivatedRoute
              ) { }

  ngOnInit() {

    const idLancamento = this.route.snapshot.params.id;


    if (idLancamento) {
      this.carregarLancamento(idLancamento);
    }

    this.listarCategorias();
    this.listarPessoas();
  }
  salvar(form: FormControl) {
    if (this.editando) {
     atualizarLancamento(form);
    } else {
      this.adicionarLancamento(form);
    }
  }
  adicionarLancamento(form: FormControl) {

    this.lancamentoService.adicionarLancamento(this.lancamento)
    .then(() => {


      this.toasty.success('Lancamento adicionado com sucesso!');
      form.reset();
      this.lancamento = new Lancamento();
    })
    .catch( erro => this.error.handle(erro));

  }

  atualizarLancamento(form: FormControl) {

  }

  carregarLancamento(id: number) {
    this.lancamentoService.buscarPorId(id)
    .then( lancamentoGet => {
        this.lancamento = lancamentoGet;
        // this.lancamento.dataVencimento = moment(this.lancamento.dataVencimento, 'YYYY-MM-DD').toDate();
        // this.lancamento.dataPagamento = moment(this.lancamento.dataPagamento, 'YYYY-MM-DD').toDate();

    })
    .catch(erro => this.error.handle(erro));
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

  get editando() {
    return Boolean(this.lancamento.id);
  }
}
