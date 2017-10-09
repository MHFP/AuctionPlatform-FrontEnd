import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { AuctionsService } from '../../services/auctions.service';

import { Auction } from '../../models/auction-model';

@Component({
  selector: 'app-auction-page',
  templateUrl: './auction-page.component.html',
  styleUrls: ['./auction-page.component.css']
})
export class AuctionPageComponent implements OnInit {
  results;
  auctionId: String;
  rawAuction: Auction;

  @Output() onNewBid = new EventEmitter<any>();


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auctionsService: AuctionsService
  ) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.getAuctionInfo(params['id']);
      });
    }


    getAuctionInfo(id) {
      this.auctionsService.get(id)
      .subscribe((auction) => {
        this.rawAuction = auction;
      });
      return this.auctionId = id;
    }


    handleBidSubmition(bid) {
    this.router.navigate(['/auction', this.auctionId]);
    }

}
