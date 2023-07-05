import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  url = environment.apiUrl + '/contacts';

  create(data: any) {
    return this.http.post(this.url, data);
  }
}
