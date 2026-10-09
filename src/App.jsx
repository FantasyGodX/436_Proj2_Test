import { useState } from 'react'
import { MANGOES, MAX_PER_VARIETY } from './data/mangoes'
import Header from './components/Header'
import Hero from './components/Hero'
import Toolbar from './components/Toolbar'
import ProductGrid from './components/ProductGrid'
import { filterAndSort } from './utils/catalog'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  const visibleMangoes = filterAndSort(MANGOES, { query, category, sortBy })
  const cartCount = cart.reduce((total, line) => total + line.qty, 0)
  const quantities = Object.fromEntries(cart.map((line) => [line.id, line.qty]))

  function addToCart(id) {
    setCart((current) => {
      const existing = current.find((line) => line.id === id)
      if (!existing) return [...current, { id, qty: 1 }]
      return current.map((line) =>
        line.id === id ? { ...line, qty: Math.min(line.qty + 1, MAX_PER_VARIETY) } : line,
      )
    })
  }

  function clearFilters() {
    setQuery('')
    setCategory('All')
  }

  return (
    <>
      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(!isCartOpen)} />
      <main>
        <Hero featured={MANGOES.slice(0, 3)} />
        <section className="shop container" id="shop">
          <div className="section-heading">
            <h2>Pick your mangoes</h2>
            <p>Eight varieties, each shipped at its own peak. Add as many as you like.</p>
          </div>
          <Toolbar
            query={query}
            onQueryChange={setQuery}
            category={category}
            onCategoryChange={setCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
          <ProductGrid
            mangoes={visibleMangoes}
            totalCount={MANGOES.length}
            query={query}
            quantities={quantities}
            onAdd={addToCart}
            onClearFilters={clearFilters}
          />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
