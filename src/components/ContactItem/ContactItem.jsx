import { Item, Name, Number, Button } from "./ContactItem.styled";

export const ContactItem = ({id, name, number, deletContacts}) => {
  return (
    <Item>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <Button type="button" onClick={() => deletContacts(id)}>Delete</Button>
    </Item>
  );
};
