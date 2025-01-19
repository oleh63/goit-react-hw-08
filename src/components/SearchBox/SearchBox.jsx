import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter, selectFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        value={filter}
        onChange={handleChange}
        type="text"
      />
    </label>
  );
};

export default SearchBox;
