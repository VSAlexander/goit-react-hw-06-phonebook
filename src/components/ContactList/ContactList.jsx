import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/contacts.slice';

import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export function ContactList() {
  const contacts = useSelector(state => state.contacts.data);

  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleContactRemove = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().split(' ').join('').includes(filter)
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts &&
        filteredContacts.map(contact => {
          const handleDelete = () => {
            handleContactRemove(contact.id);
          };
          return (
            <li key={contact.id}>
              <div>
                {contact.name}: {contact.number}
                <button type="button" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};
