import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, concat, concatMap, delay, exhaustMap, filter, forkJoin, from, map, mergeMap, of, switchAll, switchMap } from 'rxjs';
import { HighlightDirective } from '../highlight.directive';
import { ReactserviceService, UserResponse } from '../reactservice.service';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrl: './rxjs-operators.component.scss',
  imports: [FormsModule, CommonModule, HighlightDirective],
})
export class RxjsOperatorsComponent implements OnInit {
  constructor(private reacservice: ReactserviceService) {

  }
  listparts: { title: string; first: string }[] = [];
  ngOnInit(): void {
    console.log("onInt")
    this.saveupdate = 'ADD'
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
  saveupdate = 'ADD';
  delete(i: number) {
    this.listparts.splice(i, 1);
  }


  edit(i: number) {
    //query the arrary by index
    //then asighn to the
    const data = this.listparts[i];
    this.first = data.first;
    this.title = i;
    this.index = i;
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
    //trandsform the array elements
    [1, 2, 2].map(a => console.log("map", a + 1));
    //  filter the array based on condition
    [2, 3, 4].filter(a => console.log("filter", a < 4));


    this.myobservable.subscribe((val) => {
      this.output = val * 3;
      // window.alert('emiting the new value ');
      return this.output;
    });
  }

  ObservableOneLists = from([1, 2, 3, 4]) ;
 
ibservales(){
  const result = this.ObservableOneLists.subscribe((val: any) => {
    
    console.log('Received:', val); // logs 1, then 2, then 3, then 4
  });
  const results = this.ObservableOneLists.subscribe((val: any) => {
    
    console.log('Received:', val); // logs 1, then 2, then 3, then 4
  });

  this.ObservableOneLists.pipe(
    switchMap(val => {
      return of(`Processed ${val}`).pipe(delay(1000));
    })
  ).subscribe(result  => {
    console.log(console.log("switchMap Cancels previous inner observable and switches to the latest o", result ))
  });
  this.ObservableOneLists.pipe(concatMap(val=>{
    return of(`Processed ${val}`).pipe(delay(1000));
  })).subscribe(result=>{
    console.log("concatmap Queues and executes one inner observable after another",result)
  })
this.ObservableOneLists.pipe(exhaustMap(val=>{
  console.log("exhaustMap",val)
return of(val);
})).subscribe(result=>{
  console.log("exhaustmap Ignores new emissions while one is already in progress",result)
})
//this.ObservableOneLists.pipe(forkJoin)

this.ObservableOneLists.pipe(
  mergeMap(val => {
    console.log(`[mergeMap] source emitted: ${val}`);
    return of( val)
  })
).subscribe(res => {
  console.log(`[mergeMap] Runs all inner observables in parallel: ${res}`);
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
  Rxjsmaps() {
    this.myobservable.subscribe((val) => {
      this.output = val * 3;
      window.alert('emiting the new value ');
      return this.output;
    });
  }
  Rxjsmap() {

    this.myobservable.subscribe((val) => {
      this.output = val * 3;
      window.alert('emiting the new value ');
      return this.output;
    });
  }
}
