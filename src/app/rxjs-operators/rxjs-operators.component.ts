import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, filter, from, map } from 'rxjs';
import { HighlightDirective } from '../highlight.directive';
import { ReactserviceService, UserResponse } from '../reactservice.service';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrl: './rxjs-operators.component.scss',
  imports: [FormsModule, CommonModule,HighlightDirective],
})
export class RxjsOperatorsComponent   implements OnInit {
  constructor(private reacservice:ReactserviceService){

  }
  listparts: { title: string; first: string }[] = [];
  ngOnInit(): void {
    console.log("onInt")
    this.saveupdate='ADD'
    this.renderdata()
   // console.log(this.reacservice.getname())
  }


  renderdata() {
    this.reacservice.getname().subscribe((data: UserResponse) => {  
      if (data?.results?.length) {
        const user = data.results[0].name;
        this.listparts.push({ title: user.title, first: user.first });
        console.log("Updated listparts:", this.listparts);
      }
    }, error => {
      console.error("Error fetching data:", error);
    });
  }
  
  
  
  index: any;
  saveupdate='ADD';
  delete(i: number) {
    this.listparts.splice(i,1);
  }

  
  edit(i: number) {
    //query the arrary by index
    //then asighn to the
    const data = this.listparts[i];
    this.first=data.first;
    this.title = i;
    this.index=i;
    this.saveupdate = 'Update';
  }
  update(arg1: any, arg2: any) {
    this.listparts[this.index].first = arg2;
    this, (this.listparts[this.index].title = arg2);
    this.saveupdate = 'ADD';
    this.clear();
  }
  first: any;
  title: any;
  
  //objectof array=array
  addpart(title: any, name: any) {
    const data = { title: title, first: name };
    this.listparts.push(data);
    this.clear();
  }
  clear() {
    this.first = '';
    this.title = '';
  }
  list = [1, 2, 3, 4];
  list2 = [1, 2, 3, 4];
  output: any = '';
  output1: any = '';
  myobservable = from(this.list);
  secondobservable = from(this.list);
  Rxjs() {
    this.myobservable.subscribe((val) => {
      this.output = val * 3;
      // window.alert('emiting the new value ');
      return this.output;
    });
  }
  rxjsFilter() {
    this.secondobservable.pipe(
      filter((val) => {
        // val >= 2;
        this.output1 = val >= 2;
        return val >= 2;
      })
    );
  }
  //transformthe data using pipe
  Ssecondobservable = this.secondobservable.pipe(
    map((val) => {
      this.output = val * 4;
      return val * 4;
    })
  );
  //filter
  Sdsecondobservable = this.secondobservable.pipe(
    filter((val) => {
      val >= 2;
      return val >= 2;
    })
  );
  Rxjsmap() {
    this.myobservable.subscribe((val) => {
      this.output = val * 3;
      window.alert('emiting the new value ');
      return this.output;
    });
  }
}
