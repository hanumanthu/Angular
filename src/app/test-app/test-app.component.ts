import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-app',
  templateUrl: './test-app.component.html',
  styleUrls: ['./test-app.component.css']
})
export class TestAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  newcomponent = "Entered in new component created";
  title = 'My Channel';
  months = ["January", "February", "March", "April", "May", "June", "July", 
      "August", "September", "October", "November", "December"];

  IsFlag:boolean = false; 

}
