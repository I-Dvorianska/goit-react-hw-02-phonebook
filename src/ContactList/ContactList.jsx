import { List, ListItem } from "./ContactList.styled";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <List>
        {contacts.map((contact) => {
          const { id, name } = contact;
          return <ListItem key={id}>{name}</ListItem>;
        })}
      </List>
    </div>
  );
};

export default ContactList;
