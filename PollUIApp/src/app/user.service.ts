import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "/api";
  private loginUrl = this.baseURL + "/users/login";
  private registerUrl = this.baseURL + "/users/register";
  
  loggedInUser =  new BehaviorSubject("");

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any>{
    return this.http.post(this.loginUrl, data);
  }

  registerUsr(data: any): Observable<any>{
    return this.http.post(this.registerUrl, data);
  }

  getLoggedInUser() {
    return this.loggedInUser;
  }

  setLoggedInUser(username: string) {
    this.loggedInUser.next(username);
  }
}
