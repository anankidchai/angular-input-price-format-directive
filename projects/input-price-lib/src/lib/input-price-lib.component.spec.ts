import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPriceLibComponent } from './input-price-lib.component';

describe('InputPriceLibComponent', () => {
  let component: InputPriceLibComponent;
  let fixture: ComponentFixture<InputPriceLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPriceLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPriceLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
