import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-pessoa',
  templateUrl: './pesquisa-pessoa.component.html',
  styleUrls: ['./pesquisa-pessoa.component.css']
})
export class PesquisaPessoaComponent {

  pessoas = [
    { nome: 'Manoel Pinheiro ', cidade: ' Uberlândia', estado: 'MG' , status: 'Ativo'},
    { nome: 'Sebastião da Silva ', cidade: 'São Paulo', estado: 'SP' , status: 'Inativo'},
    { nome: 'Carla Souza', cidade: ' Florianopolis', estado: 'SC ' , status: 'Ativo'},
    { nome: 'Luis Pereira ', cidade: 'Curitiba', estado: 'PR' , status: 'Ativo'},
    { nome: 'Vilmar andrade ', cidade: ' Rio de Janeiro', estado: 'RJ' , status: 'Inativo'},
    { nome: 'Manoel Pinheiro ', cidade: ' Uberlândia', estado: 'MG' , status: 'Ativo'},
    { nome: 'Sebastião da Silva ', cidade: 'São Paulo', estado: 'SP' , status: 'Inativo'},
    { nome: 'Carla Souza', cidade: ' Florianopolis', estado: 'SC ' , status: 'Ativo'},
    { nome: 'Luis Pereira ', cidade: 'Curitiba', estado: 'PR' , status: 'Ativo'},
    { nome: 'Vilmar andrade ', cidade: ' Rio de Janeiro', estado: 'RJ' , status: 'Inativo'}
  ];
}
