import { NgModule } from '@angular/core';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { CepComponent } from './cep.component';
import { CepService } from './cep.service';

@NgModule({
    imports: [
        Ng2BootstrapModule,
    ],
      declarations: [
        CepComponent
    ],
    providers:[
        CepService
    ]
})
export class CepModule {}