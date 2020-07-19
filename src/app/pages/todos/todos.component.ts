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
  isOpenAddNewTask = false;
  taskName = '';
  isTaskDone = false;

  onOpenSidebar() {
    this.isOpenAddNewTask = !this.isOpenAddNewTask;
  }

  onAddTodo() {
    console.log(this.isTaskDone);
    console.log(this.taskName);

    const newTask: Partial<ITodo> = {
      userId: Math.floor(Math.random() * 5),
      title: this.taskName,
      completed: this.isTaskDone
    };


    this.todosService.createTodo(newTask).subscribe(
      data => {
        this.todos = [...this.todos, data];
      });

    this.taskName = '';
    this.isTaskDone = false;
    this.isOpenAddNewTask = false;
  }


  //edit task
  editedTaskName = '';
  editedTaskDone: boolean;
  editedTaskId: number;
  editedTaskUserId: number;

  isOpenEditTask = false;


  onEditTask(task: ITodo) {
    this.editedTaskName = task.title;
    this.editedTaskDone = task.completed;
    this.editedTaskId = task.id;
    this.editedTaskUserId = task.userId;

    this.isOpenEditTask = !this.isOpenEditTask;
  };


  onSaveTask() {

    const editedTask: ITodo = {
      userId: this.editedTaskUserId,
      id: this.editedTaskId,
      title: this.editedTaskName,
      completed: this.editedTaskDone
    };


    this.todosService.updateTodo(editedTask).subscribe((task: ITodo) => {

      const index = this.todos.findIndex(todo => todo.id === task.id);
      this.todos[index] = task;

    });


  }

  //delete

  deleteTodo(id: number) {
    this.todosService.deletePost(id).subscribe();
    this.todos = [...this.todos.filter(todo => todo.id !== id)];
  }
}
