import { Component, OnInit } from '@angular/core';
import {BlogsService} from 'src/app/services/blogs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IBlog } from '../blog.model';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  blog: any;
  currentBlog=null;

  constructor(
    private blogService: BlogsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.blogService.get(this.route.snapshot.paramMap.get('id')).subscribe(
      data => { this.blog=data; },
      error => {
              console.log(error);
            });
    console.log(this.blog);
  }
  
  likeBlog():void {
    this.blogService.like(this.route.snapshot.paramMap.get('id'), this.blog)
    .subscribe(
      response => console.log(response),
      error=>console.error(error)
    )};

  deleteBlog():void {
    this.blogService.delete(this.route.snapshot.paramMap.get('id'))
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/blogs']);
      },
      error => {
        console.log(error);
      });
  }

}