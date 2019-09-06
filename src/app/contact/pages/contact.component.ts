import { Component, OnInit } from '@angular/core';
import { MailContact } from 'src/app/shared/model/mail-contact.model';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    submitMailContact(mailContact: MailContact) {
        console.log(mailContact);
    }
}
