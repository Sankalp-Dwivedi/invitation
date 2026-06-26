import { useMemo } from 'react'
import './FlowerRain.css'

const PETAL_TYPES = ['🌸', '🏵️', '🌼', '🌺', '💮']

function buildPetals(count) {
  return Array.from({ length: count }, (_, i) => {
    const left = Math.random() * 100
    const size = 14 + Math.random() * 26
    const duration = 7 + Math.random() * 9
    const delay = -Math.random() * 15
    const sway = 30 + Math.random() * 90
    const spin = 360 + Math.random() * 720
    const symbol = PETAL_TYPES[Math.floor(Math.random() * PETAL_TYPES.length)]
    const opacity = 0.55 + Math.random() * 0.4
    return { id: i, left, size, duration, delay, sway, spin, symbol, opacity }
  })
}

export default function FlowerRain({ count = 38 }) {
  const petals = useMemo(() => buildPetals(count), [count])

  return (
    <div className="flower-rain" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            '--fall-duration': `${p.duration}s`,
            '--fall-delay': `${p.delay}s`,
            '--sway': `${p.sway}px`,
            '--spin': `${p.spin}deg`,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  )
}
