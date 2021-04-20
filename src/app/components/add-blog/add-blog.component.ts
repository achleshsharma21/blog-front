import { Component, OnInit } from '@angular/core';
import {BlogsService} from 'src/app/services/blogs.service'

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  blog = {
    title: '',
    category: '',
    content: ''
  };

  constructor(private blogService: BlogsService) { }

  ngOnInit(): void {
  }

  saveBlog(): void {
    const data = {
      title: this.blog.title,
      categoty: this.blog.category,
      content: this.blog.content
    };
    this.blogService.create(data)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

}
