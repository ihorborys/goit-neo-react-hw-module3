import styles from "./Contact.module.css";
import { LuUser } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";

const Contact = ({ name, number }) => {
  return (
    <div className={styles.contact}>
      <ul className={styles.list}>
        <li className={styles.listItemName}>
          <p className={styles.listItemIconContainer}>
            <LuUser className={styles.listItemIcon} size="16" />
          </p>
          <p className={styles.listItemText}>{name}</p>
        </li>
        <li className={styles.listItemNumber}>
          <p className={styles.listItemIconContainer}>
            <LuPhone className={styles.listItemIcon} size="16" />
          </p>
          <p className={styles.listItemText}>{number}</p>
        </li>
      </ul>
      <button className={styles.listItemButton} type="submit">
        Delete
      </button>
    </div>
  );
};

export default Contact;
