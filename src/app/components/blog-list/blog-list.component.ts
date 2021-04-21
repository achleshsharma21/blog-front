import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs: any;
  currentBlog = null;

  constructor(
    private blogService: BlogsService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.retrieveBlogs();
  }

  retrieveBlogs():void {
    this.blogService.getAll()
    .subscribe(
      data => {
        this.blogs=data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
