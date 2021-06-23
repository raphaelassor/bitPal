import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input() contacts:Contact[];
  constructor() { }

  ngOnInit(): void {
  }

}
