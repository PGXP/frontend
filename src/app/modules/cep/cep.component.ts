import { Component, OnInit, ViewChild } from '@angular/core';

import {ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';

import {CepService} from './cep.service';

@Component({
  selector: 'dml-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss'],

})
export class CepComponent implements OnInit {
 
  constructor(private service:CepService) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello cep');
  }

  listaUf(){
    this.service.listaUf().subscribe(
      (res) => {
        console.log(res);
      }
      );
  }

}
