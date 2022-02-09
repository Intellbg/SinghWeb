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

  displayStyle = "none";
  openPopup(a: any) {
    const product=products.find(element => element.name == a)
    if (product){
      product.modal="block"
    }
  }
  closePopup(a: any) {
    const product=products.find(element => element.name == a)
    if (product){
      product.modal="none"
    }
  }
}
