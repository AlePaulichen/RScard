import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'rsc-skill-bar',
    templateUrl: './skill-bar.component.html',
})
export class SkillBarComponent implements OnInit {

    @HostBinding('class.rsc-skill-bar') hostClass = true;

    @Input() label: string;
    @Input() progress = 0;

    constructor() { }

    ngOnInit(): void { }
}
