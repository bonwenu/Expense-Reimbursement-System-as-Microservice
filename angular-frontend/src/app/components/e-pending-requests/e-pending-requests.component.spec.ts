import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EPendingRequestsComponent } from './e-pending-requests.component';

describe('EPendingRequestsComponent', () => {
  let component: EPendingRequestsComponent;
  let fixture: ComponentFixture<EPendingRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EPendingRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EPendingRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
