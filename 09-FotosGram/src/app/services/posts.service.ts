import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RespuestasPosts } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';
import { Post } from 'src/app/interfaces/interfaces';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';


const URL = environment.url;


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPost = 0;

  nuevoPost = new EventEmitter<Post>();

  constructor(private http: HttpClient,
              private usuarioService: UsuarioService,
              private fileTransfer: FileTransfer) { }

  getPosts(pull: boolean = false) {

    if (pull) {
      this.paginaPost = 0 ;
    }

    this.paginaPost ++;

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    const options = {
      headers
    };

    return this.http.get<RespuestasPosts>(`${ URL }/posts?pagina=${this.paginaPost}`, options);
  }

  createPost(post) {

    return new Promise( resolve =>{

      const headers = new HttpHeaders({
        'x-token': this.usuarioService.token
      });

      this.http.post(`${URL}/posts`, post, {headers})
        .subscribe(resp => {

          this.nuevoPost.emit(resp['post']);
          resolve(true);
        });
    });


  }

  subirImagen(img: string) {
    const options: FileUploadOptions = {
      fileKey: 'image',
      headers: {
        'x-token': this.usuarioService.token
      }
    };

    const fileTrasfer: FileTransferObject = this.fileTransfer.create();

    fileTrasfer.upload( img , `${URL}/posts/upload`, options )
      .then(data => {
        console.log(data);
      }).catch( err => {
        console.log('Error en carga', err);
      });

  }



}
