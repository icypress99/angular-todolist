import { Component, Output } from '@angular/core';
import { TodoService } from './services/todo.service';
import { TODOInterface } from './models/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';

  constructor(private service: TodoService){}
  
  ngOnInit() : void{
    this.service.getContactForm().subscribe(Output=>{
      console.log(Output)
      this.todoLists = Output.lists
    })
  }

  TaskTitle: string = ""
  todoLists? : TODOInterface[]

  addTodo() : void{
    console.log("add todo clicked")
    console.log("title : " + this.TaskTitle)
  }

  edit(id : number) : void {

  }
  delete(id : number): void {

  }

  toggleDone(id: number): void{
    console.log(id)
  }
}
