import MangoImage from './MangoImage'
import './Header.css'

function Header({ cartCount, onCartClick }) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#top" aria-label="Mango Grove home">
          <MangoImage
            className="brand__logo"
            body="#f5a524"
            blush="#e8741a"
            label=""
          />
          <span className="brand__name">Mango Grove</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#shop">Shop</a>
          <a href="#why">Why Us</a>
        </nav>

        <button className="cart-button" type="button" onClick={onCartClick}>
          <span>Your box</span>
          <span className="cart-button__count" aria-label={`${cartCount} items`}>
            {cartCount}
          </span>
        </button>
      </div>
    </header>
  )
}

export default Header
