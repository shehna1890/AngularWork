import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public str="";
  public a=3
  public b=45
  public c=this.a+this.b;
  

  data={
    tech1: "Angular",
    tech2:"Node"
    
    
  }
  myfunction(){
    this.str="First Button";
  }
    myfunction1(){
      this.str="Second Button";

    }
      public Employee=[
        {"Name":"Shehna","Age":25},
        {"Name":"Anjana","Age":23},
        {"Name":"Fathima","Age":30},
        {"Name":"Rohan","Age":89}
   
    ]
     
  
   
  title = 'FirstDemo';
}
