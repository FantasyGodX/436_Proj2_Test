function SearchBar({ query, onQueryChange }) {
  return (
    <div className="search">
      <label className="visually-hidden" htmlFor="mango-search">
        Search mangoes
      </label>
      <input
        id="mango-search"
        className="search__input"
        type="search"
        placeholder="Search by name or origin..."
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
      />
    </div>
  )
}

export default SearchBar
