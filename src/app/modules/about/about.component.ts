import { Component, OnInit, ViewChild } from '@angular/core';

import {ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'dml-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],

})
export class AboutComponent implements OnInit {
  
  
  @ViewChild('childModal') public childModal:ModalDirective;

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }


  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
  }

}
