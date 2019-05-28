import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class CidadeService {

  constructor(private http: Http) { }

  adicionar(cidade: any): Promise<any> {
    return this.http.post('http://localhost:3000/cidades', cidade)
    .toPromise()
    .then(response => response.json()
    );
  }


  consultar(): Promise<any> {
    return this.http.get('http://localhost:3000/cidades')
      .toPromise()
      .then(response => response.json()
      );
  }


  excluir(id: number) {
    return this.http.delete(`http://localhost:3000/cidades/${id}`)
    .toPromise()
    .then(response => response.json);
  }

  atualizar(cidade: any): Promise<any> {
     return this.http.put(`http://localhost:3000/cidades/${cidade.id}`, cidade)
    .toPromise()
    .then(response => response.json)
    .catch(erro => {
      console.log(erro);

    });
  }

}
