import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiconectionService } from './apiconection.service';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(' + '593|0)?9[0-9]{8}$')]),
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZñÑ ]*$')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZñÑ ]*$')]),
    message: new FormControl('', Validators.required)
  })

  constructor(private emailService: ApiconectionService,) { }

  onSubmit() {
    this.emailService.sendMail(this.contactForm.value)
      .subscribe(response => {
        console.log(response)
        this.contactForm.reset()
        alert("Success")
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
}
