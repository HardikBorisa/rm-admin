import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdotUserComponent } from './edot-user.component';

describe('EdotUserComponent', () => {
  let component: EdotUserComponent;
  let fixture: ComponentFixture<EdotUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdotUserComponent]
    });
    fixture = TestBed.createComponent(EdotUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
