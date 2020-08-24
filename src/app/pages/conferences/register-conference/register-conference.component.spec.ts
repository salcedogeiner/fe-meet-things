import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterConferenceComponent } from './register-conference.component';

describe('RegisterConferenceComponent', () => {
  let component: RegisterConferenceComponent;
  let fixture: ComponentFixture<RegisterConferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterConferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
