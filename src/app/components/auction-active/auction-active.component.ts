import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Auction } from '../../models/auction-model';

@Component({
  selector: 'app-auction-active',
  templateUrl: './auction-active.component.html',
  styleUrls: ['./auction-active.component.css']
})

export class AuctionActiveComponent implements OnInit {
  @Input() rawAuction: Auction;

  constructor() { }

    ngOnInit() {
    }

}
