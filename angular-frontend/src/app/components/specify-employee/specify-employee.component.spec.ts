import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecifyEmployeeComponent } from './specify-employee.component';

describe('SpecifyEmployeeComponent', () => {
  let component: SpecifyEmployeeComponent;
  let fixture: ComponentFixture<SpecifyEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecifyEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecifyEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
