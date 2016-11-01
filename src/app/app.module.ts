import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, RequestOptions, XHRBackend, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';

import { ApiService } from './shared';
import { routing } from './app.routing';

// layout
import { SidebarMenuComponent } from './layout/sidebar-menu/sidebar-menu.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';

// feature modules
import { LoginComponent } from './modules/login';
import { AboutModule } from './modules/about/about.module';
import { CepModule } from './modules/cep/cep.module';
import { HomeModule } from './modules/home/home.module';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

import {SecurityModule, AuthServiceProvider} from './core/security';
import {DmlHttpModule, HttpService, HttpServiceProvider} from './core/http';




@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Ng2BootstrapModule,
    routing,

    AboutModule,
    CepModule,
    HomeModule,
    SecurityModule,
    DmlHttpModule
  ],
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    TopNavComponent,

    LoginComponent
  ],
  providers: [
    ApiService,

    HttpServiceProvider(process.env.CONF.endpoints),
    AuthServiceProvider(process.env.CONF.endpoints.auth)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
