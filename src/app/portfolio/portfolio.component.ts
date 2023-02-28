import { Component, OnInit } from '@angular/core';
import { project } from '../services/project';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
portfolio=Array<project>()
  constructor( public ProjectsService:ProjectsService) { }

  ngOnInit(): void {
   this.portfolio= this.ProjectsService.projects
  }

}
