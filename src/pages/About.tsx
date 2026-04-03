import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import './About.css'

const values = [
  { icon: 'community', title: 'Community First', desc: 'Every move supports local employment and community programmes across London.' },
  { icon: 'leaf', title: 'Sustainability', desc: 'Eco-friendly practices including reusable packing materials and optimised routes.' },
  { icon: 'handshake', title: 'Inclusivity', desc: 'Training and employment opportunities for underrepresented groups.' },
  { icon: 'star', title: 'Excellence', desc: 'Professional service that exceeds expectations, every single time.' },
]

const stats = [
  { value: '5,000+', label: 'Moves Completed' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '150+', label: 'Community Jobs Created' },
  { value: '12', label: 'Years of Service' },
]

export default function About() {
  const missionRef = useInView<HTMLElement>()
  const valuesRef = useInView<HTMLElement>()
  const impactRef = useInView<HTMLElement>()
  const ctaRef = useInView<HTMLElement>()

  return (
    <>
      <section className="about-banner">
        <div className="about-banner__bg">
          <img src="/about-banner.jpg" alt="" />
          <div className="about-banner__overlay" />
        </div>
        <div className="container about-banner__inner">
          <h1 className="about-banner__title banner-anim">About Breezyee Moves</h1>
          <p className="about-banner__subtitle banner-anim banner-anim--delay">A social enterprise making moves matter.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section about-mission" ref={missionRef}>
        <div className="container about-mission__inner">
          <div className="about-mission__image slide-in-left">
            <img src="/about-impact.jpg" alt="Our team making an impact" />
          </div>
          <div className="about-mission__content slide-in-right">
            <h2>Who We Are</h2>
            <p>
              Breezyee Moves was founded with a simple belief: moving house or office
              shouldn't be stressful, and it should benefit the community. As a
              London-based social enterprise, we combine professional removal services
              with a deep commitment to social impact.
            </p>
            <p>
              Our team is made up of trained professionals from diverse backgrounds,
              many of whom have gained skills and employment through our community
              training programmes. When you choose Breezyee Moves, you're choosing a
              service that invests back into London's communities.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values" ref={valuesRef}>
        <div className="container">
          <h2 className="section-title blur-in">Our Values</h2>
          <p className="section-subtitle blur-in">
            The principles that guide everything we do.
          </p>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card fade-in" key={v.title} style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="value-card__icon"><Icon name={v.icon} /></span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section about-impact" ref={impactRef}>
        <div className="container">
          <h2 className="section-title blur-in">Our Impact</h2>
          <p className="section-subtitle blur-in">
            Numbers that reflect our commitment to London.
          </p>
          <div className="impact-grid">
            {stats.map((s, i) => (
              <div className="impact-card slide-in-up" key={s.label} style={{ transitionDelay: `${i * 120}ms` }}>
                <span className="impact-card__value counter-up" data-count={s.value}>{s.value}</span>
                <span className="impact-card__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta" ref={ctaRef}>
        <div className="container about-cta__inner fade-in">
          <h2>Ready to Make Your Move?</h2>
          <p>Join thousands of Londoners who've trusted Breezyee Moves.</p>
          <Link to="/contact" className="btn btn-white">Get a Free Quote</Link>
        </div>
      </section>
    </>
  )
}
