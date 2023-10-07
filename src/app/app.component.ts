import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istud } from './shared/models/std';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'studDet';
  constructor() { }
  ngOnInit(): void { }
  studArr: Array<Istud> = [
    // {
    //   fname : "Ramesh",
    //   lname : "Patil",
    //   email : "rp@gmail.com",
    //   contact : 11111
    // },
    // {
    //   fname : "Ramesh",
    //   lname : "Patil",
    //   email : "rp@gmail.com",
    //   contact : 2222
    // }
  ]
  
  getStudDet(stud : Istud){
    this.studArr.push(stud);
  }

}
