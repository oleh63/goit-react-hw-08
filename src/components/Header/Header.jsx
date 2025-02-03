import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <header className={styles.header}>
      <h1>Home</h1>
      {isLoggedIn && <h2>Welcome {user.name}</h2>}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">PhoneBook</NavLink>
      {isLoggedIn ? (
        <button onClick={() => dispatch(logoutThunk())}>Logout</button>
      ) : (
        <>
          <NavLink to="/register">Registration</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </header>
  );
};

export default Header;
