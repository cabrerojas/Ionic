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

  constructor(private http: HttpClient) { }

  private ejecutarQuery( query: string) {
    
  }

  getTopHeadlines() {
    this.ejecutarQuery(`/top-headlines?country=ar`);

  // return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=ar&apiKey=5020ae0a468247f28a55ea4ef80fbc7b`);

  }

  getTopHeadLinesCategoria( categoria: string ) {
      return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5020ae0a468247f28a55ea4ef80fbc7b`);
  }

}
