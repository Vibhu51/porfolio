import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 
import {trigger, state,style, transition, animate} from '@angular/animations'
import {  faCogs , faCameraRetro, faBriefcase, faFileContract,faQuoteLeft,faQuoteRight,} from '@fortawesome/free-solid-svg-icons';
import {faGithub,faLinkedinIn ,faAngular,faHtml5,faJs,faBootstrap,faMailchimp} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations:[
    trigger('divstate',[
      state('normal',style({
        'opacity':1,
        transform:'translateY(0)'
      })),
      transition('void=>normal',[
        style({
          'opacity':0,
          transform:'translateY(100px)'
        }),
        animate(700)
      ])
    ]
  )
  ]
})
export class NavbarComponent implements OnInit {
  faCogs = faCogs
  faCameraRetro = faCameraRetro
  faMailchimp=faMailchimp
  faBriefcase= faBriefcase
  faFileContract=faFileContract
  faAngular=faAngular
  faHtml5=faHtml5
  faJs=faJs
  faBootstrap=faBootstrap
  faQuoteLeft=faQuoteLeft
  faLinkedinIn=faLinkedinIn
  faQuoteRight=faQuoteRight
  faGithub=faGithub
  isNavbarCollapsed= true
  state=null
  constructor(config: NgbCarouselConfig) {  
    config.interval = 6000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
    this.state="normal"
  } 

  ngOnInit() {
  }

}
