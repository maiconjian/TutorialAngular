import { FormControl } from '@angular/forms';
import { CategoriaService } from './../../categorias/categoria.service';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { PessoasService } from 'src/app/pessoas/pessoas.service';
import { Lancamento } from 'src/app/core/model';

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
              private error: ErrorHandlerService
              ) { }

  ngOnInit() {
    this.listarCategorias();
    this.listarPessoas();
  }

  salvar(form: FormControl) {
    console.log(this.lancamento);

  }



  listarCategorias(){
    this.categoriaServ.listarCategorias()
    .then(respostaGet => {
      this.categorias = respostaGet.map(c => {
        return {label: c.nome, value: c.id }
      });
    })
    .catch(error=> this.error.handle(error));
  }

  listarPessoas(){
    this.pessoaService.pesquisar(' ')
    .then(respostaGet =>{
      this.pessoas = respostaGet.map(p=> ({label:p.nome,value:p.id}))
    })
    .catch(error => this.error.handle(error));
  }
}
