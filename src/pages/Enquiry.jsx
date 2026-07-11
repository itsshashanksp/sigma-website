import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  User,
  Building2,
  Send,
  Clock,
  MessageSquare,
} from "lucide-react";

const Enquiry = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <div className="container contact-page-container">
        {/* Left Content */}
        <div className="contact-copy">
          <span className="section-tag">Enquiry</span>

          <h1 className="section-heading">
            Request a Consultation
          </h1>

          <p className="section-description">
            Share your details and our team will get back to you for
            consultation, technology solutions, and business discussions.
          </p>

          {/* Contact Information */}
          <div className="contact-info">

            <div className="info-card">
            <div className="icon-box">
             <Phone size={22} />
            </div>

              <div>
                <h3>Call Us</h3>
                <a href="tel:+919876543210" className="contact-link">
                  +91 98450 21606
                </a>
              </div>
            </div>

            <div className="info-card">
            <div className="icon-box">
             <Mail size={22} />
            </div>

              <div>
                <h3>Email Us</h3>
                <a
                 href="mailto:info@sigmasoftwaresolutions.co.in" className="contact-link">
                 info@sigmasoftwaresolutions.com
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <label className="form-field">
            <span>Name</span>

            <div className="input-wrap">
              <User size={20} />

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
          </label>

          <label className="form-field">
            <span>Email ID</span>

            <div className="input-wrap">
              <Mail size={20} />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </label>

          <label className="form-field">
            <span>Mobile Number</span>

            <div className="input-wrap">
              <Phone size={20} />

              <input
                type="tel"
                name="mobile"
                placeholder="Enter mobile number"
                required
              />
            </div>
          </label>

          <label className="form-field">
            <span>Company Name (Optional)</span>

            <div className="input-wrap">
              <Building2 size={20} />

              <input
                type="text"
                name="company"
                placeholder="Enter company name"
              />
            </div>
          </label>

          <label className="form-field">
            <span>Message</span>

            <div className="input-wrap textarea-wrap">
              <MessageSquare
                size={20}
                className="textarea-icon"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about your project or requirements..."
                required
              ></textarea>
            </div>
          </label>

          <button className="primary-btn contact-submit" type="submit">
            <Send size={18} />
            <span>Submit</span>
          </button>

          {submitted && (
            <p className="form-success">
              Thank you! Your enquiry has been submitted successfully. Our team
              will contact you soon.
            </p>
          )}
        </form>
      </div>
    </main>
  );
};

export default Enquiry;
