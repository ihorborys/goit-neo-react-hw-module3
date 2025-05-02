import styles from "./SearchBox.module.css";

const SearchBox = ({ search, setSearch }) => {
  return (
    <div className={styles.container}>
      <label htmlFor="findInput" className={styles.label}>
        Find contacts by name
      </label>
      <input
        id="findInput"
        className={styles.input}
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
