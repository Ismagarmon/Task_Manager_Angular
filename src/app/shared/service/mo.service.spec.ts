import { TestBed } from '@angular/core/testing';

import { MOService } from './mo.service';

describe('MOService', () => {
  let service: MOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
