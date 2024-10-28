import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  TaskTitle: string = ""
  
  addTodo(){
    console.log("add todo clicked")
    console.log("title : " + this.TaskTitle)
  }
}
