import { TestBed } from '@angular/core/testing';

import { FifaDataService } from './fifa-data.service';

describe('FifaDataService', () => {
  let service: FifaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FifaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
