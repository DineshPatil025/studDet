import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdFromComponent } from './prod-from.component';

describe('ProdFromComponent', () => {
  let component: ProdFromComponent;
  let fixture: ComponentFixture<ProdFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
