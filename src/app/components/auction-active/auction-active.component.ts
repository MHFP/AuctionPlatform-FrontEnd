import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuctionsService } from '../../services/auctions.service';

import { Auction } from '../../models/auction-model';

@Component({
  selector: 'app-auction-active',
  templateUrl: './auction-active.component.html',
  styleUrls: ['./auction-active.component.scss']
})

export class AuctionActiveComponent implements OnInit {
  @Input() rawAuction: Auction;
  @Input() auctionId: String;
  @Output() onNewBid = new EventEmitter<any>();

  results;
  success: boolean = false;


  constructor(
    private auctionsService: AuctionsService,
    private router: Router
  ) { }

    ngOnInit() {
    }

  handleNewBid(bidForm) {
    console.log(this.auctionId);
    const newBid = {
        bidderId: String,
        auctionId: this.auctionId,
        date: new Date(),
        bidPrice: bidForm.value.bidPrice
    };

    this.auctionsService.postBid(this.auctionId, newBid).subscribe(res => {
      this.results = res;
      this.onNewBid.emit(this.results);
    });

    this.success = true;
    setTimeout(() => {
      this.success = false;
    }, 2000);
    
    bidForm.reset();
  }

}
