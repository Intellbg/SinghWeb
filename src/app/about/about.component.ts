import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  oldPictures=[
    {path:"assets/img/taller/1.png"},
    {path:"assets/img/taller/2.png"},
    {path:"assets/img/taller/3.png"},
    {path:"assets/img/taller/4.png"}
  ]
  newPictures=[
    {path:"assets/img/taller/n1-min.jpg"},
    {path:"assets/img/taller/n2-min.jpg"},
    {path:"assets/img/taller/n3-min.jpg"},
    {path:"assets/img/taller/n4-min.jpg"},
    {path:"assets/img/taller/n5-min.jpg"},
    {path:"assets/img/taller/n6-min.jpg"},
    {path:"assets/img/taller/n7-min.jpg"},
    {path:"assets/img/taller/n8-min.jpg"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
