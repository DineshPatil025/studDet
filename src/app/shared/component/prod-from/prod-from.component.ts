import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Iprod } from '../../models/std';

@Component({
  selector: 'app-prod-from',
  templateUrl: './prod-from.component.html',
  styleUrls: ['./prod-from.component.scss']
})
export class ProdFromComponent implements OnInit {
@Output() sendProdDet : EventEmitter <Iprod> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild("prodName") prodName !: ElementRef
  @ViewChild("prodDescr") prodDescr !: ElementRef

  addProduct(prodCat : string) {
    if(this.prodName.nativeElement.value.length > 0 && this.prodDescr.nativeElement.value.length > 0){

      let prodObj : Iprod= {
        prodName: this.prodName.nativeElement.value,
        prodDescr: this.prodDescr.nativeElement.value,
        prodCat : prodCat

      }
      console.log(prodObj);

      this.sendProdDet.emit(prodObj);
    }else{
      alert("Add Product Name & Description ")
    }
    this.prodName.nativeElement.value = "";
    this.prodDescr.nativeElement.value = "";
    this.prodName.nativeElement.focus();
   
    
  }

}
