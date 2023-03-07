import { Component, Input, OnInit } from '@angular/core';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public CandidateService:CandidateService) { }
@Input() Title:string=""
  ngOnInit(): void {
  }

}
