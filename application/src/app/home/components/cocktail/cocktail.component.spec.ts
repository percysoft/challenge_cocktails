import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CokctailComponent } from './cokctail.component';

describe('CokctailComponent', () => {
  let component: CokctailComponent;
  let fixture: ComponentFixture<CokctailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CokctailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CokctailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
