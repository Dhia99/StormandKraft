import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Projet1Component } from './projet1.component';

describe('Projet1Component', () => {
  let component: Projet1Component;
  let fixture: ComponentFixture<Projet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Projet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Projet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
