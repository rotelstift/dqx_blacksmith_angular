import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleHandedSwordComponent } from './double-handed-sword.component';

describe('DoubleHandedSwordComponent', () => {
  let component: DoubleHandedSwordComponent;
  let fixture: ComponentFixture<DoubleHandedSwordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleHandedSwordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleHandedSwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
