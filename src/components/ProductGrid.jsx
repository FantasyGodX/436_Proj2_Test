import ProductCard from './ProductCard'
import './ProductGrid.css'

function ProductGrid({ mangoes, totalCount, query, quantities, onAdd, onClearFilters }) {
  if (mangoes.length === 0) {
    return (
      <div className="empty">
        <p className="empty__title">No mangoes match {query ? `"${query.trim()}"` : 'those filters'}.</p>
        <p>Try a different name, or browse the whole grove.</p>
        <button className="btn btn-ghost" type="button" onClick={onClearFilters}>
          Clear filters
        </button>
      </div>
    )
  }

  return (
    <>
      <p className="results" aria-live="polite">
        Showing {mangoes.length} of {totalCount} varieties
      </p>
      <div className="grid">
        {mangoes.map((mango) => (
          <ProductCard
            key={mango.id}
            mango={mango}
            qtyInCart={quantities[mango.id] ?? 0}
            onAdd={onAdd}
          />
        ))}
      </div>
    </>
  )
}

export default ProductGrid
