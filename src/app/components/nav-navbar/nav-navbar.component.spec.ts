import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNavbarComponent } from './nav-navbar.component';

describe('NavNavbarComponent', () => {
  let component: NavNavbarComponent;
  let fixture: ComponentFixture<NavNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
