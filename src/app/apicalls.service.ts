import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallsService {
  private BASE_URL = 'https://jsonplaceholder.typicode.com'; // Free API
  constructor(private http: HttpClient) { }


  getUsers():Observable<any[]>{
    return this.http.get<any[]>(`${this.BASE_URL}/users`);
  }
 
  updateUser(userId: number, userData: any): Observable<any> {
    return this.http.put<any>(`${this.BASE_URL}/users/${userId}`, userData);
  }
  DeleteUser(userId: number): Observable<any> {
    //return this.http.put<any>(`${this.BASE_URL}/users/${userId}`, userData);
    console.log(userId)
    return this.http.delete<any>(`${this.BASE_URL}/users/${userId}`);
  }
}
