import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  User,
  Building2,
  Send,
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
    <main className="contact-page section">
      <div className="container contact-page-container">

        {/* ==========================================
            LEFT CONTENT
        ========================================== */}

        <div className="contact-copy">

          <span className="contact-tag">
            Enquiry
          </span>

          <h1 className="contact-heading">
            Let's Discuss Your Requirement
          </h1>

          <p className="contact-description">
            Tell us what you're looking for and our team will get back to
            you to discuss the right solution for your business.
          </p>


          {/* CONTACT DETAILS */}

          <div className="contact-info">

            <div className="info-item">

              <span className="info-label">
                CALL US
              </span>

              <a
                href="tel:+919741778096"
                className="contact-link"
              >
                +91 97417 78096
              </a>

            </div>


            <div className="info-item">

              <span className="info-label">
                EMAIL US
              </span>

              <a
                href="mailto:info@sigmasoftwaresolutions.co.in"
                className="contact-link"
              >
                info@sigmasoftwaresolutions.co.in
              </a>

            </div>

          </div>

        </div>


        {/* ==========================================
            ENQUIRY FORM
        ========================================== */}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-header">

            <span className="form-label">
              YOUR REQUIREMENT
            </span>

            <h2>
              Tell us how we can help
            </h2>

          </div>


          {/* NAME */}

          <div className="form-group">

            <label htmlFor="name">
              Name
            </label>

            <div className="input-wrap">

              <User size={19} />

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />

            </div>

          </div>


          {/* EMAIL */}

          <div className="form-group">

            <label htmlFor="email">
              Email ID
            </label>

            <div className="input-wrap">

              <Mail size={19} />

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />

            </div>

          </div>


          {/* MOBILE */}

          <div className="form-group">

            <label htmlFor="mobile">
              Mobile Number
            </label>

            <div className="input-wrap">

              <Phone size={19} />

              <input
                id="mobile"
                type="tel"
                name="mobile"
                placeholder="Enter mobile number"
                required
              />

            </div>

          </div>


          {/* COMPANY */}

          <div className="form-group">

            <label htmlFor="company">
              Company Name
              <span>Optional</span>
            </label>

            <div className="input-wrap">

              <Building2 size={19} />

              <input
                id="company"
                type="text"
                name="company"
                placeholder="Enter company name"
              />

            </div>

          </div>


          {/* MESSAGE */}

          <div className="form-group">

            <label htmlFor="message">
              Message
            </label>

            <div className="input-wrap textarea-wrap">

              <MessageSquare
                size={19}
                className="textarea-icon"
              />

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your requirement..."
                required
              />

            </div>

          </div>


          {/* SUBMIT */}

          <button
            className="contact-submit"
            type="submit"
          >
            <span>
              Send Enquiry
            </span>

            <Send size={18} />
          </button>


          {submitted && (
            <p className="form-success">
              Thank you! Your enquiry has been submitted successfully.
              Our team will contact you soon.
            </p>
          )}

        </form>

      </div>
    </main>
  );
};

export default Enquiry;