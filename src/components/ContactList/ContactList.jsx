import { ContactItem } from 'components/ContactItem/ContactItem';
import { nanoid } from 'nanoid';

export const ContactList = ({ visibleContacts }) => {

  return (
    <ul>
      {visibleContacts.map(item => (
        <ContactItem key={nanoid()} name={item.name} number={item.number} />
      ))}
    </ul>
  );
};
