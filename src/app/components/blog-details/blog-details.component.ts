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

  constructor(
    private blogService: BlogsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getBlog(this.route.snapshot.paramMap.get('id'));
  }

  getBlog(id:any):void {
    this.blogService.get(id)
    .subscribe(
      data => {
        this.blog=data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
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