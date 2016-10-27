import { TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

import { Ng2BootstrapModule } from 'ng2-bootstrap';
import {ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';

describe('About Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        Ng2BootstrapModule
      ], 
      declarations: [AboutComponent, ModalDirective]});
    });

  //it('should have about text', () => {
  //  TestBed.
  //  const fixture = TestBed.createComponent(AboutComponent);
  //  fixture.detectChanges();
  //  expect(fixture.nativeElement.children[0].textContent).toContain('Demoiselle frontend based on Angular 2!');
  //});

});
