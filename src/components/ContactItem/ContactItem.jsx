import PropTypes from 'prop-types';
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

ContactItem.protoTypes = {
  id: PropTypes.number.isRequired, 
  name: PropTypes.string.isRequired, 
  number: PropTypes.string.isRequired,
  deletContacts: PropTypes.func.isRequired
}