import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAuctionComponent } from './page-auction.component';

describe('PageAuctionComponent', () => {
  let component: PageAuctionComponent;
  let fixture: ComponentFixture<PageAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
