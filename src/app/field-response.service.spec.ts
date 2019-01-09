import { TestBed } from '@angular/core/testing';

import { FieldResponseService } from './field-response.service';

describe('FieldResponseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FieldResponseService = TestBed.get(FieldResponseService);
    expect(service).toBeTruthy();
  });
});
