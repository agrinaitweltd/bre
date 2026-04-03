import { useParams, Link, Navigate } from 'react-router-dom'
import { getServiceBySlug, services } from '../data/services'
import { useInView } from '../hooks/useInView'
import './ServiceDetail.css'

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  const contentRef = useInView<HTMLElement>()
  const relatedRef = useInView<HTMLElement>()

  if (!service) return <Navigate to="/services" replace />

  const related = services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3)

  return (
    <>
      {/* Banner */}
      <section className="sd-banner">
        <div className="sd-banner__bg">
          <img src={service.img} alt="" />
          <div className="sd-banner__overlay" />
        </div>
        <div className="container sd-banner__inner">
          <Link to="/services" className="sd-banner__back">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            All Services
          </Link>
          <h1 className="sd-banner__title">{service.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section sd-content" ref={contentRef}>
        <div className="container sd-content__grid">
          <div className="sd-content__main slide-in-left">
            <div className="sd-content__image">
              <img src={service.img} alt={service.title} />
            </div>
            <h2>About This Service</h2>
            <p>{service.fullDesc}</p>
          </div>

          <div className="sd-content__sidebar slide-in-right">
            <div className="sd-features">
              <h3>What's Included</h3>
              <ul>
                {service.features.map((f) => (
                  <li key={f}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sd-cta-card">
              <h3>Need This Service?</h3>
              <p>Get a free, no-obligation quote today.</p>
              <Link to="/contact" className="btn btn-primary sd-cta-btn">Get a Quote</Link>
              <a href="tel:02012345678" className="sd-phone">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                020 1234 5678
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="section sd-related" ref={relatedRef}>
          <div className="container">
            <h2 className="section-title fade-in">Related Services</h2>
            <div className="sd-related__grid">
              {related.map((s, i) => (
                <Link to={`/services/${s.slug}`} className="sd-related__card fade-in" key={s.slug} style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="sd-related__img">
                    <img src={s.img} alt={s.title} loading="lazy" />
                  </div>
                  <div className="sd-related__body">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <span className="sd-related__link">
                      Learn more
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
