import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__brand">Mango Grove</p>
        <p>Tree-ripened mangoes from family orchards, shipped within 48 hours of picking.</p>
        <p className="site-footer__legal">
          A CSC 436 class project. Not a real store, so no mangoes will be shipped.
        </p>
      </div>
    </footer>
  )
}

export default Footer
