import { Component } from 'react';
import { Box } from 'components/Box';

class Phonebook extends Component {
  render() {
    return (
      <Box>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <div className="Contacts"></div>
      </Box>
    );
  }
}

export default Phonebook;
