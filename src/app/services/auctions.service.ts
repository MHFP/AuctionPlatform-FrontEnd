import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { Auction } from '../models/auction-model';

const apiUrl = environment.apiUrl;

@Injectable()
export class AuctionsService {

  constructor(private http: Http) {}

  getAuctions(){
    return this.http.get(apiUrl + '/auction')
      .map((res: Response) => res.json());
  }
}
