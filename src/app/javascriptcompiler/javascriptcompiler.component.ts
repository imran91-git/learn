import { Component ,Input,OnInit} from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-javascriptcompiler',
  imports: [],
  templateUrl: './javascriptcompiler.component.html',
  styleUrl: './javascriptcompiler.component.scss'
})
export class JavascriptcompilerComponent implements OnInit {
  //@Input page="";
constructor(private shared: SharedService){

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
