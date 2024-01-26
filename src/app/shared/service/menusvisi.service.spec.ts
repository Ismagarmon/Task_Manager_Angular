import { TestBed } from '@angular/core/testing';

import { MenusvisiService } from './menusvisi.service';

describe('MenusvisiService', () => {
  let service: MenusvisiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenusvisiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
