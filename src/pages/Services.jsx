import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import terraPortrait from '../photos/terra-portrait.jpg'
import './Services.css'

function Services() {
  return (
    <div className="services">
      <section className="section-minimal">
        <div className="container">
          <div className="services-intro">
            <div className="services-intro-content">
              <h1>Services & Rates</h1>

              <div className="rates-list">
            <div className="rate-item">
              <span className="rate-service">Individual Sessions</span>
              <span className="rate-price">$180</span>
            </div>
            <div className="rate-item">
              <span className="rate-service">Couples Sessions</span>
              <span className="rate-price">$300</span>
            </div>
          </div>

              <div className="rates-notes">
                <p>I offer a sliding scale if needed.</p>
              </div>
              <Link to="/new-client" className="btn btn-primary">Schedule a Free Consultation</Link>
            </div>
            <div className="services-portrait">
              <img src={terraPortrait} alt="Terra" />
            </div>
          </div>

          <div className="policy-section">
            <h2>Insurance</h2>
            <p>Most PPO health insurance accepted.</p>
            <p>
              I am not in-network with any insurance companies, so I do not bill
              directly. With PPO insurance plans, I am considered an out-of-network
              provider and you may be reimbursed in full or in part. I can provide
              you with a monthly superbill to submit to your insurer.
            </p>
            <p>Please check your coverage by asking the following questions:</p>
            <ul className="insurance-questions">
              <li>Does my plan provide out-of-network reimbursement for mental health?</li>
              <li>Is there a deductible I need to meet before reimbursement begins?</li>
              <li>How many sessions per year does my health insurance cover?</li>
              <li>What percentage of the fee do you cover?</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>Payment</h2>
            <p>
              Cash, check, and all major credit cards accepted.
              Payment is collected prior to each session.
            </p>
          </div>

          <div className="policy-section">
            <h2>Cancellation Policy</h2>
            <p>
              I require at least 24 hours advanced notice for cancellations,
              or you will be required to pay the full cost of the session.
            </p>
          </div>

          <div className="policy-section">
            <h2>Teletherapy</h2>
            <p>
              I offer both in-person and virtual sessions for California residents.
              I use a secure HIPAA-compliant platform (Simple Practice) to conduct
              video sessions, which you can access on your computer, tablet, or phone.
            </p>
          </div>

        </div>
      </section>

      <section className="section-minimal section-cta">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default Services
