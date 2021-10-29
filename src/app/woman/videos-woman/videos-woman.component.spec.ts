import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosWomanComponent } from './videos-woman.component';

describe('VideosWomanComponent', () => {
  let component: VideosWomanComponent;
  let fixture: ComponentFixture<VideosWomanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosWomanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosWomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
