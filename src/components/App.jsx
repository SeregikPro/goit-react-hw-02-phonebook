import React from 'react';
import { Component } from 'react';
import Phonebook from './Phonebook';
import { Box } from './Box';
import Section from './Section';
import ContactList from './ContactList';
import Button from './Button';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(contact => contact.id !== id) };
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.filterContacts();

    return (
      <Box display="flex" flexDirection="column" p={5}>
        <Section title="Phonebook">
          <Phonebook />
          <Button type="submit">Add contact</Button>
        </Section>
        <Section title="Contacts">
          <ContactList
            values={filteredContacts}
            handleDelete={this.deleteContact}
          />
        </Section>
      </Box>
    );
  }
}

export default App;
