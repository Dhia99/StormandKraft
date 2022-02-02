import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service23Component } from './service23.component';

describe('Service23Component', () => {
  let component: Service23Component;
  let fixture: ComponentFixture<Service23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
