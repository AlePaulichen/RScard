import { Component, OnInit, HostBinding } from '@angular/core';
import { ButtonColor } from 'src/app/shared/enums/button-color.enum';

@Component({
  selector: 'rsc-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  @HostBinding('class.rsc-about') hostClass = true;

  buttonColor = ButtonColor;

  constructor() { }

  ngOnInit() {
  }

}
