import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectIsError, selectIsLoading } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <div>
        <h1>PhoneBook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        {isError && <h2>Sorry... something went wrong!</h2>}
        {isLoading && <h2>Loading...</h2>}
      </div>
    </>
  );
}

export default App;
