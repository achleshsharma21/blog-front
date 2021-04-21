import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {BlogsService} from 'src/app/services/blogs.service'
import { IBlog } from '../blog.model';

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
  submitted = false
  constructor(private blogService: BlogsService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveBlog(): void {
    this.blogService.create(this.blog)
    .subscribe(
      data => 
      {
        this.submitted=true;
        console.log('Success!', data)
        console.log(this.submitted)
      },
      error => console.error('Error!',error)
    )
  };
  
    //console.log(this.blog)
}
