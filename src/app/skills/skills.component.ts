import { Component, OnInit ,ElementRef} from '@angular/core';
import {faAngular,faBootstrap,faJs,faNodeJs} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
 
})
export class SkillsComponent implements OnInit {
  faAngular=faAngular
  faBootstrap=faBootstrap
  faJs=faJs
  faNodeJs=faNodeJs
  skills=true
  skill=''
  icon=''
  a=true
  n=true
  j=true
  b=true
  arr=[]
  currentRate=3
  constructor(element:ElementRef) { }

  ngOnInit(){

  }
  node(){
    this.skills=false
    this.skill="Node JS"
    this.n=false
    this.arr.push('Built some basic projects like weather application using node JS')
    this.arr.push('Basic understanding of routing and other features and also ExpressJS')
    this.currentRate=2
  }
  javascript(){
    this.skills=false
    this.skill="JavaScript"
    this.j=false
    this.arr.push('Good understanding of features of ECMA script.')
    this.arr.push('Good understanding of promises, async,  and other features')
    this.arr.push('Decent knowledge on NPM, WebPack and Babel')
    this.currentRate=3
  }
  angular(){
    this.skills=false
    this.skill="Angular"
    this.a=false
    this.arr.push('Decent knowledge of features of Angular and its modular design.')
    this.arr.push('Good understanding of TypeScript.')
    this.currentRate=3
  }
  bootstrap(){
    this.skills=false
    this.skill="Bootstrap"
    this.b=false
    this.arr.push('Used Bootstrap in most of the designing part.')
    this.arr.push('Good understanding of bootstrap grid systems and another features')
    this.currentRate=3
  }

  skillClose(){
    this.a=true
    this.n=true
    this.j=true
    this.b=true
    this.skills=true
    this.arr=[]
  }
}

