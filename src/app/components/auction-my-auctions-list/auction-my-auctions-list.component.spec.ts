import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionMyAuctionsListComponent } from './auction-my-auctions-list.component';

describe('AuctionMyAuctionsListComponent', () => {
  let component: AuctionMyAuctionsListComponent;
  let fixture: ComponentFixture<AuctionMyAuctionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionMyAuctionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionMyAuctionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
