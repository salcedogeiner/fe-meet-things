import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CoreService } from 'src/app/core/services/core.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/shared/commons/error-state-matcher';
import { UserModel } from '../user-model';
import { AuthenticationService } from 'src/app/shared/authentication/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  rsFormGroup: FormGroup;
  matcher = new MyErrorStateMatcher();
  userModel: UserModel;

  constructor(private coreService: CoreService,
              private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {

    this.rsFormGroup = new FormGroup({
      Id: new FormControl(),
      name: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
      role: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
    });
  }

  setModel() {
    // console.log(this.userModel);
    if (!this.userModel.Id) {
      this.userModel = new UserModel();
      this.rsFormGroup.reset();
    } else {
      this.rsFormGroup.setValue(this.userModel);
    }
  }

 submit() {
  this.userModel = this.rsFormGroup.value;
  console.log(this.userModel);
  this.authenticationService.Register(this.userModel).then((res) => {
    console.log(res);

    this.coreService.post('users',
      {
        uid: res.user.uid,
        name: this.userModel.name,
        email: this.userModel.email,
        role_id: this.userModel.role
      }
    ).subscribe(
      (resp: any) => {
        console.log(resp);
        this.router.navigate(['/main']);
      }
    );
  }).catch(response => {
    console.log(response.message);
  });
 }

 cancel() {
  this.router.navigate(['/login']);
}

}
