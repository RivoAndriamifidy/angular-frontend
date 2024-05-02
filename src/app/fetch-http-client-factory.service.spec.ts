import { TestBed } from '@angular/core/testing';

import { FetchHttpClientFactoryService } from './fetch-http-client-factory.service';

describe('FetchHttpClientFactoryService', () => {
  let service: FetchHttpClientFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchHttpClientFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
