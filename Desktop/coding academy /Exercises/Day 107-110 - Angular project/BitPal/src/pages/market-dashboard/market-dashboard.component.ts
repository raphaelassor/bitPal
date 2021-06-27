import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { BitcoinService } from 'src/services/bitcoin.service';

@Component({
  selector: 'market-dashboard',
  templateUrl: './market-dashboard.component.html',
  styleUrls: ['./market-dashboard.component.scss']
})
export class MarketDashboardComponent implements OnInit {

  transactionData;
  marketPrices; 
  btcRate; 
  chartType:any='Line'

  constructor(private bitcoinService: BitcoinService) { }

  async ngOnInit():Promise<void> {
    this.marketPrices=await this.bitcoinService.getMarketPrice().toPromise()
    this.transactionData= await this.bitcoinService.getConfirmedTransactions().toPromise()
    console.log(this.transactionData)
  }

}
