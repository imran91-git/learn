import { Component, Input, OnInit, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import { ApicallsService } from '../apicalls.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.scss',
  imports: [FormsModule, CommonModule],
  standalone: true,
})
export class LearnComponent implements OnInit {
  myList: { name: string; email: string }[] = [];
  email: any;
  name: any;
  save = 'Save';
  editindex: any;
  @Input() curd=false;

  selectedFile!: File;
  imageUrl: string | null = null;
  
  constructor() {}
  ngOnInit(): void {
    this.save = 'Save';
    this.imageUrl = localStorage.getItem('savedImage');
  //  this.fetchUsers();
  }
  // fetchUsers() {
  //   this.apiservice.getUsers().subscribe((data) => {
  //     this.myList = data;
  //   });
  // }
  onsave(name: string, email: string) {
    if (name && email) {
      const data = { name: name, email: email };

      this.myList.push(data);
    } else {
    }

    this.onclear();
  }

  onedit(index: any) {
    this.save = 'Update';
    const user = this.myList[index];
    this.name = user.name;
    this.email = user.email;
    this.editindex = index;
  }
  onupdate(editindex: any, name: string, email: string) {
    const user = this.myList[editindex];
    user.name = name;
    user.email = email;
  //  // this.apiservice.updateUser(editindex, user).subscribe((data) => {
  //     this.myList = data;
  //   });
    // this.(editindex,user)
    this.myList[editindex] = user;

    this.onclear();
    this.email;
  }

  ondelete(editindex: number) {
    console.log(editindex);
    //this.myList.splice(editindex,1);
    this.myList = this.myList.filter((user, index) => index !== editindex);
  }
  onclear() {
    this.email = '';
    this.name = '';
    this.save = 'Save';
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    // Convert image to Base64
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  onSave() {
    if (this.imageUrl) {
      localStorage.setItem('savedImage', this.imageUrl); // ✅ Save image in Local Storage
      alert('Image saved locally!');
    }
  }
  
  clearOn() {
    if (this.imageUrl) {
      localStorage.removeItem('savedImage'); // ✅ Remove saved image
  this.imageUrl = null; // ✅ Clear from UI
    }
  }
}
