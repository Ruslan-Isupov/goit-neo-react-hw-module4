import css from "./SearchBar.module.css";
import { useState } from "react";
import searchIcon from "../../assets/search.svg";
import toast from "react-hot-toast";

const SearchBar = ({ handleSearch, query }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      handleSearch(value);
    } else {
      toast.error("Please enter a search term");
      console.log("Please enter a search term");
    }
  };

  return (
    <header className={css.searchBar}>
      <form className={css.formBar} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit" className={css.buttonBar}>
          <img className={css.searchIcon} src={searchIcon} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
