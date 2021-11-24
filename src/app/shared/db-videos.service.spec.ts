import { TestBed } from '@angular/core/testing';

import { DbVideosService } from './db-videos.service';

describe('DbVideosService', () => {
  let service: DbVideosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbVideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
