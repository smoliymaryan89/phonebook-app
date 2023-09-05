import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().trim().includes(filter.toLowerCase().trim()) ||
        (number && number.trim().includes(filter.toLowerCase().trim()))
    );
  }
);
