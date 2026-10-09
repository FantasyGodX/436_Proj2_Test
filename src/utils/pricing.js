import {
  FREE_SHIPPING_THRESHOLD,
  GIFT_BOX_FEE,
  PROMO_CODES,
  SHIPPING_FEE,
} from '../data/mangoes'

export function calculateTotals(lines, { promoCode, giftBox }) {
  const subtotal = lines.reduce((sum, line) => sum + line.price * line.qty, 0)
  const discount = subtotal * (PROMO_CODES[promoCode] ?? 0)
  const giftFee = giftBox && lines.length > 0 ? GIFT_BOX_FEE : 0
  const qualifiesForFreeShipping = subtotal - discount >= FREE_SHIPPING_THRESHOLD
  const shipping = lines.length === 0 || qualifiesForFreeShipping ? 0 : SHIPPING_FEE
  const amountToFreeShipping = Math.max(FREE_SHIPPING_THRESHOLD - (subtotal - discount), 0)

  return {
    subtotal,
    discount,
    giftFee,
    shipping,
    total: subtotal - discount + giftFee + shipping,
    amountToFreeShipping,
  }
}
