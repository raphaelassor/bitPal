import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

@Input() contact:Contact;
  constructor() { }

  ngOnInit(): void {
  }

}
