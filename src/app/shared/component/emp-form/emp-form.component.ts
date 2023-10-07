import { Component, ElementRef, Output, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { Iemp } from '../../models/std';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.scss']
})
export class EmpFormComponent implements OnInit {


  @Output() sendEmpData: EventEmitter<Iemp> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {

  }

  @ViewChild("fname") fname !: ElementRef;
  @ViewChild("lname") lname !: ElementRef;
  @ViewChild("email") email !: ElementRef;
  @ViewChild("contact") contact !: ElementRef;


  addEmp() {
    if (this.fname.nativeElement.value.length > 0 && this.lname.nativeElement.value.length > 0 && this.email.nativeElement.value.length > 0 && this.contact.nativeElement.value.length > 0) {
      let empObj: Iemp = {
        fname: this.fname.nativeElement.value,
        lname: this.lname.nativeElement.value,
        email: this.email.nativeElement.value,
        contact: this.contact.nativeElement.value,
      }
      console.log(empObj);
      this.sendEmpData.emit(empObj);
    } else {
      alert("Enter all the details of employee")
    }
   
    
    this.fname.nativeElement.value = "";
    this.lname.nativeElement.value = "";
    this.email.nativeElement.value = "";
    this.contact.nativeElement.value = "";
    this.fname.nativeElement.focus();

  }

}
