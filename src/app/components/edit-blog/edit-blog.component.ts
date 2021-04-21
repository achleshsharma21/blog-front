import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {BlogsService} from 'src/app/services/blogs.service'

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  blog = {
    title: '',
    category: '',
    content: ''
  };

  constructor(
    private blogService: BlogsService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.blogService.get(this.route.snapshot.paramMap.get('id')).subscribe(blog => this.blog=blog) 
  }
  updateBlog():void {
    this.blogService.update(this.route.snapshot.paramMap.get('id'), this.blog)
    .subscribe(
      response => {
        console.log('Success',response);
      },
      error => console.error('Error',error)
    )};
}
