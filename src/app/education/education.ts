export class Education{
    Degree:string;
    college:string;
    score:string;
    year:number;
    department?:string;

    constructor(Degree:string,college:string,score:string,year:number,department?:string){
        this.Degree=Degree;
        this.college=college;
        this.score=score;
        this.year=year;
        this.department=department;
    }
}