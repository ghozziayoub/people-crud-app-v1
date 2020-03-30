import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name = "Ayoub";
  imageUrl = "assets/images/training.jpg";

  booksList = [];

  usersList = [];

  myCondition = false ;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      result => {
        this.usersList = result;
      },
      error =>{
        console.log(error);
      }
    )
  }

  hello(myname:String){
    alert('Hello '+myname);
  }

}
