import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MProcessedRequestsComponent } from './m-processed-requests.component';

describe('MProcessedRequestsComponent', () => {
  let component: MProcessedRequestsComponent;
  let fixture: ComponentFixture<MProcessedRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MProcessedRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MProcessedRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
