import { useEffect } from 'react'
import terraPortrait from '../photos/terra-portrait.jpg'
import './NewClient.css'

function NewClient() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="new-client">
      <div className="container">
        <div className="page-header">
          <h1>Contact</h1>
          <p>
            Thank you for considering therapy with Aligned Heart.
            Please complete this form to help us understand your needs better.
          </p>
        </div>

        <div className="new-client-content">
          <div className="client-info">
            <div className="client-portrait">
              <img src={terraPortrait} alt="Terra" />
            </div>

            <div className="info-card">
              <h3>Getting Started</h3>
              <p>
                This form helps us understand your background and therapeutic needs.
                All information is confidential and will only be used to provide you
                with the best possible care.
              </p>
            </div>

            <div className="info-card">
              <h3>What Happens Next?</h3>
              <ol>
                <li>We'll review your information within 24-48 hours</li>
                <li>We'll contact you to discuss your needs</li>
                <li>If we're a good fit, we'll schedule your first session</li>
                <li>If not, we'll help you find the right therapist</li>
              </ol>
            </div>
          </div>

          <div className="client-form-container">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/nyJ2e0e3NOjeZoi0M7vn"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '4px' }}
              id="inline-nyJ2e0e3NOjeZoi0M7vn"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Marketing Form - Claim Offer"
              data-height="737"
              data-layout-iframe-id="inline-nyJ2e0e3NOjeZoi0M7vn"
              data-form-id="nyJ2e0e3NOjeZoi0M7vn"
              title="Contact Form"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewClient
