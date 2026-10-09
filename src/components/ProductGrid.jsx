import ProductCard from './ProductCard'
import './ProductGrid.css'

function ProductGrid({ mangoes, quantities, onAdd }) {
  return (
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
  )
}

export default ProductGrid
