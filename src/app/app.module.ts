import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { RouterModule } from '@angular/router';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBlogComponent,
    BlogDetailsComponent,
    BlogListComponent,
    EditBlogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
