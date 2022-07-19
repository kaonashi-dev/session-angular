import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders();
  }

  get(segment: string): Observable<any> {
    return this.http.get(`${environment.apiurl}${segment}`);
  }

  post(segment: string, data: object): Observable<any> {
    return this.http.post(
      `${environment.apiurl}${segment}`,
      JSON.stringify(data),
      { headers: this.header }
    );
  }
}
