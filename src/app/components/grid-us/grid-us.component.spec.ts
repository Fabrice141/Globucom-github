import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridUsComponent } from './grid-us.component';

describe('GridUsComponent', () => {
  let component: GridUsComponent;
  let fixture: ComponentFixture<GridUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
