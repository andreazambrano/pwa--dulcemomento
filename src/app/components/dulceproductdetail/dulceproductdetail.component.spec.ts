import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DulceproductdetailComponent } from './dulceproductdetail.component';

describe('DulceproductdetailComponent', () => {
  let component: DulceproductdetailComponent;
  let fixture: ComponentFixture<DulceproductdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DulceproductdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DulceproductdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
