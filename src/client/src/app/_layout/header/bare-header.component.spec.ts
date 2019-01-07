import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BareHeaderComponent } from './bare-header.component';

describe('BareHeaderComponent', () => {
  let component: BareHeaderComponent;
  let fixture: ComponentFixture<BareHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BareHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BareHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
