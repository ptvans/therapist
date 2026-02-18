import { Link } from 'react-router-dom'
import terraPortrait from '../photos/terra-portrait.jpg'
import './Treatment.css'

function IndividualsAnxiety() {
  return (
    <div className="treatment">
      <section className="section-minimal">
        <div className="container">
          <div className="treatment-intro">
            <div className="treatment-intro-content">
              <h1>Anxiety Treatment</h1>
              <p className="intro-text">
                Anxiety can feel overwhelming, but with the right support and tools,
                you can learn to manage it effectively and reclaim your life.
              </p>
              <Link to="/new-client" className="btn btn-primary">Schedule a Free Consultation</Link>
            </div>
            <div className="treatment-portrait">
              <img src={terraPortrait} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-minimal section-alt">
        <div className="container-narrow">
          <h2>My Approach</h2>
          <p>
            I use evidence-based approaches to help you understand your anxiety
            and develop practical skills for managing it. Rather than fighting
            against anxious thoughts and feelings, we'll work together to change
            your relationship with them.
          </p>

          <div className="treatment-method">
            <h3>Acceptance and Commitment Therapy (ACT)</h3>
            <p>
              ACT helps you develop psychological flexibility—the ability to be present,
              open up to difficult experiences, and take action guided by your values.
              Instead of trying to eliminate anxiety, ACT teaches you to make room for
              uncomfortable feelings while still moving toward what matters most to you.
            </p>
          </div>

          <div className="treatment-method">
            <h3>Mindfulness-Based Stress Reduction (MBSR)</h3>
            <p>
              MBSR combines mindfulness meditation with body awareness practices to help
              you respond to stress more skillfully. Through regular practice, you'll
              learn to observe your thoughts and feelings without getting caught up in
              them, creating space for calmer, more intentional responses.
            </p>
          </div>
        </div>
      </section>

      <section className="section-minimal">
        <div className="container-narrow">
          <h2>What to Expect</h2>
          <ul className="expect-list">
            <li>A safe, non-judgmental space to explore your anxiety</li>
            <li>Practical techniques you can use in daily life</li>
            <li>Support in identifying and connecting with your values</li>
            <li>Gradual progress at a pace that feels right for you</li>
          </ul>
        </div>
      </section>

    </div>
  )
}

export default IndividualsAnxiety
