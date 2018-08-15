import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitentDetailComponent } from './emitent-detail.component';

describe('EmitentDetailComponent', () => {
  let component: EmitentDetailComponent;
  let fixture: ComponentFixture<EmitentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
