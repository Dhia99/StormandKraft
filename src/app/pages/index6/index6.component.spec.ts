import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Index6Component } from './index6.component';

describe('Index6Component', () => {
  let component: Index6Component;
  let fixture: ComponentFixture<Index6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Index6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Index6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
