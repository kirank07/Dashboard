import { TestBed } from '@angular/core/testing';

import { RevenueSummaryService } from './revenue-summary.service';

describe('RevenueSummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RevenueSummaryService = TestBed.get(RevenueSummaryService);
    expect(service).toBeTruthy();
  });
});
