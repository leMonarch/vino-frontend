import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInvitationComponent } from './dialog-invitation.component';

describe('DialogInvitationComponent', () => {
  let component: DialogInvitationComponent;
  let fixture: ComponentFixture<DialogInvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInvitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
