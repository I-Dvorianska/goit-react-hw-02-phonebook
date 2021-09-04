import { List, ListItem } from "./ContactList.styled";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <List>
        {contacts.map((contact) => {
          const { id, name, number } = contact;
          return (
            <ListItem key={id}>
              {name} - {number}
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default ContactList;
