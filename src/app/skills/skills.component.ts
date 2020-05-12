import { Component, OnInit ,ElementRef} from '@angular/core';
import {trigger, state,style, transition, animate} from '@angular/animations'
import {faCogs,faQuoteLeft,faQuoteRight,faBirthdayCake,
  faCalendar,faSchool,faUniversity,faBriefcase,
  faLocationArrow,faClock,faBusinessTime,faTty,
  faHeart,faChalkboardTeacher,faTicketAlt,faRoute} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations:[
    trigger('divstate',[
      state('normal',style({
        'opacity':1,
        transform:'translateX(0)'
      })),
      transition('void=>normal',[
        style({
          'opacity':0,
          transform:'translateX(-100px)'
        }),
        animate(700)
      ])
    ]
  )
  ]
})
export class SkillsComponent implements OnInit {
  faCogs = faCogs
  faQuoteLeft=faQuoteLeft;faQuoteRight=faQuoteRight;faBirthdayCake=faBirthdayCake
  faCalendar=faCalendar
  faSchool=faSchool
  faUniversity=faUniversity
  faBriefcase=faBriefcase
  faLocationArrow=faLocationArrow
  faBusinessTime=faBusinessTime
  faChalkboardTeacher=faChalkboardTeacher
  faRoute=faRoute
  faTicketAlt=faTicketAlt
  faHeart=faHeart
  faClock=faClock
  faTty=faTty
  birthday=false
  school1=false
  work=false
  hobbies=false
  state=null
  constructor(element:ElementRef) { }

  ngOnInit(): void {
  }
bday(){
  this.birthday== false?this.birthday=true:this.birthday=false
  setTimeout(()=>{
    window.scrollTo(0,document.body.clientHeight);
  },200)
  // scrollToBottom();
  this.state='normal'
}

school(){
  this.school1== false?this.school1=true:this.school1=false
  setTimeout(()=>{
    window.scrollTo(0,document.body.clientHeight);
  },200)
  this.state='normal'
}
corporate(){
  this.work== false?this.work=true:this.work=false
  setTimeout(()=>{
    window.scrollTo(0,document.body.clientHeight);
  },200)
  this.state='normal'
}

end(){
  this.hobbies== false?this.hobbies=true:this.hobbies=false
  setTimeout(()=>{
    window.scrollTo(0,document.body.clientHeight);
  },200)
  this.state='normal'
}

packup(){
  
  this.birthday=false
  this.school1=false
  this.work=false
  this.hobbies=false
  this.state=null
  
}
}
