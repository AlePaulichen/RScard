import { Component, OnInit, HostBinding } from '@angular/core';
import { MailContact } from 'src/app/shared/model/mail-contact.model';
import { SocialIconsColor } from 'src/app/shared/enums/social-icons-color.enum';
import { Store } from '@ngrx/store';
import { ContactState } from 'src/app/store/contact/contact.reducers';
import { SaveMailContactDraft, SendMailContact } from 'src/app/store/contact/contact.actions';
import { selectMailContactDraft } from 'src/app/store/contact/contact.selectos';
import { Observable } from 'rxjs';

@Component({
    selector: 'rsc-contact',
    templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
    @HostBinding('class.rsc-contact') hostClass = true;

    socialIconsColor = SocialIconsColor.GRAY;

    mailDraft: Observable<MailContact>;

    constructor(private store: Store<ContactState>) { }

    ngOnInit(): void {
        this.mailDraft = this.store.select(selectMailContactDraft);
    }

    submitMailContact(mailContact: MailContact) {
        this.store.dispatch(new SendMailContact(mailContact));
    }

    saveMailContactDraft(mailContact: MailContact) {
        this.store.dispatch(new SaveMailContactDraft(mailContact));
    }
}
