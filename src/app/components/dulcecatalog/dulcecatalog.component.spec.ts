import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DulcecatalogComponent } from './dulcecatalog.component';

describe('DulcecatalogComponent', () => {
  let component: DulcecatalogComponent;
  let fixture: ComponentFixture<DulcecatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DulcecatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DulcecatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
