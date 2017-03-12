import { Component, OnInit } from '@angular/core';
import { Item } from './models/item';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Subject } from "rxjs/Subject";
import { ItemValidators } from './validators/ItemValidators';
import * as _ from 'lodash';
@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  public dynamicForm: FormGroup;
  addItem$ = new Subject();
  removeItem$ = new Subject();
  submit$ = new Subject();

  public code: number;
  public items: Array<Item>;

  constructor(fb: FormBuilder) {
    this.items = new Array<Item>();

    this.dynamicForm = fb.group({
      code: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    })

    this.addItem$.subscribe(() => this.addItem());
    this.removeItem$.subscribe((item: Item) => this.removeItem(item));
    this.submit$.subscribe((form: FormGroup) => {
      console.log(form.value);
    });
  }
  addItem = (): void => {
    var newId = _.some(this.items) ? _.maxBy(this.items, (item) => { return item.id }).id : 0;
    var newItem = new Item(++newId, '');
    var itemControl = new FormControl('', ItemValidators.codeValidator(this.dynamicForm, 'code'));
    this.dynamicForm.addControl("item_" + newId, itemControl);
    this.items.push(newItem);
  }
  removeItem = (itemToRemove: Item): void => {
    this.items = _.filter(this.items, (item) => item.id !== itemToRemove.id);
    this.dynamicForm.removeControl("item_"+itemToRemove.id);
  }

  ngOnInit() {
  }

  get diagnostics() {
    return JSON.stringify({
      value: this.dynamicForm.value
    });
  }
}
