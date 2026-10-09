import { useEffect } from 'react'
import { FREE_SHIPPING_THRESHOLD, GIFT_BOX_FEE } from '../data/mangoes'
import { formatPrice } from '../utils/format'
import CartLine from './CartLine'
import PromoCode from './PromoCode'
import OrderConfirmation from './OrderConfirmation'
import './CartDrawer.css'

function CartDrawer({
  isOpen,
  lines,
  totals,
  promoCode,
  giftBox,
  receipt,
  onClose,
  onChangeQty,
  onRemove,
  onApplyPromo,
  onClearPromo,
  onGiftBoxChange,
  onCheckout,
}) {
  useEffect(() => {
    if (!isOpen) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const progress = Math.min(((FREE_SHIPPING_THRESHOLD - totals.amountToFreeShipping) / FREE_SHIPPING_THRESHOLD) * 100, 100)

  return (
    <>
      <div
        className={isOpen ? 'scrim scrim--open' : 'scrim'}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={isOpen ? 'drawer drawer--open' : 'drawer'}
        aria-label="Your box"
        inert={!isOpen}
      >
        <div className="drawer__head">
          <h2>Your box</h2>
          <button className="drawer__close" type="button" onClick={onClose} aria-label="Close your box">
            &times;
          </button>
        </div>

        {receipt ? (
          <OrderConfirmation receipt={receipt} onContinue={onClose} />
        ) : lines.length === 0 ? (
          <div className="drawer__empty">
            <p className="drawer__empty-title">Your box is empty.</p>
            <p>Add a few mangoes and they will show up here.</p>
            <button className="btn btn-primary" type="button" onClick={onClose}>
              Browse mangoes
            </button>
          </div>
        ) : (
          <>
            <div className="drawer__scroll">
              <div className="shipping">
                {totals.amountToFreeShipping > 0 ? (
                  <p>
                    Add <strong>{formatPrice(totals.amountToFreeShipping)}</strong> more for free shipping
                  </p>
                ) : (
                  <p>
                    <strong>You unlocked free shipping!</strong>
                  </p>
                )}
                <div className="shipping__bar">
                  <div className="shipping__fill" style={{ width: `${progress}%` }} />
                </div>
              </div>

              <ul className="drawer__lines">
                {lines.map((line) => (
                  <CartLine
                    key={line.id}
                    line={line}
                    onChangeQty={onChangeQty}
                    onRemove={onRemove}
                  />
                ))}
              </ul>

              <label className="gift">
                <input
                  type="checkbox"
                  checked={giftBox}
                  onChange={(event) => onGiftBoxChange(event.target.checked)}
                />
                <span>
                  Make it a gift box <em>(+{formatPrice(GIFT_BOX_FEE)})</em>
                </span>
              </label>

              <PromoCode appliedCode={promoCode} onApply={onApplyPromo} onClear={onClearPromo} />
            </div>

            <div className="drawer__foot">
              <dl className="totals">
                <div>
                  <dt>Subtotal</dt>
                  <dd>{formatPrice(totals.subtotal)}</dd>
                </div>
                {totals.discount > 0 && (
                  <div className="totals__discount">
                    <dt>Promo {promoCode}</dt>
                    <dd>&minus;{formatPrice(totals.discount)}</dd>
                  </div>
                )}
                {totals.giftFee > 0 && (
                  <div>
                    <dt>Gift box</dt>
                    <dd>{formatPrice(totals.giftFee)}</dd>
                  </div>
                )}
                <div>
                  <dt>Shipping</dt>
                  <dd>{totals.shipping === 0 ? 'Free' : formatPrice(totals.shipping)}</dd>
                </div>
                <div className="totals__total">
                  <dt>Total</dt>
                  <dd>{formatPrice(totals.total)}</dd>
                </div>
              </dl>
              <button className="btn btn-primary drawer__checkout" type="button" onClick={onCheckout}>
                Place order
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
