import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMissionComponent } from './grid-mission.component';

describe('GridMissionComponent', () => {
  let component: GridMissionComponent;
  let fixture: ComponentFixture<GridMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridMissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
