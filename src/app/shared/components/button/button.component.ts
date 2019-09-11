import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ButtonColor } from '../../enums/button-color.enum';
import { ButtonSize } from '../../enums/button-size.enum';

@Component({
    selector: 'rsc-button',
    templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {

    @HostBinding('class.rsc-button') hostClass = true;

    @Input() text: string;
    @Input() buttonColor: ButtonColor = ButtonColor.GRAY;
    @Input() buttonSize: ButtonSize = ButtonSize.MEDIUM;

    constructor() { }

    ngOnInit(): void { }
}
