import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productmenu2Component } from './productmenu2.component';

describe('Productmenu2Component', () => {
  let component: Productmenu2Component;
  let fixture: ComponentFixture<Productmenu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Productmenu2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productmenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
