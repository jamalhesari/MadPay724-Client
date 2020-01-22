import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../data/model/user';
import { ToastrService } from 'ngx-toastr';
import { resolve } from 'url';
import { observable, of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { error } from 'protractor';
import { AuthService } from '../components/auth/services/auth.service';
import { UserService } from '../components/panel/services/user.service';

@Injectable()
export class UserProfileResolver implements Resolve<User>{
    constructor(private userService: UserService, private router: Router, private alertService: ToastrService, private authService: AuthService){}

    resolve(route: ActivatedRouteSnapshot): Observable<User>{
            
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(

            catchError(error => {
                this.alertService.error('خطا در دریافت اطلاعات','خطا');
                this.router.navigate(['/panel/userinfo/profile']);

                return of(null);
            })
        )
    }

    
}
