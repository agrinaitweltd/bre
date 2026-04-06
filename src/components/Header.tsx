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
    const onScroll = () => setScrolled(window.scrollY > 20)
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
      <header className={`header${scrolled ? ' header--scrolled' : ''}${menuOpen ? ' header--menu-open' : ''}`}>
        <div className="container header__inner">
          <Link to="/" className="header__logo">
            <img src="/logo.png" alt="Breezyee Moves" className="header__logo-img" />
          </Link>

          {/* Desktop nav */}
          <nav className="header__nav-desktop">
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

          <button
            className={`header__burger${menuOpen ? ' header__burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu — outside header to avoid stacking context issues */}
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
