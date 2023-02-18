import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  constructor( public CandidateService:CandidateService) { }

  ngOnInit(): void {
  }

}
