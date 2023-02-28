import { Injectable } from '@angular/core';
import { project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects=new Array<project>()
  constructor() { 
    let p1= new project()
    p1.id=1;
    p1.title="'ShopCart' is an Ecommerce web application by Angular";
    p1.discription=" The 'ShopCart' repository is an Angular-based eCommerce web application sample that I have created to showcase my skills and practice with Angular tools. The application utilizes various features of Angular, such as form validation, canActivate from Auth guard for user login, and other Angular tools. I have also integrated Firebase as a reliable and efficient database storage solution for my eCommerce data. In this repository, I have demonstrated my ability to use Angular to create a responsive and dynamic web application. The use of form validation helps to ensure that user input is valid, while the integration of Firebase allows me to store and retrieve data from the database easily. Additionally, by using the canActivate guard from Angular's AuthGuard feature, I have added an extra layer of security to my application by allowing only authorized users to access certain parts of your application.  Overall, 'ShopCart' is an excellent example of my skills and understanding of Angular, and it showcases my ability to create a functional eCommerce web application using modern web technologies.";
    p1.git="https://github.com/Prakashvyawhare/ShopCart";
    this.projects.push(p1);
    let p2= new project()
   p2.id=2;
   p2.title="My Resume Web Application: 'portfolio'";
   p2.discription="As a fresher in web development, I wanted to improve my skills and experience by creating a resume web application as a practice exercise. This project would not only allow me to showcase my web development skills but also improve my portfolio and create a unique application that I can use in the future." + "My web application features a clean and modern design that is easy to navigate, and provides all the necessary information that a potential employer would need to see. The homepage contains an 'about me' section, which includes my name, contact information, and a brief summary of my skills and experience. " +
          "I also created a portfolio section in my web application, which showcases some of the best web development projects I have worked on. Each project includes a brief description, the technologies I used, and a link to the project itself. This portfolio section is an excellent way to demonstrate my skills and abilities as a web developer, and to highlight some of the work that I'm most proud of. " + "To ensure that my web application is responsive and mobile-friendly, I used best practices in web development and tested the application on different devices and browsers. I also made sure that my web application is optimized for performance and security, and that it follows industry-standard web development practices. " +
   "        Overall, creating a resume web application was a great practice exercise that allowed me to showcase my web development skills, create a unique application, and improve my portfolio. I believe that this web application will be a valuable asset as I continue my career in web development.";
   p2.git="https://github.com/Prakashvyawhare/MyResume";
    this.projects.push(p2);
  }
  getProjectbyId(id:number){
   return this.projects.find((x)=>{
      return x.id==id});
  }
}
