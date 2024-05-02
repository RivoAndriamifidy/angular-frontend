import { Injectable } from '@angular/core';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchHttpClientFactory {
  create(): HttpClient {
    const httpBackend = new HttpXhrBackend({ build: () => new XMLHttpRequest() });
    return new HttpClient(httpBackend);
  }
}
