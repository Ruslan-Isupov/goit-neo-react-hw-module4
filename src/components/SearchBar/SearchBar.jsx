import css from "./SearchBar.module.css";
import searchIcon from "../../assets/search.svg";
import toast from "react-hot-toast";

const SearchBar = ({ handleSearch}) => {
  // const [value, setValue] = useState("");

  const handleSubmit = (e) => {
   e.preventDefault();
    const form = e.target;
    const topic = form.elements.topic.value;
    if(topic.trim() === "") {
			toast("Please enter search term!")
			return;
		}
    handleSearch(topic);
    form.reset();
  };

  return (
    <header className={css.searchBar}>
      <form className={css.formBar} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name='topic'
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          // value={query}
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
