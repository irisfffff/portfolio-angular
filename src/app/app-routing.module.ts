import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'project', component: ProjectDetailComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
