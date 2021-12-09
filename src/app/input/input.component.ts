import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  // add task
  list: any[] = [];
  addTask(item:string){
  this.list.push({id:this.list.length,name:item});
  }

  // remove task
  removeTask(id:number){
    this.list = this.list.filter(item=>(item.id != id));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
