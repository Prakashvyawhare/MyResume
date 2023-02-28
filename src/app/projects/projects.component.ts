import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectId:any;
  projects:any={}
  constructor(private ProjectsServiced:ProjectsService, private rout:ActivatedRoute) { }

  ngOnInit(): void {
    this.projectId=this.rout.snapshot.paramMap.get('id')
   this.projects= this.ProjectsServiced.getProjectbyId(this.projectId)
      
    
  }

}
