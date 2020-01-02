import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  imge:string="assets/image/cake.png";
  username:string="Ola";
  Onsale:boolean=false;
  StudentNumber=10;
  // method
  welcome(){
    window.alert("Welcome");
  }

  //tb3 input by3'er fe html
  test:string="";
  friends:string[]=["ahmed" , "ali", "mohamed","moha"];
  user:object={name:'ola',age:20, salary:6000};
  users:object[]=[
    {name:'ola',age:20,DateOfBrith:"8-2-1998", salary:6000},
    {name:'ali',age:20,DateOfBrith:"8/2/1998", salary:6000},
    {name:'alaa',age:20,DateOfBrith:"8/2/1998", salary:6000},
    {name:'aya',age:20,DateOfBrith:"8/2/1998", salary:6000},
    {name:'ahmed',age:20,DateOfBrith:"8/2/1998", salary:6000}
  ];


  constructor() { }

  ngOnInit() {
  }

}
