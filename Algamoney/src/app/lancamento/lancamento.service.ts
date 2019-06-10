import { Lancamento } from './../core/model';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';


import * as moment from 'moment';




export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {
  [x: string]: any;

  urlBD = `http://localhost:3000/consulta-lancamento`;


  constructor( private http: Http) { }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {

    const params = new URLSearchParams();

    const dataInicio = moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD');
    const dataFim = moment(filtro.dataVencimentoFim).format('YYYY-MM-DD');


    if (filtro.descricao) {
      params.set('descricao_like', filtro.descricao);
    }
    if (filtro.dataVencimentoInicio) {
      params.set('dataVencimento_gte', dataInicio);

    }
    if (filtro.dataVencimentoFim) {
      params.set('dataVencimento_lte', dataFim);
    }

    return this.http.get(`${this.urlBD}`,
    {search: params})
    .toPromise()
    .then(response => response.json());

  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.urlBD}/${id}`)
    .toPromise()
    .then( () => null);

  }

  buscarPorId(id): Promise<any> {
    return this.http.get(`${this.urlBD}/${id}`)
    .toPromise()
    .then( response => {
      const lancamento = response.json() as Lancamento;

      this.converterStringsParaDatas([lancamento]);

      return lancamento;
    });
  }


  adicionarLancamento(lancamento: Lancamento): Promise<any> {

    return this.http.post(`${this.urlBD}`, JSON.stringify(lancamento))
    .toPromise()
    .then( response => {
      response.json();
    });
  }


  atualizar(lancamento: Lancamento): Promise<Lancamento> {

   }

  private converterStringsParaDatas(lancamentos: Lancamento[]) {
    for (const lancamento of lancamentos) {
      lancamento.dataVencimento = moment(lancamento.dataVencimento,
        'YYYY-MM-DD').toDate();

      if (lancamento.dataPagamento) {
        lancamento.dataPagamento = moment(lancamento.dataPagamento,
          'YYYY-MM-DD').toDate();
      }
    }
  }

}
