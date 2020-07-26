import {Component, OnInit, DoCheck} from '@angular/core';
import {UsersService} from './users.service';
import {IUser} from './IUser.model';
import {NewUserService} from './new-user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, DoCheck{

  users: IUser[];

  constructor(
    private usersService: UsersService,
    private newUserService: NewUserService
  ) {
  }

  ngOnInit(): void {
    this.getAllUsers();

  }

  getAllUsers() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  scrollToElement(): void {
    const element = document.querySelector('router-outlet');
    element.scrollIntoView(
      {
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
  }




  addNewUser() {
    this.newUserService.currentUser.subscribe(newUser => [...this.users, newUser]);
  }

  ngDoCheck() {
    // this.addNewUser()
  }

}
