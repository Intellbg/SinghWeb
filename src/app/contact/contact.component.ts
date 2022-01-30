import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { mainMail, mainPhone, addres, telegramLink } from '../general_info';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  facebook=faFacebook
  google=faGoogle
  phone=mainPhone
  email=mainMail
  addres=addres
  constructor() { }

  ngOnInit(): void {
  }

}
