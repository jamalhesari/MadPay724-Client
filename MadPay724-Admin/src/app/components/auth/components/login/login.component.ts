import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model : any = {};
  returnUrl: any = '';

  constructor(private authService : AuthService, private router : Router, private alertService: ToastrService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.model.isrememberme = true;
    this.route.queryParams.subscribe(params => this.returnUrl = params['return'] || '/panel/dashboard');

    if(!this.loggedIn()){
      this.router.navigate([this.returnUrl]);
    }
    
  }
loggedIn(){
  return this.authService.loggedIn();

}
  login(){

    this.authService.login(this.model).subscribe(next => {

      this.router.navigate([this.returnUrl]);
      this.alertService.success('ورود با موفقیت انجام شد');
      
    }, error =>{
      console.log("error");
      this.alertService.error(error, 'خطا در ورود');
    });

  }
  
}
