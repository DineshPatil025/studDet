import { Component, OnInit, Input } from '@angular/core';
import { Iprod } from '../../models/std';

@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.scss']
})
export class ProdCardComponent implements OnInit {


  @Input() getProdArr !: Array<Iprod>
  constructor() { }

  ngOnInit(): void {
  }

}
