import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import Icon from '../components/Icon'
import { services } from '../data/services'
import './Home.css'

const whyUs = [
  { icon: 'shield', title: 'Trusted Movers', desc: 'Fully insured and vetted professionals you can rely on.' },
  { icon: 'tag', title: 'Affordable Pricing', desc: 'Competitive rates with no hidden fees or surprise charges.' },
  { icon: 'hand', title: 'Careful Handling', desc: 'Every item treated with the utmost care and attention.' },
  { icon: 'calendar', title: 'Flexible Scheduling', desc: 'Move on your terms — evenings, weekends, and short notice.' },
  { icon: 'heart', title: 'Community Mission', desc: 'A social enterprise giving back to London communities.' },
]

const steps = [
  { num: '01', title: 'Request a Quote', desc: 'Tell us about your move and get a free, no-obligation quote within hours.' },
  { num: '02', title: 'Plan Your Move', desc: 'We work with you to plan every detail so moving day runs smoothly.' },
  { num: '03', title: 'We Move You Safely', desc: 'Sit back while our expert team handles everything with care.' },
]

const testimonials = [
  { name: 'Sarah T.', location: 'Islington, London', text: 'Breezyee Moves made our house move completely stress-free. The team was punctual, careful, and incredibly friendly. Could not recommend them more highly!', rating: 5 },
  { name: 'James K.', location: 'Camden, London', text: 'Used their man and van service for a last-minute move. They were flexible, affordable, and did an amazing job. Will definitely use again.', rating: 5 },
  { name: 'Amara O.', location: 'Brixton, London', text: 'As a student on a budget, I was worried about moving costs. Breezyee offered a brilliant student rate and the service was top-notch. Love their community focus!', rating: 5 },
]

const team = [
  { name: 'Marcus Johnson', role: 'Founder & Director', img: '/team-marcus.jpg', desc: 'Marcus started Breezyee Moves with a vision to create a removal service that truly gives back to the community.' },
  { name: 'Priya Sharma', role: 'Operations Manager', img: '/team-priya.jpg', desc: 'Priya keeps every move running like clockwork, coordinating teams and logistics across London.' },
  { name: 'David Osei', role: 'Lead Mover', img: '/team-david.jpg', desc: 'With 8 years of experience, David leads our moving crews with expertise and genuine care.' },
  { name: 'Sophie Chen', role: 'Customer Relations', img: '/team-sophie.jpg', desc: 'Sophie ensures every customer has an exceptional experience from first call to final box.' },
]

export default function Home() {
  const servicesRef = useInView<HTMLElement>()
  const aboutRef = useInView<HTMLElement>()
  const whyRef = useInView<HTMLElement>()
  const howRef = useInView<HTMLElement>()
  const teamRef = useInView<HTMLElement>()
  const testimonialsRef = useInView<HTMLElement>()
  const ctaRef = useInView<HTMLElement>()

  return (
    <>
      <Hero />

      {/* Services Overview */}
      <section className="section home-services" ref={servicesRef} id="services">
        <div className="container">
          <h2 className="section-title blur-in">Our Services</h2>
          <p className="section-subtitle blur-in">
            From a single item to an entire household, we offer a comprehensive range
            of removal and logistics services across London and beyond.
          </p>
          <div className="services-grid stagger-children">
            {services.map((s) => (
              <ServiceCard key={s.slug} title={s.title} desc={s.desc} slug={s.slug} />
            ))}
          </div>
          <div className="services-cta fade-in">
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* About / Why Choose Us Section */}
      <section className="section home-about" ref={aboutRef}>
        <div className="container home-about__inner">
          <div className="home-about__image rotate-in">
            <img src="/about-impact.jpg" alt="Community impact" />
          </div>
          <div className="home-about__content slide-in-right">
            <h2 className="home-about__title">WHY CHOOSE US?</h2>
            <ul className="home-about__list">
              <li>✔ Unmatched Reliability</li>
              <li>Public Liability & Goods-in-Transit Insurance</li>
              <li>Serving London & Surrounding Areas</li>
              <li>Ο Modern Fleet & Equipment</li>
              <li>Ο Stress-Free End of Tenancy<br />Leave properties spotless and inspection-ready.</li>
            </ul>
            <h3 className="home-about__subtitle">Social Impact: Teamwork Makes The Dream Work</h3>
            <p className="home-about__text">
              With 11.6% youth unemployment in the UK (2023), every move or clearance job you book creates opportunities. We hire and train young people not in education, employment, or training (NEET), prioritising those facing systemic barriers or seeking a fresh start. By investing in their potential, we're tackling unemployment and fostering inclusive growth.
            </p>
            <h3 className="home-about__subtitle">The Breezyeers Advantage</h3>
            <p className="home-about__text">
              Our workforce isn't just strong - they're driven, skilled, and safety-trained. Need extra hands? Hire Breezyeers for:
            </p>
            <ul className="home-about__list">
              <li>Heavy lifting</li>
              <li>Packing/unpacking</li>
              <li>End-of-tenancy clean-ups</li>
              <li>Short-term project support</li>
            </ul>
            <h3 className="home-about__subtitle">Cost-Effective Flexibility</h3>
            <p className="home-about__text">
              Choose full-service relocations, DIY van hires, or tailored clearance packages - we adapt to your budget and timeline.
            </p>
            <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section home-how" ref={howRef}>
        <div className="container">
          <h2 className="section-title slide-in-up">How It Works</h2>
          <p className="section-subtitle slide-in-up">
            Three simple steps to a stress-free move.
          </p>
          <div className="steps-grid stagger-children">
            {steps.map((step) => (
              <div className="step-card" key={step.num}>
                <span className="step-card__num">{step.num}</span>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="section home-testimonials" ref={testimonialsRef}>
        <div className="container">
          <h2 className="section-title slide-in-up">What Our Customers Say</h2>
          <p className="section-subtitle slide-in-up">
            Don't just take our word for it — hear from people we've helped move.
          </p>
          <div className="testimonials-grid stagger-children">
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.name}>
                <div className="testimonial-card__stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section home-cta" ref={ctaRef}>
        <div className="container home-cta__inner fade-in">
          <h2 className="home-cta__title">Ready to Move?</h2>
          <p className="home-cta__text">
            Let Breezyee Moves handle it. Get your free quote today and experience
            London's most trusted community-driven removal service.
          </p>
          <div className="home-cta__buttons">
            <Link to="/contact" className="btn btn-white">Get a Free Quote</Link>
            <a href="tel:02012345678" className="btn btn-outline home-cta__phone">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              020 1234 5678
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
