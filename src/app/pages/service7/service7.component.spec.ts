import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service7Component } from './service7.component';

describe('Service7Component', () => {
  let component: Service7Component;
  let fixture: ComponentFixture<Service7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
