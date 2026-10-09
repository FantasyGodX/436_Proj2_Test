function CategoryTabs({ categories, active, onSelect }) {
  return (
    <div className="tabs" role="group" aria-label="Filter by flavor">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={category === active ? 'tab tab--active' : 'tab'}
          aria-pressed={category === active}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryTabs
