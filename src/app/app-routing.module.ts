import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StorylistComponent } from './storylist/storylist.component';


const routes: Routes = [
  {path:'',redirectTo:'/storylist',pathMatch:'full'},
  {path:'storylist',component:StorylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
