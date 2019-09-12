import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'rsc-skills',
    templateUrl: './skills.component.html',
})
export class SkillsComponent implements OnInit {
    @HostBinding('class.rsc-skills') hostClass = true;

    constructor() { }

    ngOnInit(): void { }
}
