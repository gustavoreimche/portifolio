import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should send a POST request to the API', () => {
    const testData = { name: 'John Doe', email: 'johndoe@example.com' };

    service.create(testData).subscribe((response) => {
      expect(response).toBeTruthy();
      // Add more expectations based on your API response
    });

    const request = httpMock.expectOne(service.url);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(testData);

    request.flush({}); // Mock empty response
  });
});
