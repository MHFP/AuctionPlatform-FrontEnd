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

  constructor(private auctionsService: AuctionsService) {
  }

  ngOnInit() {
    this.auctionsService.getAuctions()
    .subscribe((rawAuctions) => this.rawAuctions = rawAuctions);

  }

}
