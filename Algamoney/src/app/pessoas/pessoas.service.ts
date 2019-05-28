import { Http } from '@angular/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  url = `http://localhost:3000/pessoas`;

  constructor( private http: Http) { }


  pesquisar(parametroPesquisa: string): Promise<any> {
    return this.http.get(`${this.url}?nome_like=${parametroPesquisa}`)
    .toPromise()
    .then(lista => lista.json());
  }



  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.url}/${id}`)
    .toPromise()
    .then(() => null);
  }
}


