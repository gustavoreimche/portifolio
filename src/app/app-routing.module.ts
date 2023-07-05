import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { SkillsComponent } from './views/skills/skills.component';
import { CoursesComponent } from './views/courses/courses.component';
import { ProjectsComponent } from './views/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'experiences',
    component: ExperienceComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: '*',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
