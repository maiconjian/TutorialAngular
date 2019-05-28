import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';


import * as moment from 'moment';




export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  urlBD = `http://localhost:3000/consulta-lancamento`;


  constructor( private http: Http) { }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {

    const params = new URLSearchParams();

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());


    if (filtro.descricao) {
      params.set('descricao', filtro.descricao);
    }
    if (filtro.dataVencimentoInicio) {
      params.set('dataVencimentoInicio',
      moment(filtro.dataVencimentoInicio).format('yyyy-mm-dd'));
    }
    if (filtro.dataVencimentoFim) {
      params.set('dataVencimentoFim',
      moment(filtro.dataVencimentoFim).format('yyyy-mm-dd'));
    }

    return this.http.get(`${this.urlBD}`,
    {search: params})
    .toPromise()
    .then(response => response.json()
    );

  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.urlBD}/${id}`)
    .toPromise()
    .then( () => null);

  }
}
