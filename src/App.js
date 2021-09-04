import { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { PrimaryTitle, SecondaryTitle } from "./App.styled";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState({
      contacts: [newContact, ...contacts],
    });
  };

  render() {
    return (
      <>
        <PrimaryTitle>Phonebook</PrimaryTitle>
        <ContactForm onSubmit={this.addContact} />

        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter />
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
