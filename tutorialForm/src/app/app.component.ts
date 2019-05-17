import { Component } from '@angular/core';

class Client {
  nome: string ;
  email: string;
  profissao = '';
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  client: Client =  new Client();

  profissoes = ['Programador', 'Empresario', 'Outras'];

  salvar(form: any) {
    //this.client.nome = form.value.nome;
    //this.client.email = form.value.email;
    //this.client.profissao = form.value.profissao;

    form.reset({ profissao : ''});

  }
}
