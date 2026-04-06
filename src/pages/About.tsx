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

      {/* Why Choose Us / Social Impact */}
      <section className="section about-mission" ref={missionRef}>
        <div className="container about-mission__inner">
          <div className="about-mission__image slide-in-left">
            <img src="/about-impact.jpg" alt="Our team making an impact" />
          </div>
          <div className="about-mission__content slide-in-right">
            <h2>WHY CHOOSE US?</h2>
            <ul className="about-mission__list">
              <li>✔ Unmatched Reliability</li>
              <li>Public Liability & Goods-in-Transit Insurance</li>
              <li>Serving London & Surrounding Areas</li>
              <li>Ο Modern Fleet & Equipment</li>
              <li>Ο Stress-Free End of Tenancy<br />Leave properties spotless and inspection-ready.</li>
            </ul>
            <h3 className="about-mission__subtitle">Social Impact: Teamwork Makes The Dream Work</h3>
            <p>
              With 11.6% youth unemployment in the UK (2023), every move or clearance job you book creates opportunities. We hire and train young people not in education, employment, or training (NEET), prioritising those facing systemic barriers or seeking a fresh start. By investing in their potential, we're tackling unemployment and fostering inclusive growth.
            </p>
            <h3 className="about-mission__subtitle">The Breezyeers Advantage</h3>
            <p>
              Our workforce isn't just strong - they're driven, skilled, and safety-trained. Need extra hands? Hire Breezyeers for:
            </p>
            <ul className="about-mission__list">
              <li>Heavy lifting</li>
              <li>Packing/unpacking</li>
              <li>End-of-tenancy clean-ups</li>
              <li>Short-term project support</li>
            </ul>
            <h3 className="about-mission__subtitle">Cost-Effective Flexibility</h3>
            <p>
              Choose full-service relocations, DIY van hires, or tailored clearance packages - we adapt to your budget and timeline.
            </p>
            <div className="about-mission__extra-grid">
              <div className="about-mission__extra-card">
                <h4>Professional Training</h4>
                <p>Every team member receives safety, handling, and customer care training before every job.</p>
              </div>
              <div className="about-mission__extra-card">
                <h4>Local London Expertise</h4>
                <p>Our crews know London's roads, parking challenges, and building access requirements.</p>
              </div>
              <div className="about-mission__extra-card">
                <h4>Transparent Pricing</h4>
                <p>Clear quotes, no hidden fees, and honest advice on the best service for your needs.</p>
              </div>
            </div>
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
