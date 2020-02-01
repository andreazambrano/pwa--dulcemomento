import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DulcetopbarComponent } from './dulcetopbar.component';

describe('DulcetopbarComponent', () => {
  let component: DulcetopbarComponent;
  let fixture: ComponentFixture<DulcetopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DulcetopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DulcetopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
