import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuctionsService } from '../../services/auctions.service';

@Component({
  selector: 'app-auction-create',
  templateUrl: './auction-create.component.html',
  styleUrls: ['./auction-create.component.css']
})
export class AuctionCreateComponent implements OnInit {
  results: string;
  submitted: boolean = false;
  saving: boolean = false;
  success: boolean = false;
  newAuction: any = {};

  constructor(private createAuction: AuctionsService) { }

  ngOnInit() {
  }

  formatDate(date) {
    var year = date.getFullYear(),
        month = date.getMonth() + 1, // months are zero indexed
        monthFormatted = month < 10 ? "0" + month : month,
        day = date.getDate(),
        dayFormatted = day < 10 ? "0" + day : day,
        hour = date.getHours(),
        minute = date.getMinutes(),
        hourFormatted = hour < 10 ? "0" + hour : hour,
        minuteFormatted = minute < 10 ? "0" + minute : minute;

    return year + "-" + monthFormatted + "-" + dayFormatted + "T" + hourFormatted + ":" +
            minuteFormatted;
  }

  getUtcDate(date: any) : Date {
    const parts = date.split("T");
    const yParts = parts[0].split('-');
    const tParts = parts[1].split(':');
    return new Date(Date.UTC(yParts[0], yParts[1] - 1, yParts[2], tParts[0], tParts[1], 0));
  }

  isValidAuctionDate(date: string) : boolean {
    return this.getUtcDate(date) > new Date();
  }

  handleNewAuction(form) {
    if (form.invalid) {
      this.submitted = true;
      return;
    }

    if (this.isValidAuctionDate(this.newAuction.expirationDate)) {

      const newAuction = {
        name: this.newAuction.name,
        quantity: this.newAuction.quantity,
        expirationDate: this.getUtcDate(this.newAuction.expirationDate),
        status: 'open'
      };

      this.saving = true;
      this.createAuction.postAuction(newAuction).subscribe(res => {
        this.saving = false;
        this.results = res;

        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 2000);

        form.reset();
        this.submitted = false;
      });
    }
    else {
      return alert("Please provide a valid expiration date for your auction!");
    }
  }
}
