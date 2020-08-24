import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/authentication/service/authentication.service';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  email: string;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private coreService: CoreService,
  ) { }

  ngOnInit() {
    this.authenticationService.logged.subscribe(res => {
      if (res) {
        this.router.navigate(['conferences']);
      }
    });
  }

  signUp() {
    // console.log('entro a up');
    this.authenticationService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  async signIn() {
    // console.log('entro a In');
    await this.authenticationService.SignIn(this.email, this.password).then((res: any) => {
      console.log(res);
      this.coreService.get('users/' + encodeURI(res.user.uid) ).subscribe(resp => {
        window.sessionStorage.setItem('uid', res.user.uid );
        window.sessionStorage.setItem('role', resp[0].role_id );
        this.router.navigate(['conferences']);
      });
    }).catch(err => {
      console.log(err);
    });
    this.email = '';
    this.password = '';
  }

  signOut() {
    this.authenticationService.SignOut();
  }

  register() {
    this.router.navigate(['register']);
  }
}
