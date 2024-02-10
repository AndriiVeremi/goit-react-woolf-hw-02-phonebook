import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { Container, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // contacts: [],
    filter: '',
  };

  addContacts = data => {
    const { contacts } = this.state;

    const newContact = {
      id: nanoid(),
      ...data,
    };

    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} вже існує`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  findContacts = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  deletContacts = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(item => item.id !== id),
    }));
  };

  viewContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.viewContacts();
    console.log('v', visibleContacts);
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm setContacts={this.addContacts} />
        <h2>Contacts</h2>
        <ContactFilter
          value={this.state.filter}
          findContacts={this.findContacts}
        />
        <ContactList
          data={visibleContacts}
          deletContacts={this.deletContacts}
        />
      </Container>
    );
  }
}
