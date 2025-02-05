import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import styles from "./UserMenu.module.css";
const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.box}>
      <span className={styles.span}>Welcome, {user.name}</span>
      <button className={styles.btn} onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
