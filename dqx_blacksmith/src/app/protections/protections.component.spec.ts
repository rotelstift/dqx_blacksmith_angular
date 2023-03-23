import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionsComponent } from './protections.component';

describe('ProtectionsComponent', () => {
  let component: ProtectionsComponent;
  let fixture: ComponentFixture<ProtectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
