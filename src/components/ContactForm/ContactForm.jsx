import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export const ContactForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit} className={css.form}>
    <input
      type="text"
      name="name"
      className={css.input}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      placeholder="Enter contact name..."
      required
    />
    <input
      type="tel"
      name="number"
      className={css.input}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      placeholder="Enter phone number..."
      required
    />
    <button type="submit" className={css.button}>
      Add contact
    </button>
  </form>
);

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
