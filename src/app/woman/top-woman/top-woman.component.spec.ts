import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWomanComponent } from './top-woman.component';

describe('TopWomanComponent', () => {
  let component: TopWomanComponent;
  let fixture: ComponentFixture<TopWomanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopWomanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopWomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
