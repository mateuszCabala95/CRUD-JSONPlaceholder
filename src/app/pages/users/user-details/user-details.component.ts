import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser} from '../IUser.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  id: string;
  user: IUser;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUser();
  }
 getUser(){
    this.usersService.getSingleUser(Number(this.id)).subscribe(data => this.user = data)
 }

// parent function
  scrollToElement(): void {
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView(
      {
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
  }

}
