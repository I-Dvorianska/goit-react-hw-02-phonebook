const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          const { id, name } = contact;
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default ContactList;
