import MangoImage from './MangoImage'
import './Hero.css'

function Hero({ featured }) {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">Tree-ripened. Hand-picked. Delivered.</p>
          <h1>Mangoes that taste like the sun came out.</h1>
          <p className="hero__lede">
            We work with family orchards on three continents and ship each
            fruit at peak ripeness. Build a box from eight varieties and find
            your favorite.
          </p>
          <div className="hero__actions">
            <a className="btn btn-primary" href="#shop">
              Build your box
            </a>
            <a className="btn btn-ghost" href="#why">
              Why Mango Grove
            </a>
          </div>
        </div>

        <div className="hero__art" aria-hidden="true">
          <div className="hero__sun" />
          {featured.map((mango, index) => (
            <MangoImage
              key={mango.id}
              className={`hero__mango hero__mango--${index + 1}`}
              body={mango.colors.body}
              blush={mango.colors.blush}
              label=""
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
