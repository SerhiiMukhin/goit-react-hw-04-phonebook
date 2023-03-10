import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import React from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, filter, deleteContact }) => (
  <ul>
    {contacts.length > 0 ? (
      contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          ></ContactListItem>
        ))
    ) : (
      <p>No contacts added yet...</p>
    )}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
