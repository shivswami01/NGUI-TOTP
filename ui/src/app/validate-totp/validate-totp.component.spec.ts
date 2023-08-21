import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateTotpComponent } from './validate-totp.component';

describe('ValidateTotpComponent', () => {
  let component: ValidateTotpComponent;
  let fixture: ComponentFixture<ValidateTotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateTotpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateTotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
