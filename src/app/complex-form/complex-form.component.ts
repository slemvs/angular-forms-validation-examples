import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.css']
})
export class ComplexFormComponent implements OnInit {

  complexForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.complexForm = fb.group({
      'firstName': '',
      'lastName': '',
      'gender': '',
      'hiking': false,
      'running': false,
      'swimming': false
    });
  }

  submitForm(value: any) : void {
    console.log('Reactive form data: ');
    console.log(value);
  }

  ngOnInit() {
  }

}
