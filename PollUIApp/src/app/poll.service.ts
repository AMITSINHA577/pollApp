import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Poll } from './polls.type';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  private baseURL = "/api";
  private pollUrl = this.baseURL + "/polls";
  private updatePoll =  new BehaviorSubject("update");

  constructor(private http: HttpClient) { }

  createPoll(data: any): Observable<any> {
    return this.http.post(this.pollUrl, data);
  }

  getPolls(): Observable<Poll[]> {
    return this.http.get(this.pollUrl).pipe(
      map(res => res as Poll[])
    );
  }

  getResult(id: number): Observable<any>{
    const resultUrl = this.pollUrl + "/" + id + "/results";
    return this.http.get(resultUrl);
  }

  refreshPoll() {
    return this.updatePoll;
  }
  
  updatePolls() {
    this.updatePoll.next("update");
  }
}
