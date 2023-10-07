import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Iemp, Iprod, Istud } from './shared/models/std';

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

  getStudDet(stud: Istud) {
    this.studArr.push(stud);
  }

  empArr: Array<Iemp> = [
    // {
    //   fname: "fname1",
    //   lname: "lname1",
    //   email: "email1",
    //   contact: 12345
    // }


  ]
  recvEmpDta(emp: Iemp) {
    this.empArr.push(emp)
  }

  prodArr: Array<Iprod> = []
  recvprodDetails(prod : Iprod){
    this.prodArr.push(prod)
  }
}
