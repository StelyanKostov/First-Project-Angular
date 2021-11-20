import { TestBed } from '@angular/core/testing';

import { StarsImagesFirebaseService } from './firebase.service';

describe('FirebaseService', () => {
  let service: StarsImagesFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarsImagesFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
