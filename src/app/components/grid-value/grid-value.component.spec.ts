import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridValueComponent } from './grid-value.component';

describe('GridValueComponent', () => {
  let component: GridValueComponent;
  let fixture: ComponentFixture<GridValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
