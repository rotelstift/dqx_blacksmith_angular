import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomsComponent } from './bottoms.component';

describe('BottomsComponent', () => {
  let component: BottomsComponent;
  let fixture: ComponentFixture<BottomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
