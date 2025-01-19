import { FiUser, FiPhone } from "react-icons/fi";
import styles from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={styles.list}>
      <div className={styles.list_text}>
        <p>
          <FiUser className={styles.icon} size={20} />
          {name}
        </p>
        <p>
          <FiPhone className={styles.icon} size={20} />
          {number}
        </p>
      </div>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Contact;
