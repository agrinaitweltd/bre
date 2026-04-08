import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import './About.css'

const values = [
  { num: '01', title: 'Quality', desc: 'We use only the finest materials and proven techniques, ensuring every project we complete meets the highest standard of craftsmanship.' },
  { num: '02', title: 'Reliability', desc: 'We show up on time, complete work on schedule and communicate clearly throughout every project — no surprises, no excuses.' },
  { num: '03', title: 'Transparency', desc: 'Honest, upfront pricing with no hidden costs. We give you a clear picture of scope, timelines and cost from the very first meeting.' },
  { num: '04', title: 'Excellence', desc: 'We hold ourselves to an exceptional standard in everything we do — constantly improving our practices, skills and service.' },
]

const stats = [
  { value: '5,000+', label: 'Moves Completed' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '150+', label: 'Community Jobs Created' },
  { value: '12', label: 'Years of Service' },
]

export default function About() {
  const storyRef = useInView<HTMLElement>()
  const missionRef = useInView<HTMLElement>()
  const valuesRef = useInView<HTMLElement>()
  const logoRef = useInView<HTMLElement>()
  const impactRef = useInView<HTMLElement>()
  const galleryRef = useInView<HTMLElement>()

  return (
    <>
      <Seo
        title="About Us | Breezyee Moves"
        description="Learn about Breezyee Moves — a London-based social enterprise delivering reliable, fairly priced removal and logistics services across the city."
        canonical="/about"
      />
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-hero__bg">
          <img src="/about-banner.png" alt="" />
          <div className="about-hero__overlay" />
        </div>
        <div className="container about-hero__inner">
          <span className="about-hero__eyebrow fade-in">About Us</span>
          <h1 className="about-hero__title slide-in-up">About Breezyee Moves</h1>
          <p className="about-hero__subtitle fade-in">
            Trusted removal professionals, dedicated to quality and reliability across London and surrounding areas.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section about-story" ref={storyRef}>
        <div className="container about-story__grid">
          <div className="about-story__content slide-in-left">
            <span className="about-story__eyebrow">Our Story</span>
            <h2 className="about-story__title">Founded on Craftsmanship, Built on Trust</h2>
            <p>
              Breezyee Moves was founded with a single unwavering commitment — to deliver exceptional removal services that homeowners and businesses could genuinely rely on. What started as a small team of dedicated professionals has grown into a comprehensive property services company trusted by clients across London.
            </p>
            <p>
              From day one, our philosophy has remained consistent: quality craftsmanship, honest communication and a genuine care for every project and every client. We believe that your home or business deserves the very best — and that's exactly what we deliver.
            </p>
            <p>
              Today, Breezyee Moves operates a skilled, multidisciplinary team covering removals, logistics, clearance, and specialist services. Every team member shares our core values and commitment to the highest professional standard.
            </p>
            <Link to="/contact" className="btn btn-primary about-story__btn">Get In Touch</Link>
          </div>
          <div className="about-story__image slide-in-right">
            <img src="/about-story.png" alt="Our team at work" />
          </div>
        </div>
      </section>

      {/* Brand & Social Mission */}
      <section className="section about-brand" ref={logoRef}>
        <div className="container about-brand__inner">
          <div className="about-brand__logo-col scale-in">
            <img src="/logo9.png" alt="Breezyee Moves" className="about-brand__logo-img" />
          </div>
          <div className="about-brand__content slide-in-right">
            <span className="section-eyebrow">Our Social Mission</span>
            <h2 className="about-brand__title">Bridging Gaps, Building Futures</h2>
            <p className="about-brand__text">
              At Breezyee Moves, we bridge gaps for young people (NEET), empowering them to overcome challenges and build brighter futures. Every move you book with us directly supports our training and employment programmes.
            </p>
            <p className="about-brand__text">
              Need manpower or a hassle-free end-of-tenancy clearance? Hire a Breezyee crew by the hour — efficient, thorough, and ready to work!
            </p>
            <div className="about-brand__badges">
              <span className="about-brand__badge">Covering London & Surrounding Areas</span>
              <span className="about-brand__badge">BREEZYEE GROUP LTD / Company No. 15484073</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="about-mission-quote" ref={missionRef}>
        <div className="container">
          <div className="about-mission-quote__card fade-in">
            <span className="about-mission-quote__eyebrow">Our Mission</span>
            <blockquote>
              "To provide exceptional removal and logistics services that exceed expectations — delivered by skilled professionals who take genuine pride in every job, while creating meaningful opportunities for young people in our community."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section about-values" ref={valuesRef}>
        <div className="container">
          <div className="about-values__header">
            <span className="section-eyebrow fade-in">What We Stand For</span>
            <h2 className="section-title fade-in">Our Core Values</h2>
            <p className="section-subtitle fade-in">
              These principles guide every decision we make and every project we deliver.
            </p>
          </div>
          <div className="values-grid stagger-children">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <span className="value-card__num">{v.num}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section about-gallery" ref={galleryRef}>
        <div className="container">
          <div className="about-gallery__header">
            <span className="section-eyebrow fade-in">Gallery</span>
            <h2 className="section-title fade-in">See Us In Action</h2>
          </div>
          <div className="about-gallery__grid stagger-children">
            <div className="about-gallery__item about-gallery__item--tall">
              <img src="/gallery-1.png" alt="Breezyee team loading" />
            </div>
            <div className="about-gallery__item">
              <img src="/gallery-2.png" alt="Packed and ready" />
            </div>
            <div className="about-gallery__item">
              <img src="/gallery-3.png" alt="Safe delivery" />
            </div>
            <div className="about-gallery__item about-gallery__item--wide">
              <img src="/gallery-4.png" alt="Community projects" />
            </div>
            <div className="about-gallery__item">
              <img src="/gallery-5.png" alt="Warehouse logistics" />
            </div>
            <div className="about-gallery__item">
              <img src="/gallery6.png" alt="Happy customers" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section about-impact" ref={impactRef}>
        <div className="container">
          <div className="about-impact__header">
            <span className="section-eyebrow fade-in">Our Impact</span>
            <h2 className="section-title fade-in">Numbers That Matter</h2>
            <p className="section-subtitle fade-in">
              Statistics Source: UK Office for National Statistics, 2023
            </p>
          </div>
          <div className="impact-grid stagger-children">
            {stats.map((s) => (
              <div className="impact-card" key={s.label}>
                <span className="impact-card__value">{s.value}</span>
                <span className="impact-card__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
