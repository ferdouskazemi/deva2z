import { faMap } from '@fortawesome/free-regular-svg-icons';
import { Component } from '@angular/core';
import {
  faTimes,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  submitted = false;
  faTimes = faTimes;
  faPhone = faPhone;
  faMap = faMap;
  faEnvelope = faEnvelope;
  currentYear = new Date().getFullYear();

  constructor() {}
  form = new FormGroup({
    subject: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    body: new FormControl('', Validators.required),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    var mail = document.createElement('a');
    mail.href = `mailto:info@deva2z.com?subject=${this.form.get('subject')?.value}&body=${this.form.get('body')?.value}`;
    mail.click();
  }
}
