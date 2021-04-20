import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
 
const routes: Routes = [
  { path: 'blogs', component: BlogListComponent},
  { path: 'blogs/:id', component: BlogDetailsComponent},
  { path: 'add', component: AddBlogComponent},
  { path: '', redirectTo: 'blogs', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
