import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiduleDetailsComponent } from './bidule-details.component';

describe('BiduleDetailsComponent', () => {
  let component: BiduleDetailsComponent;
  let fixture: ComponentFixture<BiduleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiduleDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiduleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
