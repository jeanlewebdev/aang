import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiduleComponent } from './bidule.component';

describe('BiduleComponent', () => {
  let component: BiduleComponent;
  let fixture: ComponentFixture<BiduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
