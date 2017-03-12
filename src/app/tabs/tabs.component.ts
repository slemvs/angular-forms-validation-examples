import { Component, OnInit, QueryList, ContentChildren } from '@angular/core';
import { ComplexFormComponent } from 'app/complex-form/complex-form.component';
import { SimpleFormComponent } from 'app/simple-form/simple-form.component';
import { FormValidationsComponent } from 'app/form-validations/form-validations.component';
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Tab } from 'app/tab/tab.component';
import { FormBuilder } from "@angular/forms";
@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @ContentChildren(Tab) tabs: QueryList<Tab>;
  public tabSelector$ = new Subject();

  constructor() {
    //this.setDefaultValues();
  }

  setDefaultValues = () => {
    this.tabSelector$.subscribe((tabToSelect: Tab) => {
      this.tabs.forEach((tab) => tab.isActive = false);
      tabToSelect.isActive = true;
    });
  }

  ngOnInit() {
    this.setDefaultValues();
  }

}
