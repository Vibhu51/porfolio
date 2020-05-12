import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  imports: [
    BrowserModule,NgbModule,FontAwesomeModule,BrowserAnimationsModule],
    bootstrap:[AppComponent],
  declarations: [
    AppComponent,
    NavbarComponent,
    SkillsComponent
  ],

})
export class AppModule { }
