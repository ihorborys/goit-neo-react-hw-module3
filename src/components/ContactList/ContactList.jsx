import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";

const ContactList = ({ onSearchContact }) => {
  return (
    <ul className={styles.list}>
      {onSearchContact.map((contact) => (
        <li key={contact.id}>
          <Contact name={contact.name} number={contact.number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
