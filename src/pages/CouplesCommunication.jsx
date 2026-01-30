import ContactForm from '../components/ContactForm'
import terraPortrait from '../photos/terra-portrait.jpg'
import './Treatment.css'

function CouplesCommunication() {
  return (
    <div className="treatment">
      <section className="section-minimal">
        <div className="container">
          <div className="treatment-intro">
            <div className="treatment-intro-content">
              <h1>Communication & Connection</h1>
              <p className="intro-text">
                Strong relationships are built on effective communication and emotional
                connection. Using proven therapeutic approaches, I help couples break
                negative patterns and build lasting intimacy.
              </p>
            </div>
            <div className="treatment-portrait">
              <img src={terraPortrait} alt="Terra" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-minimal section-alt">
        <div className="container-narrow">
          <h2>Therapeutic Approaches</h2>

          <div className="treatment-method">
            <h3>The Gottman Method</h3>
            <p>
              Based on over 40 years of research on what makes relationships succeed
              or fail, the Gottman Method provides practical tools for improving
              communication. You'll learn to replace criticism, contempt, defensiveness,
              and stonewalling with healthier patterns that build trust and connection.
            </p>
            <p>
              Key areas we'll work on include building friendship and fondness,
              managing conflict constructively, and creating shared meaning in your
              relationship.
            </p>
          </div>

          <div className="treatment-method">
            <h3>Emotionally Focused Therapy (EFT)</h3>
            <p>
              EFT focuses on the emotional bond between partners. It helps couples
              understand the negative cycles they get caught in and creates new,
              positive patterns of interaction. By accessing and expressing underlying
              emotions, partners can respond to each other in ways that strengthen
              their attachment.
            </p>
            <p>
              EFT is particularly effective for couples who feel disconnected,
              stuck in repetitive arguments, or struggling to feel close despite
              wanting to.
            </p>
          </div>
        </div>
      </section>

      <section className="section-minimal">
        <div className="container-narrow">
          <h2>What to Expect</h2>
          <ul className="expect-list">
            <li>A safe space where both partners feel heard</li>
            <li>Tools for communicating more effectively</li>
            <li>Understanding of your relationship patterns</li>
            <li>Skills for managing conflict constructively</li>
            <li>Deeper emotional connection and intimacy</li>
          </ul>
        </div>
      </section>

      <section className="section-minimal section-alt">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default CouplesCommunication
