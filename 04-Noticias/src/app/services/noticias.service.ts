import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/intefaces';
import { environment } from 'src/environments/environment';


const apiKey = environment.apiKey;
const apiURL = environment.apiURL;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  headlinePage = 0;

  categoriaActual = '';
  CategoriaPage = 0;

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>( query: string) {
    query = apiURL + query;
    return this.http.get<T>( query, {headers} );
  }

  getTopHeadlines() {

    this.headlinePage ++;

    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=ar&page=${this.headlinePage}`);

  // return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=ar&apiKey=5020ae0a468247f28a55ea4ef80fbc7b`);

  }

  getTopHeadLinesCategoria( categoria: string ) {
    if (this.categoriaActual === categoria ) {
      this.CategoriaPage ++;
    } else {
      this.CategoriaPage = 1;
      this.categoriaActual = categoria;
    }

    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=ar&category=${categoria}&page=${this.CategoriaPage}`);
  }

}
