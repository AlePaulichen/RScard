import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ContactState } from './contact.reducers';

export const selectContactState = createFeatureSelector('contact');

export const selectMailContactDraft = createSelector(
    selectContactState,
    (state: ContactState) => state.mailContactDraft
);
