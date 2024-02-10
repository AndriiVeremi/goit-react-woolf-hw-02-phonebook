import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ data, deletContacts}) => {

  return (
    <List>
      {data.map(item => (
        <ContactItem key={item.id} id={item.id} name={item.name} number={item.number} deletContacts={deletContacts} />
      ))}
    </List>
  );
};
