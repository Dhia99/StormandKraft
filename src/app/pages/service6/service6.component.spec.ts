import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service6Component } from './service6.component';

describe('Service6Component', () => {
  let component: Service6Component;
  let fixture: ComponentFixture<Service6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
