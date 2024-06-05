import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  private baseURL = "/api";
  private pollUrl = this.baseURL + "/votes";
  constructor(private http: HttpClient) { }

  vote(data: any):  Observable<any> {
    return this.http.post(this.pollUrl, data);
  }
}
