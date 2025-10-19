/**
 * ContactPage Component
 * 
 * Displays contact form and contact information.
 * Uses EmailJS to send messages directly to email without backend.
 * 
 * Abstraction Function:
 * - Represents the contact section of the portfolio
 * - Allows visitors to send messages via contact form
 * 
 * Representation Invariant:
 * - Form fields must be validated before submission
 * - EmailJS credentials must be configured for form to work
 */

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import './ContactPage.scss';

/**
 * ContactPage functional component
 * 
 * REQUIRES: EmailJS account setup with service ID, template ID, and public key
 * MODIFIES: Form state, submission status
 * EFFECTS: Renders contact page with form and info, sends emails via EmailJS
 */
const ContactPage = () => {
  const form = useRef();
  
  /**
   * Form state management
   * - name: sender's name
   * - email: sender's email
   * - subject: message subject
   * - message: message content
   */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  /**
   * Submission status states
   * - isSubmitting: form is being sent
   * - submitStatus: success/error/null
   */
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  /**
   * Handles form input changes
   * 
   * REQUIRES: valid event object with target.name and target.value
   * MODIFIES: formData state
   * EFFECTS: Updates form field value in state
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /**
   * Handles form submission
   * 
   * REQUIRES: form fields to be filled, EmailJS configured
   * MODIFIES: isSubmitting, submitStatus, formData
   * EFFECTS: Sends email via EmailJS, shows success/error message, resets form
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setSubmitStatus('success');
          setIsSubmitting(false);
          // Reset form
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="page contact-page">
      <div className="content">
        <h1>Get In Touch</h1>
        <p className="subtitle"></p>
        <div className="contact-container">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h3>Email</h3>
                <a href="mailto:sansar.sharmaa@gmail.com">sansar.sharmaa@gmail.com</a>
              </div>
            </div>

            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a 
                  href="https://github.com/SansarSharma" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/sansar-sharma-62299929b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="resume-download">
              <a 
                href="https://drive.google.com/file/d/13TD_p_4hm-SvztrZv0B3H4zGVwUjscCt/view?usp=sharing" 
                className="download-btn"
              >
                <FaFileDownload />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form">
            <h2>Send Me a Message</h2>
            
            <form ref={form} onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows="6"
                  required
                ></textarea>
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <div className="status-message success">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="status-message error">
                  ✗ Failed to send message. Please try again or email me directly.
                </div>
              )}

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;