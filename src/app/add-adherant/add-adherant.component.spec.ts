import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdherantComponent } from './add-adherant.component';

describe('AddAdherantComponent', () => {
  let component: AddAdherantComponent;
  let fixture: ComponentFixture<AddAdherantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdherantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdherantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
