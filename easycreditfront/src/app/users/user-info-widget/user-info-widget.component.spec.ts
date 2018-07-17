import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoWidgetComponent } from './user-info-widget.component';

describe('UserInfoWidgetComponent', () => {
  let component: UserInfoWidgetComponent;
  let fixture: ComponentFixture<UserInfoWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
