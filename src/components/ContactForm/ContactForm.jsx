import { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Input, Title } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    checkDuplicates: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { onSubmit, checkDuplicates } = this.props;
    const { name } = this.state;
    e.preventDefault();

    if (checkDuplicates(name)) {
      return;
    }

    onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...this.state });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Title>Name</Title>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Title>Number</Title>
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Box>
      </Box>
    );
  }
}

export default ContactForm;
