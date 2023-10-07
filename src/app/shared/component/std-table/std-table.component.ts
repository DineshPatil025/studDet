import { Component, Input, OnInit } from '@angular/core';
import { Istud } from '../../models/std';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
  @Input() getstudArr : Array<Istud> = []
  constructor() { }

  ngOnInit(): void {
  }

}
