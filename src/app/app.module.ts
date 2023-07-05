import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/template/header/header.component';
import { FooterComponent } from './views/template/footer/footer.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { LogoComponent } from './components/logo/logo.component';
import { ContactMeButtonComponent } from './components/contact-me-button/contact-me-button.component';
import { HomeComponent } from './views/home/home.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { ContactComponent } from './views/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { ExperienceComponent } from './views/experience/experience.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SkillsComponent } from './views/skills/skills.component';
import { CoursesComponent } from './views/courses/courses.component';
import { ProjectsComponent } from './views/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    ContactMeButtonComponent,
    HomeComponent,
    ContactComponent,
    LoadingComponent,
    ExperienceComponent,
    SkillsComponent,
    CoursesComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgxTypedJsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
