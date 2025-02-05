import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsError, selectIsLoading } from "../../redux/contacts/selectors";
import styles from "./PhoneBook.module.css";
const PhoneBook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  return (
    <div className={styles.box}>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isError && <h2>Sorry... something went wrong!</h2>}
      {isLoading && <h2>Loading...</h2>}
    </div>
  );
};

export default PhoneBook;
