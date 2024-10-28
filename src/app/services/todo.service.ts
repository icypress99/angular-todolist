import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { TODOInterface, TODOListsResponse, UpdateTODOResponse } from '../models/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  api_getList: string = "https://mytodo-test.free.beeceptor.com/todos"

  constructor(private http : HttpClient) { }

  getTodoList(): Observable<TODOListsResponse>{
    return this.http.get(this.api_getList) as Observable<TODOListsResponse>
  }

  api_update: string = "https://mytodo-test.free.beeceptor.com/api/updateTODO"

  
  updateTodo(item : TODOInterface): Observable<UpdateTODOResponse>{
    return this.http.post(this.api_update , item) as Observable<UpdateTODOResponse>
  }

}
