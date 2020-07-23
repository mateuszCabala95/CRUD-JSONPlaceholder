import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {IUser} from './IUser.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.getAllUsers();

  }

  getAllUsers(){
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  scrollToElement(): void {
    // const element = document.querySelector('.jumbotron');
    const element = document.querySelector('router-outlet')
    element.scrollIntoView(
      {
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
  }



}
