import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcosmeticComponent } from './allcosmetic.component';

describe('AllcosmeticComponent', () => {
  let component: AllcosmeticComponent;
  let fixture: ComponentFixture<AllcosmeticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcosmeticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcosmeticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
