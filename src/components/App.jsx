// import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';

const App = () => {
  // Видобуваємо контакти з localStorage

  const getLocalContacts = () => {
    const localContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localContacts);
    return parsedContacts;
  };

  // useState для контактів

  const [contacts, setContacts] = useState(getLocalContacts([]));

  // useEffect для завантаження контактів з localStorage
  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localContacts);
    setContacts(parsedContacts);
  }, []);

  // useState для filter

  const [filter, setFilter] = useState('');

  // useEffect для додавання контактів при зміні state

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Обробка Submit

  const onSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (contacts.some(({ name: contactName }) => contactName === name)) {
      alert(`${name} is already in contacts!`);
    } else {
      setContacts([...contacts, { id: nanoid(), name, number }]);
      form.reset();
    }
  };

  // Перевірка наявності контакту
  const searchContact = event => {
    setFilter(event.target.value);
  };

  // Видалення контакту
  const deleteContact = event => {
    const id = event.currentTarget.value;
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className={css.wrapper}>
      <h1 className={css.main_title}>Phonebook</h1>
      <ContactForm onSubmit={onSubmit}></ContactForm>
      <h2 className={css.contacts_title}>Contacts</h2>
      <Filter filter={filter} searchContact={searchContact}></Filter>
      <ContactList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      ></ContactList>
    </div>
  );
};

export default App;
