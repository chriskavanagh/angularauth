import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjandetailsComponent } from './ninjandetails.component';

describe('NinjandetailsComponent', () => {
  let component: NinjandetailsComponent;
  let fixture: ComponentFixture<NinjandetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinjandetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinjandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
