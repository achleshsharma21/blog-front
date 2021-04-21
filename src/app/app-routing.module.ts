import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
 
const routes: Routes = [
  { path: 'blogs', component: BlogListComponent},
  { path: 'blogs/:id', component: BlogDetailsComponent},
  { path: 'add', component: AddBlogComponent},
  { path: 'edit/:id', component: EditBlogComponent},
  { path: '', redirectTo: 'blogs', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
