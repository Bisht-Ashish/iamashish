import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    public content = 'Love to hear from you!!!';
    public contactForm: FormGroup;
    public successMessage = false;
    constructor() {
      this.contactForm = this.createContactForm();
    }
    createContactForm() {
      return new FormGroup({
          name: new FormControl('', Validators.required),
          email: new FormControl('', [Validators.required, Validators.email]),
          message: new FormControl('', Validators.required)
      });
    }
    onSubmit() {
      console.log(this.contactForm);
      if (this.contactForm.valid) {
        this.contactForm.reset();
        this.successMessage = true;
        setTimeout(() => {
          this.successMessage = false;
        }, 5000);
      }
    }
}

