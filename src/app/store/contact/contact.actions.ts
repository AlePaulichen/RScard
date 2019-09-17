import { Action } from '@ngrx/store';
import { MailContact } from 'src/app/shared/model/mail-contact.model';

export enum ContractActionTypes {
    SaveMailContactDraft = '[Contract] Save Mail Contact Draft Action',
    SendMailContact = '[Contract] Send Mail Contact Action'
};

export class SaveMailContactDraft implements Action {
    readonly type = ContractActionTypes.SaveMailContactDraft;

    constructor(public payload: MailContact) { }
}

export class SendMailContact implements Action {
    readonly type = ContractActionTypes.SendMailContact;

    constructor(public payload: MailContact) { }
}

export type ContractActions
                        = SaveMailContactDraft
                        | SendMailContact;
