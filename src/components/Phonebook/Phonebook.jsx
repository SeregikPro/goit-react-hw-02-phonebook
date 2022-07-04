import { Component } from 'react';

class Phonebook extends Component {
  render() {
    return (
      <div className="Phonebook">
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <div className="Contacts">
          <h2>Contacts</h2>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Phonebook;
