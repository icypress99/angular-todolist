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
    this.service.getTodoList().subscribe(Output=>{
      console.log(Output)
      this.todoLists = Output.lists
    })
  }

  TaskTitle: string = ""
  todoLists: TODOInterface[] = []

  addTodo() : void{
    console.log("add todo clicked")
    console.log("title : " + this.TaskTitle)

    let newTodo: TODOInterface = {
      id: 0,
      title: this.TaskTitle,
      done: false
    }

    this.service.AddTodo(newTodo).subscribe(Output=>{
      if(Output.isSuccess){
        newTodo.id = Output.id
        this.todoLists.push(newTodo)
        this.TaskTitle = ""
      }
    })


  }

  edit(id : number) : void {

  }
  delete(id : number): void {
    this.service.deleteTodo(id).subscribe(Output=>{
      if(Output.isSuccess){
        this.todoLists = this.todoLists.filter(todo => todo.id = id)
      }
    })
  }

  toggleDone(id: number): void{
    console.log(id)
    let item = this.todoLists.find(todo => todo.id === id);
    console.log(item)
    if(item){
      let storePrevStatus = item.done;
      item.done = ! item.done

      this.service.updateTodo(item).subscribe(Output=>{
        console.log(Output)
        if(Output.isSuccess){
          console.log(Output.message)
        }else{
          if(item)
            item.done = storePrevStatus
          console.log("error")
        }
        
      })
    }
  }
}
