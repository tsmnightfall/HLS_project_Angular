import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanserComponent } from './cleanser.component';

describe('CleanserComponent', () => {
  let component: CleanserComponent;
  let fixture: ComponentFixture<CleanserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleanserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
