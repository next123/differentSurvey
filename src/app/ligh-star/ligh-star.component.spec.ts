import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LighStarComponent } from './ligh-star.component';

describe('LighStarComponent', () => {
  let component: LighStarComponent;
  let fixture: ComponentFixture<LighStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LighStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LighStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
