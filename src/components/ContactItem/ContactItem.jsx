export const ContactItem = ({id, name, number, deletContacts}) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => deletContacts(id)}>Delete</button>
    </li>
  );
};
