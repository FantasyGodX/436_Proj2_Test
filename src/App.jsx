import { useState } from 'react'
import { MANGOES, MAX_PER_VARIETY } from './data/mangoes'
import { filterAndSort } from './utils/catalog'
import { calculateTotals } from './utils/pricing'
import Header from './components/Header'
import Hero from './components/Hero'
import Toolbar from './components/Toolbar'
import ProductGrid from './components/ProductGrid'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [giftBox, setGiftBox] = useState(false)
  const [promoCode, setPromoCode] = useState(null)
  const [receipt, setReceipt] = useState(null)

  const visibleMangoes = filterAndSort(MANGOES, { query, category, sortBy })
  const lines = cart.map((item) => ({
    ...MANGOES.find((mango) => mango.id === item.id),
    qty: item.qty,
  }))
  const cartCount = cart.reduce((total, item) => total + item.qty, 0)
  const quantities = Object.fromEntries(cart.map((item) => [item.id, item.qty]))
  const totals = calculateTotals(lines, { promoCode, giftBox })

  function addToCart(id) {
    setCart((current) => {
      const existing = current.find((item) => item.id === id)
      if (!existing) return [...current, { id, qty: 1 }]
      return current.map((item) =>
        item.id === id ? { ...item, qty: Math.min(item.qty + 1, MAX_PER_VARIETY) } : item,
      )
    })
  }

  function changeQty(id, delta) {
    setCart((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, qty: Math.min(Math.max(item.qty + delta, 1), MAX_PER_VARIETY) }
          : item,
      ),
    )
  }

  function removeFromCart(id) {
    setCart((current) => current.filter((item) => item.id !== id))
  }

  function placeOrder() {
    setReceipt({
      number: `MG-${Math.floor(1000 + Math.random() * 9000)}`,
      count: cartCount,
      total: totals.total,
    })
    setCart([])
    setPromoCode(null)
    setGiftBox(false)
  }

  function closeCart() {
    setIsCartOpen(false)
    setReceipt(null)
  }

  function clearFilters() {
    setQuery('')
    setCategory('All')
  }

  return (
    <>
      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
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
      <CartDrawer
        isOpen={isCartOpen}
        lines={lines}
        totals={totals}
        promoCode={promoCode}
        giftBox={giftBox}
        receipt={receipt}
        onClose={closeCart}
        onChangeQty={changeQty}
        onRemove={removeFromCart}
        onApplyPromo={setPromoCode}
        onClearPromo={() => setPromoCode(null)}
        onGiftBoxChange={setGiftBox}
        onCheckout={placeOrder}
      />
    </>
  )
}

export default App
