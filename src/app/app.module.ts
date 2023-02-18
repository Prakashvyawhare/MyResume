import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { NavComponent } from './nav/nav.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { EducationParentComponent } from './education-parent/education-parent.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    NavComponent,
    PersonalDetailsComponent,
    HomeComponent,
    EducationComponent,
    EducationParentComponent,
    SkillsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
