import {Component, OnInit, ViewChild} from '@angular/core';
import {IPost} from './Post.model';
import {PostsService} from './posts.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {FormGroup, FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: IPost[] = [];

  constructor(
    private postsService: PostsService,
    private _snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postsService.getAllPosts().subscribe((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  //Pagination
  currentPageIndex = 0;
  pageSize = 25;

  handlePage(e: PageEvent) {
    this.currentPageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
  }

  // edit post
  postTitle = '';
  postBody = '';
  postUserId: number;
  postID: number;

getEditedPost(post:IPost){
  this.postTitle = post.title;
  this.postBody = post.body;
  this.postID = post.id;
  this.postUserId = post.userId;
}

onEditPost(){
  const editedPost = {
    userId: this.postUserId,
    id: this.postID,
    title: this.postTitle,
    body: this.postBody,
  }

  this.postsService.editPost(editedPost.id, editedPost);

  this._snackBar.open('Post edited', null,{
    duration: 2000
  });
  console.log('Post Edited');

}


//add post

  onAddPost(){
  const addPost ={
    title : this.postTitle,
    body: this.postBody,
    userId: Math.floor(Math.random()*5),
  }

  this.postsService.addPost(addPost).subscribe(data=> {
    this.posts = [...this.posts, data]
    this.postTitle = '';
    this.postBody = '';
    this.postUserId = null;
    this.postID = null;
  });
    this._snackBar.open('Post added', null,{
      duration: 2000
    });

    console.log('post added');

  }


  //delete post
  onPostDelete(id: number) {
    this.posts = [...this.posts.filter(post => post.id !== id)];
    this.postsService.deletePost(id).subscribe(data => {
      console.log(data);
    });
    this._snackBar.open('Post deleted', null,{
      duration: 2000
    });
  }

}

