import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/data/model/user';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/components/auth/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/components/panel/services/user.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  
  constructor(private userService: UserService, private alertService: ToastrService, 
    private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUser();
  }

  goToSaveBtn(){

    $('html, body').animate({
      scrollTop: $('#btnsave').offset().top + 200
    }, 500);
    
  }

  loadUser() {

    this.route.data.subscribe(data => {
      this.user = data.user;
    });

    //this.userService.getUser(this.authService.decodedToken.nameid).subscribe((user: User) => {
    //  console.log(user);
    //  this.user = user;
    //}, error => {
    //  this.alertService.error(error);
    //});
  }

  updateUserInfo()
  {
    
  }

}
