import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechscrollComponent } from './techscroll.component';

describe('TechscrollComponent', () => {
  let component: TechscrollComponent;
  let fixture: ComponentFixture<TechscrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechscrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
