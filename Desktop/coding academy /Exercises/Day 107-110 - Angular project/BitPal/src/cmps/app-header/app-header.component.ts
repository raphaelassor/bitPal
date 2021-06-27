import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  userFullName : String | null;
  subsc:Subscription
  constructor(private userService:UserService) { }


  ngOnInit() {
    this.subsc=this.userService.user$.subscribe(user=>{
      this.userFullName=user?.name
    })
  }
  ngOnDestroy(){
    this.subsc.unsubscribe()
  }

}
