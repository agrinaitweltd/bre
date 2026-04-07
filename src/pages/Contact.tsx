import { useState, type FormEvent } from 'react'
import { useInView } from '../hooks/useInView'
import { useSearchParams } from 'react-router-dom'
import './Contact.css'

const serviceOptions = [
  'Home/Office/Storage Removals',
  'End of Tenancy Clearance',
  'Student Accommodation Relocations',
  'Man & Van Collection/Delivery',
  'Self-Drive Van Hire',
  'Office & Warehouse Relocations',
  'Construction Site Logistics',
  'On-Demand Breezyeers',
  'Other',
]

const propertySizes = [
  { label: '1 Bed', icon: '🏠' },
  { label: '2 Bed', icon: '🏠' },
  { label: '3 Bed', icon: '🏡' },
  { label: '4 Bed', icon: '🏡' },
  { label: '5+ Bed', icon: '🏘️' },
]

const testimonials = [
  { name: 'Sarah T.', date: '15/02/2026', rating: 5, text: 'Very prompt on the day. Moved everything without any breakages or damage. Things protected with custom made padded covers. Experience pleasant and happy.' },
  { name: 'James K.', date: '08/01/2026', rating: 5, text: 'Brilliant service from start to finish. The team were on time, professional and took great care of all our belongings. Would use again in a heartbeat.' },
]

const partnerBadges = ['Fully Insured', 'Ombudsman Backed', 'Competitive', 'Vetted']

export default function Contact() {
  const formRef = useInView<HTMLElement>()
  const [searchParams] = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [propertySize, setPropertySize] = useState('')
  const [selectedService, setSelectedService] = useState(searchParams.get('service') || '')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero__inner">
            <h1 className="contact-hero__title">Get Your Free Quote</h1>
            <p className="contact-hero__subtitle">
              Compare quotes from our expert team. Instantly get a competitive, no-obligation quote for your move.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-section" ref={formRef}>
        <div className="container contact-grid">
          {/* Form */}
          <div className="contact-form-wrap slide-in-left">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success__icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3>Thank You!</h3>
                <p>We've received your request and will get back to you within 24 hours with your personalised quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {/* Property Size */}
                <div className="contact-form__section">
                  <h2 className="contact-form__section-title">Size of current property</h2>
                  <div className="contact-form__property-grid">
                    {propertySizes.map((size) => (
                      <button
                        type="button"
                        key={size.label}
                        className={`contact-form__property-btn${propertySize === size.label ? ' contact-form__property-btn--active' : ''}`}
                        onClick={() => setPropertySize(size.label)}
                      >
                        <span className="contact-form__property-icon">{size.icon}</span>
                        <span className="contact-form__property-label">{size.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Move Details */}
                <div className="contact-form__section">
                  <h2 className="contact-form__section-title">Removals details</h2>
                  <div className="contact-form__field">
                    <label htmlFor="service">Service Required</label>
                    <select id="service" name="service" required value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                      <option value="" disabled>Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="current-address">Current property address</label>
                    <input type="text" id="current-address" name="current-address" placeholder="Start typing the address or postcode..." />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="new-address">New property address</label>
                    <input type="text" id="new-address" name="new-address" placeholder="Start typing the address or postcode..." />
                  </div>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="move-date">Estimated moving date</label>
                      <input type="date" id="move-date" name="move-date" />
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" placeholder="020 1234 5678" />
                    </div>
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="instructions">Special instructions</label>
                    <textarea id="instructions" name="instructions" rows={3} placeholder="Please list special requirements e.g. packing / storage / pianos / awkward access / limited parking..." />
                  </div>
                </div>

                {/* Personal Details */}
                <div className="contact-form__section">
                  <h2 className="contact-form__section-title">Your details</h2>
                  <p className="contact-form__section-note">
                    By completing this form your details are shared with our team for providing a quote, but absolutely no one else.
                  </p>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="first-name">First name</label>
                      <input type="text" id="first-name" name="first-name" required />
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="last-name">Last name</label>
                      <input type="text" id="last-name" name="last-name" required />
                    </div>
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" name="email" required placeholder="john@example.com" />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary contact-form__submit">
                  See Your Quotes
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="contact-sidebar slide-in-right">
            {/* Testimonial */}
            <div className="contact-sidebar__card">
              <h3>What our customers say...</h3>
              {testimonials.map((t) => (
                <div className="contact-sidebar__review" key={t.name}>
                  <div className="contact-sidebar__stars">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                  <p className="contact-sidebar__review-text">"{t.text}"</p>
                  <span className="contact-sidebar__review-author">{t.name} on {t.date}</span>
                </div>
              ))}
            </div>

            {/* Partner badges */}
            <div className="contact-sidebar__card">
              <h3>Our partners are all:</h3>
              <ul className="contact-sidebar__badges">
                {partnerBadges.map((b) => (
                  <li key={b}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div className="contact-sidebar__card contact-sidebar__card--dark">
              <h3>Need to talk?</h3>
              <ul className="contact-sidebar__contact-list">
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  <span>020 1234 5678</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span>hello@breezyeemoves.co.uk</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span>Mon-Sat: 7am-8pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
