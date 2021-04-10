import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassordRecoveryFormComponent } from './passord-recovery-form.component';

describe('PassordRecoveryFormComponent', () => {
  let component: PassordRecoveryFormComponent;
  let fixture: ComponentFixture<PassordRecoveryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassordRecoveryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassordRecoveryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
