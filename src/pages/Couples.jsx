import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import './Couples.css'

function Couples() {
  return (
    <div className="couples">
      <section className="section-minimal">
        <div className="container-narrow">
          <h1>Therapy for Couples</h1>
          <p className="intro-text">
            Couples therapy offers a supportive environment where partners can improve
            communication, resolve conflicts, and deepen their connection. Whether you're
            navigating a rough patch or looking to strengthen your bond, I'm here to help.
          </p>
        </div>
      </section>

      <section className="section-minimal section-alt">
        <div className="container">
          <h2>Areas of Focus</h2>
          <div className="service-cards">
            <Link to="/couples/communication" className="service-card">
              <h3>Communication & Connection</h3>
              <p>
                Using proven approaches like The Gottman Method and Emotionally Focused
                Therapy (EFT), I help couples build stronger communication patterns and
                foster deeper emotional intimacy.
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

export default Couples
