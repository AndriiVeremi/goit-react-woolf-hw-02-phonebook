import { Component } from 'react';
import { Wrapper, Forma, Label,  Input, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handelSubmit = e => {
    e.preventDefault();
    this.props.setContacts(this.state)
  };

  handelChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  render() {
    return (     
       <Wrapper>
         <Forma onSubmit={this.handelSubmit}>
        <Label>
          Name
          < Input
            type="text"
            name="name"
            onChange={this.handelChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder='Enter name'
          />
        </Label>
        <Label>
          Number
          < Input
            type="tel"
            name="number"
            onChange={this.handelChange}
            pattern="\+?\d{1,4}?[.\s]?\(?\d{1,3}?\)?[.\s]?\d{1,4}[.\s]?\d{1,4}[.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder='Enter phone number'
          />
        </Label>
        <Button type="submit">Add Contact</Button>
      </Forma>
       </Wrapper>
    );
  }
}
