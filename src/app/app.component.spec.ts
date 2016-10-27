import { TestBed } from '@angular/core/testing';
import { provideRoutes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ApiService } from './shared';
import { AppComponent } from './app.component';

import { SidebarMenuComponent } from './layout/sidebar-menu/sidebar-menu.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, SidebarMenuComponent, TopNavComponent],
      providers: [ApiService, provideRoutes([])]
    });
  });

  it('should have boolean property isBs3', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.debugElement.componentInstance.isBs3).toMatch(/true|false/);
  });

});
