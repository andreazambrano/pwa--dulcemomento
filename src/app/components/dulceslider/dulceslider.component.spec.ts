import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DulcesliderComponent } from './dulceslider.component';

describe('DulcesliderComponent', () => {
  let component: DulcesliderComponent;
  let fixture: ComponentFixture<DulcesliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DulcesliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DulcesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
