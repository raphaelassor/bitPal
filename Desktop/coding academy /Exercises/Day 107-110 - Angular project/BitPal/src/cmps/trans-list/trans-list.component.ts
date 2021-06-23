import { Component, Input, OnInit } from '@angular/core';
import { Move } from 'src/models/user.model';

@Component({
  selector: 'trans-list',
  templateUrl: './trans-list.component.html',
  styleUrls: ['./trans-list.component.scss']
})
export class TransListComponent implements OnInit {

  @Input() moves:Move[]
  constructor() { }

  ngOnInit(){
    console.log(this.moves)
  }

}
