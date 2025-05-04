import styles from "./Contact.module.css";
import { LuUser } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import PropTypes from "prop-types";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <div className={styles.contact}>
      <ul className={styles.list}>
        <li>
          <p className={styles.listItemIconContainer}>
            <LuUser className={styles.listItemIcon} size="16" />
          </p>
          <p>{name}</p>
        </li>
        <li>
          <p className={styles.listItemIconContainer}>
            <LuPhone className={styles.listItemIcon} size="16" />
          </p>
          <p>{number}</p>
        </li>
      </ul>
      <button
        className={styles.listItemButton}
        type="submit"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
