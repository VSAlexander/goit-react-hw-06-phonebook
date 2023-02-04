import { createAction, nanoid } from '@reduxjs/toolkit';

////////      Before Redux Toolkit     ////////

// export function addContact(name, number) {
//   return {
//     type: 'contacts/addContact',
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// }

// export function deleteContact(contactId) {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// }

// export function changeFilter(value) {
//   return {
//     type: 'filter/changeFilter',
//     payload: value,
//   };
// }

////////    After    ////////

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
  }
);

export const deleteContact = createAction('contacts/deleteContact');

export const changeFilter = createAction('filter/changeFilter');
