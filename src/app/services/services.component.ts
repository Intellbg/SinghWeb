import { Component, OnInit } from '@angular/core';
import { services } from './info';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services=services
  constructor() { }

  ngOnInit(): void {
  }

}
