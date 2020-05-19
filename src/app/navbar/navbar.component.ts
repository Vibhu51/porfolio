import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 
import { faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faBars,faMailBulk,faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
 
})
export class NavbarComponent implements OnInit {
  faGithub=faGithub
  faBars=faBars
  faMailBulk=faMailBulk
  isNavbarCollapsed=true;
  faLinkedin=faLinkedin
  faArrowAltCircleDown=faArrowAltCircleDown
  constructor(config: NgbCarouselConfig) {  
    
  } 

  ngOnInit() {
  }

}
