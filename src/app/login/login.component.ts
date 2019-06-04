import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  constructor(private afAuth: AngularFireAuth) {}

  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
}

// import { Component } from "@angular/core";
// import { AngularFireAuth } from "@angular/fire/auth";
// import { auth } from "firebase/app";

// @Component({
//   selector: "app-login",
//   templateUrl: "./login.component.html",
//   styleUrls: ["./login.component.css"]
// })
// export class LoginComponent {
//   constructor(private afAuth: AngularFireAuth) {}

//   login() {
//     this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
//   }
// }

// import { Component } from "@angular/core";
// import { AngularFireAuth } from "@angular/fire/auth";
// import { auth } from "firebase/app";

// @Component({
//   selector: "app-root",
//   template: `
//     <div *ngIf="afAuth.user | async as user; else showLogin">
//       <h1>Hello {{ user.displayName }}!</h1>
//       <button (click)="logout()">Logout</button>
//     </div>
//     <ng-template #showLogin>
//       <p>Please login.</p>
//       <button (click)="login()">Login with Google</button>
//     </ng-template>
//   `
// })
// export class AppComponent {
//   constructor(public afAuth: AngularFireAuth) {}
//   login() {
//     this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
//   }
//   logout() {
//     this.afAuth.auth.signOut();
//   }
// }
