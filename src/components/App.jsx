import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import Phonebook from './Phonebook';
import { Box } from './Box';
import ContactList from './ContactList';
import Button from './Button';
import ContactForm from './ContactForm';
import Filter from './Filter';

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
      <Box display="flex" flexDirection="column" alignItems="center" p={5}>
        <h1>Phonebook</h1>
        <Box
          width="400px"
          textAlign="center"
          border="normal"
          borderColor="accent"
          borderRadius="normal"
          p={4}
        >
          <ContactForm />
          <Button type="submit">Add contact</Button>
        </Box>
        <Box>
          <h2>Contacts</h2>
          <Filter />
          <ContactList
            values={filteredContacts}
            handleDelete={this.deleteContact}
          />
        </Box>
      </Box>
    );
  }
}

export default App;
