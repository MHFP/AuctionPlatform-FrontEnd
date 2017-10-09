import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Auction } from '../../models/auction-model';



@Component({
  selector: 'app-auction-all-list',
  templateUrl: './auction-all-list.component.html',
  styleUrls: ['./auction-all-list.component.css']
})

export class AuctionAllListComponent implements OnInit {
  @Input() rawAuctions: Auction[];

  constructor() { }

  ngOnInit() {
  }

  

}
