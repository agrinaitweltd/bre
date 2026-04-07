import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getServicesByGroup, type ServiceData } from '../data/services'
import './Header.css'

const navLinks = [
  { label: 'Home', path: '/', num: '01' },
  { label: 'About', path: '/about', num: '02' },
  { label: 'Services', path: '/services', num: '03', hasDropdown: true },
  { label: 'Contact', path: '/contact', num: '04' },
]

const homeServices = getServicesByGroup('home')
const businessServices = getServicesByGroup('business')
const allServices = [...homeServices, ...businessServices]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Top bar — visible before scroll */}
      <div className={`header-topbar${scrolled ? ' header-topbar--hidden' : ''}`}>
        <div className="container header-topbar__inner">
          <div className="header-topbar__left">
            <span>Covering London &amp; Surrounding Areas</span>
          </div>
          <div className="header-topbar__right">
            <a href="tel:02012345678" className="header-topbar__link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              020 1234 5678
            </a>
            <a href="mailto:hello@breezyeemoves.co.uk" className="header-topbar__link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              hello@breezyeemoves.co.uk
            </a>
          </div>
        </div>
      </div>

      <header className={`header${scrolled ? ' header--scrolled' : ''}${menuOpen ? ' header--menu-open' : ''}`}>
        <div className="container header__inner">
          <Link to="/" className="header__logo">
            <img src="/logo.png" alt="Breezyee Moves" className="header__logo-img" />
          </Link>

          {/* Desktop nav — visible before scroll */}
          <nav className={`header__nav-desktop${scrolled ? ' header__nav-desktop--hidden' : ''}`}>
            {navLinks.map((link) => (
              <div key={link.path} className={`header__nav-item${link.hasDropdown ? ' header__nav-item--dropdown' : ''}`}>
                <Link
                  to={link.path}
                  className={`header__link${location.pathname === link.path ? ' header__link--active' : ''}`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg className="header__chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                  )}
                </Link>
                {link.hasDropdown && (
                  <div className="header__dropdown">
                    <div className="header__dropdown-inner">
                      <div className="header__dropdown-col">
                        <span className="header__dropdown-heading">For Homes & Individuals</span>
                        {homeServices.map((s: ServiceData) => (
                          <Link key={s.slug} to={`/services/${s.slug}`} className="header__dropdown-link">{s.title}</Link>
                        ))}
                      </div>
                      <div className="header__dropdown-col">
                        <span className="header__dropdown-heading">For Businesses</span>
                        {businessServices.map((s: ServiceData) => (
                          <Link key={s.slug} to={`/services/${s.slug}`} className="header__dropdown-link">{s.title}</Link>
                        ))}
                      </div>
                      <div className="header__dropdown-col header__dropdown-col--cta">
                        <span className="header__dropdown-heading">Need help choosing?</span>
                        <p className="header__dropdown-copy">
                          Our team can recommend the best service for your move, clearance or logistics project.
                        </p>
                        <Link to="/contact" className="header__dropdown-cta">Get a quote</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Quote button — visible before scroll on desktop */}
          <Link to="/contact" className={`header__quote-btn${scrolled ? ' header__quote-btn--hidden' : ''}`}>
            Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>

          {/* Menu button — visible after scroll on desktop, always on mobile */}
          <button
            className={`header__menu-btn${scrolled ? ' header__menu-btn--visible' : ''}${menuOpen ? ' header__menu-btn--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="header__menu-btn-text">{menuOpen ? 'CLOSE' : 'MENU'}</span>
            <span className="header__menu-btn-icon">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {/* Fullscreen menu overlay */}
      <div className={`header__mobile${menuOpen ? ' header__mobile--open' : ''}`}>
        <div className="header__mobile-inner">
          <nav className="header__mobile-nav">
            {navLinks.map((link, i) => (
              <div key={link.path} className="header__mobile-item" style={{ transitionDelay: `${menuOpen ? i * 80 + 100 : 0}ms` }}>
                <div className="header__mobile-row">
                  <span className="header__mobile-num">{link.num}</span>
                  {link.hasDropdown ? (
                    <button
                      className={`header__mobile-link header__mobile-link--toggle${servicesOpen ? ' header__mobile-link--expanded' : ''}`}
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {link.label}
                      <svg className="header__mobile-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                    </button>
                  ) : (
                    <Link to={link.path} className="header__mobile-link">
                      {link.label}
                      {location.pathname === link.path && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                      )}
                    </Link>
                  )}
                </div>
                {link.hasDropdown && (
                  <div className={`header__mobile-sub${servicesOpen ? ' header__mobile-sub--open' : ''}`}>
                    {allServices.map((s: ServiceData) => (
                      <Link key={s.slug} to={`/services/${s.slug}`} className="header__mobile-sub-link">
                        <span className="header__mobile-sub-chevron">&rsaquo;</span>
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
