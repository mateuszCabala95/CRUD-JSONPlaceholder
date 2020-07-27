import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './pages/posts/posts.component';

const routes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: 'posts', component: PostsComponent},
  {path: 'todos', loadChildren: () => import('./pages/todos/todos.module').then((todos) => todos.TodosModule)},
  {path: 'users', loadChildren: () => import('./pages/users/users.module').then((users) => users.UsersModule)},
  {path: '**', redirectTo: '/posts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
