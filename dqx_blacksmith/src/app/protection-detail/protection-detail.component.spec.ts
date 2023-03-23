import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionDetailComponent } from './protection-detail.component';

describe('ProtectionDetailComponent', () => {
  let component: ProtectionDetailComponent;
  let fixture: ComponentFixture<ProtectionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectionDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
