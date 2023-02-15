import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavInfosComponent } from './nav-infos.component';

describe('NavInfosComponent', () => {
  let component: NavInfosComponent;
  let fixture: ComponentFixture<NavInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
