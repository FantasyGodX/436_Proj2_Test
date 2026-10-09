import { MAX_PER_VARIETY } from '../data/mangoes'
import { formatPrice } from '../utils/format'
import MangoImage from './MangoImage'
import './CartLine.css'

function CartLine({ line, onChangeQty, onRemove }) {
  return (
    <li className="line">
      <MangoImage
        className="line__image"
        body={line.colors.body}
        blush={line.colors.blush}
        label=""
      />
      <div className="line__info">
        <p className="line__name">{line.name}</p>
        <p className="line__price">
          {formatPrice(line.price)} each &middot; {formatPrice(line.price * line.qty)}
        </p>
        <button className="line__remove" type="button" onClick={() => onRemove(line.id)}>
          Remove
        </button>
      </div>

      <div className="stepper">
        <button
          type="button"
          aria-label={`Remove one ${line.name}`}
          disabled={line.qty <= 1}
          onClick={() => onChangeQty(line.id, -1)}
        >
          &minus;
        </button>
        <span aria-live="polite">{line.qty}</span>
        <button
          type="button"
          aria-label={`Add one ${line.name}`}
          disabled={line.qty >= MAX_PER_VARIETY}
          onClick={() => onChangeQty(line.id, 1)}
        >
          +
        </button>
      </div>
    </li>
  )
}

export default CartLine
