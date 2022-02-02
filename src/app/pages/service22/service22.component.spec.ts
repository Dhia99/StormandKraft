import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service22Component } from './service22.component';

describe('Service22Component', () => {
  let component: Service22Component;
  let fixture: ComponentFixture<Service22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
