import { Component, OnInit, Input } from '@angular/core';
import { ButtonColor } from '../../enums/button-color.enum';
import { ButtonSize } from '../../enums/button-size.enum';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {

    @Input() text: string;
    @Input() buttonColor: ButtonColor = ButtonColor.GRAY;
    @Input() buttonSize: ButtonSize = ButtonSize.MEDIUM;

    constructor() { }

    ngOnInit(): void { }
}
