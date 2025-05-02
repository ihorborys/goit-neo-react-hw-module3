import "./App.css";
import defaultContacts from "./components/defaultContacts.json";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(defaultContacts);

  const [search, setSearch] = useState("");

  const searchedContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <div className={"container"}>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox filter={search} setSearch={setSearch} />
        <ContactList searchedContacts={searchedContacts} />
      </div>
    </>
  );
}

export default App;
