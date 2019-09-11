import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CripListingComponent } from './crip-listing.component';

describe('CripListingComponent', () => {
  let component: CripListingComponent;
  let fixture: ComponentFixture<CripListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CripListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CripListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
