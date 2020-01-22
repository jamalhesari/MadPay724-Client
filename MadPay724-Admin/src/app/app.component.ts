import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from './components/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements OnInit {
  title = 'MadPay724-Admin';
  jwtHelper = new JwtHelperService();

  constructor(private router : Router, private alertService : ToastrService, public authService : AuthService) { }

  ngOnInit() {

    this.getDecodedToken();

  }
  getDecodedToken()
  {
    const token = localStorage.getItem('token');
    this.authService.decodedToken = this.jwtHelper.decodeToken(token);
  }
  loggedIn() {
    return !this.authService.loggedIn();
  }
}
