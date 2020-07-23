import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from './IUser.model';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class UsersService {

  constructor(
    private http: HttpClient,
  ) {
  }

  private USERS_URL = 'https://jsonplaceholder.typicode.com/users';

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.USERS_URL);
  }

  getSingleUser(id: number): Observable<IUser>{
   return this.http.get<IUser>(`${this.USERS_URL}/${id}`)
  }

  addUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.USERS_URL, user, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
  }


  editUser(user: Partial<IUser>): Observable<IUser> {
    return this.http.put<IUser>(`${this.USERS_URL}/${user.id}`,user,{
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  }

  deleteUser(id: number): Observable<{}>{
    return this.http.delete<{}>(`${this.USERS_URL}/${id}`)
  }

}
