import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/models/contact.model';
import { ContactFilter } from 'src/models/filter.model';
import { ContactService } from 'src/services/contact.service';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts$:Observable <Contact[]>;
  filterBy:ContactFilter={
    term:''
  }
  constructor(private contactService:ContactService) { }

   ngOnInit() {
    this.contacts$= this.contactService.contacts$
    this.contactService.loadContacts()
  }
onSetFilter(filterBy){ 
  this.filterBy=filterBy
  this.contactService.loadContacts(this.filterBy)
}
}
