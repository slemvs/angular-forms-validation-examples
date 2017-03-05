import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'form-validations',
  templateUrl: './form-validations.component.html',
  styleUrls: ['./form-validations.component.css']
})
export class FormValidationsComponent implements OnInit {

  private complexForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.complexForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'gender': [null, Validators.required],
      'hiking': false,
      'running': false,
      'swimming': false,
    });
  }

  ngOnInit() {
  }

  submitForm(value: any) {
    console.log(value);
  }
}
