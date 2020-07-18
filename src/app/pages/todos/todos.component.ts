import {Component, OnInit} from '@angular/core';
import {ITodo} from './Todos.model';
import {TodosService} from './todos.service';
import {MatDialog} from '@angular/material/dialog';
import {MatFormFieldControl} from '@angular/material/form-field';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {


  todos: ITodo[];
  displayedColumns: string[] = ['id', 'title', 'completed', 'actions'];

  constructor(
    private todosService: TodosService,
  ) {
  }

  ngOnInit(): void {
    this.getAllTodos();
  }


  getAllTodos() {
    this.todosService.getAllTodos().subscribe(data => {
      this.todos = data;
    });
  }

  //add todos

  //delete

  deleteTodo(id: number){
    this.todosService.deletePost(id).subscribe();
    this.todos = [...this.todos.filter(todo => todo.id !== id)];
  }
}
