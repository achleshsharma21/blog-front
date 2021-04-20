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
    this.blogService.create(this.blog)
    .subscribe(
      data => console.log('Success!', data),
      error => console.error('Error!',error)
    )
  }
}
