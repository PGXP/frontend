import { NgModule } from '@angular/core';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { AboutComponent } from './about.component';

@NgModule({
    imports: [
        Ng2BootstrapModule,
    ],
      declarations: [
        AboutComponent
    ]
})
export class AboutModule {}