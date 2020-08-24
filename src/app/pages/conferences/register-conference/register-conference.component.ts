import {
  Component,
  OnInit
} from '@angular/core';
import { CoreService } from 'src/app/core/services/core.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/authentication/service/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/shared/commons/error-state-matcher';
@Component({
  selector: 'app-register-conference',
  templateUrl: './register-conference.component.html',
  styleUrls: ['./register-conference.component.scss']
})
export class RegisterConferenceComponent implements OnInit {

  rsFormGroup: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private coreService: CoreService,
              private router: Router,
              private authenticationService: AuthenticationService) {}

  ngOnInit() {

    this.rsFormGroup = new FormGroup({
      id: new FormControl(),
      title: new FormControl('', [
        Validators.required,
      ]),
      location: new FormControl('', [
        Validators.required,
      ]),
      state: new FormControl('', [
        Validators.required,
      ]),
      quota: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  submit() {
    const conference = this.rsFormGroup.value;
    console.log(conference);
    conference.state = conference.state ? 'E' : 'D';
    this.coreService.post('conferences', conference).subscribe(
      (resp: any) => {
        console.log(resp);
        this.router.navigate(['/main']);
      }
    );
  }

  cancel() {
    this.router.navigate(['/main']);
  }


}
