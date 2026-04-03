import { useState, type FormEvent } from 'react'
import { useInView } from '../hooks/useInView'
import './Contact.css'

const serviceOptions = [
  'Self-Vehicle Hire', 'Man and Van', 'House Removals', 'Office Removals',
  'Student Removals', 'Furniture Removals', 'Piano Removals', 'Antique Removals',
  'Art Removals', 'Packaging Services', 'Storage Services', 'International Removals',
  'Pet Transportation', 'Other',
]

export default function Contact() {
  const formRef = useInView<HTMLElement>()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1 className="page-banner__title">Contact Us</h1>
          <p className="page-banner__subtitle">
            Get in touch for a free, no-obligation quote.
          </p>
        </div>
      </section>

      <section className="section contact-section" ref={formRef}>
        <div className="container contact-grid">
          {/* Form */}
          <div className="contact-form-wrap slide-in-left">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success__icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3>Thank You!</h3>
                <p>We've received your message and will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h2>Send Us a Message</h2>
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" required placeholder="John Smith" />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="john@example.com" />
                  </div>
                </div>
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="020 1234 5678" />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="service">Service Required</label>
                    <select id="service" name="service" required defaultValue="">
                      <option value="" disabled>Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="contact-form__field">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" rows={5} required placeholder="Tell us about your move..." />
                </div>
                <button type="submit" className="btn btn-primary contact-form__submit">
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="contact-info slide-in-right">
            <div className="contact-info__card">
              <h3>Get In Touch</h3>
              <ul className="contact-info__list">
                <li>
                  <div className="contact-info__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  </div>
                  <div>
                    <strong>Phone</strong>
                    <span>020 1234 5678</span>
                  </div>
                </li>
                <li>
                  <div className="contact-info__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <strong>Email</strong>
                    <span>hello@breezyeemoves.co.uk</span>
                  </div>
                </li>
                <li>
                  <div className="contact-info__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <strong>Coverage Area</strong>
                    <span>London & Surrounding Areas</span>
                  </div>
                </li>
                <li>
                  <div className="contact-info__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <strong>Hours</strong>
                    <span>Mon–Sat: 7am – 8pm<br/>Sun: 9am – 5pm</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="contact-map">
              <div className="contact-map__placeholder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>London & Surrounding Areas</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
