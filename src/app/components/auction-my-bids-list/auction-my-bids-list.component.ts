import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auction-my-bids-list',
  templateUrl: './auction-my-bids-list.component.html',
  styleUrls: ['./auction-my-bids-list.component.css']
})
export class AuctionMyBidsListComponent implements OnInit {

  @Input() bids: Object[];

  constructor() { }

  ngOnInit() {
  }

}
