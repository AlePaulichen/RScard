import { Component, OnInit } from '@angular/core';
import { ButtonColor } from 'src/app/shared/enums/button-color.enum';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {

  buttonColor = ButtonColor;

  constructor() { }

  ngOnInit() {
  }

}
