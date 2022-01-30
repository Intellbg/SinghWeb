import { Component, OnInit } from '@angular/core';
import { products } from './info';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent implements OnInit {
  products=products
  constructor() { }

  ngOnInit(): void {
  }

}
