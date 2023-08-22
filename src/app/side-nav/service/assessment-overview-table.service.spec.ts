import { TestBed } from '@angular/core/testing';

import { AssessmentOverviewTableService } from './assessment-overview-table.service';

describe('AssessmentOverviewTableService', () => {
  let service: AssessmentOverviewTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentOverviewTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
