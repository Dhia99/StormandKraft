import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelaiComponent } from './delai.component';

describe('DelaiComponent', () => {
  let component: DelaiComponent;
  let fixture: ComponentFixture<DelaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
