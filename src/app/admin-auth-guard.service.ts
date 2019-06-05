import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { map, switchMap } from "rxjs/operators";
import { UserService } from "./user.service";
import { stringify } from "@angular/compiler/src/util";

@Injectable({
  providedIn: "root"
})
export class AdminAuthGuardService implements CanActivate {
  isAdmin = false;

  constructor(private auth: AuthService, private userService: UserService) {}

  canActivate() {
    // return this.auth.user$
    //   .pipe(switchMap(user => this.userService.get(user.uid)))
    //   .pipe(map(appUser => console.log(appUser.isAdmin)));
    // console.log("true");
    // let uid:string;

    // this.auth.user$.subscribe(user => {
    //   this.userService
    //     .get(user.uid)
    //     .valueChanges()
    //     .subscribe(user => {
    //       if (user.isAdmin) {
    //         this.isAdmin = <boolean>user.isAdmin;
    //       }
    //     });
    // });

    // if (this.isAdmin) {
    //   return true;
    // } else {
    //   console.log("You dont have admin access");
    //   return false;
    // }

    return true;
  }
}
