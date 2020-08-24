import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  userData: firebase.User;
  logged = new Subject<boolean>();
  loggedObs = this.logged.asObservable();

  constructor(private router: Router, private angularFireAuth: AngularFireAuth) {
  }


  /* Sign up */
  SignUp(email: string, password: string) {


    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        // console.log('Successfully signed up!', res);
      })
      .catch(error => {
        // console.log('Something is wrong:', error.message);
      });
  }

  /* Sign in */
  SignIn(email: string, password: string) {

    // console.log(email, password);
    const self = this;

    return new Promise ((resolve, reject) => {
      self.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password).then(async (res: firebase.auth.UserCredential) => {
        self.userData = res.user;
        self.logged.next( self.userData.uid ? true : false);
        console.log('Successfully signed in!', res);
        resolve(res);
      })
      .catch(err => {
        // console.log('Something is wrong:', err.message);
        alert('Invalid credentials');
        reject(err);
      });
    });
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .auth
      .signOut();
  }

  Register(user) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

}
