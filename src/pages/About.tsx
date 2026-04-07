import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'
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

const team = [
  { name: 'Marcus Johnson', role: 'Founder & Director', img: '/team-marcus.jpg' },
  { name: 'Priya Sharma', role: 'Operations Manager', img: '/team-priya.jpg' },
]

export default function About() {
  const storyRef = useInView<HTMLElement>()
  const missionRef = useInView<HTMLElement>()
  const valuesRef = useInView<HTMLElement>()
  const teamRef = useInView<HTMLElement>()

  return (
    <>
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-hero__bg">
          <img src="/about-banner.jpg" alt="" />
          <div className="about-hero__overlay" />
        </div>
        <div className="container about-hero__inner">
          <h1 className="about-hero__title">About Breezyee Moves</h1>
          <p className="about-hero__subtitle">
            Trusted removal professionals, dedicated to quality and reliability across London.
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
          </div>
          <div className="about-story__image slide-in-right">
            <img src="/about-impact.jpg" alt="Our team at work" />
          </div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="about-mission-quote" ref={missionRef}>
        <div className="container">
          <div className="about-mission-quote__card fade-in">
            <span className="about-mission-quote__eyebrow">Our Mission</span>
            <blockquote>
              "To provide exceptional removal and logistics services that exceed expectations — delivered by skilled professionals who take genuine pride in every job."
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

      {/* Impact Stats */}
      <section className="section about-impact">
        <div className="container">
          <div className="impact-grid">
            {stats.map((s, i) => (
              <div className="impact-card fade-in" key={s.label} style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="impact-card__value">{s.value}</span>
                <span className="impact-card__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section about-team" ref={teamRef}>
        <div className="container">
          <div className="about-team__header">
            <span className="section-eyebrow fade-in">Meet The Team</span>
            <h2 className="section-title fade-in">The People Behind the Work</h2>
            <p className="section-subtitle fade-in">
              Our team of experienced professionals are the backbone of Breezyee Moves. Skilled, reliable and passionate about the work they do.
            </p>
          </div>
          <div className="team-grid stagger-children">
            {team.map((t) => (
              <div className="team-card" key={t.name}>
                <div className="team-card__img">
                  <img src={t.img} alt={t.name} />
                </div>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
