import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionAllListComponent } from './auction-all-list.component';

describe('AuctionAllListComponent', () => {
  let component: AuctionAllListComponent;
  let fixture: ComponentFixture<AuctionAllListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionAllListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionAllListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
