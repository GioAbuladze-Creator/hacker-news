import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../interfaces/item';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item!:Item;
  constructor() { }

  ngOnInit() {
  }

}
