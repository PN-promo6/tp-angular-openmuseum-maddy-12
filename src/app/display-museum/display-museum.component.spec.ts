import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMuseumComponent } from './display-museum.component';

describe('DisplayMuseumComponent', () => {
  let component: DisplayMuseumComponent;
  let fixture: ComponentFixture<DisplayMuseumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMuseumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
