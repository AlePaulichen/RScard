import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'rsc-profile-box',
    templateUrl: './profile-box.component.html',
})
export class ProfileBoxComponent implements OnInit {
    @HostBinding('class.rsc-profile-box') hostClass = true;

    constructor() { }

    ngOnInit(): void {
    }
}
