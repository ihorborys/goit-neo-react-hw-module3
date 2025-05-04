import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";
import PropTypes from "prop-types";

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

ContactList.propTypes = {
  onSearchContact: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
