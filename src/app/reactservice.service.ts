import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// ✅ Define `UserResponse` OUTSIDE the service class
export interface UserResponse {
  results: { name: { title: string; first: string } }[];
}

@Injectable({
  providedIn: 'root'
})
export class ReactserviceService {
  private url = "https://randomuser.me/api/";

  constructor(private http: HttpClient) { }

  getname(): Observable<UserResponse> {  // ✅ Correctly typed
    return this.http.get<UserResponse>(this.url);
  }
}
