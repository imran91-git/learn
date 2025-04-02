import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-stand',
  imports: [BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule],
  templateUrl: './stand.component.html',
  styleUrl: './stand.component.scss'
})
export class StandComponent {
  constructor(){
    
  }

}
