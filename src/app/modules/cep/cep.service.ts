import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Uf }           from './uf.model';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class CepService {
  title = 'Cep';

  constructor(private http:Http){}

  listaUf(): Observable<Uf[]>{
    return  this.http.get('api/uf').map(
        (res) => {
            let body = res.json();
            return body as Uf[];
        }
    );
    };

    
  

}