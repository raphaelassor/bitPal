import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import{map,filter, tap} from 'rxjs/operators'
import { Contact } from 'src/models/contact.model';
import { Move, User } from 'src/models/user.model';
import { ContactService } from 'src/services/contact.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contact:Contact;
  movesOnContact:Move[];
  maxAmount:number;
  constructor(
    private route:ActivatedRoute , 
    private userService:UserService) { }

  ngOnInit(){
  this.route.data.subscribe(data=>{
      this.contact=data.contact
    })
    this.userService.user$.subscribe(user=>{
      console.log('user', user)
      this.movesOnContact=user.moves.filter(move=>move.toId===this.contact._id)
      console.log('moves on contact,' ,this.movesOnContact)
      this.maxAmount=user.coins 
    })
  }

  onSendFunds(amount){
    console.log('in send funds ', amount)
    this.userService.addMove(this.contact,amount)
  }
}
