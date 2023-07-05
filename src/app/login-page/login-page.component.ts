import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  onSubmit() {
    console.warn(this.loginForm.value);
    // reset the password field
    const passwordControl = this.loginForm.get('password');
    if (passwordControl) {
      passwordControl.reset();
    }
  }
}
