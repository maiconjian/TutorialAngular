import { CidadeService } from './cidade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cidades = [];

  constructor(private cidadeService: CidadeService) {}

  ngOnInit() {
   this.consultar();
  }

  consultar() {
    this.cidadeService.consultar()
    .then(dados => {
      this.cidades = dados;
    });
  }

  adicionar(nome: string) {
    // tslint:disable-next-line:object-literal-shorthand
    this.cidadeService.adicionar({nome: nome})
    .then(cidade => {
      alert(`Cidade "${cidade.nome}" adicionado com o codigo "${cidade.id}"`);
      this.consultar();
    });
  }

  excluir(id: number) {
    this.cidadeService.excluir(id)
    .then( () => {
      alert('cidade Excluida com Sucesso');
      this.consultar();
    });
  }

  atualizar(cidade: any) {
    this.cidadeService.atualizar(cidade)
    .then(() => {
      alert('Cidade Atualizada com Sucesso!');
    });

  }

}
