import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";

const ContactList = ({ defaultContacts }) => {
  return (
    <ul className={styles.list}>
      {defaultContacts.map((contact) => (
        <li key={contact.id}>
          <Contact name={contact.name} number={contact.number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
