import { Component, OnInit, EventEmitter, Output, HostBinding, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MailContact } from 'src/app/shared/model/mail-contact.model';
import { ButtonColor } from 'src/app/shared/enums/button-color.enum';
import { ButtonSize } from 'src/app/shared/enums/button-size.enum';

@Component({
    selector: 'rsc-contact-form',
    templateUrl: './contact-form.component.html',
})
export class ContactFormComponent implements OnInit {
    @HostBinding('class.rsc-contact-form') hostClass = true;

    buttonColor = ButtonColor;
    buttonSize = ButtonSize;

    contactForm: FormGroup;
    name = new FormControl('', [Validators.required]);
    email = new FormControl('', [Validators.required]);
    subject = new FormControl('', [Validators.required]);
    message = new FormControl('', [Validators.required]);
    privacyPolicy = new FormControl(null, [Validators.required]);

    @Input() mailDraft: MailContact;

    @Output() submitMailContact = new EventEmitter<MailContact>();
    @Output() saveMailContactDraft = new EventEmitter<MailContact>();

    constructor(
        private fb: FormBuilder
    ) {
        this.contactForm = this.fb.group({
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message,
        });
    }

    ngOnInit(): void {
        if (this.mailDraft) {
            this.name.setValue(this.mailDraft.name);
            this.email.setValue(this.mailDraft.email);
            this.subject.setValue(this.mailDraft.subject);
            this.message.setValue(this.mailDraft.message);
        }
    }

    submit() {
        if (!this.privacyPolicy.hasError('required') && this.contactForm.valid) {
            this.submitMailContact.emit(this.contactForm.value);
        }
    }

    saveDraft() {
        this.saveMailContactDraft.emit(this.contactForm.value);
    }
}
