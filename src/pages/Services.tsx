import { getServicesByGroup, type ServiceData } from '../data/services'
import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'
import './Services.css'

const homeServices = getServicesByGroup('home')
const businessServices = getServicesByGroup('business')

function ServiceGroup({ title, services }: { title: string; services: ServiceData[] }) {
  const ref = useInView<HTMLDivElement>()
  return (
    <div className="service-group" ref={ref}>
      <h2 className="service-group__title fade-in">{title}</h2>
      <div className="service-group__grid">
        {services.map((s, i) => (
          <Link to={`/services/${s.slug}`} className="service-item fade-in" key={s.slug} style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="service-item__body">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="service-item__link">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Services() {
  const bannerRef = useInView<HTMLElement>()
  return (
    <>
      <section className="page-banner" ref={bannerRef}>
        <div className="container">
          <h1 className="page-banner__title fade-in">Our Services</h1>
          <p className="page-banner__subtitle fade-in">
            For homes, individuals, and businesses — discover our full range of removal and logistics solutions.
          </p>
        </div>
      </section>

      <section className="section services-page">
        <div className="container">
          <ServiceGroup title="For Homes & Individuals" services={homeServices} />
          <ServiceGroup title="For Businesses (B2B Solutions)" services={businessServices} />

          <div className="services-page__cta">
            <p>Need a custom solution? We're happy to help.</p>
            <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
