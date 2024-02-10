import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ data, deletContacts}) => {

  return (
    <ul>
      {data.map(item => (
        <ContactItem key={item.id} id={item.id} name={item.name} number={item.number} deletContacts={deletContacts} />
      ))}
    </ul>
  );
};
