import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RespuestasPosts } from '../interfaces/interfaces';

const URL = environment.url;


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPost = 0;

  constructor(private http: HttpClient) { }

  getPosts(pull: boolean = false) {

    if (pull) {
      this.paginaPost = 0 ;
    }

    this.paginaPost ++;

    const headers = new HttpHeaders({
      'x-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjVlMzJlZjgwZWU5ZWQ0MGM4OGVlNjYzNSIsIm5vbWJyZSI6Ikd1aWxsZXJtbyBDYWJyZXJhIiwiZW1haWwiOiJndWlsbGVybW9AZ21haWwuY29tIiwiYXZhdGFyIjoiYXYtMS5wbmcifSwiaWF0IjoxNTgwMzk4MTIxLCJleHAiOjE1ODI5OTAxMjF9.9KYquStdPequiTvZcUTTuiDjwy3uff72hdk7GmmZjF4`
    });
    const options = {
      headers
    };

    return this.http.get<RespuestasPosts>(`${ URL }/posts?pagina=${this.paginaPost}`, options);
  }



}
