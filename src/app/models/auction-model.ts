import { AuctionStatus } from './enums/auction-status.enum';

export class Auction {
  ownerId: string;
  name: string;
  quantity: number;
  date: Date;
  status: AuctionStatus;
  bids: [{
    date: Date;
    price: number;
    bidderId: string;
  }]
  winner: {
    winnerId: string;
    price: number;
  }
}
