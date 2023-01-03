import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnThiComponent } from './on-thi.component';

describe('OnThiComponent', () => {
  let component: OnThiComponent;
  let fixture: ComponentFixture<OnThiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnThiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
