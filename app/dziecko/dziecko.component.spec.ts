import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzieckoComponent } from './dziecko.component';

describe('DzieckoComponent', () => {
  let component: DzieckoComponent;
  let fixture: ComponentFixture<DzieckoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DzieckoComponent]
    });
    fixture = TestBed.createComponent(DzieckoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
