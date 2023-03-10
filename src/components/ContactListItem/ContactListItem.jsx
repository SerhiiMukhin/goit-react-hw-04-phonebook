import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { MdDeleteForever } from 'react-icons/md';

export const ContactListItem = ({ contact, deleteContact }) => (
  <li className={css.item}>
    <div className={css.info}>
      <p className={css.text}>{contact.name}</p>
      <p className={css.number}>{contact.number}</p>
    </div>
    <button
      className={css.button}
      type="button"
      onClick={deleteContact}
      value={contact.id}
    >
      <MdDeleteForever className={css.icon}></MdDeleteForever>
    </button>
  </li>
);

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
