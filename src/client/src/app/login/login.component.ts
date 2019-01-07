import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from '../core/authentication/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl:string;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

     // reset login status
     this.authService.logout();

     // get return url from route parameters or default to '/'
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';


  }

  get f() { return this.loginForm.controls; }


  login() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    const val = this.loginForm.value;
    // this.router.navigateByUrl('/');
    if (val.email && val.password) {
      this.authService.login({ email: val.email, password: val.password })
        .subscribe(
          () => {
            this.router.navigateByUrl(this.returnUrl);
          }
        );
    }
  }

}
