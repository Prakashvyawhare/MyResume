import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  technicalSkills=["Angular", "HTML", "CSS", "javascript"];
  personalSkills=["Ability to cope up with different situations"," Ability to rapidly build relationship and set up trust.", "Team Work","Problem solving"];
  language=["English","Hindi","Marathi"]
  constructor() { }

  ngOnInit(): void {
  }

}
