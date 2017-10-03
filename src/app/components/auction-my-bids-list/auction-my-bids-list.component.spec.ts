import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionMyBidsListComponent } from './auction-my-bids-list.component';

describe('AuctionMyBidsListComponent', () => {
  let component: AuctionMyBidsListComponent;
  let fixture: ComponentFixture<AuctionMyBidsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionMyBidsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionMyBidsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
