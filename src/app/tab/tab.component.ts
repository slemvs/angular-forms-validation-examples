import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class Tab implements OnInit {
  @Input() title: String;
  @Input() isActive: Boolean = false;
    
  constructor() { }

  ngOnInit() {
  }

}
