import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  myForm: FormGroup

  constructor(private fb: FormBuilder) {

    let formControls = {
      firstname : new FormControl()
    }

    this.myForm = this.fb.group(formControls);

  }

  ngOnInit(): void {

  }

  saveUser(){
    console.log(this.myForm.value);
  }


}
