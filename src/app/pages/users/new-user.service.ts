import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IUser} from './IUser.model';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor() { }

  private newUser = new BehaviorSubject({});
  currentUser = this.newUser.asObservable();


  // tslint:disable-next-line:typedef
  addUser(user: Partial<IUser>){
    this.newUser.next(user);
  }
}
