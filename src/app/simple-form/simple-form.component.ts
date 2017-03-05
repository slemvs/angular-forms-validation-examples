import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(form: any): void {
    console.log("Form data: ");
    console.log(form);
  }

}
