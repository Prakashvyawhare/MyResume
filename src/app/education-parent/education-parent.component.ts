import { Component, Input, OnInit } from '@angular/core';
import { Education } from '../education/education';

@Component({
  selector: 'app-education-parent',
  templateUrl: './education-parent.component.html',
  styleUrls: ['./education-parent.component.css']
})
export class EducationParentComponent implements OnInit {

  constructor() { }
 @Input() classes:any
  ngOnInit(): void {
  }

}
