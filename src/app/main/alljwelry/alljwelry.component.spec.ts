import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlljwelryComponent } from './alljwelry.component';

describe('AlljwelryComponent', () => {
  let component: AlljwelryComponent;
  let fixture: ComponentFixture<AlljwelryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlljwelryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlljwelryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
