import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import { Auction } from '../models/auction-model';


const apiUrl = environment.apiUrl + '/auction';

@Injectable()
export class AuctionsService {
  constructor(private http: Http) {}

  getAuctions() {
    return this.http.get(apiUrl)
      .map((res) => res.json());
  }

  get(id:string) {
    return this.http.get(apiUrl + '/' + id)
      .map((res) => res.json());
  }

  postAuction(auction: Object) {
    return this.http.post(apiUrl, auction)
    .map((res) => res.json());
  }
}
