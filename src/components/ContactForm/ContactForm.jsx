import { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts.slice';

import css from './ContactForm.module.css';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.data);
  const dispatch = useDispatch();

  const handleContactCreate = (name, number) => {
    const duplicateName = contacts.find(contact => contact.name === name); // searching duplicate names in input Name
    if (duplicateName) {
      alert(name + ' is already in contacts.');
      return;
    }
    dispatch(addContact(name, number));
  };

  // ----------- Instead of doing this ------------

  // handleChangeName = event => {
  //   this.setState({ name: event.target.value });
  // };

  // handleChangeNumber = event => {
  //   this.setState({ number: event.target.value });
  // };

  // ---------- Do this (computed properties) -----------

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        throw new Error();
    }
  };

  //-------------

  const handleSubmit = event => {
    event.preventDefault();

    // to transfer App state (contacts) and its method in this component
    // in App method handleSubmitInForm hidden logic about adding new object to contacts and checking duplicate names

    handleContactCreate(name, number);

    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        className={css.input}
        onChange={handleChange}
        value={name}
        type="text"
        name="name"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="number">Number</label>
      <input
        className={css.input}
        onChange={handleChange}
        value={number}
        type="tel"
        name="number"
        id="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onHandleSubmitInForm: PropTypes.func,
};
