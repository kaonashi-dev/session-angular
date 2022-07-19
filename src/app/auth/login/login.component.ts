import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from 'src/app/services/session.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: string;
  public pass: string;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private sessionService: SessionService,
  ) {
    this.user = '';
    this.pass = '';
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.loginService.login(this.user, this.pass).subscribe(response => {
      if (response.access_token) {
        this.sessionService.save(response.access_token);
        this.router.navigate(['/user/home']);
      }
    });

  }

}
