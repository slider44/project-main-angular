import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { CvComponent } from './modules/cv/cv.component';
import { SkillsComponent } from './modules/skills/skills.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home' , component: HomeComponent, data: { page: 'home' }},
  {path: 'about' , component: AboutComponent, 
      children: [{
        path: 'cv',
        component: CvComponent
      },{
        path: 'skills',
        component: SkillsComponent
      } ],
      data: { page: 'about' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
