export const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'sweetness', label: 'Sweetest first' },
  { value: 'name', label: 'Name: A to Z' },
]

const SORTERS = {
  featured: () => 0,
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  sweetness: (a, b) => b.sweetness - a.sweetness,
  name: (a, b) => a.name.localeCompare(b.name),
}

export function filterAndSort(mangoes, { query, category, sortBy }) {
  const needle = query.trim().toLowerCase()

  return mangoes
    .filter((mango) => category === 'All' || mango.category === category)
    .filter(
      (mango) =>
        mango.name.toLowerCase().includes(needle) ||
        mango.origin.toLowerCase().includes(needle),
    )
    .sort(SORTERS[sortBy])
}
