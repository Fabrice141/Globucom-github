import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationsFilesComponent } from './creations-files.component';

describe('CreationsFilesComponent', () => {
  let component: CreationsFilesComponent;
  let fixture: ComponentFixture<CreationsFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationsFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationsFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
