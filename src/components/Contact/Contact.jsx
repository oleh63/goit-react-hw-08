import styles from "./Contact.module.css";
const Contact = ({ name, number, onDelete }) => (
  <li>
    <p>{name}</p>
    <p>{number}</p>
    <button onClick={onDelete}>Delete</button>
  </li>
);

export default Contact;
