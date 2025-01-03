import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.item}>
    {contacts.map(({ id, name, number }) => (
      <Contact
        key={id}
        name={name}
        number={number}
        onDelete={() => onDeleteContact(id)}
      />
    ))}
  </ul>
);

export default ContactList;
