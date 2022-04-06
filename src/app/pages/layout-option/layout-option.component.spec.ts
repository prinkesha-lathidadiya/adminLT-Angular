import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutOptionComponent } from './layout-option.component';

describe('LayoutOptionComponent', () => {
  let component: LayoutOptionComponent;
  let fixture: ComponentFixture<LayoutOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
