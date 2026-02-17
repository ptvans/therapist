import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import terraPortrait from '../photos/terra-portrait.jpg'
import './Individuals.css'

function Individuals() {
  return (
    <div className="individuals">
      <section className="section-minimal">
        <div className="container">
          <div className="page-intro">
            <div className="page-intro-content">
              <h1>Therapy for Individuals</h1>
              <p className="intro-text">
                Individual therapy provides a confidential space to explore your thoughts,
                feelings, and behaviors with a trained professional. Whether you're facing
                a specific challenge or seeking personal growth, I'm here to support your journey.
              </p>
              <Link to="/new-client" className="btn btn-primary">Schedule a Free Consultation</Link>
            </div>
            <div className="page-portrait">
              <img src={terraPortrait} alt="Terra" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-minimal section-alt">
        <div className="container">
          <h2>Areas of Focus</h2>
          <div className="service-cards">
            <Link to="/individuals/anxiety" className="service-card">
              <h3>Anxiety Treatment</h3>
              <p>
                Using evidence-based approaches like Acceptance and Commitment Therapy (ACT)
                and Mindfulness-Based Stress Reduction (MBSR), I help individuals develop
                practical skills to manage anxiety and live more fully.
              </p>
              <span className="card-link">Learn more</span>
            </Link>

            <Link to="/individuals/sex-love-addiction" className="service-card">
              <h3>Sex & Love Addiction Recovery</h3>
              <p>
                A compassionate, non-judgmental space for individuals recovering from
                sex and love addiction. Together, we'll work toward healthier relationships
                and deeper self-understanding.
              </p>
              <span className="card-link">Learn more</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-minimal">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default Individuals
