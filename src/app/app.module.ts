import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';
import { SocialChannelsComponent } from './shared/social-channels/social-channels.component';
import { SectionTitleComponent } from './shared/section-title/section-title.component';
import { TimelineBlockComponent } from './shared/timeline-block/timeline-block.component';
import { WorkBlockComponent } from './shared/work-block/work-block.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { SchoolEducationComponent } from './components/school-education/school-education.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { PersonalProjectsComponent } from './components/personal-projects/personal-projects.component';
import { CircularProgressBarComponent } from './shared/circular-progress-bar/circular-progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SocialChannelsComponent,
    SectionTitleComponent,
    TimelineBlockComponent,
    WorkBlockComponent,
    HomeComponent,
    SchoolEducationComponent,
    WorkExperienceComponent,
    SidebarComponent,
    SkillsComponent,
    HobbyComponent,
    PersonalProjectsComponent,
    CircularProgressBarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
