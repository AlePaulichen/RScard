import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'rsc-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  @HostBinding('class.rsc-menu') hostClass = true;

  constructor() { }

  ngOnInit() {
  }

}
