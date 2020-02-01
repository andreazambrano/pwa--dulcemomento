import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DulcefooterComponent } from './dulcefooter.component';

describe('DulcefooterComponent', () => {
  let component: DulcefooterComponent;
  let fixture: ComponentFixture<DulcefooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DulcefooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DulcefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
