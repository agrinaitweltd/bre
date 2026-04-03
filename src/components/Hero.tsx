import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const phrases = [
  'Simple',
  'Reliable',
  'Stress-Free',
]

const stats = [
  { value: '500+', label: 'MOVES COMPLETED' },
  { value: '10+', label: 'YEARS EXPERIENCE' },
  { value: '100%', label: 'FULLY INSURED' },
  { value: '5\u2605', label: 'CLIENT RATING' },
]

export default function Hero() {
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const tick = useCallback(() => {
    const current = phrases[phraseIdx]
    if (!deleting) {
      if (charIdx < current.length) {
        setCharIdx((c) => c + 1)
      } else {
        setTimeout(() => setDeleting(true), 1800)
        return
      }
    } else {
      if (charIdx > 0) {
        setCharIdx((c) => c - 1)
      } else {
        setDeleting(false)
        setPhraseIdx((p) => (p + 1) % phrases.length)
      }
    }
  }, [charIdx, deleting, phraseIdx])

  useEffect(() => {
    const speed = deleting ? 50 : 100
    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [tick, deleting])

  const displayText = phrases[phraseIdx].slice(0, charIdx)

  return (
    <section className="hero">
      <div className="hero__bg">
        <img src="/hero-moving.jpg" alt="" />
        <div className="hero__overlay" />
      </div>
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__tagline">LONDON'S TRUSTED REMOVAL SPECIALISTS</span>
          <h1 className="hero__title">
            Moving Made{' '}
            <span className="hero__typed">
              {displayText}
              <span className="hero__cursor">|</span>
            </span>
          </h1>
          <p className="hero__subtitle">
            We deliver reliable, stress-free removals across London and beyond.
            From house moves to specialist logistics &mdash; your belongings deserve the best.
          </p>
          <div className="hero__buttons">
            <Link to="/contact" className="btn hero__btn-quote">
              GET A QUOTE
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <a href="#services" className="btn hero__btn-services">OUR SERVICES</a>
          </div>
        </div>
      </div>
      <div className="hero__stats">
        <div className="container hero__stats-inner">
          {stats.map((s) => (
            <div className="hero__stat" key={s.label}>
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
