import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAdherantComponent } from './detail-adherant.component';

describe('DetailAdherantComponent', () => {
  let component: DetailAdherantComponent;
  let fixture: ComponentFixture<DetailAdherantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAdherantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAdherantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
