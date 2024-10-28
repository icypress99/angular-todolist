import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { TODOListsResponse } from '../models/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  api: string = "https://mytodo-test.free.beeceptor.com/todos"

  constructor(private http : HttpClient) { }

  getContactForm(): Observable<TODOListsResponse>{
    return this.http.get(this.api) as Observable<TODOListsResponse>
  }
}
