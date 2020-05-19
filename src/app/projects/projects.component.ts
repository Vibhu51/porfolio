import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
projects=[{
  title:"First portfolio using Angular",
  link:" https://portfolio2-bfbab.web.app",
  rating:3
},{
  title:"Weather Application using NodeJS.",
  link:"https://drogo-weather-application.herokuapp.com/",
  rating:1.5
},{
  title:"To-do-Application using JavaScript",
  link:"https://gifted-shirley-40b6c8.netlify.com/",
  rating:2.5
},]
  constructor() { }

  ngOnInit(): void {
  }

}
