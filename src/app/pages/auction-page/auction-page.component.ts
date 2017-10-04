import { Component, OnInit } from '@angular/core';

import { AuctionsService } from '../../services/auctions.service';

import { Auction } from '../../models/auction-model'


@Component({
  selector: 'app-auction-page',
  templateUrl: './auction-page.component.html',
  styleUrls: ['./auction-page.component.css'],
})
export class AuctionPageComponent implements OnInit {
  rawAuctions: Auction[];

  constructor(private auctionsService: AuctionsService) {
  }

  ngOnInit() {
    this.auctionsService.getAuctions()
    .subscribe((rawAuctions) => this.rawAuctions = rawAuctions);

  }

}
