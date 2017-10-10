import { TestBed, inject } from '@angular/core/testing';

import { ResultholderService } from './resultholder.service';

describe('ResultholderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultholderService]
    });
  });

  it('should be created', inject([ResultholderService], (service: ResultholderService) => {
    expect(service).toBeTruthy();
  }));
});
