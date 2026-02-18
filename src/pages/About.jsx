import { Link } from 'react-router-dom'
import gardenPortrait from '../photos/garden-portrait.jpg'
import './About.css'

function About() {
  return (
    <div className="about">
      <section className="section-minimal">
        <div className="container">
          <h1>My Approach</h1>

          <div className="about-layout">
            <div className="about-content">
            <p>
              I am a licensed therapist partnering with individuals ready to move
              through anxiety, grief, depression, trauma, and relationship stress
              to a more peaceful, purposeful life. For over eight years, I've provided
              compassionate care in hospitals, human-services agencies, schools, and
              the non-profit sector to clients facing diverse social, economic,
              interpersonal, and circumstantial challenges.
            </p>

            <p>
              I blend Motivational Interviewing (values solicitation), ACT (psychological
              flexibility), MBCT (interrupting spirals), and attachment-informed exploration
              to progress together. From there, we use those insights to collaborate on
              manageable action plans that can lead to personal transformation.
            </p>

            <p>
              I'm committed to helping clients identify, process, and honor the emotions
              and insights that arise on their journey. My goal is to foster deep
              self-awareness, co-create a personalized roadmap of practices and strategies,
              and guide clients toward a clearer, more regulated, and more insightful space.
            </p>
            </div>

            <div className="about-portrait">
              <img src={gardenPortrait} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-minimal section-alt">
        <div className="container-narrow">
          <h2>Who I Work With</h2>
          <div className="who-content">
            <p>
              My ideal clients are individuals who are ready for change, even if they
              are not sure where to begin. They may feel overwhelmed by anxiety, weighed
              down by grief, stuck in depressive cycles, or unsteady after a major life
              transition. Many come in navigating relationship stress, healing from trauma,
              or feeling disconnected from the person they want to be. Often, they are high
              functioning on the outside but internally exhausted, overstimulated, or
              running on emotional autopilot.
            </p>
            <p>
              They are curious, reflective, and open to exploring the deeper layers of
              their experience. Even if they are unsure how to talk about their emotions,
              they sense that something needs attention and they are brave enough to take
              the first step.
            </p>
            <p>
              My ideal clients value growth, insight, and authenticity, and they are
              interested in understanding the patterns that shape their relationships,
              decisions, and inner world. Some clients arrive already doing personal
              development work. Others come in feeling lost, disconnected, or worried
              that their emotions are "too much." Both belong in my practice.
            </p>
          </div>
        </div>
      </section>

      <section className="section-minimal" style={{ textAlign: 'center' }}>
        <div className="container">
          <Link to="/new-client" className="btn btn-primary">Schedule a Free Consultation</Link>
        </div>
      </section>

    </div>
  )
}

export default About
