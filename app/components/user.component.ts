import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
 
@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: `user.component.html`,
  providers: [PostsService]
})

export class UserComponent{
  name: string ;
  email: string ;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService){
      this.name = 'John Doe';
      this.email = 'johny@angular.com';
      this.address = {
        street: '12 Main Street',
        city: 'Boston',
        state: 'MA'
      }
      this.hobbies = ['Music', 'Movies', 'Sports'];
      this.showHobbies = false;

      this.postsService.getPosts().subscribe(posts => {
       this.posts = posts;
      });
  }

  ToggleHobbies(){
    if(this.showHobbies){
      this.showHobbies = false;
    }else{
      this.showHobbies = true;
    }
  }

  addHobby(hobby:any){
    this.hobbies.push(hobby);
  }

  deleteHobby(i:any){
    this.hobbies.splice(i,1);
  }

}

  interface Post {
    id: number;
    title: string;
    body: string;
  };
  
  interface address{
    street: string;
    city: string;
    state: string;
  };
