
export class Auction {
  ownerId: string;
  name: string;
  quantity: number;
  publishedDate: Date;
  expirationDate: Date;
  status: String;
  bids: [{
    date: Date;
    bidPrice: number;
    bidderId: string;
  }]
  winner: {
    winnerId: string;
    price: number;
  }
}
