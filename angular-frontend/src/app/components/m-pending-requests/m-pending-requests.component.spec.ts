import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MPendingRequestsComponent } from './m-pending-requests.component';

describe('MPendingRequestsComponent', () => {
  let component: MPendingRequestsComponent;
  let fixture: ComponentFixture<MPendingRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MPendingRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MPendingRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
