import { Component,Input, OnInit } from '@angular/core';
import { Iemp } from '../../models/std';

@Component({
  selector: 'app-emp-table',
  templateUrl: './emp-table.component.html',
  styleUrls: ['./emp-table.component.scss']
})
export class EmpTableComponent implements OnInit {

@Input() getEmpArr !: Array<Iemp>;

  constructor() { }

  ngOnInit(): void {
  }

}
