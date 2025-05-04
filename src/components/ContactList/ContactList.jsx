import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";

const ContactList = ({ onSearchContact, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {onSearchContact.map((contact) => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
