import { Component, OnInit, HostBinding } from '@angular/core';
import { MailContact } from 'src/app/shared/model/mail-contact.model';
import { SocialIconsColor } from 'src/app/shared/enums/social-icons-color.enum';

@Component({
    selector: 'rsc-contact',
    templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
    @HostBinding('class.rsc-contact') hostClass = true;

    socialIconsColor = SocialIconsColor.GRAY;

    constructor() { }

    ngOnInit(): void {
    }

    submitMailContact(mailContact: MailContact) {
        console.log(mailContact);
    }
}
