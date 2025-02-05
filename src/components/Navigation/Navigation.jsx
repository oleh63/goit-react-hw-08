import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import styles from "./Navigation.module.css";
const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.nav_link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={styles.nav_link} to="/contacts">
          PhoneBook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
