import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onChangeHander }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHander}
  />
);

export default SearchBox;
