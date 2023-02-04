import { createReducer } from '@reduxjs/toolkit';

import { addContact, deleteContact, changeFilter } from './actions';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// Before Redux Toolkit

// export function contactsReducer(state = contactsInitialState, action) {
//   switch (action.type) {
//     case 'contacts/addContact':
//       return [...state, action.payload];
//     case 'contacts/deleteContact':
//       return state.filter(contact => contact.id !== action.payload);
//     default:
//       return state;
//   }
// }

// After

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

///

const filterInitialState = '';

// Before Redux Toolkit

// export function filterReducer(state = filterInitialState, action) {
//   switch (action.type) {
//     case 'filter/changeFilter':
//       return (state = action.payload);
//     default:
//       return state;
//   }
// }

// After

export const filterReducer = createReducer(filterInitialState, {
  [changeFilter]: (state, action) => {
    return (state = action.payload);
  },
});

// Instead of doing that I combined reducers in configureStore

// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });
