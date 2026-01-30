import ContactForm from '../components/ContactForm'
import terraPortrait from '../photos/terra-portrait.jpg'
import './Treatment.css'

function IndividualsSexLoveAddiction() {
  return (
    <div className="treatment">
      <section className="section-minimal">
        <div className="container">
          <div className="treatment-intro">
            <div className="treatment-intro-content">
              <h1>Sex & Love Addiction Recovery</h1>
              <p className="intro-text">
                Recovery from sex and love addiction is possible. In a compassionate,
                non-judgmental space, we'll work together toward healthier patterns
                and deeper self-understanding.
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
          <h2>Understanding Sex and Love Addiction</h2>
          <p>
            Sex and love addiction involves compulsive patterns around romantic
            relationships, sexual behavior, or emotional attachment that cause
            significant distress or impairment in your life. You might find yourself
            repeatedly returning to behaviors that hurt you or others, feeling unable
            to stop despite wanting to, or using relationships or sex to manage
            difficult emotions.
          </p>
          <p>
            These patterns often develop as ways to cope with underlying pain,
            trauma, or unmet emotional needs. Recovery involves not just changing
            behavior, but understanding and addressing what drives it.
          </p>
        </div>
      </section>

      <section className="section-minimal">
        <div className="container-narrow">
          <h2>My Approach</h2>
          <p>
            I provide a compassionate, shame-free environment where you can explore
            your experiences openly. Together, we'll work on:
          </p>
          <ul className="expect-list">
            <li>Understanding the roots of addictive patterns</li>
            <li>Developing healthier coping strategies</li>
            <li>Building authentic intimacy and connection</li>
            <li>Setting and maintaining healthy boundaries</li>
            <li>Processing underlying trauma or emotional wounds</li>
            <li>Creating a sustainable path forward</li>
          </ul>
        </div>
      </section>

      <section className="section-minimal section-alt">
        <div className="container-narrow">
          <h2>Taking the First Step</h2>
          <p>
            Reaching out for help takes courage. If you're struggling with patterns
            around sex, love, or relationships that feel out of control, know that
            you're not alone and that change is possible. I'm here to support you
            on your journey to recovery.
          </p>
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

export default IndividualsSexLoveAddiction
