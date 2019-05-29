import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:Http) { }

  url = `http://localhost:3000`;


  listarCategorias(): Promise<any>{
    return this.http.get(`${this.url}/categorias`)
    .toPromise()
    .then(response => response.json()
    );
  }


}
