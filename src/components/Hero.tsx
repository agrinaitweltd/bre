import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const phrases = ['Simple', 'Reliable', 'Stress-Free']

const stats = [
  { value: '500+', label: 'MOVES COMPLETED' },
  { value: '10+', label: 'YEARS EXPERIENCE' },
  { value: '100%', label: 'FULLY INSURED' },
  { value: '5\u2605', label: 'CLIENT RATING' },
]

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const phraseIdx = useRef(0)
  const pauseRef = useRef(false)

  useEffect(() => {
    const current = phrases[phraseIdx.current]

    if (pauseRef.current) return

    let delay: number

    if (!isDeleting) {
      if (displayText.length < current.length) {
        // Typing — variable speed for natural feel
        delay = 80 + Math.random() * 60
      } else {
        // Finished typing — pause before deleting
        pauseRef.current = true
        const t = setTimeout(() => {
          pauseRef.current = false
          setIsDeleting(true)
        }, 2200)
        return () => clearTimeout(t)
      }
    } else {
      if (displayText.length > 0) {
        // Deleting — faster
        delay = 35 + Math.random() * 20
      } else {
        // Finished deleting — move to next phrase
        setIsDeleting(false)
        phraseIdx.current = (phraseIdx.current + 1) % phrases.length
        return
      }
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1))
      } else {
        setDisplayText(current.slice(0, displayText.length - 1))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting])

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
              <span className="hero__cursor" />
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
