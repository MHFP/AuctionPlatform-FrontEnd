import { Component, OnInit } from '@angular/core';
import { AuctionsService } from '../../services/auctions.service';
import { Auction } from '../../models/auction-model';


@Component({
  selector: 'app-auction-all-list',
  templateUrl: './auction-all-list.component.html',
  styleUrls: ['./auction-all-list.component.css']
})
export class AuctionAllListComponent implements OnInit {
  auctionsList: Object[];

  constructor(private auctions: AuctionsService) { }

  ngOnInit() {
    this.auctions.getAuctions().subscribe((auctionsList) => this.auctionsList = auctionsList);
  }

}
