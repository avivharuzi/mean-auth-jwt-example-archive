import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../shared/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean;

  isLoading: boolean;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.isLoading = false;
    this.hide = true;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      email: [],
      password: [],
    })
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return;
    }

    this.login();
  }

  login(): void {
    this.isLoading = true;

    const user = this.form.value;

    this.authService.login(user).subscribe(loggedIn => {
      if (loggedIn) {
        this.router.navigate(['/']).then();
      } else {
        // Error.
      }

      this.isLoading = false;
    });
  }
}