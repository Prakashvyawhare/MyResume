import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor() { }
  myDetails={
    name:"Prakash",
    FatherName:"Vasant",
    surName:"Vyawhare",
    Address:"Palasgaon, Gangapur, Aurangabad",
    dateOfBirth:"10/09/1999",
    MaterialStatus:"single",
    gender:"Male",
    Contact:8554086442,
    email:"vyawhareprakash719@gmail.com",
    profile:"/assets/photo.jpg"
  
  }
  

  
}
