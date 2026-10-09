import { useState } from 'react'
import { PROMO_CODES } from '../data/mangoes'
import './PromoCode.css'

function PromoCode({ appliedCode, onApply, onClear }) {
  const [draft, setDraft] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const code = draft.trim().toUpperCase()

    if (!(code in PROMO_CODES)) {
      setError('That code is not valid. Try MANGO10.')
      return
    }
    onApply(code)
    setDraft('')
    setError('')
  }

  if (appliedCode) {
    return (
      <div className="promo promo--applied">
        <p>
          <strong>{appliedCode}</strong> applied: {PROMO_CODES[appliedCode] * 100}% off
        </p>
        <button type="button" onClick={onClear}>
          Remove
        </button>
      </div>
    )
  }

  return (
    <form className="promo" onSubmit={handleSubmit}>
      <label htmlFor="promo-input">Promo code</label>
      <div className="promo__row">
        <input
          id="promo-input"
          type="text"
          placeholder="MANGO10"
          value={draft}
          onChange={(event) => {
            setDraft(event.target.value)
            setError('')
          }}
        />
        <button className="btn btn-ghost" type="submit" disabled={draft.trim() === ''}>
          Apply
        </button>
      </div>
      {error && (
        <p className="promo__error" role="alert">
          {error}
        </p>
      )}
    </form>
  )
}

export default PromoCode
