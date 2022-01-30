import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { mainMail, mainPhone } from '../general_info';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  facebook=faFacebook
  google=faGoogle
  mainMail=mainMail
  telephone=mainPhone
  constructor() { }

  ngOnInit(): void {
  }

}
