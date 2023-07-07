import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service'; // assuming login.service.ts is in services folder

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
    const username = this.loginForm.get('username');
    const password = this.loginForm.get('password');
    if (this.loginForm.valid && username?.value && password?.value) {
      this.loginService.login(username?.value, password?.value).subscribe(
        (data) => {
          if (data.success) {
            // redirect to business page after successful login
            this.router.navigate(['/business']);
          } else {
            // handle login failure
            alert('Invalid username or password');
            password?.reset();
          }
        },
        (error) => {
          // handle error
          console.error(error);
        }
      );
    }
  }
}
