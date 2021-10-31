import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWomanComponent } from './all-woman.component';

describe('AllWomanComponent', () => {
  let component: AllWomanComponent;
  let fixture: ComponentFixture<AllWomanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWomanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
