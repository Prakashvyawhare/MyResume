import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path:'personalDetails',
    component:PersonalDetailsComponent
  },
  {
    path:'article',
    component: ArticleComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path: "education",
    component:EducationComponent
  },
  {
    path:"Skills",
    component:SkillsComponent
  },
  {
    path:"projects",
    component:ProjectsComponent
  },
  {
    path:"",
    redirectTo:"home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
