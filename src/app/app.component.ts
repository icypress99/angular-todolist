import { Component, Output } from '@angular/core';
import { TodoService } from './services/todo.service';

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
      console.log(Output.lists)
    })
  }

  TaskTitle: string = ""
  
  addTodo(){
    console.log("add todo clicked")
    console.log("title : " + this.TaskTitle)
  }
}
