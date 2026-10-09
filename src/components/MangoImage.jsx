import { useId } from 'react'

const MANGO_PATH =
  'M104 34C152 20 192 62 184 112C176 162 128 186 86 176C44 166 14 136 22 98C29 64 62 44 104 34Z'

function MangoImage({ body, blush, label, className }) {
  const uid = useId()
  const skinId = `skin-${uid}`
  const shadeId = `shade-${uid}`
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
          <stop offset="60%" stopColor={body} />
        </radialGradient>
        <linearGradient id={shadeId} x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="55%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.22" />
        </linearGradient>
        <linearGradient id={shineId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <ellipse cx="100" cy="188" rx="64" ry="8" fill="#000" opacity="0.1" />

      <path d={MANGO_PATH} fill={`url(#${skinId})`} />
      <path d={MANGO_PATH} fill={`url(#${shadeId})`} />
      <ellipse
        cx="144"
        cy="72"
        rx="12"
        ry="30"
        transform="rotate(32 144 72)"
        fill={`url(#${shineId})`}
      />
      <g fill="#000" opacity="0.1">
        <circle cx="95" cy="120" r="1.8" />
        <circle cx="120" cy="142" r="1.8" />
        <circle cx="66" cy="100" r="1.8" />
        <circle cx="150" cy="118" r="1.8" />
        <circle cx="104" cy="92" r="1.8" />
      </g>

      <path d="M104 34c0-9 4-15 10-19" stroke="#5a3a1a" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M113 16c14-12 36-10 46 2-14 8-34 9-46-2z" fill="#2f6b3a" />
      <path d="M113 16c14-2 30-1 44 2" stroke="#1f4a28" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

export default MangoImage
