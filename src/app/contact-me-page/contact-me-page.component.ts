import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-me-page',
  templateUrl: './contact-me-page.component.html',
  styleUrls: ['./contact-me-page.component.scss'],
})
export class ContactMePageComponent {
  constructor(private router: Router) {}
  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    contactNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });
  onSubmit() {
    console.warn(this.contactForm.value);
    this.router.navigate(['/home']);
  }
}
