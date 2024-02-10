export const ContactFilter = ({ value, findContacts }) => {

    return (
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={value}
          onChange={findContacts}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    );
  
}
