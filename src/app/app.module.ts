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
import { WorkBlockComponent } from './components/personal-projects/work-block/work-block.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { SchoolEducationComponent } from './components/school-education/school-education.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { PersonalProjectsComponent } from './components/personal-projects/personal-projects.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { CurriculumBlockComponent } from './components/curriculum/curriculum-block/curriculum-block.component';
import { CurriculumItemComponent } from './components/curriculum/curriculum-block/curriculum-item/curriculum-item.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ProjectDetailsComponent } from './components/personal-projects/project-details/project-details.component';
import { OutdoorComponent } from './views/outdoor/outdoor.component';
import { OutdoorGalleryComponent } from './components/outdoor-gallery/outdoor-gallery.component';
import { OutdoorGalleryItemComponent } from './components/outdoor-gallery/outdoor-gallery-item/outdoor-gallery-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { HobbyItemComponent } from './components/hobby/hobby-item/hobby-item.component';
import { IladiroCounterModule } from '@iladiro/angular-counter';
import { DemoComponent } from './views/demo/demo.component';
import { IladiroAngularSliderLibraryModule } from '@iladiro/angular-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IladiroAngularMaterialTableLibraryModule } from '@iladiro/angular-material-table-library';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { JavascriptDocComponent } from './components/tutorials/javascript-doc/javascript-doc.component';
import { VariabiliInJavascriptComponent } from './components/tutorials/javascript-doc/variabili-in-javascript/variabili-in-javascript.component';
import { ThisInJavascriptComponent } from './components/tutorials/javascript-doc/this-in-javascript/this-in-javascript.component';

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
    CurriculumComponent,
    CurriculumBlockComponent,
    CurriculumItemComponent,
    ModalComponent,
    ProjectDetailsComponent,
    OutdoorComponent,
    OutdoorGalleryComponent,
    OutdoorGalleryItemComponent,
    CarouselComponent,
    HobbyItemComponent,
    DemoComponent,
    TutorialsComponent,
    JavascriptDocComponent,
    VariabiliInJavascriptComponent,
    ThisInJavascriptComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    IladiroCounterModule,
    IladiroAngularSliderLibraryModule,
    IladiroAngularMaterialTableLibraryModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
