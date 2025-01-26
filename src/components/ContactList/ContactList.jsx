import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";
import { deleteContact } from "../../redux/ContactsOps";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.item}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onDelete={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
