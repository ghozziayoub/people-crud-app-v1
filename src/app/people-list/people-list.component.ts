import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  peopleList = [
    {
      id: 1,
      name: "Ayoub",
      username: "Ghozzi",
      phone: "00 216 85 129 359",
    },
    {
      id: 2,
      name: "Djingo",
      username: "el Damdoum",
      phone: "00 216 30 001 001",
    },
    {
      id: 3,
      name: "Wajih",
      username: "CM",
      phone: "00 216 22 000 022",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  delete(person) {
    let index = this.peopleList.indexOf(person);
    this.peopleList.splice(index, 1);

  }

}
