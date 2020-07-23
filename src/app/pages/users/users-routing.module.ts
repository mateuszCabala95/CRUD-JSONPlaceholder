import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users.component';
import {UserDetailsComponent} from './user-details/user-details.component';


const routes: Routes = [
  {path: '', component: UsersComponent,
    children: [
    {path:':id', component: UserDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// @ts-ignore
export class UsersRoutingModule { }
