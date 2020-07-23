import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './users.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {AddUserComponent} from './add-user/add-user.component';


const routes: Routes = [
  {
    path: '', component: UsersComponent,
    children: [
      {path: 'add', component: AddUserComponent, pathMatch: 'full'},
      {path: ':id', component: UserDetailsComponent}
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// @ts-ignore
export class UsersRoutingModule {
}
