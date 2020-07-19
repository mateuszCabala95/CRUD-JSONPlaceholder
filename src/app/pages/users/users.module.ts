import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class UsersModule { }
