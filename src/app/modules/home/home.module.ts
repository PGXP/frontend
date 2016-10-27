import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {SecurityModule} from '../../core/security';

@NgModule({
    imports: [
        SecurityModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {}