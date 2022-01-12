import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Projet3Component } from './projet3.component';

describe('Projet3Component', () => {
  let component: Projet3Component;
  let fixture: ComponentFixture<Projet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Projet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Projet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
