import { TestBed, inject } from '@angular/core/testing';

import { FligthService } from './fligth.service';

describe('FligthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FligthService]
    });
  });

  it('should be created', inject([FligthService], (service: FligthService) => {
    expect(service).toBeTruthy();
  }));
});
