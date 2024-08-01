import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  userName : string ="Rajkumar"
    mobileNo : string ="9956419878"
    isActive : boolean = false
    divProprty : string=""
    dataList : any =  [ {name: 'Item 1', description: 'This is item 1'},
    {name: 'Item 2', description: 'This is item 2'},
    {name: 'Item 3', description: 'This is item 3'}]
    constructor(){

    }

    updateName(){
      this.userName = "Ragini"
      this.mobileNo = "9889397150"
 
    }
    showNam(){
      this.divProprty ="text-danger"
    }

   
}
