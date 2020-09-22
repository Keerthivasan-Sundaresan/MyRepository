import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  mydata="keerthi"
  name = 'Angular ' + VERSION.major;
  sampledata=[
{
name:"Keerthivasan",
company:"Kovai.co",
EmployeeAge:23
},
{
name:"Keerthivasanold",
company:"Vagus tech",
EmployeeAge:21
}
];


  

}
