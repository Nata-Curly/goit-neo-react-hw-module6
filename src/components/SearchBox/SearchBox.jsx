import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilter = ({ target }) => {
    dispatch(changeFilter(target.value.toLowerCase().trim()));
  };

  return (
    <div className={css.SearchBox}>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchBox;
