import { Link } from 'react-router-dom'
import terraPortrait from '../photos/terra-portrait.jpg'
import logo from '../images/Logo-aligned-heart-LG.png'
import ContactForm from '../components/ContactForm'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero-minimal">
        <div className="container">
          <div className="hero-portrait">
            <img src={terraPortrait} alt="Terra" />
          </div>
          <p className="hero-name">Terra Crowl, LCSW</p>
          <img src={logo} alt="Aligned Heart" className="hero-logo" />
          <p className="tagline">
            Do you want your life and your relationship to be deeply aligned with your heart?
          </p>
          <div className="hero-cta">
            <Link to="/new-client" className="btn btn-primary">Schedule a Free Consultation</Link>
          </div>
        </div>
      </section>

      <section className="section-minimal">
        <div className="container-narrow">
          <h2>Specialties</h2>

          <div className="specialty-group">
            <h3>For Individuals</h3>
            <p>ACT (psychological flexibility)</p>
            <p>Motivational Interviewing (values solicitation)</p>
            <p>MBCT (interrupting spirals)</p>
            <p>Trauma Informed</p>
          </div>

          <div className="specialty-group">
            <h3>For Couples</h3>
            <p>The Gottman Method for relationships</p>
          </div>
        </div>
      </section>

      <section className="section-minimal section-testimonials">
        <div className="container">
          <h2>Client Experiences</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <blockquote>
                "Terra helped me understand patterns I'd been stuck in for years.
                I finally feel like I have the tools to navigate anxiety instead of
                being controlled by it."
              </blockquote>
              <cite>— Individual therapy client</cite>
            </div>
            <div className="testimonial">
              <blockquote>
                "We came in barely communicating. Now we actually hear each other.
                The Gottman techniques gave us a shared language we didn't have before."
              </blockquote>
              <cite>— Couples therapy client</cite>
            </div>
            <div className="testimonial">
              <blockquote>
                "I was skeptical about therapy, but Terra's approach felt
                different—grounded and practical. She met me where I was
                without judgment."
              </blockquote>
              <cite>— Individual therapy client</cite>
            </div>
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

export default Home
