import { Component ,OnInit, HostListener} from '@angular/core';
import * as AOS from 'aos'

import {trigger, state,style, transition, animate} from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('divstate',[
      state('normal',style({
        'opacity':1,
        //transform:'translateX(0)',
        'background-color':'skyblue'
      })),
      transition('void=>normal',[
        style({
          //'opacity':0,
          //transform:'translateX(-100px)'
          'background-color':'pink'
        }),
        animate(10000)
      ])
    ]
  )
  ]
})
export class AppComponent implements OnInit{
  isNavbarCollapsed=true;
  title = 'portfolio';
  state=null
ngOnInit(){
  AOS.init()
}
// @HostListener("document:scroll")
// scrollfunction(){
//   if(document.body.scrollTop>500 || document.documentElement.scrollTop>500){
//     this.state='normal'
//   }
//   else{
//     this.state=null 
//   }
// }
  constructor(){

  }

}