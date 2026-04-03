import { useState, useEffect } from 'react'
import './CookieConsent.css'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-consent">
      <div className="cookie-consent__card">
        <h3 className="cookie-consent__title">We value your privacy</h3>
        <p className="cookie-consent__text">
          We use cookies to enhance your browsing experience, serve personalised
          ads or content, and analyse our traffic. By clicking "Accept All", you
          consent to our use of cookies.
        </p>
        <div className="cookie-consent__actions">
          <button className="cookie-consent__btn cookie-consent__btn--outline" onClick={reject}>
            Reject All
          </button>
          <button className="cookie-consent__btn cookie-consent__btn--primary" onClick={accept}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
