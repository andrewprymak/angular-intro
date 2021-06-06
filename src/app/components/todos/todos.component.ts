import { Component, OnInit } from '@angular/core';
import {Todo} from './../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!:Todo[];
  inputTitle:string = "";
  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        title: 'First record',
        content: 'My angular blog',
        completed: false
      },
      {
        title: 'Second record',
        content: 'My first angular app',
        completed: false
      }
    ]
  }
  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if(i == id) v.completed = !v.completed;

      return v;
    })
  }
  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) =>
      i !== id
    )
  }
  addTodo () {
    this.todos.push({
      title:this.inputTitle,
      content:this.inputTodo,
      completed:false
    });
    this.inputTitle = ""
    this.inputTodo = ""
  }

}
