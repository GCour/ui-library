import { TestBed } from '@angular/core/testing';

import { UiServicesLibService } from './ui-services-lib.service';

describe('UiServicesLibService', () => {
  let service: UiServicesLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiServicesLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
