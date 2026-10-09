import { useState } from 'react'
import { MANGOES, MAX_PER_VARIETY } from './data/mangoes'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

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
          <ProductGrid mangoes={MANGOES} quantities={quantities} onAdd={addToCart} />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
