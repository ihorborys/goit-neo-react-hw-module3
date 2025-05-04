import styles from "./SearchBox.module.css";
import PropTypes from "prop-types";

const SearchBox = ({ search, setSearch }) => {
  return (
    <div className={styles.container}>
      <label htmlFor="searchInput" className={styles.label}>
        Find contacts by name
      </label>
      <input
        id="searchInput"
        className={styles.input}
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
};

SearchBox.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default SearchBox;
