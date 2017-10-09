import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuctionsService } from '../../services/auctions.service';


@Component({
  selector: 'app-auction-create',
  templateUrl: './auction-create.component.html',
  styleUrls: ['./auction-create.component.css']
})
export class AuctionCreateComponent implements OnInit {
  results: string;
  success: boolean = false;
  status: string = "closed";


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

  checkAuctionDate(form){
    let date = new Date();
    let currentDate = this.formatDate(date)
    let expirationDate = form.value.expirationDate;
    console.log(currentDate);
    console.log(expirationDate);
    if(currentDate<expirationDate){
      this.status = 'open';
    }
  }


  handleNewAuction(form){

    this.checkAuctionDate(form);

    if(this.status === 'open'){
      const newAuction = {
        name: form.value.name,
        quantity: form.value.quantity,
        expirationDate: form.value.expirationDate,
        status: this.status
      };

      this.createAuction.postAuction(newAuction).subscribe(res => {
        this.results = res;
      });

      this.success = true;
      setTimeout(() => {
        this.success = false;
      }, 2000);

      form.reset();
    }

    if(this.status === 'closed'){
    return alert("Please provide a valid expiration date for your auction!");
    }
  }
}
