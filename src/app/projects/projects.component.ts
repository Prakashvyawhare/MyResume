import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  seemore1=false;
  seemore2=false;
  ngOnInit(): void {
  }

onClick(){
  this.seemore1=true;
}
onCancel(){
  this.seemore1=false; 
}
}
