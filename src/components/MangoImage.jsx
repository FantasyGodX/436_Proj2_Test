import { useId } from 'react'

function MangoImage({ body, blush, label, className }) {
  const uid = useId()
  const skinId = `skin-${uid}`
  const shineId = `shine-${uid}`

  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      role="img"
      aria-label={label}
    >
      <defs>
        <radialGradient id={skinId} cx="68%" cy="30%" r="85%">
          <stop offset="0%" stopColor={blush} />
          <stop offset="55%" stopColor={body} />
          <stop offset="100%" stopColor={body} stopOpacity="0.85" />
        </radialGradient>
        <linearGradient id={shineId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <ellipse cx="100" cy="188" rx="62" ry="8" fill="#000" opacity="0.1" />

      <path
        d="M118 32c42 2 70 38 64 82-5 40-42 68-84 64-36-3-70-28-74-60-2-24 14-36 36-46 24-11 28-36 58-40z"
        fill={`url(#${skinId})`}
      />
      <path
        d="M118 32c42 2 70 38 64 82-3 22-14 38-30 49 18-18 22-42 14-66-8-26-26-48-48-65z"
        fill="#000"
        opacity="0.07"
      />
      <ellipse
        cx="140"
        cy="68"
        rx="16"
        ry="30"
        transform="rotate(30 140 68)"
        fill={`url(#${shineId})`}
      />
      <g fill="#000" opacity="0.1">
        <circle cx="95" cy="120" r="1.8" />
        <circle cx="120" cy="140" r="1.8" />
        <circle cx="70" cy="100" r="1.8" />
        <circle cx="150" cy="115" r="1.8" />
        <circle cx="108" cy="96" r="1.8" />
      </g>

      <path d="M116 33c0-9 3-15 9-19" stroke="#5a3a1a" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M124 15c14-12 36-10 46 2-14 8-34 9-46-2z" fill="#2f6b3a" />
      <path d="M124 15c14-2 30-1 44 2" stroke="#1f4a28" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

export default MangoImage
