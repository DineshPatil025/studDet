import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Istud } from '../../models/std';

@Component({
  selector: 'app-stud-form',
  templateUrl: './stud-form.component.html',
  styleUrls: ['./stud-form.component.scss']
})
export class StudFormComponent implements OnInit {
@Output() onStudsubmit : EventEmitter<Istud> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild("fname") fname !: ElementRef
  @ViewChild("lname") lname !: ElementRef
  @ViewChild("contact") contact !: ElementRef
  @ViewChild("email") email !: ElementRef
 
  addStud() {

    if(this.fname.nativeElement.value.length > 0 && this.lname.nativeElement.value.length > 0 && this.email.nativeElement.value.length > 0 && this.fname.nativeElement.value.length > 0){
      let studObj : Istud = {
        fname : this.fname.nativeElement.value,
        lname : this.lname.nativeElement.value,
        email : this.email.nativeElement.value,
        contact : this.contact.nativeElement.value
      }
      this.onStudsubmit.emit(studObj)
    }else{
      alert("ENTER ALL THE DETAILS !!!!")
    }
   
    this.fname.nativeElement.value = "";
    this.lname.nativeElement.value = "";
    this.email.nativeElement.value = "";
    this.contact.nativeElement.value = "";
    this.fname.nativeElement.focus();
    
    
  }

}
