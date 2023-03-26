import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyingPanComponent } from './flying-pan.component';

describe('FlyingPanComponent', () => {
  let component: FlyingPanComponent;
  let fixture: ComponentFixture<FlyingPanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyingPanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlyingPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
