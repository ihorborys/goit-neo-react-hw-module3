import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";

const ContactList = ({ searchedContacts }) => {
  return (
    <ul className={styles.list}>
      {searchedContacts.map((contact) => (
        <li key={contact.id}>
          <Contact name={contact.name} number={contact.number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
