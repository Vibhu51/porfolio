import { Component } from '@angular/core';
import { faPhone,faMailBulk,faCogs ,faCameraRetro,faLaptopCode,faBriefcase,faUserClock,faStreetView} from '@fortawesome/free-solid-svg-icons';
import {faLinkedinIn ,faAngular,faHtml5,faJs,faBootstrap} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isNavbarCollapsed=true;
  title = 'portfolio';
  faMailBulk = faMailBulk
  faPhone = faPhone
  faLinkedinIn = faLinkedinIn
  faCogs=faCogs
  faCode=faLaptopCode
  faAngular=faAngular
  faHtml5=faHtml5
  faJs=faJs
  faBootstrap=faBootstrap
  faBriefcase=faBriefcase
  faUserclock=faUserClock
  faStreetView=faStreetView
  faCameraRetro=faCameraRetro
}