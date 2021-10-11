import { TestBed } from '@angular/core/testing';

import { TopWomanService } from './top-woman.service';

describe('TopWomanService', () => {
  let service: TopWomanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopWomanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
