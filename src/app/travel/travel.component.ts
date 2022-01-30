import { Component, OnInit } from '@angular/core';
import { servicest } from './info';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  services=servicest
  constructor() { }

  ngOnInit(): void {
  }

}
