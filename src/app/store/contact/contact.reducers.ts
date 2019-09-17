import { MailContact } from 'src/app/shared/model/mail-contact.model';
import { ContractActions, ContractActionTypes } from './contact.actions';

export interface ContactState {
    mailContactDraft: MailContact;
}

const initialState: ContactState = {
    mailContactDraft: null
};

export function contactReducer(state = initialState, action: ContractActions ): ContactState {
    switch (action.type) {
        case ContractActionTypes.SaveMailContactDraft:
            return {
                ...state,
                mailContactDraft: action.payload
            };

        case ContractActionTypes.SendMailContact:
            return {
                ...state,
                mailContactDraft: null
            };

        default: {
            return state;
        }
    }
}
