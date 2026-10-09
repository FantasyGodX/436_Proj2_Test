import { formatPrice } from '../utils/format'
import MangoImage from './MangoImage'

function OrderConfirmation({ receipt, onContinue }) {
  return (
    <div className="drawer__done">
      <MangoImage
        className="drawer__done-image"
        body="#f5a524"
        blush="#e8741a"
        label="A ripe mango"
      />
      <h3>Thank you!</h3>
      <p>
        Order <strong>{receipt.number}</strong> is on its way: {receipt.count}{' '}
        {receipt.count === 1 ? 'mango' : 'mangoes'} for {formatPrice(receipt.total)}.
      </p>
      <p className="drawer__fineprint">This is a class project, so nothing was actually charged or shipped.</p>
      <button className="btn btn-primary" type="button" onClick={onContinue}>
        Keep shopping
      </button>
    </div>
  )
}

export default OrderConfirmation
