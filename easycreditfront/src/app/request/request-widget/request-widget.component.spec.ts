import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestWidgetComponent } from './request-widget.component';

describe('RequestWidgetComponent', () => {
  let component: RequestWidgetComponent;
  let fixture: ComponentFixture<RequestWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
