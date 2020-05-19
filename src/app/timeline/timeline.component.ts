import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  timeLine = [
  { year: '1996', detail: 'Birthday!', place: 'Jabalpur, Madhya Pradesh(M.P.)' ,date:new Date(1996,1,11,0,0,0)},
  { year: '2012', detail: 'High school', place: 'Christ Church Senior School for Boys and Girls, Civil Lines , Jabalpur (M.P.)',date:new Date(2012,5) },
  { year: '2014', detail: 'Senior secondary school',place:'Christ Church Senior School for Boys and Girls, Civil Lines , Jabalpur (M.P.)' ,date:new Date(2014,5)},
  { year: '2018', detail: "Engineering Graduate", place: 'Hitkarini College of Engineering & Technology (R.G.P.V.), Dumna Hills Jabalpur (M.P.).',date:new Date(2018,5) },
  { year: '2018', detail: "Project Engineer at Wipro Technologies", place: 'Navi Mumbai',date:new Date(2018,8) }
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
