import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartType } from 'angular-google-charts';
import { User } from 'src/models/user.model';
import { BitcoinService } from 'src/services/bitcoin.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User;
  marketPrices: any;
  chartType: any = 'Line'


  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService,

  ) { }

  async ngOnInit() {

    this.user = await this.userService.getUser() // need to put it in an authenticator/resolver instead of getting it here 
    this.marketPrices = this.bitcoinService.getMarketPrice()
      .map(price => [new Date(price.x * 1000).toLocaleDateString('en-GB', { month: '2-digit', day: '2-digit' }), price.y])
    console.log('MARKET PRICES', this.marketPrices)
  }
get sumPastWeekMoves(){
  const week=1000*60*60*24*7;
  return this.user.moves.reduce((acc,move)=>{
    if(move.at>Date.now()-week) acc+=move.amount
    return  acc
  },0)
}
}
