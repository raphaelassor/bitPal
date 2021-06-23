import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactFilter } from 'src/models/filter.model';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  @Input() filterBy:ContactFilter;
  @Output() onSetFilter = new EventEmitter<ContactFilter>();

  filterByCopy:ContactFilter;
  constructor() {
    this.filterByCopy={...this.filterBy}
   }

  ngOnInit() {

  }

}
