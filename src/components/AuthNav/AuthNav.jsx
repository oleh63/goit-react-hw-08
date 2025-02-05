import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";
const AuthNav = () => {
  return (
    <div className={styles.auth_nav}>
      <NavLink className={styles.nav_link} to="/register">
        Registration
      </NavLink>
      <NavLink className={styles.nav_link} to="/login">
        login
      </NavLink>
    </div>
  );
};

export default AuthNav;
