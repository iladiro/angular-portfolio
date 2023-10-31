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
import { NgChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './shared/doughnut-chart/doughnut-chart.component';

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
    DoughnutChartComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
