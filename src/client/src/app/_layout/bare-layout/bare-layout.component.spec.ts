import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BareLayoutComponent } from './bare-layout.component';

describe('BareLayoutComponent', () => {
  let component: BareLayoutComponent;
  let fixture: ComponentFixture<BareLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BareLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BareLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
