import { CATEGORIES } from '../data/mangoes'
import { SORT_OPTIONS } from '../utils/catalog'
import SearchBar from './SearchBar'
import CategoryTabs from './CategoryTabs'
import './Toolbar.css'

function Toolbar({ query, onQueryChange, category, onCategoryChange, sortBy, onSortChange }) {
  return (
    <div className="toolbar">
      <SearchBar query={query} onQueryChange={onQueryChange} />
      <CategoryTabs categories={CATEGORIES} active={category} onSelect={onCategoryChange} />
      <div className="sort">
        <label htmlFor="mango-sort">Sort by</label>
        <select
          id="mango-sort"
          value={sortBy}
          onChange={(event) => onSortChange(event.target.value)}
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Toolbar
