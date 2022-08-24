import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionDirective } from './ng-accordion.directive';

describe('NgAccordionDirectiveComponent', () => {
  let component: AccordionDirective;
  let fixture: ComponentFixture<AccordionDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
