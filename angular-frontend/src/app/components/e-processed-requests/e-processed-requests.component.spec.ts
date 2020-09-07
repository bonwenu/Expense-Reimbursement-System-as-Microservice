import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EProcessedRequestsComponent } from './e-processed-requests.component';

describe('EProcessedRequestsComponent', () => {
  let component: EProcessedRequestsComponent;
  let fixture: ComponentFixture<EProcessedRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EProcessedRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EProcessedRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
