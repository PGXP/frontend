import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/security';

@Component({
  selector: 'dml-login',
  templateUrl: './login.component.html'

})
export class LoginComponent implements OnInit {
  user: any = {
    username: 'admin@demoiselle.org',
    password: '123456'

  };

  constructor(private authService: AuthService, private router: Router) {
    // Do stuff
  }

  ngOnInit() {
    
  }

/**
 * login
 */
  login(){
      this.authService.login(this.user)
      .subscribe(
        res => {
          this.router.navigate(['']);

        });
  }

}
