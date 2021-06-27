import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.scss']
})
export class TransferFundsComponent implements OnInit {
  @Input() maxAmount:number;
  @Output() onSendFunds= new EventEmitter()
  amount:number;
  constructor() { }

  ngOnInit(){

  }

onTransfer(){
  this.onSendFunds.emit(this.amount)
  this.amount=null;
}
}
