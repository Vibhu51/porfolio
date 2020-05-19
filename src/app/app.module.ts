import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router'
import { VerticalTimelineModule } from 'angular-vertical-timeline';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { from } from 'rxjs';
import { NameComponent } from './name/name.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  imports: [
    BrowserModule,NgbModule,FontAwesomeModule,BrowserAnimationsModule,RouterModule,VerticalTimelineModule],
    bootstrap:[AppComponent],
  declarations: [
    AppComponent,
    NavbarComponent,
    SkillsComponent,
    ProjectsComponent,
    NameComponent,
    TimelineComponent
  ],

})
export class AppModule { }
