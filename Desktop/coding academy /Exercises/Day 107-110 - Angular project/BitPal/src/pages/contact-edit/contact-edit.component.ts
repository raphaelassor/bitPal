import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/models/contact.model';
import { ContactService } from 'src/services/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  contact: Contact;
  isEdit: Boolean;
  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.contact = data.contact || this.contactService.getEmptyContact()
      this.isEdit = this.contact._id ? true : false
    })
  }
  async onSaveContact(form) {
    const { name, phone, email } = form.value
    this.contact = {
      ...this.contact,
      name,
      phone,
      email
    }
    await this.contactService.saveContact(this.contact).toPromise()
    const path = this.isEdit ? `contacts/${this.contact._id}` : 'contacts'
    this.router.navigate([path])
  }

  async onRemoveContact() {
    await this.contactService.deleteContact(this.contact._id).toPromise()
    this.router.navigateByUrl('contacts')
  }


}
