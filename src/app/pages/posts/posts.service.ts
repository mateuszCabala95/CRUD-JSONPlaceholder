import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPost} from './Post.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class PostsService {

  constructor(
    private http: HttpClient
  ) {
  }

  private POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';


  getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.POSTS_URL);
  }

  getSinglePost(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.POSTS_URL}/${id}`);
  }

  addPost(post: Partial<IPost>): Observable<IPost>{
    return this.http.post<IPost>(this.POSTS_URL, post)
  }

  editPost(id: number, post: IPost): Observable<IPost>{
    return this.http.put<IPost>(`${this.POSTS_URL}/${id}`, post,{
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }

  deletePost(id: number): Observable<object>{
    return this.http.delete<object>(`${this.POSTS_URL}/${id}`)
  }

}
