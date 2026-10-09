import { MAX_PER_VARIETY } from '../data/mangoes'
import { formatPrice } from '../utils/format'
import MangoImage from './MangoImage'
import './ProductCard.css'

const SWEETNESS_LEVELS = [1, 2, 3, 4, 5]

function ProductCard({ mango, qtyInCart, onAdd }) {
  const atMax = qtyInCart >= MAX_PER_VARIETY
  const unavailable = !mango.inStock || atMax

  let buttonLabel = 'Add to box'
  if (!mango.inStock) buttonLabel = 'Sold out'
  else if (atMax) buttonLabel = 'Box limit reached'

  return (
    <article className="card" style={{ '--tint': mango.colors.body }}>
      <div className="card__image">
        <MangoImage
          className={mango.inStock ? 'card__mango' : 'card__mango card__mango--faded'}
          body={mango.colors.body}
          blush={mango.colors.blush}
          label={`Illustration of a ${mango.name} mango`}
        />
        <span className="card__tag">{mango.category}</span>
        {!mango.inStock && <span className="card__badge card__badge--out">Out of season</span>}
        {qtyInCart > 0 && (
          <span className="card__badge card__badge--in">{qtyInCart} in your box</span>
        )}
      </div>

      <div className="card__body">
        <div className="card__title-row">
          <h3>{mango.name}</h3>
          <p className="card__price">{formatPrice(mango.price)}</p>
        </div>
        <p className="card__origin">
          {mango.origin} &middot; {mango.season}
        </p>
        <p className="card__blurb">{mango.blurb}</p>

        <div className="sweetness" aria-label={`Sweetness ${mango.sweetness} out of 5`}>
          <span className="sweetness__label">Sweetness</span>
          {SWEETNESS_LEVELS.map((level) => (
            <span
              key={level}
              className={level <= mango.sweetness ? 'dot dot--on' : 'dot'}
            />
          ))}
        </div>

        <button
          className="btn btn-primary card__add"
          type="button"
          disabled={unavailable}
          onClick={() => onAdd(mango.id)}
        >
          {buttonLabel}
        </button>
      </div>
    </article>
  )
}

export default ProductCard
