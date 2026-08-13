import { NavLink } from "react-router-dom";

const CTASection = () => {
  return (
    <section id="contact" className="cta section">
      <div className="container">

        <div className="cta-box">

          <div className="cta-content">

            <span className="cta-tag">
              LET'S WORK TOGETHER
            </span>

            <h2 className="cta-heading">
              Have a Technology Requirement?
            </h2>

            <p className="cta-description">
              Tell us what your business needs and our team will help you
              find the right solution.
            </p>

          </div>


          <div className="cta-action">

            <NavLink
              to="/enquiry"
              className="cta-button"
            >
              <span>Start a Conversation</span>
              <span className="cta-arrow">→</span>
            </NavLink>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;