import { useState } from 'react'
import { MANGOES } from './data/mangoes'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const cartCount = cart.reduce((total, line) => total + line.qty, 0)

  return (
    <>
      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(!isCartOpen)} />
      <main>
        <Hero featured={MANGOES.slice(0, 3)} />
      </main>
      <Footer />
    </>
  )
}

export default App
