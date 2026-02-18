import { useState } from 'react'
import { submitContactForm } from '../services/api'
import './ContactForm.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    comments: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await submitContactForm(formData)

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We will be in touch within 24-48 hours.'
      })

      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        comments: ''
      })

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'There was an error. Please try again or call us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-form-section">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div role="alert" aria-live="polite">
          {submitStatus && (
            <div className={`contact-form-message ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}
        </div>

        <div className="contact-form-group">
          <label htmlFor="name" className="contact-form-label">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="contact-form-input"
            disabled={isSubmitting}
          />
          {errors.name && (
            <span className="contact-form-error">{errors.name}</span>
          )}
        </div>

        <div className="contact-form-group">
          <label htmlFor="email" className="contact-form-label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contact-form-input"
            disabled={isSubmitting}
          />
          {errors.email && (
            <span className="contact-form-error">{errors.email}</span>
          )}
        </div>

        <div className="contact-form-group">
          <label htmlFor="phone" className="contact-form-label">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="contact-form-input"
            placeholder="(555) 123-4567"
            disabled={isSubmitting}
          />
          {errors.phone && (
            <span className="contact-form-error">{errors.phone}</span>
          )}
        </div>

        <div className="contact-form-group">
          <label htmlFor="serviceType" className="contact-form-label">
            Service Type
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="contact-form-select"
            disabled={isSubmitting}
          >
            <option value="">Select an option</option>
            <option value="individual">Individual Therapy</option>
            <option value="couples">Couples Therapy</option>
          </select>
        </div>

        <div className="contact-form-group">
          <label htmlFor="comments" className="contact-form-label">
            Comments
          </label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="contact-form-textarea"
            placeholder="Tell us a bit about what you're looking for..."
            disabled={isSubmitting}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary contact-form-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
