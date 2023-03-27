import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetesComponent } from './metes.component';

describe('MetesComponent', () => {
  let component: MetesComponent;
  let fixture: ComponentFixture<MetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
