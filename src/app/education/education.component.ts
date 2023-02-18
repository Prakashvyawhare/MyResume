import { Component, OnInit } from '@angular/core';
import { Education } from './education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  BE={}
  education=new Array<Education>()
  Be = new Education("B.E.","Parvatibai Genba moze College Of Engineering","9.3 CGPA",2022,"Mechanical Engineering");
  constructor() { 
    let Be= new Education("B.E.","Genba Sopanroa Moze Trust's Parvatibai Genba Moze College of Engineering, Pune","9.3 CGPA",2022,"Mechanical Engineering");
    let Diploma= new Education("Diploma","CSMSS College of polytechnic, Aurangabad","69.47%",2018,"Mechanical Engineering")
    let X=new Education("Xth/SSC","Shri ganesh vidyalaya gajgaon, gangapur, Aurangabad","86%",2015)
    this.education.push(Be,Diploma,X)
  }
  
  ngOnInit() {
    return this.BE= this.education[0]
    
  }

}
