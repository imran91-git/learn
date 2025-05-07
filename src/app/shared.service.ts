import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  username=''
  private data = new BehaviorSubject<string>(''); // Holds data
  currentData = this.data.asObservable(); // Observable for components to subscribe

  sendData(newData: string) {
    this.data.next(newData); // Update data
  }
  private usernameSource = new BehaviorSubject<string>(''); // Holds username
  currentUsername = this.usernameSource.asObservable(); // Observable to listen for changes

  setUsername(name: string) {
    this.usernameSource.next(name); // Update username
  }
  private dataSource = new Subject<string>();
  data$ = this.dataSource.asObservable();

  sendDatatoSibling(data: string) {
    this.dataSource.next(data);
  }
}
