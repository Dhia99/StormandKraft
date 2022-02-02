import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service21Component } from './service21.component';

describe('Service21Component', () => {
  let component: Service21Component;
  let fixture: ComponentFixture<Service21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
