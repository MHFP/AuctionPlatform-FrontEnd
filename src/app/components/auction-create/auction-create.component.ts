import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuctionsService } from '../../services/auctions.service';

@Component({
  selector: 'app-auction-create',
  templateUrl: './auction-create.component.html',
  styleUrls: ['./auction-create.component.css']
})
export class AuctionCreateComponent implements OnInit {
  results:string;
  success: boolean = false;

  constructor(private createAuction: AuctionsService) { }

  ngOnInit() {
  }

  handleNewAuction(form){
    const newAuction = {name: form.value.name, quantity: form.value.quantity, expirationDate: form.value.expirationDate};
    this.createAuction.postAuction(newAuction).subscribe(res => {
      this.results = res;
    });
    this.success = true;
    setTimeout(() => {
      this.success = false;
    }, 2000);
    form.reset();
  }
}
