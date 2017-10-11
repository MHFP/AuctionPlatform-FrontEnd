import { Component, OnInit } from '@angular/core';

import { AuctionsService } from '../../services/auctions.service';

import { Auction } from '../../models/auction-model'

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  rawAuctions: Auction[];
  bids: Object[] = [];

  constructor(private auctionsService: AuctionsService) {
    this.auctionsService.getAuctions().subscribe((auctions) => {
      this.rawAuctions = auctions;
      for(var i=0; i<auctions.length; i++){
        if(auctions[i].bids.length > 0){
          this.bids.push(auctions[i]);
        }
      }
    });
    console.log(this.bids)
  }

  ngOnInit() {

  }

}
