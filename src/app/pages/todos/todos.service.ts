import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ITodo} from './Todos.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class TodosService {

  constructor(private http: HttpClient) {
  }

  private TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

  getAllTodos(): Observable<ITodo[]> {
   return this.http.get<ITodo[]>(this.TODOS_URL);
  }

  createTodo(todo: Partial<ITodo>){
    return this.http.post<ITodo>(this.TODOS_URL, todo, {
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }

  updateTodo(todo:ITodo){
   return this.http.put(this.TODOS_URL, todo, {
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }

  deletePost(id: number): Observable<object>{
   return this.http.delete<object>(`${this.TODOS_URL}/${id}`,)
  }

}
