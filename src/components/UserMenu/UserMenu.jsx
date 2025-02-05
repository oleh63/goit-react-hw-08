import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <span>Welcome, {user.name}</span>
      <button onClick={() => dispatch(logoutThunk())}></button>
    </div>
  );
};
export default UserMenu;
