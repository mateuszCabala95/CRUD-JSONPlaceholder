import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { UserDetailsComponent } from './user-details/user-details.component';
import {MatDividerModule} from '@angular/material/divider';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [UsersComponent, UserDetailsComponent, AddUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
  ]
})
export class UsersModule { }
