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
  isOpenSidebar = false;
  taskName = '';
  isTaskDone = false;

  onLog(){
    console.log(this.isTaskDone);
  }

  onOpenSidebar() {
    this.isOpenSidebar = !this.isOpenSidebar;
  }

  onAddTodo(){
    console.log(this.isTaskDone);
    console.log(this.taskName);

    const newTask = {
      userId: Math.floor(Math.random() * 5),
      title:this.taskName,
      completed: this.isTaskDone
    }


    this.todosService.createTodo(newTask).subscribe(
      data => {
        // this.todos.push(data);
        // console.log(data);

        this.todos = [...this.todos, data]
      })

    this.taskName = '';
    this.isTaskDone = false;
    this.isOpenSidebar = false;
  }

  //delete

  deleteTodo(id: number) {
    this.todosService.deletePost(id).subscribe();
    this.todos = [...this.todos.filter(todo => todo.id !== id)];
  }
}
