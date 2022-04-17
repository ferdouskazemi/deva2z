import { faMap } from '@fortawesome/free-regular-svg-icons';
import { Component, OnInit } from '@angular/core';
import { faTimes, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators} from '@angular/forms';import { init } from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  submitted = false;
  faTimes = faTimes
  faPhone = faPhone
  faMap = faMap
  faEnvelope = faEnvelope
  currentYear = new Date().getFullYear();

  private name: any;
  private message: any;
  private subject: any;


  constructor() { }
   form = new FormGroup({
    subject: new FormControl('', [Validators.required, Validators.minLength(5)]),
    body: new FormControl('', Validators.required)
  });

  get f(){
    return this.form.controls;
  }

  submit(){
    var mail = document.createElement("a");
        mail.href = `mailto:info@deva2z.com?subject=${this.subject}&body=${this.message}`;
        mail.click();
  }
}
